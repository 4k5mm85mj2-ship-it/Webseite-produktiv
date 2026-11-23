# WA01 – Nachtrag vom 22. November 2026

Ausgangsstand: `c26279d0116603d72a0213724cd9b2e5cdd7640c`. Beauftragt: Datenschutz kürzen, vollständiges BRG-Logo auf der Startseite auch mobil zeigen und das bereitgestellte Bild als Mitgemischt-Hauptillustration verwenden. Bereitstellung weiterhin über [GitHub Pages](https://4k5mm85mj2-ship-it.github.io/Webseite/).

## Änderungen

- `datenschutz.html`: Hauptinhalt von 686 auf 351 Wörter gekürzt (rund 49 Prozent). Lange Entwurfs-/Prüfnotizen und Wiederholungen entfernt. Verantwortlicher und Kontakt, Zwecke und Rechtsgrundlagen, Empfänger, Speicherkriterien, Drittlandverarbeitung sowie Betroffenenrechte kompakt dargestellt. Die bisherigen Hinweise zu lokalem Spiel, Anzeigenamen und dem Schlüsselbund bleiben in gekürzter Form enthalten. OpenAI ist bei KI-gestützter Supportbearbeitung als möglicher Empfänger der erforderlichen Nachrichteninhalte berücksichtigt.
- `index.html`: Vollständiges Original-Logo mit Leitsatz im Einleitungsbereich auf dem dunkelblauen Hintergrund. Die dunkle Logovariante ist dort auch bei heller Systemeinstellung passend. Ein Textlabel erhält die bisherige zugängliche BRG-Bezeichnung; das Bild erzeugt keine doppelte Ansage. In der App-Übersicht ersetzt das bereitgestellte Motiv die Kartenillustration.
- `apps/mitgemischt/index.html`: Hauptillustration durch das bereitgestellte Motiv ersetzt, mit Beschreibung als Illustration der Startansicht. Spieltexte, einzelne Spielillustrationen und ausklappbare Beschreibungen erhalten.
- `assets/mitgemischt-hauptillustration.jpg`: Unveränderte Originaldatei des Auftraggebers, 1024 × 1536 Pixel, 282.945 Bytes. SHA-256: `7b2808375f2a2161e95d527894e0370dcd0a5d42267c30539ad7b5a978fd0e19`.
- `assets/home.css`: Ausschließlich ergänzende Regeln für Logo, zugängliches Textlabel und vollständige, proportionale Bilddarstellung. Keine Farbfilter, keine Ausschnittvergrößerung, keine neuen Abhängigkeiten.
- `README.md` und dieser Dokumentationsordner: Aktualisierten Stand und Prüfungen festgehalten.

## Prüfung und Bestandsschutz

60 Darstellungen der drei betroffenen Seiten geprüft: jeweils 320, 390, 768, 1024 und 1440 CSS-Pixel, 100/200 Prozent Wurzelschrift und Hell/Dunkel. Keine horizontalen Überläufe oder außerhalb des Inhaltsrandes liegenden geprüften Texte, Bilder und Bedienelemente. 3.340 HTML-Textmessungen, 15 Farbkombinationen, keine Unterschreitung der jeweiligen Kontrastanforderung. Die neuen Bilder halten in allen geprüften Fällen ihr Seitenverhältnis ein. Mobil sichtbar: vollständiges Logo 335 × 100 Pixel; Hauptmotiv 335 × 502,5 Pixel; Motiv in der Übersicht 288 × 432 Pixel. Das Rasterbild selbst wurde nicht farblich bearbeitet oder pixelweise als HTML-Text vermessen.

Logo-Rückweg zur allgemeinen Startseite, Erreichbarkeit der Datenschutzhinweise sowie Öffnen/Schließen der Spielbeschreibung mit Enter/Leertaste geprüft. Original-SVGs, JavaScript, globale Farben, Dunkelmodusdatei, Impressum, Supportseite und technische Bereitstellung sind byteidentisch zum Ausgangsstand. Text- und Linkvergleiche außerhalb der ausdrücklich überarbeiteten Datenschutzseite bestanden. Die allgemeine Startseite und Mitgemischt-Inhalte bleiben erhalten.

Messungen: [Browserprotokoll](browser-audit.json), [Bestandsschutz](preservation-audit.json). Tatsächliche VoiceOver-/Safari-Tests und die fachliche Abnahme bleiben offen; sie wurden nicht durch Chrome-Prüfungen ersetzt.

## Grundlage der Datenschutzkürzung

Die rechtliche Einordnung der beschriebenen Abläufe orientiert sich an den Informationspflichten der DSGVO. Die konkrete Anbieter- und Kontovertragslage sowie die tatsächliche Löschpraxis sind durch einen gekürzten Webseitentext nicht abschließend überprüft. Es werden keine abgeschlossenen Auftragsverarbeitungsverträge, festen Anbieter-Löschfristen oder Ausschlüsse von Modelltraining zugesichert. Der Nachtrag verändert keine Supportkonten, Kontoeinstellungen oder automatischen Versandregeln.

Am 22. November 2026 herangezogene Primärquellen:

- [HBDI: Informationspflichten, einschließlich Verweis auf Informationen im Internet](https://datenschutz.hessen.de/infothek/haeufig-gestellte-fragen).
- [DSGVO-Text beim Bundesfinanzministerium](https://ao.bundesfinanzministerium.de/ao/2025/Datenschutz-Grundverordnung/inhalt.html), insbesondere Artikel 6, 13 und 21; Textauszug über die Suche verfügbar, Direktabruf mit 503 begrenzt.
- [GitHub Pages: Datenerfassung](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) und [GitHub-Datenschutzhinweise](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), insbesondere internationale Übermittlungen und Aufbewahrung.
- [Google-Datenschutzhinweise](https://policies.google.com/privacy?hl=de) und [Garantien für Datenübermittlungen](https://policies.google.com/privacy/frameworks?hl=de).
- [OpenAI: Europe privacy policy](https://openai.com/policies/eu-privacy-policy/), insbesondere Eingaben aus verbundenen Diensten, Aufbewahrung, Übermittlungen und Verantwortlicher im EWR.
- [Apple-Datenschutzhinweise](https://www.apple.com/legal/privacy/de-ww/).

Die technischen Angaben zu Mitgemischt stammen aus der bestehenden Websitefassung. Support- und Datenflussgrundlage sind die aktuellen BRG-Projektquellen „Supportstandard“, Version 1.2, sowie „Anforderungsmanagement“, Version 1.0. Ihre Dateien wurden nicht verändert.
