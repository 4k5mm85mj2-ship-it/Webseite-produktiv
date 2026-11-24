# BRG-Kontaktformular – separater Versanddienst

Bereitgestellt und Versand geprüft am 23. November 2026. Eigenständige Web-App im BRG-Konto; Ausführung als Eigentümer, Zugriff ohne Google-Anmeldung. Google-Dialog bestätigte ausschließlich script.send_mail. Keine Änderung am bestehenden Apps-Script-Supportprojekt, an dessen Triggern oder an der automatischen Eingangsbestätigung.

## Bereitstellung nach Freigabe des Google-Zugriffs

1. In script.google.com ausdrücklich das Konto brg.entwicklung@gmail.com auswählen. Ein neues eigenständiges Projekt „BRG Website-Kontaktformular“ anlegen.
2. Code.gs und appsscript.json aus diesem Verzeichnis übernehmen. Keine bestehenden Projekte überschreiben. Der einzige benötigte OAuth-Scope ist script.send_mail (Nachrichten senden, keine Postfach-Leseberechtigung).
3. Quelltext prüfen und als neue Web-App bereitstellen: Ausführung als Eigentümer des BRG-Kontos; Zugriff für Besucher ohne Google-Anmeldung. Berechtigungsabfrage gesondert bestätigen lassen. Keine Zugangsdaten oder OAuth-Token in Website oder Repository übernehmen.
4. Die bestätigte /exec-Adresse in assets/contact-form.js als endpoint hinterlegen. Formular wird damit aktiv. Native HTTPS-POST-Navigation öffnet die Ergebnisansicht des Versanddienstes; kein no-cors-Fetch und keine unbelegte Erfolgsmeldung.
5. Mit einer eindeutig als Test gekennzeichneten Nachricht prüfen: tatsächlicher Eingang in brg.entwicklung@gmail.com, korrekte Antwortadresse, Bestätigung erst nach erfolgreichem MailApp-Aufruf, Replay ohne zweite Mail, ungültige Eingaben, Quoten- und Fehlerfall. Kein Versand an Dritte. Ergebnis der realen Zustellung separat dokumentieren.
6. Testseite über GitHub Pages bereitstellen und anonym ohne Google-Anmeldung testen. Erst nach Abnahme nach Webseite-produktiv übernehmen. CONTACT.back für die produktive Domain anpassen, wenn diese tatsächlich verbunden ist.

## Verhalten und Grenzen

- Empfänger ist fest brg.entwicklung@gmail.com. Besucher können keine beliebigen Empfänger bestimmen. Name freiwillig, E-Mail und Nachricht erforderlich, maximal 5.000 Zeichen.
- Browser- und Servervalidierung, Honeypot ohne sichtbare Rätsel, maximal drei Sendungen je Antwortadresse/Stunde und 30/Tag, Quotenreserve zehn Empfänger. Keine Behauptung vollständiger Bot-Abwehr; Apps Script bietet hier keine verlässliche Quell-IP-Begrenzung.
- ScriptLock schützt die Reservierung und Verarbeitung gegen gleichzeitige Doppelanfragen. Bei unklarem Versandstatus keine automatische Wiederholung. Versandkennung und Inhaltsprüfsumme verhindern erneuten Versand derselben Anfrage. Prüfsummen, Kennungen und Zähler werden bei der nächsten Anfrage nach Ablauf von 24 Stunden entfernt. Keine dauerhafte Speicherung von Nachrichtentexten außerhalb des Postfachs, kein Protokollieren personenbezogener Formulareingaben.
- Es wird nur eine Nachricht an das eigene BRG-Postfach gesendet, keine automatische Bestätigung an die eingegebene Besucheradresse. Die Erfolgsseite bestätigt den Versanddienst-Aufruf, nicht eine fachliche Bearbeitung. Bestehende Supportregeln schließen Nachrichten aus dem eigenen Konto aus; eine automatische Kunden-Eingangsbestätigung wird dadurch nicht neu aktiviert. Gmail-Antworten auf diese Nachrichten an Reply-To/ursprünglichen Formularabsender richten und vor Versand prüfen.
- Quoten sind von Google begrenzt und können geändert werden. Keine kostenpflichtigen APIs/Abos eingerichtet. Bei Quotenende bleibt der direkte E-Mail-Kontakt erhalten.

## Prüfstand

`node --test services/contact-form/contact-form.test.cjs`: fünf Tests bestanden (nur lokale Mocks). Gültiger Versand, fester Empfänger, Reply-To, Replay, geänderte Inhalte bei gleicher Kennung, mehrdeutiger Fehler ohne Wiederholung, ungültige Felder/Header-Injection/Honeypot/Längen, Quote und Adresslimit. `node --check assets/contact-form.js` und `git diff --check` erfolgreich.

16 Browserkombinationen: Rahmenbreite 320/390/768/1440, Schrift 100/200 Prozent, hell/dunkel. Kein horizontaler Dokumentüberlauf, Eingaben innerhalb des Bildschirms, Versandbutton korrekt deaktiviert. Ungültiges E-Mail-Format wird nativ erkannt. Beschriftungen, Pflichtfelder und Einrichtungsstatus im Accessibility-Baum vorhanden. Kein praktischer VoiceOver-Test. Echte Übermittlung über das native Formular erfolgreich: Bestätigungsseite nach Versand, Gmail-Eingang am 23.11.2026 um 16:57 Uhr (Europe/Berlin), Nachricht 1a2091ffb2b8d110. Fester Empfänger und Reply-To brg.entwicklung@gmail.com, Inhalt vollständig.

Kontraste: Text hell 12,20:1; Eingaberahmen hell 5,81:1; Text dunkel 14,26:1; Eingaberahmen dunkel 10,15:1; weiße Schrift auf Mittelblau 4,79:1.

Die anfängliche Zugriffssperre wurde nach ausdrücklicher Origin- und Berechtigungsfreigabe regulär aufgelöst.

Projekt: BRG Website-Kontaktformular, Script-ID 1Nif_k6aX2ecutdn2i9MuysAVyAYLyMCAtX0Ia_KH1NoiDGt59qepp7Qv.
Deployment Version 1: AKfycbykPqbm77e9PSlT4xqNaW574HSzVzBRyfw8VPppIv8Kb0cc0wfp0hN1sD4RdRpqCzNgmQ. Öffentliche /exec-Adresse in assets/contact-form.js. Keine Änderung an Webseite-produktiv oder Domainkonfiguration.

Bei Änderungen an assets/contact-form.js dessen SHA-256-Kurzversion im Script-src von support.html aktualisieren, anschließend scripts/version-styles.mjs ausführen.

## Rücklinkkorrektur am 23. November 2026

Der Rücklink der gemeinsamen Google-Ergebnisansicht führt nun auf https://www.brg-entwicklung.de/support.html#kontaktformular. Dies gilt für Aufrufe von Produktiv- und Testseite. Versandempfänger, Schutzmechanismen und Berechtigungen bleiben unverändert.

## Produktivübernahme am 24. November 2026

Allgemeine Hilfe und native App-Auswahl: Allgemein / keine bestimmte App und Mitgemischt. App-Zuordnung im Betreff und Nachrichtentext; serverseitige Validierung und Doppelversandschutz aus dem getesteten Entwicklungsstand. Produktiver Endpunkt bleibt unverändert, wird auf eine neue Codeversion mit Rücklink https://www.brg-entwicklung.de/support.html#kontaktformular aktualisiert. Der separate Test-Endpunkt bleibt auf Version 3 erhalten. Keine Änderung an OAuth-Berechtigungen, Empfänger, Quoten, Triggern oder automatischen Eingangsbestätigungen.
