---
title: "Exchange Synchronisation"
linkTitle: "Exchange Synchronisation"
weight: 40
draft: true

description: >
   <p style="text-align: justify">Generelle Informationen zu der Exchange Synchronisation</p>
---
## Fehlerbehandlung

### Backsync Dienst

**Vorbereitung**

|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Lizenzen|Abbruch|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person wird nicht gefunden??|Exception??|
|Person Mailbox leer|Aktion wird gelöscht|
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Aktion keine Reservation zugeteilt|Aktion wird gelöscht|
|Reservation kann nicht gefunden werden|Exception!|


### Collaboration Dienst

**Vorbereitung**

|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Lizenzen|Abbruch|
|Bei Einzelreservation: Reservation in Vergangenheit|Aktion wird gelöscht|
|Teil einer Seriereservation: Alle Reservationen in Vergangenheit|Aktion wird gelöscht|
|Person wird nicht gefunden??|Exception??|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|

**Aktion mit IsDelete und IsSubscription gekennzeichnet**
**Subcription Aktion für das Löschen von Reservation von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Reservation verknüpft<br>Kommunikationsproblem mit Exchange beim suchen von Appointment|Retry --> siehe ExchangeManageException handling|
|Keine Reservation verknüpft<br>Appointment wird in Exchange nicht gefunden|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Appointment besitzt keine Rooms Identifizierung(AppointmentOid)|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Reservation oder Serie wird über AppointmentOid nicht gefunden |Aktion wird gelöscht|
|Reservation/Serie verknüpft kann aber nicht gefunden werden|Aktion wird gelöscht|
|Reservation/Serie kann nicht annulliert werden|Sync Error Mail wird versendet --> Aktion wird gelöscht|
|Reservation/Serie SyncProperties können nicht zurückgesetzt werden|3x Retry je 3 Minuten|
|Erfolgreiche Löschung des Termins|Aktion wird gelöscht|

**Aktion mit IsSubscription gekennzeichnet (Einzelreservation)**
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Reservation verknüpft|Aktion wird gelöscht|
|Reservation wird nicht gefunden|Aktion wird gelöscht|
|Reservation hat keine SyncItemId mehr|Aktion wird gelöscht|
|Appointment wird nicht gefunden|Siehe ExchangeManageException handling|
|Änderungen von Appointment kann nicht auf Reservation übernommen werden<br>--> Exception bei Update|Siehe CollaborationAktionHandler Exception handling|
|Änderungen von Appointment kann nicht auf Reservation übernommen werden|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll|

**Aktion mit IsSubscription gekennzeichnet (Serie)**
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Reservation verknüpft|Aktion wird gelöscht|
|Reservation wird nicht gefunden|Aktion wird gelöscht|
|Reservation hat keine SyncItemId mehr|Aktion wird gelöscht|
|Serie hat keine SyncItemId mehr|Aktion wird gelöscht|
|Master Serie Appointment wird nicht gefunden|Retry --> siehe ExchangeManageException handling|
|Es exisiteren mehr Appointments als Reservationen in Rooms|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll|
|Reservation muss Annulliert werden<br> --> Exception bei Annullierung|Siehe CollaborationAktionHandler Exception handling|
|Reservation muss Annulliert werden<br> --> Validierungserror bei Annullierung|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll|
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Exception bei Update|Siehe CollaborationAktionHandler Exception handling|
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Validierungserror bei Update|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll|

**CollaborationAktionHandler ExchangeManagerException handling**

|<div style="width:200px">Exchange Fehler</div>|Resultat|
|---|---|
|DataProcessing, InternalError|3x Retry je 5 Minuten|
|Connectivity|24x Retry je 60 Minuten|
|Authentication, Authorization|8x Retry je 120 Minuten|
|UserUnknown|4x Retry je 360 Minuten|
|Alle anderen Exchange Fehler|3x Retry je 3 Minuten|

**CollaborationAktionHandler Exception handling**

Intervall 0 --> Retry in 1 Minute
Intervall 1 - 3 --> Retry nach je 20 Minuten

### Push subscription Dienst


