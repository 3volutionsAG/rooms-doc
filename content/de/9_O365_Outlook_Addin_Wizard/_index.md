---
title: "O365 Outlook Addin / Wizard"
linkTitle: "o356-outlook-addin-wizard"
weight: 9
description: >
  Hier wird die funktionalität des Outlook Addins erläutert
---


## Nicht unterstützte Verhalten in Outlook

{{% alert title="Warning" color="warning" %}}
- Aus einem mit Rooms synchronisierten Einzelappointment eine Serie erstellen --> Serie wird nicht erstellt in Rooms --> Beim nächsten Update der Reservation wird die Serie/Serieappoitments in Outlook entfernt
- Serie erweitern (mehr Appointments als Reservationen) --> Zusätzliche Appointments werden wieder gelöscht / Serieappointments werden zurückgesetzt
- Sofortiges löschen des Appointmens nach der Erstellung --> Reservation bleibt bestehen
- Datum/Zeitanpassung auf Outlook auf einen Zeitpunkt wo der Raum bereits besetzt ist oder das Buchen nicht erlaubt ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Anpassen von Serie/Reservation welche zurzeit in Rooms geöffnet ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Bei Serie: Jährliche oder wiederholung ohne Enddatum --> Bei der Erstellung wird dies vom Addin unterbunden
{{% /alert %}}



### Vorbereitung
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|5 Minuten|[BackSync] - Missing license


Für weitere Informationen wenden Sie sich bitte an das Support-Team der 3Volutions AG:

__Kontaktdaten__
Telefon: +41 31 511 01 30
E-Mail: info@3volutions.ch

