# WA02 – Busfahrer und Konsistenz der Webseite

22. November 2026. Website-Ausgang: `d4259cc5cd0d5c696c471a35b836a7f9464915dd`.

## Umsetzung

Busfahrer ist der fünfte gleichwertige Eintrag in der vorhandenen Spielübersicht. Das bestehende native `details`-/`summary`-Muster wird beibehalten. Die Karte steht in der logischen Reihenfolge nach Siebener raus. Bei zwei Spalten ist der fünfte Eintrag mittig und genauso breit wie die übrigen Karten; mobil bleibt die einzelne Spalte erhalten.

Beschreibung:

> Busfahrer verbindet Kartenraten mit dem Ablegen passender Karten. Auf die Raterunde folgen eine Kartenpyramide und das Busfahrer-Finale. Ziel ist, möglichst wenige Strafpunkte zu sammeln.
>
> In der Pyramide legt ihr passende Handkarten ab und verteilt die Strafpunkte selbst auf Mitspieler. Wer danach die meisten Handkarten hat, wird Busfahrer und muss die Schlussfahrt meistern.

Spielerzahl: **2 bis 6 Personen**. Grundlage ist das vereinbarte WA29-Regelset einschließlich der vom Auftraggeber erneut bestätigten selbst verteilbaren Strafpunkte. Es werden keine weiteren Varianten oder Detailregeln ergänzt.

Auf ausdrückliche nachträgliche Anweisung des Auftraggebers wird Busfahrer wie die anderen Spiele präsentiert, ohne „geplant“ oder „in Entwicklung“. Der gesamte Internetauftritt befindet sich weiterhin auf der GitHub-Pages-Testumgebung. Es wird keine Aussage über eine konkrete Busfahrer-TestFlight-Buildnummer oder App-Store-Verfügbarkeit hinzugefügt. Der vorhandene öffentliche TestFlight-Link bleibt exakt und einmal auf der Mitgemischt-Seite erhalten.

Illustration: kleine Inline-SVG-Kartenpyramide mit zehn Karten (4/3/2/1), etwa **2 KB** Markup. Gestaltung aus der vorhandenen nativen Kartendarstellung übernommen: weiße Karten, ruhige Umrisse, klassischer Kartenwert und Farbsymbol; Markenblau für die Rückseiten. Keine passende vorhandene Busfahrer-Illustration gefunden. Kein Fahrzeugmotiv, keine Rasterdatei, keine externe Bildquelle oder neue Abhängigkeit. Das SVG skaliert vollständig innerhalb der bisherigen Bildfläche. Die Grafik ist wie die vier vorhandenen Spielillustrationen dekorativ ausgeblendet; sämtliche relevanten Informationen stehen im zugänglichen Text.

## Tatsächlich geänderte Dateien

- `apps/mitgemischt/index.html`: fünfte Spielkarte, Beschreibung, Illustration, Spielerzahl; Anzahl im Einstieg, in der Überschrift und in der Metabeschreibung auf fünf gesetzt; FAQ um Busfahrer für zwei bis sechs Personen ergänzt.
- `index.html`: Anzahl im App-Bereich auf fünf gesetzt, Busfahrer in die Spielnamenliste aufgenommen. Allgemeine BRG-Startseite, Motivation und Navigation bleiben erhalten.
- `assets/styles.css`: ausschließlich auf `.game-busdriver` begrenzte Ergänzungen für Illustration, Zentrierung bei zwei Spalten und Systemkontrast.
- `support.html`, `impressum.html`, `datenschutz.html`: ausschließlich aktualisierte Stylesheet-/Navigationsversionen gegen veraltete Browser-Caches, keine Inhaltsänderungen.
- `README.md`: aktuelle Projektübersicht von vier auf fünf Spiele aktualisiert.
- Dieser Prüfbericht.

## Prüfung

**72 gezielte Browserfälle ohne Befund:** Mitgemischt 48 Fälle bei 320/390/402/768/1024/1440 CSS-Pixeln, je 100/200 Prozent Wurzelschrift, Hell/Dunkel und geöffneter/geschlossener Busfahrer-Beschreibung. Startseite weitere 24 Fälle über dieselben Breiten, Schriftgrößen und Erscheinungsbilder. Kein horizontaler Dokumentüberlauf, keine überlaufenden geprüften Text-/Bedienkästen; neue Karte gleich breit und Bildfläche gleich hoch wie die vorhandenen. Alle Teile der Kartenpyramide bleiben innerhalb der Bildfläche. Die nominelle 320-Pixel-Breite hat durch die Desktop-Scrollleiste 305 Pixel nutzbare Breite.

Tastatur: von Siebener raus führt Tab zum Busfahrer-Eintrag; Öffnen mit Leertaste, Schließen mit Enter und erneutes Öffnen funktionieren. Fokus bleibt sichtbar. Accessibility-Baum: fünf Spielschaltflächen in korrekter Reihenfolge; Busfahrer mit verständlichem Namen und Spielerzahl; geöffneter Beschreibungstext zugänglich, keine zusätzlichen Ansagen für die dekorative SVG-Grafik. Überschriftenstruktur und genau eine Hauptüberschrift pro Seite bleiben erhalten.

Rechnerische Kontraste der verwendeten Texte:

| Vordergrund / Hintergrund | Verhältnis |
| --- | ---: |
| Titel `#092744` / Weiß | 15,16:1 |
| Beschreibung `#31363B` / Weiß | 12,20:1 |
| Spielerzahl `#53585F` / Weiß | 7,17:1 |
| Titel Weiß / dunkle Karte `#202830` | 14,92:1 |
| Beschreibung `#E4E6E8` / `#202830` | 11,92:1 |
| Spielerzahl `#BFC4C9` / `#202830` | 8,49:1 |

Alle genannten Textkombinationen erreichen mindestens 4,5:1. Tastaturfokus hat eine gut kontrastierende Kontur; die neue Illustration erhält keinen Medien-Invertierungsfilter.

**Konsistenzprüfung aller fünf HTML-Seiten:** Startseite nennt fünf Spiele und alle fünf Namen; Mitgemischt zeigt fünf Karten, nennt fünf Spiele in Einstieg, Übersicht und Metabeschreibung; FAQ und neue Karte nennen übereinstimmend zwei bis sechs Personen. Hilfeseite und Rechtstexte enthalten keine abweichende Spieleanzahl. Alle internen Links, Fragmentziele und lokalen Ressourcen lösen auf; keine doppelten IDs, deutsche Sprachangabe, je eine Hauptüberschrift. Der TestFlight-Link ist unverändert und nicht um einen Busfahrer-Link ergänzt. Das vorhandene Versionsskript ist idempotent; `git diff --check` ohne Befund.

**Bestandsschutz:** Die vier ursprünglichen Spielkarten einschließlich Beschreibungen und Illustrations-Markup sind bytegleich. Außer den ausdrücklich beauftragten Anzahl-/Namens- und FAQ-Ergänzungen ist der übrige Seiteninhalt unverändert; nach Entfernen der Versionskennungen sind Support, Impressum und Datenschutz vollständig identisch. Original-Logos, Hauptbild, `site.js`, `home.css`, `appearance.css`, Domain- und Bereitstellungskonfiguration bleiben unverändert. Keine Änderungen an iOS-Repositories, keine nativen Builds, keine zusätzlichen Dienste oder Paketabhängigkeiten.

## Offene Abnahme und fachliche Grenze

Praktische VoiceOver-/NVDA-/JAWS-Tests sind auf dieser Linux-Umgebung nicht verfügbar; der geprüfte Accessibility-Baum und die Tastaturprüfung ersetzen sie nicht. Keine vollständige WCAG-Zertifizierung oder praktische Screenreader-Abnahme behauptet.

Der zu Beginn gelesene WA29-Branch `feat/wa29-busfahrer` stand auf `88e8eb6261189a2f53e4a524f7b03ed1bdee2f96` und enthielt noch keine Busfahrer-Implementierung. Die Websitebeschreibung folgt dem vereinbarten Regelset. Der zusätzliche Abgleich mit dem fertiggestellten WA29-Code bleibt offen; eine TestFlight-Bereitstellung von WA29 wird durch diese Websiteänderung nicht nachgewiesen.

Technische Veröffentlichung ausschließlich auf der bestehenden GitHub-Pages-Testadresse mit Seitenversion `7a60a2c04b46`. Die endgültige fachliche Abnahme bleibt beim Auftraggeber.
