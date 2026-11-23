# Responsives Startseitenlogo – 23. November 2026

Ausgang: `06a8a2191a90b3ad0b92f00b099a21aba864c8d9`.

Unter 40 rem bleibt das vollständige Original-Logo im Startbereich sichtbar; der Kopfbereich verwendet weiterhin das kompakte Symbol. Ab 40 rem zeigt der Kopfbereich bereits die Wort-Bild-Marke. Genau ab diesem Übergang wird die zusätzliche Logodarstellung im Startbereich vollständig ausgeblendet, einschließlich ihres Platzbedarfs. Ab 64 rem bleibt das vollständige Header-Logo mit Leitsatz erhalten. Die Regel gilt ausschließlich für die Bildschirmdarstellung der Startseite.

Änderung: zwei Zeilen in `assets/home.css`. Alle fünf HTML-Seiten erhalten über das bestehende Versionsskript aktualisierte Stylesheet-/Navigationskennungen; ihr Inhalt und ihr Markup bleiben nach Entfernen dieser Kennungen identisch. Neue Seitenversion: `0314d09281d5`. Original-SVGs, Farben, Texte, Navigation, fünf Spiele, TestFlight-Link und Rechtstexte bleiben unverändert.

40 Browserfälle geprüft: 320/390/402/639/640/641/768/1023/1024/1440 CSS-Pixel, jeweils 100/200 Prozent Wurzelschrift und Hell/Dunkel. In jedem Fall genau eine sichtbare Wort-Bild-Marke und eine sichtbare Header-Variante. Auf kleinen Displays bleibt zusätzlich das kompakte Navigationssymbol erhalten. Keine überlaufenden geprüften Text-/Bildkästen, kein horizontaler Dokumentüberlauf und kein zurückbleibender Leerraum oberhalb der Hauptüberschrift in der breiten Ansicht. SVG-Seitenverhältnisse und Theme-Auswahl bleiben korrekt. Mobile Dunkelansicht und breite Hellansicht zusätzlich visuell kontrolliert.

Tastaturfolge vom Logo zur Hauptnavigation und sichtbarer Fokus geprüft. Die zugängliche Bezeichnung „BRG Entwicklung – Startseite“ am Markenlink bleibt unverändert; dekorative SVGs erzeugen keine zusätzlichen Tabstopps. Keine praktischen iPhone-/VoiceOver-Tests auf dieser Linux-Umgebung behauptet. Das Versionsskript ist idempotent; `git diff --check` ohne Befund. Keine neuen Abhängigkeiten oder Dienste.

Bereitstellung auf der bestehenden GitHub-Pages-Testseite; fachliche Abnahme durch den Auftraggeber.
