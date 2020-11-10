---
title: "Exchange Synchronisation"
linkTitle: "Exchange Synchronisation"
weight: 40
draft: true

description: >
   <p style="text-align: justify">Generelle Informationen zu der Exchange Synchronisation</p>
---

# Backsync Dienst

## Vorbereitung

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|5 Minuten|[BackSync] - Missing license
|Person SyncMode auf None|Aktion wird gelöscht|
|Person wird nicht gefunden|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Aktion keiner Reservation zugeteilt|Aktion wird gelöscht|
|Exception beim Suchen von Reservation|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured trying to find Reservation {0}
|Reservation wird nicht gefunden|Aktion wird gelöscht||[BackSync] - Reservation {0} was not found in Rooms BackSync failed

## Einzelne Reservation

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim durchführen der Backsync<br>--> Exchange Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Exchange Error occured while trying to find or save Appointment, related Reservation: {0}"
|Exception beim durchführen der Backsync<br>--> DB Timeout|Service wird 5 Minuten gestoppt, beim 2. mal wird aktion gelöscht|
|Exception beim durchführen der Backsync<br>--> Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured during BackSync of Reservation: {0}
|Appointment kann nicht gefunden werden|Intervall erhöht|BackSyncIntervall|
|Validation Errors beim Speichern von Reservation||backsyncintervall

## Reservation Teil einer Serie
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception bei durchführen der Backsync<br>--> Exception|Erorr Log|backsyncintervall
|Exception bei durchführen der Backsync<br>--> DB Timeout|weitergeworfen|
|||backsyncintervall
|Master Appointment kann nicht gefunden werden||backsyncintervall
|Weniger Appointments als Reservationen vorhanden<br>--> Buchungen werden annulliert --> Validationserror beim Annullieren||backsyncintervall
|Validation Errors beim Speichern von Reservation||backsyncintervall

# Sync Intervalle
****
- 

**BackSyncIntervall**
- 3x alle 5 Sekunden sofort wieder 
- 3x alle 30 Sekunden
- 3x alle 1 Stunde
- 3x alle 6 Stunden
- 2x alle 12 Stunden
- Nach ca. 47 Stunden wird Aktion gelöscht HandleSyncError aufgerufen

# Collaboration Dienst

## Vorbereitung

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|
|Bei Einzelreservation: Reservation in Vergangenheit|Aktion wird gelöscht|
|Teil einer Seriereservation: Alle Reservationen in Vergangenheit|Aktion wird gelöscht|
|Person wird nicht gefunden|Aktion wird gelöscht|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|

## Aktion mit IsDelete und IsSubscription gekennzeichnet
**Subcription Aktion für das Löschen von Reservation von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft<br>Kommunikationsproblem mit Exchange beim suchen von Appointment|Retry --> siehe ExchangeManageException handling|
|Keine Reservation verknüpft<br>Appointment wird in Exchange nicht gefunden|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Appointment besitzt keine Rooms Identifizierung(AppointmentOid)|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Reservation oder Serie wird über AppointmentOid nicht gefunden |Aktion wird gelöscht|
|Reservation/Serie verknüpft kann aber nicht gefunden werden|Aktion wird gelöscht|
|Reservation/Serie kann nicht annulliert werden|Sync Error Mail wird versendet --> Aktion wird gelöscht|
|Reservation/Serie SyncProperties können nicht zurückgesetzt werden|3x Retry je 3 Minuten|
|Erfolgreiche Löschung des Termins|Aktion wird gelöscht|

## Aktion mit IsSubscription gekennzeichnet (Einzelreservation)
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft|Aktion wird gelöscht|
|Reservation wird nicht gefunden|Aktion wird gelöscht|
|Reservation hat keine SyncItemId mehr|Aktion wird gelöscht|
|Appointment wird nicht gefunden|Siehe ExchangeManageException handling|
|Änderungen von Appointment kann nicht auf Reservation übernommen werden<br>--> Exception bei Update|Siehe CollaborationAktionHandler Exception handling|
|Änderungen von Appointment kann nicht auf Reservation übernommen werden|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll|

## Aktion mit IsSubscription gekennzeichnet (Serie)**
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
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

## Aktion mit IsDelete gekennzeichnet
**Serie/Reservation wurde in Rooms gelöscht**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine SyncItemId oder AppointmentOid|Aktion wird gelöscht|-|-|
|Exception beim Löschen des Appointments|ExchangeManagerException|
|Unerwartete Antwort beim löschen des Appointments|ValidationError / Aktion wird gelöscht |


## Aktion ohne IsDelete/IsSubscription gekennzeichnet
**Vorbereitung**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft|Aktion wird gelöscht|-|-|
|Exception beim suchen der Reservation|CollaborationAktionHandler Exception handling|
|Reservation kann nicht gefunden werden|Aktion wird gelöscht|
|Keine SyncItemId aber AppointmentOid gesetzt|Pending backsync| Intervall 0-5 jede Minute, Intervall 6 - 48 alle 30 minuten|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|

## Aktion ohne IsDelete/IsSubscription gekennzeichnet
**Reservation wurde in Rooms erstellt/angepasst**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim Erstellen von Appointment|Appointment wird wieder gelöscht|ExchangeManager oder Exception handling
|Exception beim Finden von Appointment|ExchangeManager handling|
|Appointment wird nicht gefunden |Bei intervall > 1 wird Sync deaktiviert|ExchangeManager handling (DataProcessing)|
|Appointment ist noch teil einer Serie (in Rooms nicht mehr) |Appointment wird gelöscht (Exception möglich) / Sync zurückgesetzt / ValidationError|
|Exception beim Speichern/aktualisieren des Appointments |ExchangeManager handling|

## Aktion ohne IsDelete/IsSubscription gekennzeichnet
**Serie wurde in Rooms erstellt**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|
|Exception beim erstellen von Serie Appointment|Appointment wird wieder gelöscht|ExchangeManager oder Exception handling
|Einzelne Reservationen können nicht synchronisiert werden|Seriestatus wird auf Unsynchronisierbar gesetzt|
|Exception beim aktualisieren/erstellen von Serie|Exception handling|

## Aktion ohne IsDelete/IsSubscription gekennzeichnet
**Serie wurde in Rooms aktualisiert**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|
|Exception beim erstellen von Serie Appointment|Appointment wird wieder gelöscht|ExchangeManager oder Exception handling
|Einzelne Reservationen können nicht synchronisiert werden|Seriestatus wird auf Unsynchronisierbar gesetzt|
|Exception beim aktualisieren/erstellen von Serie|Exception handling|
|Appointment wird nicht gefunden |Bei intervall > 1 wird Sync auf serie deaktiviert|ExchangeManager handling (DataProcessing)|
|Appointment ist nicht master appointment |Sync auf Reservation zurücksetzen, appointment löschen, aktion wird nochmals ausgeführt|
|Einzelne Reservationen können nicht synchronisiert werden|Seriestatus wird auf Unsynchronisierbar gesetzt|
|Exception beim aktualisieren/erstellen von Serie|Exception handling|


**CollaborationAktionHandler ExchangeManagerException handling**

|<div style="width:200px">Exchange Fehler</div>|Intervall|
|---|---|
|DataProcessing, InternalError|3x Retry je 5 Minuten|
|Connectivity|24x Retry je 60 Minuten|
|Authentication, Authorization|8x Retry je 120 Minuten|
|UserUnknown|4x Retry je 360 Minuten|
|Alle anderen Exchange Fehler|3x Retry je 3 Minuten|

**CollaborationAktionHandler Exception handling**

Intervall 0 --> Retry in 1 Minute

Intervall 1 - 3 --> Retry nach je 20 Minuten

# Push subscription Dienst

Der Push subscription Dienst...
## Neue Subscriptions erstellen/aktualisieren

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Subscription is keine Person/Ressource|Exception||
|Subscriber hat inzwischen SyncMode None|Sync wird deaktiviert||
|Exception beim erstellen des Push Subscription<br>--> ExchangeManagerException|In einer Minute wird erneut probiert||
|Exception beim erstellen des Push Subscription<br>--> DB Timeout|Exception wird weitergeworfen||
|Exception beim erstellen des Push Subscribers<br>--> Exception|Sync wird deaktiviert||
|Push subscription ist nicht erfolgreich|In einer Minute wird erneut probiert||

## Well Known Folders aktualisieren (Deleted-Items )

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim Abonnieren der Folders|In einer Minute wird erneut probiert||
|DB Timeout beim Abonnieren der Folders|Exception wird weitergeworfen||

## Sync deaktivieren (Subscription kann nicht aktualisiert werden)


**HandleSyncError**


