/* Separate standalone Apps Script project. No triggers; no existing support code. */
const CONTACT = Object.freeze({
  recipient: 'brg.entwicklung@gmail.com',
    back: 'https://www.brg-entwicklung.de/support.html#kontaktformular',
  maxDaily: 30
});

function doGet() {
  return contactPage_('Kontaktformular', 'Bitte öffne das Kontaktformular auf unserer Webseite.', false);
}

function doPost(e) {
  let data;
  try { data = validateContact_(e); }
  catch (_) { return contactPage_('Nachricht nicht gesendet', 'Bitte prüfe deine E-Mail-Adresse und Nachricht. Maximal 5.000 Zeichen sind möglich.', false); }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return contactPage_('Nachricht nicht gesendet', 'Der Versand ist gerade ausgelastet. Bitte versuche es später erneut.', false);
  try {
    const properties = PropertiesService.getScriptProperties();
    const now = Date.now();
    const records = properties.getProperties();
    Object.keys(records).filter(k => k.startsWith('contact_')).forEach(k => {
      const row = JSON.parse(records[k]);
      if (now - row.time > 86400000) properties.deleteProperty(k);
    });
    const idKey = 'contact_id_' + digest_(data.id);
    const previous = properties.getProperty(idKey);
    if (previous) {
      const row = JSON.parse(previous);
      if (row.fingerprint !== digest_(data.email + '\n' + data.name + '\n' + data.message + (data.app ? '\nApp: ' + data.app : ''))) {
        return contactPage_('Nachricht nicht gesendet', 'Diese Versandkennung wurde bereits verwendet. Bitte öffne das Formular erneut.', false);
      }
      return row.state === 'sent'
        ? contactPage_('Nachricht gesendet', 'Vielen Dank! Deine Nachricht wurde an BRG Entwicklung übermittelt.', true)
        : contactPage_('Versandstatus unklar', 'Bitte sende diese Nachricht nicht erneut. Frage bei Bedarf per E-Mail nach, ob sie angekommen ist.', false);
    }
    const dayKey = 'contact_day_' + new Date(now).toISOString().slice(0,10);
    const hourKey = 'contact_sender_' + digest_(data.email.toLowerCase()) + '_' + Math.floor(now / 3600000);
    const daily = JSON.parse(properties.getProperty(dayKey) || '{"count":0}');
    const hourly = JSON.parse(properties.getProperty(hourKey) || '{"count":0}');
    if (daily.count >= CONTACT.maxDaily || hourly.count >= 3 || MailApp.getRemainingDailyQuota() < 10) {
      return contactPage_('Nachricht nicht gesendet', 'Die Versandgrenze ist erreicht. Bitte schreibe uns direkt per E-Mail oder versuche es später erneut.', false);
    }
    // Reserve before sending. An ambiguous send is never retried automatically.
    const fingerprint = digest_(data.email + '\n' + data.name + '\n' + data.message + (data.app ? '\nApp: ' + data.app : ''));
    properties.setProperty(idKey, JSON.stringify({time:now, state:'pending', fingerprint}));
    properties.setProperty(dayKey, JSON.stringify({time:now, count:daily.count + 1}));
    properties.setProperty(hourKey, JSON.stringify({time:now, count:hourly.count + 1}));
    try {
      MailApp.sendEmail({to:CONTACT.recipient, replyTo:data.email, name:'BRG Website-Kontakt',
        subject:'Website-Kontakt – ' + (data.app ? data.app + ' – ' : '') + data.id,
        body:'Neue Nachricht über das BRG-Kontaktformular.\n\n' + (data.app ? 'App: ' + data.app + '\n' : '') + 'Name: ' + (data.name || 'Nicht angegeben') + '\nAntwortadresse: ' + data.email + '\n\n' + data.message + '\n\nVersandkennung: ' + data.id});
      properties.setProperty(idKey, JSON.stringify({time:now, state:'sent', fingerprint}));
    } catch (_) {
      return contactPage_('Versandstatus unklar', 'Die Übermittlung konnte nicht bestätigt werden. Bitte sende diese Nachricht nicht erneut. Frage bei Bedarf direkt per E-Mail nach.', false);
    }
    return contactPage_('Nachricht gesendet', 'Vielen Dank! Deine Nachricht wurde an BRG Entwicklung übermittelt.', true);
  } catch (_) {
    return contactPage_('Nachricht nicht bestätigt', 'Es ist ein technischer Fehler aufgetreten. Bitte kontaktiere uns per E-Mail, bevor du erneut sendest.', false);
  } finally { lock.releaseLock(); }
}

function validateContact_(e) {
  if (!e || e.contentLength > 35000) throw Error('Invalid request');
  const p = e.parameter || {};
  // Reject duplicate fields and automated honeypot submissions.
  if (Object.values(e.parameters || {}).some(v => v.length !== 1) || p.website) throw Error('Invalid fields');
  const apps = {general:'Allgemein', mitgemischt:'Mitgemischt', barborant:'Barborant', sovira:'Sovira'};
  const app = p.app == null ? '' : String(p.app);
  if (app && !Object.prototype.hasOwnProperty.call(apps, app)) throw Error('Invalid app');
  const data = {app:app ? apps[app] : '', name:String(p.name || '').trim(), email:String(p.email || '').trim(), message:String(p.message || '').trim(), id:String(p.requestId || '')};
  if (data.name.length > 100 || /[\r\n\x00]/.test(data.name) || data.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || /[\r\n\x00]/.test(data.email) || !data.message || data.message.length > 5000 || !/^[0-9a-f-]{36}$/.test(data.id)) throw Error('Invalid content');
  return data;
}
function digest_(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8).map(b => ('0' + ((b + 256) % 256).toString(16)).slice(-2)).join('');
}
function escapeContact_(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function contactPage_(title, message, success) {
  // Never echo submitted personal data into a result page or log.
  const html = '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>' + escapeContact_(title) + ' | BRG Entwicklung</title><style>:root{color-scheme:light dark;font:100% system-ui;line-height:1.6}body{margin:0;padding:1.25rem;overflow-wrap:anywhere;background:#fff;color:#092744}main{max-width:40rem;margin:2rem auto}a{color:inherit;text-underline-offset:.2em;display:inline-block;padding:.5rem 0}a:focus-visible{outline:3px solid currentColor;outline-offset:4px}@media(prefers-color-scheme:dark){body{background:#121820;color:#fff}}</style></head><body><main><p>BRG Entwicklung</p><h1>' + escapeContact_(title) + '</h1><p>' + escapeContact_(message) + '</p><p><a href="' + escapeContact_(CONTACT.back) + '" target="_top">Zurück zum Kontaktformular</a></p><p><a href="mailto:brg.entwicklung@gmail.com">brg.entwicklung@gmail.com</a></p></main></body></html>';
  return HtmlService.createHtmlOutput(html).setTitle(title).addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
