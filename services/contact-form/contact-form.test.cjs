const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
function setup({fail=false,quota=100}={}) {
 const values={};const sent=[];
 const ctx={Date,JSON,Object,String,Error,
  LockService:{getScriptLock:()=>({tryLock:()=>true,releaseLock(){}})},
  PropertiesService:{getScriptProperties:()=>({getProperties:()=>({...values}),getProperty:k=>values[k]||null,setProperty:(k,v)=>{values[k]=v},deleteProperty:k=>{delete values[k]}})},
  Utilities:{DigestAlgorithm:{SHA_256:1},Charset:{UTF_8:1},computeDigest:(_,s)=>[...crypto.createHash('sha256').update(s).digest()]},
  MailApp:{getRemainingDailyQuota:()=>quota,sendEmail:m=>{sent.push(m);if(fail)throw Error('network')}},
  HtmlService:{createHtmlOutput:html=>({html,setTitle(){return this},addMetaTag(){return this}})}
 };
 vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/Code.gs','utf8'),ctx);
 return {ctx,sent,values};
}
const request=(changes={})=>({contentLength:200,parameter:{name:'Tester',email:'tester@example.org',message:'Kontrollierte Testnachricht',requestId:'12345678-1234-1234-1234-123456789abc',...changes}});
test('valid send goes only to BRG; reply address is provided; success follows send',()=>{
 const {ctx,sent}=setup();const r=ctx.doPost(request());assert.match(r.html,/Nachricht gesendet/);assert.equal(sent.length,1);assert.equal(sent[0].to,'brg.entwicklung@gmail.com');assert.equal(sent[0].replyTo,'tester@example.org');assert.doesNotMatch(r.html,/tester@example.org|Kontrollierte Testnachricht/);
});
test('replay never sends twice; changed content under same id is rejected',()=>{
 const {ctx,sent}=setup();ctx.doPost(request());ctx.doPost(request());const r=ctx.doPost(request({message:'Anderer Text'}));assert.equal(sent.length,1);assert.match(r.html,/bereits verwendet/);
});
test('ambiguous sending error does not claim success or resend on replay',()=>{
 const {ctx,sent}=setup({fail:true});const r=ctx.doPost(request());assert.match(r.html,/Versandstatus unklar/);assert.doesNotMatch(r.html,/<h1>Nachricht gesendet/);ctx.doPost(request());assert.equal(sent.length,1);
});
test('reject header injection, missing message, oversize, honeypot, invalid identifier and duplicate fields',()=>{
 const {ctx,sent}=setup();for(const patch of [{email:'test@example.org\r\nBcc:x@example.org'},{message:''},{message:'a'.repeat(5001)},{website:'bot'},{requestId:'oops'},{name:'x\ny'},{app:'unknown'},{app:'Mitgemischt\r\nBcc:x@example.org'}])assert.match(ctx.doPost(request(patch)).html,/Nachricht nicht gesendet/);
 const r=request();r.parameters={email:['a@example.org','b@example.org']};ctx.doPost(r);assert.equal(sent.length,0);
});
test('quota rejection sends nothing; per-address limit enforced',()=>{
 const {ctx,sent}=setup({quota:9});assert.match(ctx.doPost(request()).html,/Versandgrenze/);assert.equal(sent.length,0);
 const next=setup();for(let n=0;n<4;n++){const id='12345678-1234-1234-1234-'+String(n).padStart(12,'0');next.ctx.doPost(request({requestId:id}));}assert.equal(next.sent.length,3);
});

test('app selection sets a safe subject and body for every option',()=>{
 for(const [app,label] of Object.entries({general:'Allgemein',mitgemischt:'Mitgemischt',barborant:'Barborant',sovira:'Sovira'})){
  const {ctx,sent}=setup();ctx.doPost(request({app}));
  assert.equal(sent.length,1);assert.equal(sent[0].subject,'Website-Kontakt – '+label+' – 12345678-1234-1234-1234-123456789abc');
  assert.equal(sent[0].body.includes('App: '+label),true);
 }
});
test('legacy forms keep the existing subject without an app field',()=>{
 const {ctx,sent}=setup();ctx.doPost(request());
 assert.equal(sent[0].subject,'Website-Kontakt – 12345678-1234-1234-1234-123456789abc');
});
test('changed app under the same identifier cannot bypass replay protection',()=>{
 const {ctx,sent}=setup();ctx.doPost(request({app:'mitgemischt'}));
 const r=ctx.doPost(request({app:'sovira'}));assert.equal(sent.length,1);assert.match(r.html,/bereits verwendet/);
});
