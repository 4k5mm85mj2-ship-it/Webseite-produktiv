# BRG Entwicklung – Produktive Webseite

Freigegebener Veröffentlichungsstand der BRG-Webseite. Die einzige Entwicklungsquelle ist [Webseite](https://github.com/4k5mm85mj2-ship-it/Webseite). Dort bleibt die bestehende GitHub-Pages-Testumgebung dauerhaft erhalten.

## Übernahme am 23. November 2026

Quelle: Commit `24f8083aefead0e42532853d677bef30f53a2d71`. Der Auftraggeber hat die letzte Aktualisierung erfolgreich getestet und den nächsten Schritt beauftragt. Website-Inhalte, fünf Kartenspiele, Illustrationen, Logos, abgenommene Impressumsanschrift, TestFlight-Link und der geplante App-Store-Start Januar 2027 sind übernommen.

Nur in dieser Produktivfassung wurden die globale Website-Testkennzeichnung und die noindex/nofollow-Metadaten entfernt. Domainkonfiguration bleibt ein eigener Schritt; keine CNAME-Datei hinzugefügt.

## Veröffentlichung und Pflege

1. Änderungen ausschließlich in Webseite entwickeln und auf der Testseite prüfen.
2. Konkreten Quell-Commit vom Auftraggeber freigeben lassen.
3. Diesen Stand übernehmen, die beiden Produktiv-Anpassungen anwenden, Versionsskript ausführen und gezielt prüfen.
4. Herkunft, Unterschiede und Prüfergebnis dokumentieren. Keine automatische Übernahme neuer Teststände.
5. Bei Bedarf auf einen vorher dokumentierten Produktivstand zurückkehren, ohne die Historie zu überschreiben.

GitHub Pages kann dieses Repository aus main und der Repositorywurzel statisch ausliefern. Die tatsächliche Pages-Aktivierung und Domain-/HTTPS-Konfiguration sind separat zu prüfen. Es ist kein Produktionsbuild und keine Paketinstallation erforderlich. Für lokale Entwicklung: npm run dev.

Die historischen Prüfberichte unter Documentation beschreiben ihren jeweiligen damaligen Teststand. Die abgenommene POSTFLEX-Anschrift ist seit 23. November 2026 bestätigt. Aktueller Übergabebericht: Documentation/Produktion/Erstuebernahme.md.
