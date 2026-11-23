# Erste Übernahme für die produktive Webseite

23. November 2026. Quelle: `4k5mm85mj2-ship-it/Webseite`, Commit `24f8083aefead0e42532853d677bef30f53a2d71`, vom Auftraggeber nach erfolgreichem Test für den nächsten Schritt bestätigt.

Ziel: `4k5mm85mj2-ship-it/Webseite-produktiv`. Eigenständiger Veröffentlichungsstand; keine automatische Synchronisation. Testrepository und Testadresse bleiben unverändert.

## Unterschiede zur Quelle

Auf allen fünf HTML-Seiten ausschließlich globale Testkennzeichnung und noindex/nofollow-Metadaten entfernt; Cache-/Navigationsversion durch vorhandenes Skript auf a1554bfd270f aktualisiert. README und AGENTS für den getrennten Produktivbetrieb dokumentiert. Übrige Inhalte einschließlich Impressumsanschrift, Datenschutz, KI-Hinweis, fünf Spiele und TestFlight-Link erhalten. Keine CNAME-Datei, keine DNS- oder Domainänderung. Keine neue Abhängigkeit und kein kostenpflichtiger Dienst.

## Prüfung

- Quellvergleich aller fünf HTML-Seiten: identisch nach Berücksichtigung der oben genannten Anpassungen.
- 81 lokale Ressourcen-/Seitenverweise vorhanden und relativ; damit unabhängig vom Repository-Unterpfad verwendbar.
- Alle fünf Seiten im Browser bei 320 CSS-Pixeln/200 Prozent Schrift/dunkel sowie 1440 CSS-Pixeln/100 Prozent Schrift/hell geprüft. Kein horizontaler Dokumentüberlauf, genau eine Hauptüberschrift, keine verbleibende globale Testkennzeichnung.
- TestFlight-Link unverändert und einmalig. CSS und sämtliche Bilder unverändert.
- Kein erneuter praktischer VoiceOver-Test und keine vollständige rechtliche Prüfung aus Anlass dieser technischen Übernahme.

## Nächster Schritt

GitHub-Pages-Einstellungen des Zielrepositories prüfen/einrichten und anschließend die Domain brg-entwicklung.de nach abgestimmter Freigabe verbinden, HTTPS abwarten und öffentliche Erreichbarkeit prüfen. Die Übernahme der Dateien ist noch kein Nachweis einer aktivierten produktiven Domain.

## Weitere Veröffentlichungen

Entwicklung im Testrepository, konkrete Freigabe des Quell-Commits, kontrollierte Übernahme mit Dokumentation. Keine automatische Übernahme von main. Änderungen über neue Commits dokumentieren, damit frühere Produktivstände als Rückkehrpunkt erhalten bleiben.
