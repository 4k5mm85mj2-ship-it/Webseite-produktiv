/* Content, navigation and disclosures also work without JavaScript. */
"use strict";
const copyButton = document.querySelector(".copy-email");
if (copyButton && window.isSecureContext && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText("brg.entwicklung@gmail.com");
      status.textContent = "Die E-Mail-Adresse wurde kopiert.";
    } catch {
      status.textContent = "Das Kopieren ist hier nicht verfügbar. Du kannst die Adresse über den E-Mail-Link auswählen und kopieren.";
    }
  });
}
