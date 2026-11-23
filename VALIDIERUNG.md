# Prüfung des Website-Entwurfs · 22.11.2026

## Umfang

Nur die Website für Mitgemischt. Die iOS-Anwendung und bestehende Support-/Store-Konfigurationen wurden nicht verändert. Keine Codemagic- oder TestFlight-Läufe.

## Produktquellen

Abgeglichen mit `4k5mm85mj2-ship-it/mit-gemischt`, `main`, Commit `b8b58f2dbe6cba6ef569a70c27421dee38e1bc12`:

- `Mitgemischt/ContentView.swift`: Produktname, Claim, Navigation und Spielregeln.
- `Mitgemischt/GameKind.swift`: Spiele und Personenzahlen.
- `Mitgemischt.xcodeproj/project.pbxproj`: iPhone/iPad, iOS/iPadOS 17.
- `Mitgemischt/NetworkTransport.swift`: lokale Verbindung mit Peer-to-Peer-Unterstützung.
- `Mitgemischt/SupportContact.swift` und `SupportContactView.swift`: Kontakt und Supportthemen.
- `Mitgemischt/ImprintContact.swift`: vorhandene öffentliche Betreiberangaben.
- `Mitgemischt/NameSettings.swift`, `DeviceTrustStore.swift` und `PrivacyInfo.xcprivacy`: lokale Speicherung und Datenschutzmerkmale.

Die ältere Datei `docs/PRIVACY_SECURITY.md` wurde wegen Widersprüchen zur tatsächlichen lokalen Speicherung nicht als Datenschutzerklärung übernommen. Ein offizieller App-Store-Link ist nicht belegt und wird deshalb nicht vorgetäuscht. Die Kartenillustrationen sind Website-Grafiken, keine Screenshots der App.

Kommunikation nach aktuellem BRG-Supportstandard 1.2: verständliche Du-Form, Supportadresse `brg.entwicklung@gmail.com`, keine Antwortfristen, Behebungs- oder Veröffentlichungstermine und keine behauptete vollständige Barrierefreiheit.

## Browserprüfung

Chrome im bereitgestellten Browser; echte CSS-Viewports in einem gleichursprünglichen iframe. Nominale Breiten: 320, 390, 768, 1024 und 1440 Pixel. Durch die Desktop-Scrollleiste war die verfügbare Innenbreite jeweils 15 Pixel kleiner. Alle vier Seiten wurden bei 100 und 200 Prozent Basisschrift geprüft: **40 Kombinationen**.

- Nach Korrektur einer Überbreite im Bereich zu Bedienungshilfen kein horizontaler Seitenüberlauf und keine über den Viewport hinausragenden Text-/Bedienelemente in den geprüften Kombinationen.
- Mobile Startseite und Spielvorstellung visuell kontrolliert; Desktopansicht ebenfalls kontrolliert.
- Spielbeschreibung per Enter geöffnet und per Leertaste geschlossen; Zustand im Accessibility-Baum sichtbar.
- FAQ per Tastatur geöffnet; Antworttext im Accessibility-Baum sichtbar.
- Sprunglink fokussiert den Hauptinhalt `inhalt`.
- Supportadresse kopiert; erfolgreiche Rückmeldung erscheint im Statusbereich.
- E-Mail-Aktionen verwenden ausschließlich die belegte Supportadresse. Für den Test wurde keine E-Mail versendet.
- Dekorative Spielkarten und Symbole sind für Screenreader ausgeblendet; redundante Ziffern/Pluszeichen aus den zugänglichen Namen entfernt.

Die Tests mit 200 Prozent Basisschrift ersetzen keinen realen Browserzoomtest. Keine praktische VoiceOver-Hörprüfung und kein Safari-/iPhone-/iPad-Hardwaretest. Damit ist keine vollständige WCAG-Konformität nachgewiesen.

## Technische Prüfung

- JavaScript-Syntax des optionalen Kopierhelfers und des lokalen Vorschauservers geprüft.
- Interne Verweise und Anker, IDs, Titel, Hauptüberschrift, Sprach-/Viewport-Angaben und lokale Ressourcen strukturell geprüft.
- Native Links und `details/summary` benötigen kein JavaScript.
- Kein Tracking, Browserdaten-Speicher, Service Worker, Kontaktformular oder automatisch versendete Nachricht im Website-Code.
- Die Testfassung enthält `noindex,nofollow` und eine sichtbare Entwurfskennzeichnung. Suchmaschinenanweisungen ersetzen keine Zugangskontrolle.

## Hosting

GitHub Pages ist auf `main` und `/ (root)` vorbereitet. Es wird diese bestehende Konfiguration verwendet. Die endgültige Live-URL wird nach Veröffentlichung tatsächlich geöffnet und auf die Mitgemischt-Inhalte geprüft.

Primärquellen zur technischen Bereitstellung:

- <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- <https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages>

Die Datenschutzhinweise sind ein Entwurf; die GitHub-Pages-Testfassung enthält den Hinweis auf die Protokollierung von IP-Adressen durch GitHub. Die noch offenen Angaben sind auf der Datenschutzseite aufgeführt.


## Erweiterung: BRG-Startseite, KI-Hinweis und Erscheinungsbild

Auftrag vom 22.11.2026: allgemeine BRG-Startseite mit Motivation und Prinzipien, zunächst nur Mitgemischt in der App-Übersicht, sichtbare KI-Transparenz und korrekte helle/dunkle Darstellung. Die bisherige Gestaltung und Bedienung war zuvor vom Nutzer praktisch abgenommen.

### Bestandsschutz und Navigation

Der Hauptinhalt der ursprünglichen Mitgemischt-Seite wurde unverändert nach `apps/mitgemischt/index.html` übernommen. Ein direkter Vergleich mit dem vorherigen Commit bestätigt die Gleichheit nach Normalisierung der notwendigen relativen Supportlinks. Die freigegebene helle Basisdatei `assets/styles.css` wurde nicht verändert. Die Änderungen betreffen die allgemeine Startseite, gemeinsame Navigation, Footer und zusätzliche Dark-Mode-Regeln. Die bisherige Supportadresse bleibt erhalten.

Startseite → Mitgemischt → Hilfe → zurück zu Mitgemischt sowie der Link vom KI-Hinweis zum betreffenden Impressumsabschnitt wurden mit der Tastatur geprüft. Die Spielbeschreibungen verwenden weiterhin native `details/summary`.

### Helles und dunkles Erscheinungsbild

Fünf Seiten × fünf Breiten (320, 390, 768, 1024, 1440 px) × zwei Basisschriftgrößen (100/200 %) × zwei Farbmodi = **100 Layoutkombinationen**. Kein horizontaler Seitenüberlauf und kein über den Viewport hinausragender Text-/Bedienbereich in diesen Prüfungen. Die tatsächlichen Viewportbreiten wurden den gewählten Breiten zugeordnet; Desktop-Scrollleisten beanspruchten ggf. 15 px.

Die helle/dunkle Präferenz wurde über die standardisierte `color-scheme`-Eigenschaft des einbettenden iframe vorgegeben. Dadurch matchte im eingebetteten Dokument die unveränderte produktive Mediaquery `prefers-color-scheme: dark` tatsächlich; geprüft wurden `matchMedia`, `color-scheme`, Hintergrundfarben und sichtbare Darstellung. Der Rückwechsel zu Hell wurde ebenfalls bestätigt. Die Produktdateien enthalten keinen Testoverride und keine Umschaltlogik per JavaScript.

Dies ist ein Browser-Farbmodus-Test, kein Betriebssystemwechsel auf echter iPhone-/iPad-Hardware. Entwicklerwerkzeuge und Browser-Systemeinstellungen sind in dieser Prüfumgebung gesperrt; diese Sperren wurden nicht verändert. Ein echter automatischer iPhone-Wechsel und eine erneute VoiceOver-Hörabnahme der neuen Seiten bleiben praktische Abnahmepunkte.

Die auf tatsächlich gerenderten Überschriften, Texten, Links, Schaltflächen, Beschreibungsüberschriften und Hinweisen erhobenen Textkontraste waren in Hell mindestens **5,56:1**, in Dunkel mindestens **8,10:1**. Die ergänzende rechnerische Prüfung der Kartensymbole ergab mindestens 5,57:1. Das ist eine gezielte Kontrastprüfung, keine vollständige WCAG-Konformitätsbewertung.

Standardgrundlage für das iframe-Testverfahren: <https://drafts.csswg.org/css-color-adjust/>. Es werden keine Mediaqueries oder Farbregeln im Test umgeschrieben.

### KI-Transparenz

Sichtbarer Text auf jeder Seite: **„KI-Transparenz: Diese Website enthält KI-generierte Texte und Illustrationen.“** Zusätzlich enthält das Impressum einen Abschnitt zum KI-Einsatz. Keine unbelegte Behauptung über eine menschliche redaktionelle Prüfung.

Rechtsprüfung anhand aktueller Primärquellen: Artikel 50 Abs. 2 betrifft die maschinenlesbare Kennzeichnung durch Anbieter generativer KI-Systeme; Abs. 4 betrifft unter anderem Deepfakes und bestimmte Veröffentlichungen zu Angelegenheiten öffentlichen Interesses. Die Kommissionsleitlinien nennen gewöhnliche Unternehmenswerbung und Produktbeschreibungen ohne entsprechende Gesundheits-, Sicherheits- oder Nachhaltigkeitsaussagen ausdrücklich als Beispiel außerhalb der Textpflicht. Der Hinweis auf dieser Produktwebsite wird deshalb als transparente Offenlegung umgesetzt, ohne eine allgemeine gesetzliche Pflicht oder umfassende Rechtskonformität zu behaupten. Spätere andersartige Inhalte müssen gesondert bewertet und gegebenenfalls unmittelbar am Inhalt gekennzeichnet werden.

Primärquellen, geprüft am 22.11.2026:

- Artikel 50: <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50?full=1>
- Kommissionsleitlinien C/2026/6005, Amtsblatt 12.11.2026, Abschnitt 6.2.1 Randnummer 131 und Abschnitte 6.2.2/6.2.3: <https://publications.europa.eu/resource/cellar/caabe0cd-de39-11f1-ba80-01aa75ed71a1.0006.01/DOC_1>

Interne Links, Anker, lokale Assets, genau eine Hauptüberschrift, Sprachangabe, KI-Hinweis und Theme-Styles auf allen fünf Seiten strukturell geprüft. Keine neuen Paketabhängigkeiten oder nativen App-Builds.
