---
title: "Nicht unterstützte Verhalten in Outlook"
linkTitle: "Nicht unterstützte Verhalten in Outlook"
weight: 40
description: 'Nicht unterstützte Verhalten in Outlook'
---
## Nicht unterstützte Verhalten in Outlook

{{% alert title="Warning" color="warning" %}}

- Aus einem mit Rooms synchronisierten Einzeltermins eine Serie erstellen --> Serie wird nicht erstellt in Rooms --> Beim nächsten Update der Reservation wird die Serie/Serientermin in Outlook entfernt
- Serie erweitern (mehr Appointments als Reservationen) --> Zusätzliche Appointments werden wieder gelöscht / Serieappointments werden zurückgesetzt
- Sofortiges löschen des Appointmens nach der Erstellung --> Reservation bleibt bestehen
- Datum/Zeitanpassung auf Outlook auf einen Zeitpunkt wo der Raum bereits besetzt ist oder das Buchen nicht erlaubt ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Anpassen von Serie/Reservation welche zurzeit in Rooms geöffnet ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Bei Serie: Jährliche oder Wiederholung ohne Enddatum --> Bei der Erstellung wird dies vom Add-In unterbunden
{{% /alert %}}

### Vorbereitung

|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|5 Minuten|[BackSync] - Missing license

Für weitere Informationen wenden Sie sich bitte an das Support-Team der 3Volutions AG:

__Kontaktdaten__
ServiceDesK: https://3volutions.atlassian.net/servicedesk/customer/portal/1
Telefon:     +41 31 511 01 39
E-Mail:      support@microfast.ch