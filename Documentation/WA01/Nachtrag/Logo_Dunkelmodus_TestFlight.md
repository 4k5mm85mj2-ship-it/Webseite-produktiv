# Logo im dunklen Erscheinungsbild und öffentlicher Testzugang

22. November 2026. Ausgangsbasis: `2cde5df69e42039948d580e67256e382ec05c4f9`.

## Änderungen

- `index.html`, `apps/mitgemischt/index.html`, `support.html`, `impressum.html`, `datenschutz.html`: Original-Logos als Inline-SVG statt externer `picture`-/`img`-Grafiken. Die Logo-Verknüpfung bleibt einmal als „BRG Entwicklung – Startseite“ zugänglich; alle darin enthaltenen Varianten sind dekorativ und nicht fokussierbar. Die Startseite behält die einmalige zugängliche Markenbezeichnung neben der dekorativen vollständigen Wort-Bild-Marke.
- `assets/home.css`: Responsive Auswahl von Symbol, Logo ohne Leitsatz und vollständigem Logo, jeweils passend zum hellen oder dunklen Erscheinungsbild. Unter 40 rem Symbol, ab 40 rem ohne Leitsatz, ab 64 rem vollständig. Das vollständige Logo im stets dunkelblauen Einführungsbereich verwendet in beiden Erscheinungsbildern die helle Schrift der Dunkelvariante. Proportionale Größenbegrenzung bleibt erhalten.
- `apps/mitgemischt/index.html`: Im Einführungsbereich führt „Mitgemischt mit TestFlight testen“ zum vom Auftraggeber übermittelten öffentlichen Link `https://testflight.apple.com/join/URaHnfM7`. Ein kurzer Hinweis erläutert die öffentliche Testversion für iPhone und iPad und die benötigte TestFlight-App. „Die Spiele entdecken“ bleibt als zusätzlicher Textlink erreichbar. Es wird keine Buildnummer im Website-Link festgeschrieben.
- `scripts/sync-brand-logos.mjs`: Synchronisiert die eingebetteten Varianten aus den unveränderten Originaldateien ohne neue Abhängigkeiten. Nur Attribute am äußeren SVG-Element werden für die dekorative Einbindung ergänzt beziehungsweise ersetzt; innere Geometrie, Farben und Typografie bleiben exakt erhalten.
- `AGENTS.md`: Erforderliche Synchronisationsreihenfolge dokumentiert. Das vorhandene Versionsskript aktualisiert Stylesheet- und Seitenkennungen gegen veraltete Browser-Caches.

## Befund und technische Grenze

Im übermittelten Screenshot erscheinen die ursprünglichen Logo-Farben komplementär: Weiß wird schwarz, `#092744` wird `#F6D8BB`, `#2477B5` wird `#DB884A`. Gleichzeitig bleiben die HTML-Oberflächen dunkel mit heller Schrift. Das passt zur zusätzlichen bildbezogenen Farbumkehr bei Smart Invert; allein die Auswahl der dunklen SVG-Datei reicht dafür nicht aus.

Die aktuelle [WebKit-Standardformatierung](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/css/html.css) verwendet bei `inverted-colors` den Filter `invert(100%)` für `img:not(picture>img), picture, video`. Inline-SVG wird von diesem Selektor nicht erfasst. Die Website setzt weder einen Gegenfilter noch eine Änderung an den Bedienungshilfen des Geräts voraus. Ein physisches iPhone wurde nicht aus der Ferne untersucht; die Zuordnung zum konkreten Gerätezustand bleibt eine Schlussfolgerung aus dem Screenshot.

## Gezielte Prüfung

- 76 Browserfälle ohne Befund: alle fünf Seiten bei 320, 768 und 1440 CSS-Pixeln, je 100/200 Prozent Wurzelschrift und Hell/Dunkel (60 Fälle); zusätzlich Startseite und Mitgemischt bei 402 und 1024 Pixeln mit denselben Schrift-/Darstellungskombinationen (16 Fälle). Jeweils exakt eine korrekte Header-Variante, richtige Theme-Auswahl, kein horizontaler Dokumentüberlauf und keine überlaufenden geprüften Text-, Link-, SVG- oder Bildkästen. Die bisherigen Bildbegrenzungen bleiben wirksam.
- Farbumkehr lokal nachgestellt: Der WebKit-Medienselektor invertiert die bisherige externe Logo-Einbindung (`filter: invert(1)`). Die neue Inline-Einbindung bleibt ungefiltert und zeigt auf Dunkelblau weiße Schrift sowie den blauen Bogen. Diese Simulation ersetzt keinen Test mit echtem iOS Smart Invert.
- Tastatur: TestFlight-Link und nachfolgender Spiele-Link erhalten nachvollziehbaren Fokus; Enter auf dem TestFlight-Link öffnet Apples Seite mit dem Titel „Join the Mitgemischt beta - TestFlight - Apple“ und der Einladung zu Mitgemischt. Der übermittelte öffentliche Link wurde somit als richtiges App-Ziel bestätigt. Keine Installation, Einladung oder Änderung in App Store Connect vorgenommen.
- Accessibility-Baum: Header-Markenlink einmal korrekt benannt; keine zusätzlichen Ansagen oder Tabstopps für die sechs dekorativen Varianten; neuer Link mit verständlichem Namen. Eine praktische VoiceOver-Prüfung ist auf dieser Linux-Testumgebung nicht möglich und wird nicht als bestanden ausgewiesen.
- Rechnerische Kontraste der betroffenen Kombinationen: Weiß/Mittelblau **4,79:1** (Testschaltfläche und Logo-Leitsatz), Weiß/Dunkelblau **15,16:1** (Textlink und Hinweis im Einführungsbereich, helle Wortmarke). Mindestwert für normalen Text 4,5:1 erreicht. Tastaturfokus: weiße Kontur mit dunkelblauem Gegenrand im dunklen Bereich.
- Quellvergleich: Alle 31 eingebetteten SVG-Kopien stimmen innerhalb des äußeren SVG-Elements exakt mit den jeweils zugehörigen Originalen überein. Alle ursprünglichen Seitentexte und Linkziele bleiben erhalten; hinzugekommen sind ausschließlich der beauftragte Testzugang und dessen Erläuterung. Datenschutz, Impressum, Kontakt, KI-Hinweis, Original-SVG-Dateien, Produktbild und `site.js` sind unverändert. Beide Hilfsskripte sind idempotent; `git diff --check` ohne Befund.

Bereitstellung über die autorisierte GitHub-Pages-Testseite. Der praktische Test auf dem iPhone und die fachliche Abnahme bleiben beim Auftraggeber.
