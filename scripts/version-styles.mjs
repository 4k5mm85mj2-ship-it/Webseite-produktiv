/* Keep each HTML page tied to the exact stylesheet contents after a Pages update. */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const names = ["styles", "home", "appearance"];
const hashes = Object.fromEntries(names.map(name => [name,
  createHash("sha256").update(readFileSync(new URL(`assets/${name}.css`, root))).digest("hex").slice(0, 12)
]));
const pages = ["index.html", "apps/mitgemischt/index.html", "support.html", "impressum.html", "datenschutz.html"];
const sources = new Map(pages.map(page => [page, readFileSync(new URL(page, root), "utf8")]));
// Ignore our own previous versions, so running the helper again is idempotent.
const release = createHash("sha256").update(JSON.stringify(hashes) + [...sources.values()]
  .map(html => html.replace(/\?v=[0-9a-f]{12}(?=[#"])/g, "")).join("\n"))
  .digest("hex").slice(0, 12);
const pageURLs = new Set(pages.map(page => new URL(page, root).href));
for (const page of pages) {
  const path = fileURLToPath(new URL(page, root));
  const html = sources.get(page);
  const updated = html.replace(/href="([^"]+)"/g, (attribute, href) => {
    const css = href.match(/^((?:\.\.\/)*assets\/(styles|home|appearance)\.css)(?:\?[^\"]*)?$/);
    if (css) return `href="${css[1]}?v=${hashes[css[2]]}"`;
    if (href.startsWith("#") || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return attribute;
    const base = href.split(/[?#]/)[0];
    const target = new URL(base, new URL(page, root));
    if (base.endsWith("/")) target.pathname += "index.html";
    if (!pageURLs.has(target.href)) return attribute;
    const fragment = href.includes("#") ? href.slice(href.indexOf("#")) : "";
    return `href="${base}?v=${release}${fragment}"`;
  });
  if (updated !== html) writeFileSync(path, updated);
}
console.log(JSON.stringify({ pages: pages.length, release, stylesheets: hashes }));
