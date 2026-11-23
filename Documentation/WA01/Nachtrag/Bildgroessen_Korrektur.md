# Korrektur der Bildgrößen – 22. November 2026

Ausgangspunkt: `6b7beb20c3a726698843013475624a290cbb5cc9`.

Das gemeldete Fehlerbild lässt sich mit neuer HTML-Struktur und einem älteren `home.css` nachstellen: Bei 375 Pixeln Inhaltsbreite wird das vollständige Logo 670 Pixel breit, das Produktbild 1024 Pixel breit. Die übergroßen Bilder werden durch `overflow: hidden` abgeschnitten; auch Textkästen geraten über den sichtbaren Bereich. Der Cache dieses Falls war in der vorangegangenen Prüfung nicht berücksichtigt. Auf den physischen iPhone-Cache wurde nicht zugegriffen.

## Korrektur

- `assets/styles.css`: Allgemeine proportionale Bildbegrenzung auf die verfügbare Breite. Explizite mobile Grid-Spalte mit `minmax(0,1fr)` und schrumpfbare direkte Grid-Kinder verhindern eine Vergrößerung durch die natürlichen Bildmaße.
- `assets/home.css`: Klassische Breiten-/Maximalbreitenregeln für vollständiges Logo, Hauptbild und Bild in der App-Übersicht. Seitenverhältnis bleibt erhalten.
- Alle fünf HTML-Seiten: Stylesheets werden mit ihrer Inhaltsversion geladen. Die interne Seitennavigation enthält ebenfalls eine gemeinsame Versionskennung, damit sie nicht zu zwischengespeicherten älteren HTML-Seiten zurückführt. Pfade, Fragmentziele, Linktexte und Funktionen bleiben erhalten.
- `scripts/version-styles.mjs`: Abhängigkeitsfreies Node-Skript zum Aktualisieren dieser Kennungen. Wiederholte Ausführung ändert die Dateien nicht erneut. Der erforderliche Aufruf ist in `AGENTS.md` festgehalten. Die bestehende GitHub-Pages-Bereitstellung bleibt unverändert.

## Prüfung

120 Fälle in Chrome: fünf Seiten, jeweils 320/390/402/768/1024/1440 CSS-Pixel, 100/200 Prozent Wurzelschrift und Hell/Dunkel. 192 Bildmessungen ohne Überschreitung der verfügbaren Breite oder Abschneiden durch übergeordnete Container. Keine überlaufenden geprüften Textkästen. Der Test erfasst ausdrücklich auch dekorative Bilder und maskierende Container; die Breite des Gesamtdokuments allein genügt nicht.

Bei 402 Pixeln Framebreite und 387 Pixeln verfügbarer Inhaltsbreite: vollständiges Logo 347 × 103,58 Pixel, Mitgemischt-Hauptbild 347 × 520,5 Pixel, Bild in der Übersicht 288 × 432 Pixel. Zusätzlich hält die neue Basisformatierung die Bilder innerhalb der Grenzen, wenn das ergänzende Homepage-Stylesheet auf den alten Stand zurückgesetzt wird.

Seitentexte einschließlich Datenschutz und Impressum, ursprüngliche Bilddatei, Original-SVGs, Farben, Alternativtexte, JavaScript und bestehende Seitenziele sind erhalten. Stylesheet-Kennungen gegen die tatsächlichen Dateiinhalte geprüft; Versionsskript wiederholbar geprüft.

Ein physischer Safari-/VoiceOver-Test bleibt der praktischen Abnahme vorbehalten. Die Screenshots aus dem Browser sind keine iPhone-Abnahme.

[Messwerte und Bestandsschutz](Bildgroessen_Pruefung.json)
