# WA01 – Corporate Identity und barrierefreie Optimierung

Stand: 22. November 2026 · BRG Entwicklung – Genial einfach. Für alle.

**Status: Testversion zur Abnahme bereit; Bereitstellung über GitHub Pages freigegeben.** Die technische Prüfung in Chrome ist bestanden. Die praktische Prüfung mit VoiceOver und die fachliche Abnahme stehen noch aus. Eine vollständige WCAG-Konformität oder eine erfolgreiche VoiceOver-Abnahme wird deshalb nicht behauptet.

## Vorschau und Ausgangsbasis

- [GitHub-Pages-Testseite öffnen](https://4k5mm85mj2-ship-it.github.io/Webseite/). Öffentlich erreichbar und ohne Anmeldung testbar; die vorhandene Entwurfskennzeichnung bleibt bestehen.
- Entwicklungsbranch: `work/wa01-ci-integration` im Repository `4k5mm85mj2-ship-it/Webseite`.
- Ausgangsstand: `a3129b499b0c6cb40f7a7ccc1be91f9de3fc6b60`.
- Nachtragsanweisung des Auftraggebers vom 22. November 2026: „Stell unsere Änderungen immer über GitHub Pages zur Verfügung. Das ist ja unsere Testzeit.“ Damit ist die Bereitstellung dieser Änderungen über die bestehende Testadresse aus `main` freigegeben. Die Pages-Einstellungen bleiben bestehen; keine kostenpflichtigen CI-Läufe und keine neuen Paketabhängigkeiten.

Die zunächst erstellte private Testkopie wird für die Abnahme nicht benötigt. Maßgebliche Testadresse ist gemäß der Nachtragsanweisung GitHub Pages. Die vorhandenen Rechtstexte, KI-Hinweise und Entwurfsmarkierungen bleiben unverändert. Die nachfolgende Freigabe der Testbereitstellung ersetzt keine fachliche Abnahme und keine vollständige VoiceOver-Prüfung.

## Tatsächlich geänderte Dateien

| Dateien | Änderung |
| --- | --- |
| `index.html`, `apps/mitgemischt/index.html`, `support.html`, `impressum.html`, `datenschutz.html` | Gemeinsamen Logo-Link durch ein responsives `picture` mit den Original-SVGs ergänzt; Theme-Metadaten angepasst. Auf der App-Seite den vorhandenen Navigationsbereich „Apps“ zusätzlich unterstrichen. |
| `assets/styles.css` | Gemeinsame Markenvariablen, neutrale Flächen, kontrastierende Schaltflächen und zweifarbiger Tastaturfokus. Verzögerten Hintergrundfarbwechsel entfernt, damit beim Systemwechsel keine kurzzeitig unleserlichen Schaltflächen entstehen. |
| `assets/home.css` | Logoabmessungen und gemeinsam verwendete Farbwerte angepasst. |
| `assets/appearance.css` | Dunkle Darstellung und Systemkontrast an die neue CI angepasst; bestehende produktspezifische Illustrationen erhalten. |
| `assets/favicon.svg` | Originales kompaktes Symbol als SVG-Favicon mit heller/dunkler Darstellung eingebunden. |
| `assets/logos/BRG_Logo_hell.svg`, `BRG_Logo_dunkel.svg`, `BRG_Logo_ohne_Claim_hell.svg`, `BRG_Logo_ohne_Claim_dunkel.svg`, `BRG_Symbol_hell.svg`, `BRG_Symbol_dunkel.svg` | Sechs unveränderte Originaldateien aus `BRG_Corporate_Identity_Paket.zip` hinzugefügt. |
| `Documentation/WA01/` | Dieser Bericht, Logo-, Kontrast-, Browser- und Bestandsschutzprotokoll sowie Angaben zur GitHub-Pages-Testbereitstellung. |
| `AGENTS.md`, `README.md` | Dauerhafte Festlegung: beauftragte Website-Änderungen während der Testphase nach Prüfung über die bestehende GitHub-Pages-Adresse bereitstellen. |

`assets/site.js`, Seitenstruktur, Kontaktadressen, Textinhalte, sämtliche Linkziele und die bestehende Art der Bereitstellung bleiben erhalten. Die allgemeinen Gestaltungsfarben sind ausschließlich Dunkelblau `#092744`, Mittelblau `#2477B5`, Weiß und funktionale neutrale Farben. Die bereits vorhandenen Kartenfarben und Spielillustrationen von Mitgemischt bleiben gemäß Bestandsschutz produktspezifisch erhalten.

## Logovarianten und SVG-Prüfung

| Platz im Layout | Variante, jeweils hell/dunkel |
| --- | --- |
| Unter 40 rem | Kompaktes Symbol, regulär 52 × 52 CSS-Pixel |
| Ab 40 rem | Logo ohne Leitsatz, regulär rund 335 × 100 CSS-Pixel |
| Ab 64 rem | Vollständiges Logo mit Leitsatz, regulär rund 429 × 128 CSS-Pixel |
| Favicon | Kompaktes Symbol, passend zur Systemeinstellung |

Alle sechs Original-SVGs sind wohlgeformt, besitzen passende `viewBox`-Angaben und verwenden nur die freigegebenen Farben. Keine Skripte, externen Ressourcen, eingebetteten Rasterbilder oder Ereignisattribute. Prüfsummen bestätigen die unveränderte Übernahme. Alle Varianten wurden vollständig geladen und ohne Verzerrung dargestellt. Das Logo hat genau einen zugänglichen Linknamen „BRG Entwicklung – Startseite“; die darin enthaltene Bildwiederholung ist ausgeblendet.

Die gelieferten Schriftzüge enthalten SVG-Text mit lokalen Arial-/Helvetica-/Sans-Serif-Schriften statt Pfadkonturen. Sie bleiben unverändert; geringfügige Schriftunterschiede zwischen Betriebssystemen sind deshalb möglich. Es werden keine Schriften aus dem Internet geladen.

## Kontraste

Berechnung anhand der relativen sRGB-Leuchtdichte. Die tatsächlichen Textfarben und Hintergrundflächen wurden im Browser ausgelesen und nach Schriftgröße und Gewicht bewertet. Alle 15 beobachteten Textfarbpaare erfüllen den jeweiligen Mindestwert. Zusätzlich wurden 18 Kombinationen für Schaltflächen, Fokusmarkierungen und Zustandsindikatoren berechnet.

| Kombination | Verhältnis | Verwendung / Ergebnis |
| --- | ---: | --- |
| Dunkelblau / Weiß | 15,16 : 1 | Text, Links und Logo: bestanden |
| Weiß / Mittelblau | 4,79 : 1 | Schaltflächen und Logo-Leitsatz: bestanden |
| Mittelblau / Dunkelblau | 3,16 : 1 | Ausschließlich große Überschriftenteile; Mindestwert 3 : 1 bestanden |
| Schwächster normaler Textkontrast | 4,79 : 1 | Mindestwert 4,5 : 1 bestanden |
| Schwächste geprüfte funktionale Grafikkombination | 3,11 : 1 | Mindestwert 3 : 1 bestanden; dunkle Schaltflächen erhalten zusätzlich einen weißen Rand |

Alle Einzelwerte stehen in [contrast-audit.json](contrast-audit.json). Mittelblau auf Dunkelblau wird nicht für normalen Fließtext eingesetzt. Rein dekorative Trennlinien und die ausgeblendeten Spielillustrationen tragen keine alleinige Bedieninformation.

## Bedienung und Barrierefreiheit

- **102 Darstellungen geprüft:** fünf Seiten × fünf Breiten (320, 390, 768, 1024 und 1440 CSS-Pixel) × zwei Schriftgrößen (100 und 200 Prozent) × Hell/Dunkel; zusätzlich beide Modi bei 320 Pixeln und 200 Prozent mit allen neun Spiel-/FAQ-Beschreibungen geöffnet. Die klassische Bildlaufleiste ließ dabei teilweise nur 305 Pixel Inhaltsbreite übrig.
- **Kein horizontaler Überlauf**, keine über den Inhaltsrand ragenden geprüften Texte oder Bedienelemente und kein Textkontrastfehler in 5.312 Textmessungen.
- **Tastatur:** Tabulator erreicht den Logo-Link mit sichtbarem 3-Pixel-Fokus; „Zum Inhalt“ fokussiert das Hauptdokument. Navigation Start → Mitgemischt → Logo → allgemeine Startseite funktioniert. Alle neun Beschreibungen öffnen mit Enter; Schließen mit Leertaste geprüft.
- **Kontakt:** Kopierschaltfläche mit Enter aktiviert; tatsächliches Einfügen ergibt `brg.entwicklung@gmail.com`. Erfolgsmeldung erscheint. Mail-Links bleiben unverändert; keine E-Mail wurde versendet.
- **Rechtliche Seiten und KI-Hinweis:** erreichbar, einschließlich `impressum.html#ki-hinweis`. Alle bestehenden internen Linkziele, Anker und eingebundenen Ressourcen vorhanden.
- **Semantik:** auf jeder Seite genau eine H1, keine doppelten IDs, deutsche Dokumentensprache, Alternativtextattribute vorhanden. Chrome-Accessibility-Baum mit benannten Navigations-/Hauptbereichen, eindeutigem Logo-Link und ausklappbaren Schaltflächen geprüft. Dekorative Karten erscheinen nicht als zusätzliche Inhalte.
- **Hell/Dunkel:** tatsächliche `prefers-color-scheme`-Erkennung einschließlich passender Logoquelle geprüft. Es gab keinen manuellen Theme-Umschalter; es wurde keiner hinzugefügt. Die Seite speichert und überschreibt keine eigene Darstellungspräferenz.

Die Matrix nutzt ein temporäres, nicht ausgeliefertes Prüfgerüst. Die 200-Prozent-Prüfung vergrößert die Wurzelschrift, nicht die Browseroberfläche. Messungen und konkrete Tastaturprüfungen stehen in [browser-audit.json](browser-audit.json); der Text-/Linkvergleich und die unveränderten Funktionsdateien in [preservation-audit.json](preservation-audit.json).

## Noch offene Abnahme

Echtes VoiceOver unter iOS/iPadOS/macOS und die Sprachausgabe von NVDA/JAWS waren in der Linux-Prüfumgebung nicht verfügbar. Auch echtes Safari-/Firefox-Rendering, Betriebssystem-Textvergrößerung, Browserzoom, Druck und ein realer Modus für erzwungene Systemfarben wurden nicht praktisch geprüft. Die entsprechenden vorhandenen CSS-Regeln wurden erhalten beziehungsweise angepasst.

Für die praktische iPhone-Abnahme bitte auf GitHub Pages insbesondere Logoansage und Rücknavigation, Start-/App-Navigation, Spielbeschreibungen, Kontakt sowie den Wechsel der Systemeinstellung Hell/Dunkel und größere Schrift prüfen. Die Testbereitstellung nach `main` und auf GitHub Pages ist durch die Nachtragsanweisung ausdrücklich freigegeben. Die endgültige fachliche Abnahme bleibt bis zur entsprechenden Rückmeldung offen.
