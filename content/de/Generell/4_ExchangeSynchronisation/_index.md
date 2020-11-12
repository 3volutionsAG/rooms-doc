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
|Person wird nicht gefunden|Aktion wird gelöscht|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Aktion keiner Reservation zugeteilt|Aktion wird gelöscht|
|Exception beim Suchen von Reservation|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured trying to find Reservation {0}
|Reservation wird nicht gefunden|Aktion wird gelöscht||[BackSync] - Reservation {0} was not found in Rooms BackSync failed

## Einzelne Reservation

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim durchführen der Backsync<br>--> Exchange Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Exchange Error occured while trying to find or save Appointment, related Reservation: {0}, Mailbox: {1}"
|Exception beim durchführen der Backsync<br>--> DB Timeout|Service wird 5 Minuten gestoppt, beim 2. mal wird aktion gelöscht|
|Exception beim durchführen der Backsync<br>--> Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured during BackSync of Reservation: {0}
|Appointment kann nicht gefunden werden|Intervall erhöht|BackSyncIntervall|
|Validation Errors beim Speichern der Reservation|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured while trying to change reservation {0}: {1}

## Reservation Teil einer Serie
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim durchführen der Backsync<br>--> Exchange Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Exchange Error occured while trying to find or save Appointment, related Serie: {0}, Mailbox: {1}
|Exception beim durchführen der Backsync<br>--> DB Timeout|Service wird 5 Minuten gestoppt, beim 2. mal wird aktion gelöscht|
|Exception beim durchführen der Backsync<br>--> Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured during BackSync of Serie: {0}
|Master Appointment kann nicht gefunden werden|Intervall erhöht|BackSyncIntervall|
|Weniger Appointments als Reservationen vorhanden<br>--> Buchungen werden annulliert --> Validationserror beim Annullieren|||[BackSync] - Error occured while trying to cancle reservation {0}: {1}
|Validation Errors beim Speichern von Reservation|Aktion wird gelöscht||[BackSync] - Error occured while trying to change reservation {0} in serie: {1}: {2}

# Collaboration Dienst

## Vorbereitung

|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|5 Minuten|[CollaborationService] - Missing license
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Person wird nicht gefunden|Aktion wird gelöscht|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|

## Vorbereitung IsSubscription
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft<br>Kommunikationsproblem mit Exchange beim suchen von Appointment|Intervall erhöht|ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Keine Reservation verknüpft<br>Appointment wird in Exchange nicht gefunden|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Appointment besitzt keine Rooms Identifizierung(AppointmentOid)|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Reservation oder Serie wird über AppointmentOid nicht gefunden |Aktion wird gelöscht|
|Reservation verknüpft wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Reservation {0} not found in rooms, subscription update will be removed
|Bei IstSerieübernahme: Serie existiert nicht in Rooms|Aktion wird gelöscht|
|Bei IstSerieübernahme: Serie befindet sich in einem unsynchronisierbaren Status|Aktion wird gelöscht|

## Aktion mit IsDelete und IsSubscription gekennzeichnet
**Subcription Aktion für das Löschen von Reservation von Exchange erhalten**
|Reservation/Serie kann nicht annulliert werden|Sync Error Mail wird versendet --> Aktion wird gelöscht||[CollaborationService] - Serie/Reservation {0} could not be cancled in rooms: {1}
|Nach Annullation Reservation/Serie Exception bei Reset der Sync|Aktion wird gelöscht||[CollaborationService] - Failed to reset SyncProperties of Serie/Reservation {0}
|Erfolgreiche Löschung der Reservation/Serie|Aktion wird gelöscht|

## Aktion mit IsSubscription gekennzeichnet (Einzelreservation)
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Reservation ist nicht mehr synchronisert (keine SyncItemId)|Aktion wird gelöscht|[CollaborationService] - Reservation {0} is not synced anymore, ingoring subscription update
|Appointment wird nicht gefunden<br>Exception|Intervall erhöht|ExchangeManageException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Reservation subscription update {0}, appointment not found, ingoring subscription update
|Änderungen von Appointment kann nicht auf Reservation übernommen werden<br>--> Exception bei Update|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Änderungen von Appointment kann nicht auf Reservation übernommen werden|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet|||[CollaborationService] - Validation Error occured during Sync but trying again: {0}

## Aktion mit IsSubscription gekennzeichnet (Serie)**
**Subcription Aktion von Exchange erhalten**
|<div style="width:200px">Möglicher Fehler</div>|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie ist nicht mehr synchronisert (keine SyncItemId)|Aktion wird gelöscht||[CollaborationService] - Serie {0} is not synced anymore, ingoring subscription update
|Appointment wird nicht gefunden<br>Exception|Intervall erhöht|ExchangeManageException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Serie subscription update {0}, appointment not found, ingoring subscription update
|Es exisiteren mehr Appointments als Reservationen in Rooms|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Serie {0}, Subscription update, more appointments in exchange than in rooms appointment will be reset<br>[CollaborationService] - Validation Error occured during Sync but trying again: {0}
|Reservation muss Annulliert werden<br>--> Exception bei Annullierung|Intervall erhöht|CollaborationAktionHandler Exception|Exception	[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Reservation muss Annulliert werden<br>--> Validierungserror bei Annullierung|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Validation Error occured during Sync but trying again: {0}
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Exception bei Update|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Validierungserror bei Update|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Validation Error occured during Sync but trying again: {0}


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


# Sync Intervalle

**BackSyncIntervall**
- 3x alle 5 Sekunden sofort wieder 
- 3x alle 30 Sekunden
- 3x alle 1 Stunde
- 3x alle 6 Stunden
- 2x alle 12 Stunden
- Nach ca. 47 Stunden wird Aktion gelöscht HandleSyncError aufgerufen

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

# Testing

## Funktioniert nicht

Outlook:
- Aus einzeleintrag serie erstellen --> Serie wird nicht erstellt in Rooms
- Serie erweitern --> Zusätzliche Termine werden wieder gelöscht
- Seriepattern anpassen mit überlappenden einträgen --> Termine werden zurückgesetzt z.B. daily jeder tag 5x zu daily jeder 2. tag 5x

- Löschen von Serieeinträgen funktioniert noch nicht gut, werden recreated

# Funktioniert
Outlook:
- Serie verkleinern
- Seriepattern anpassen ohne überlappende einträge z.B. daily jeder tag 5x zu monatlich 