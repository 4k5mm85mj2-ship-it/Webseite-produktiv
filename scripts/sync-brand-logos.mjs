/* Keep inline website logos in sync with the unchanged, approved SVG originals.
 * Inline SVG avoids Safari Smart Invert's media-only inversion of picture/img.
 * Run before version-styles.mjs whenever an original logo changes.
 */
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const pages = ["index.html", "apps/mitgemischt/index.html", "support.html", "impressum.html", "datenschutz.html"];
const variants = [
  ["BRG_Symbol_hell.svg", "ci-symbol ci-light"],
  ["BRG_Symbol_dunkel.svg", "ci-symbol ci-dark"],
  ["BRG_Logo_ohne_Claim_hell.svg", "ci-compact ci-light"],
  ["BRG_Logo_ohne_Claim_dunkel.svg", "ci-compact ci-dark"],
  ["BRG_Logo_hell.svg", "ci-full ci-light"],
  ["BRG_Logo_dunkel.svg", "ci-full ci-dark"]
];

function inlineLogo(file, classes) {
  const original = readFileSync(new URL(`assets/logos/${file}`, root), "utf8").trim();
  return original.replace(/<svg\b([^>]*)>/, (_, attributes) => {
    const decorative = attributes.replace(/\s(?:role|aria-label)="[^"]*"/g, "");
    return `<svg${decorative} class="ci-logo ${classes}" aria-hidden="true" focusable="false">`;
  });
}

const header = `<!-- BRG header logo: generated from assets/logos; run scripts/sync-brand-logos.mjs -->\n<span class="brand-logo" aria-hidden="true">${variants.map(([file, classes]) => inlineLogo(file, classes)).join("\n")}</span>\n<!-- /BRG header logo -->`;
const intro = `<!-- BRG intro logo: generated from assets/logos -->\n${inlineLogo("BRG_Logo_dunkel.svg", "ci-intro")}\n<!-- /BRG intro logo -->`;

for (const page of pages) {
  const url = new URL(page, root);
  let html = readFileSync(url, "utf8");
  const headerPattern = html.includes("<!-- BRG header logo:")
    ? /<!-- BRG header logo:[\s\S]*?<!-- \/BRG header logo -->/
    : /<picture class="brand-logo"[\s\S]*?<\/picture>/;
  if (!headerPattern.test(html)) throw new Error(`Missing header logo in ${page}`);
  html = html.replace(headerPattern, () => header);
  if (page === "index.html") {
    const introPattern = html.includes("<!-- BRG intro logo:")
      ? /<!-- BRG intro logo:[\s\S]*?<!-- \/BRG intro logo -->/
      : /<img src="assets\/logos\/BRG_Logo_dunkel\.svg"[^>]*>/;
    if (!introPattern.test(html)) throw new Error("Missing homepage introduction logo");
    html = html.replace(introPattern, () => intro);
  }
  if (html !== readFileSync(url, "utf8")) writeFileSync(url, html);
}
console.log("Synchronized original inline logos on 5 pages.");
