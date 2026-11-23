# Mau-Mau – Werbeillustration

23. November 2026. Website-Ausgang: `b6bbe2c0cce51a94166e1fdadf6a68f14602bdbe`.

Nutzeraufnahme: `IMG_1793.png`, Mau-Mau-Spielansicht. Stilvorlage: das bestehende, unveränderte `assets/mitgemischt-hauptillustration.jpg`. Erstellung mit der integrierten Bildgenerierung aus beiden Referenzen. Das Ergebnis übernimmt den iPhone-Rahmen, die warmhelle Fläche, grünen Wellen und Kartensymbole der bestehenden Werbegestaltung. Die Spielansicht dient als Motiv; es handelt sich um eine illustrierte Werbedarstellung.

## Website-Datei und Einbindung

`assets/games/mau-mau-werbeillustration.webp`, **1536 × 1024 Pixel**, **63.450 Bytes**. Aus dem generierten PNG ohne Zuschnitt oder Größenänderung in WebP konvertiert, Qualität 85. Das generierte Original bleibt erhalten.

In `apps/mitgemischt/index.html` ersetzt das neue Bild ausschließlich die bisherige dekorative Kartenillustration von Mau-Mau. Die vorhandene Bildfläche behält ihre Höhe, sodass alle fünf Spielkarten weiter einheitliche Bildflächen haben. `object-fit: contain` zeigt das komplette Motiv, einschließlich des vollständigen Telefons. Die neue CSS-Regel liegt in `assets/styles.css` und betrifft ausschließlich entsprechend gekennzeichnete Werbebilder. Keine neuen Bibliotheken, Bilddienste oder Funktionen.

Die Grafik ist innerhalb der Spielschaltfläche dekorativ (`alt=""`, umgebend `aria-hidden="true"`). Spielname, Personenanzahl und Beschreibung bleiben als zugänglicher HTML-Text erhalten. Dadurch entstehen keine doppelten Ansagen der Werbetexte. Der vorhandene KI-Transparenzhinweis bleibt erhalten.

## Gezielte Prüfung

32 Browserfälle ohne Befund: 320/390/768/1440 CSS-Pixel, jeweils 100/200 Prozent Wurzelschrift, Hell/Dunkel und geöffnete/geschlossene Mau-Mau-Beschreibung. Bild vollständig geladen; 1536 × 1024 Pixel und `contain` bestätigt; kein horizontaler Überlauf, keine überlaufenden geprüften Textkästen, keine Verzerrung oder Beschneidung des Motivs. Bildflächen aller fünf Spiele gleich hoch. Mobile Darstellung zusätzlich visuell geprüft. Öffnen mit Leertaste, Schließen mit Enter und sichtbarer Tastaturfokus funktionieren.

Seitentexte, Spielregeln, die vier anderen Spielillustrationen, fünf Spiele, öffentlicher TestFlight-Link, Rechtstexte, JavaScript und Logos bleiben unverändert. Die zuletzt korrigierte responsive Logodarstellung (`home.css`) bleibt erhalten. Stylesheet-/Navigationskennungen werden über das bestehende Versionsskript auf allen fünf Seiten aktualisiert. Seitenversion: `e83acec662ef`. Keine praktische iPhone-/VoiceOver-Abnahme auf dieser Linux-Umgebung behauptet.

## Verwendeter Bildauftrag

```text
Use case: ads-marketing / compositing. Create ONE polished landscape 3:2 promotional illustration for the card game Mau-Mau inside the iOS app Mitgemischt, to use on its website. Input image 1 is the ACTUAL Mau-Mau app screenshot: use its interface as the phone screen, preserve the real layout, cards, navy card back pattern, German labels, and controls accurately. Input image 2 is STYLE REFERENCE ONLY: the existing approved Mitgemischt homepage advertising artwork. Match its friendly warm off-white background, gentle layered light-green waves, dark forest-green typography, red and green playing-card suit motifs, realistic black iPhone frame, subtle soft shadow, airy clean lighting. Adapt that campaign style into a wide landscape composition: a complete front-facing portrait iPhone on the right, fully inside the artwork with comfortable margins and no cropped phone; on the left large crisp title exactly 'Mau-Mau' and below it the existing app claim exactly 'Spielen für alle.'. A restrained curved green underline and a few playing-card suit symbols like the style reference. The phone display must show the supplied Mau-Mau screenshot, NOT the app home screen from reference 2. Do not invent game features, buttons or additional words. No people, no extra logos, no ratings, no download badges, no watermark. Everything should be balanced, readable as marketing imagery, and suitable for a consistent series for the other card games. Preserve the screenshot's visual identity; only put it into this attractive campaign presentation. Opaque background.
```
