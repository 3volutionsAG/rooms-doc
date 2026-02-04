---
title: "Reminder"
linkTitle: "Reminder"
weight: 70
description: "Mit dem Reiter „Reminder“ können Sie zu einer Buchung eine manuelle Erinnerung (E-Mail) zu einem frei wählbaren Zeitpunkt auslösen."
---

{{% alert title="Voraussetzungen (häufige Fehlerquelle)" color="info" %}}
Damit Sie den Reiter **„Reminder“** nutzen können, muss Folgendes erfüllt sein:

- Ihre Rolle hat das globale Recht **„Darf Reminder sehen“**.  
  Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
- Für Ihren **Standort** ist eine **Reminder-Notifikation** (E-Mail-Vorlage für Reservations-Reminder) eingerichtet und aktiv.
- Für den Versand an **Notifikation Gruppe** muss eine entsprechende **Notifikationsgruppe** vorhanden sein.

Wenn einer dieser Punkte fehlt, sehen Sie den Reiter nicht oder erhalten beim Erstellen eine Meldung. In diesem Fall wenden Sie sich an Ihre ROOMS-Administration.
{{% /alert %}}

## Wozu gibt es den Reminder?

Mit **Reminder** senden Sie zu einer bestehenden oder neuen Buchung eine **gezielte Nachricht als E-Mail** zu einem **frei wählbaren Datum/Uhrzeit** – z.B. als Erinnerung oder als Arbeitsauftrag an Empfang, Facility oder IT.

## Wo finde ich den Reiter?

Sie finden den Reiter **„Reminder“** in der **Detailbuchung** (neben z.B. „Teilnehmer“ und „Beilage“).

{{< imgproc Detailbuchung_Reminder Resize "960x" >}}
Reminder-Reiter in der Detailbuchung (Datum/Zeit, Text und Empfänger/Gruppe)
{{< /imgproc >}}

{{% alert title="Wichtig" color="secondary" %}}
Ein Reminder wird erst verbindlich, wenn Sie die Buchung am Schluss **speichern/bestätigen**. Wenn Sie die Detailbuchung schliessen, ohne zu speichern, wird der Reminder nicht übernommen.
{{% /alert %}}

## Reminder erstellen (Schritt-für-Schritt)

1. Öffnen Sie eine Buchung in der **Detailbuchung** und wechseln Sie zum Reiter **„Reminder“**.
2. Erfassen Sie die gewünschten Angaben:
   - **Datum/Zeit**: Wann soll die E-Mail verschickt werden?
   - **Reminder text**: Was soll in der Nachricht stehen?
   - **Empfänger**: An welche Person soll die Nachricht gehen?
   - **Notifikation Gruppe** (optional): Alternativ oder zusätzlich können Sie eine Gruppe auswählen.
3. Klicken Sie auf **„Reminder erstellen“**.
4. Schliessen Sie die Buchung wie gewohnt ab (z.B. **„Buchung abschliessen“** → **„Reservation bestätigen“**).

{{% alert title="Hinweis" color="info" %}}
Sie müssen mindestens **einen Empfänger** angeben: entweder **Empfänger** oder **Notifikation Gruppe** (oder beides).
{{% /alert %}}

## Reminder verwalten

- **Mehrere Reminder**: Pro Buchung können Sie bei Bedarf mehrere Reminder erfassen (z.B. unterschiedliche Zeitpunkte oder Empfänger).
- **Löschen**: Solange ein Reminder noch nicht verarbeitet wurde, kann er (je nach Berechtigung) wieder gelöscht werden.

## Beispiele

- **Empfang informieren**: „Bitte ab 11:45 Gäste für Meeting ‚Projekt Kickoff‘ im Raum Everest empfangen.“
- **Facility/Technik erinnern**: „Beamer testen und Mikrofon bereitstellen – Start 14:00.“
- **Catering-Hinweis**: „Kaffee/ Wasser auffüllen – 15 Minuten vor Beginn.“
- **Organisator:in erinnern**: „Bitte Teams-Link prüfen und Präsentation bereithalten.“

## Unterschied zu persönlichen Reminder-Einstellungen

Der Reiter **„Reminder“** ist eine **manuelle Nachricht zu einer konkreten Buchung**.
Davon unabhängig gibt es im Benutzerprofil persönliche Einstellungen, um **automatische Reminder** (z.B. X Minuten vor jeder Buchung) zu erhalten.

Mehr dazu: [`Einstellungen → Persönliche Einstellungen → Notifikation`](/3vrooms/einstellungen/pers%C3%B6nlicheeinstellungen/notifikation/)

## Wenn etwas nicht klappt

- **Reiter fehlt**: Meist fehlt das Recht **„Darf Reminder sehen“** → Administration kontaktieren.
- **Meldung beim Erstellen**: Häufig ist die **Reminder-Notifikation für den Standort** noch nicht eingerichtet/aktiv → Administration kontaktieren.
- **Keine Empfänger auswählbar**: Prüfen Sie, ob Sie bei **Empfänger** bzw. **Notifikation Gruppe** einen gültigen Eintrag gewählt haben.
- **Reminder kommt nicht an**: Prüfen Sie, ob der Reminder-Zeitpunkt in der Zukunft liegt und die Buchung **gespeichert/bestätigt** wurde. Prüfen Sie ausserdem, ob der Empfänger eine gültige E-Mail-Adresse hat. Falls weiterhin nichts ankommt: Administration kontaktieren.

