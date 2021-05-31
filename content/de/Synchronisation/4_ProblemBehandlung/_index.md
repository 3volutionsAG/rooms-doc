---
title: "Problembehandlung"
linkTitle: "Problembehandlung"
weight: 40

description: >
   <p style="text-align: justify">Problembehandlung bei der Exchange Synchronisation</p>
---

# Finden von Reservationen mit Synchronisationsfehlern

Unter Listen --> Buchungen können Buchungen gefunden werden, bei welchem die Synchronisation fehlgeschlagen hat.

- Buchungen mit Synchronisationsproblemen
- Serienbuchungen mit Synchronisationsproblemen

In diesem fall annulliert man am Besten die Buchung und erstellt eine neue.

Mit der Option

- Bucungen mit fehlender Back-Synchronisation

findet man Buchungen welche über das Addin in Outlook erstellt wurden, dann aber von Rooms nicht in Exchange gefunden wurden. Liegt das Erstelldatum der Buchung lange in der Vergangenheit, ist wohl die dazugehörige Outlook buchung annulliert worden (bevor die Back-Synchronisation durgeführt wurde).

{{< imgproc buchungen_mit_sync_problemen Resize "200x" >}}{{< /imgproc >}}


# Backsync Dienst

- Appiontment: Termin in Exchange/Outlook
- Reservation: Termin in Rooms

## Nicht unterstützte Verhalten in Outlook

{{% alert title="Warning" color="warning" %}}
- Aus einem mit Rooms synchronisierten Einzelappointment eine Serie erstellen --> Serie wird nicht erstellt in Rooms --> Beim nächsten Update der Reservation wird die Serie/Serieappoitments in Outlook entfernt
- Serie erweitern (mehr Appointments als Reservationen) --> Zusätzliche Appointments werden wieder gelöscht / Serieappointments werden zurückgesetzt
- Sofortiges löschen des Appointmens nach der Erstellung --> Reservation bleibt bestehen
- Datum/Zeitanpassung auf Outlook auf einen Zeitpunkt wo der Raum bereits besetzt ist oder das Buchen nicht erlaubt ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Anpassen von Serie/Reservation welche zurzeit in Rooms geöffnet ist --> Appointment wird zurückgesetzt --> Serieappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Bei Serie: Jährliche oder wiederholung ohne Enddatum --> Bei der Erstellung wird dies vom Addin unterbunden
- Anpassen/Löschen von Terminen aus Kalender von anderen Personen --> Wird in einem zukünftigen Release behoben/ermöglicht
{{% /alert %}}


## Backsync Dienst

Der Backsync Dienst wird aktiv, wenn über das Addin eine Reservation/Appointment erstellt wird. Der Backsync dienst verknüpft die Reservation mit dem Appointment in Exchange. 

Werden in der Zwischenzeit (zwischen erstellen des Termins und ausführen der Backsync) änderungen am Termin vorgenommen muss der Backsync Dienst dies abhandeln Rooms ist dabei der Master. Dieses Verhalten kann mit der Konfiguration: "BackSync delay in minutes" getestet werden.

### Vorbereitung
|Möglicher Fehler|Resultat|Intervall|Logmeldung
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

### Aktion für Backsync einzelner Reservation
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim durchführen der Backsync<br>--> Exchange Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Exchange Error occured while trying to find or save Appointment, related Reservation: {0}, Mailbox: {1}"
|Exception beim durchführen der Backsync<br>--> DB Timeout|Service wird 5 Minuten gestoppt, beim 2. mal wird aktion gelöscht|
|Exception beim durchführen der Backsync<br>--> Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured during BackSync of Reservation: {0}
|Appointment kann nicht gefunden werden|Intervall erhöht|BackSyncIntervall|
|Validation Errors beim Speichern der Reservation|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured while trying to change reservation {0}: {1}

### Aktion für Backsync wenn Reservation Teil einer Serie ist
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim durchführen der Backsync<br>--> Exchange Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Exchange Error occured while trying to find or save Appointment, related Serie: {0}, Mailbox: {1}
|Exception beim durchführen der Backsync<br>--> DB Timeout|Service wird 5 Minuten gestoppt, beim 2. mal wird aktion gelöscht|
|Exception beim durchführen der Backsync<br>--> Exception|Intervall erhöht|BackSyncIntervall|[BackSync] - Error occured during BackSync of Serie: {0}
|Master Appointment kann nicht gefunden werden|Intervall erhöht|BackSyncIntervall|
|Weniger Appointments als Reservationen vorhanden<br>--> Buchungen werden annulliert --> Validationserror beim Annullieren|||[BackSync] - Error occured while trying to cancle reservation {0}: {1}
|Validation Errors beim Speichern von Reservation|Aktion wird gelöscht||[BackSync] - Error occured while trying to change reservation {0} in serie: {1}: {2}

## Collaboration Dienst

Der Collaboration Dienst ist das Hauptstück der Synchronisation er behandelt sowohl Subscription Updates von Exchange sowie auch Updates auf seiten Rooms.

### Vorbereitung
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Lizenzen|Abbruch|5 Minuten|[CollaborationService] - Missing license
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Person wird nicht gefunden|Aktion wird gelöscht|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person Mailbox leer|Aktion wird gelöscht|

### Vorbereitung für Exchange Subscription Update (IsSubscription = true)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft<br>Kommunikationsproblem mit Exchange beim suchen von Appointment|Intervall erhöht|ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Keine Reservation verknüpft<br>Appointment wird in Exchange nicht gefunden|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Appointment besitzt keine Rooms Identifizierung(AppointmentOid)|Aktion wird gelöscht|
|Keine Reservation verknüpft<br>Reservation oder Serie wird über AppointmentOid nicht gefunden |Aktion wird gelöscht|
|Reservation verknüpft wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Reservation {0} not found in rooms, subscription update will be removed
|Bei IstSerieübernahme: Serie existiert nicht in Rooms|Aktion wird gelöscht|
|Bei IstSerieübernahme: Serie befindet sich in einem unsynchronisierbaren Status|Aktion wird gelöscht|

### Exchange Subscription Update für das Löschen eines Termins (IsSubscription = true, IsDelete = true)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Reservation/Serie kann nicht annulliert werden|Sync Error Mail wird versendet --> Aktion wird gelöscht||[CollaborationService] - Serie/Reservation {0} could not be cancled in rooms: {1}
|Nach Annullation Reservation/Serie Exception bei Reset der Sync|Aktion wird gelöscht||[CollaborationService] - Failed to reset SyncProperties of Serie/Reservation {0}

### Exchange Subscription Update für einen Termin erhalten (Einzelreservation) (IsSubscription = true)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Reservation ist nicht mehr synchronisert (keine SyncItemId)|Aktion wird gelöscht|[CollaborationService] - Reservation {0} is not synced anymore, ingoring subscription update
|Appointment wird nicht gefunden<br>Exception|Intervall erhöht|ExchangeManageException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Reservation subscription update {0}, appointment not found, ingoring subscription update
|Änderungen von Appointment kann nicht auf Reservation übernommen werden<br>--> Exception bei Update|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Änderungen von Appointment kann nicht auf Reservation übernommen werden|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet|||[CollaborationService] - Validation Error occured during Sync but trying again: {0}

### Exchange Subscription Update für einen Termin erhalten (Serie) (IsSubscription = true)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie ist nicht mehr synchronisert (keine SyncItemId)|Aktion wird gelöscht||[CollaborationService] - Serie {0} is not synced anymore, ingoring subscription update
|Appointment wird nicht gefunden<br>Exception|Intervall erhöht|ExchangeManageException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment wird nicht gefunden|Aktion wird gelöscht||[CollaborationService] - Serie subscription update {0}, appointment not found, ingoring subscription update
|Es exisiteren mehr Appointments als Reservationen in Rooms|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Serie {0}, Subscription update, more appointments in exchange than in rooms appointment will be reset<br>[CollaborationService] - Validation Error occured during Sync but trying again: {0}
|Reservation muss Annulliert werden<br>--> Exception bei Annullierung|Intervall erhöht|CollaborationAktionHandler Exception|Exception	[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Reservation muss Annulliert werden<br>--> Validierungserror bei Annullierung|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Validation Error occured during Sync but trying again: {0}
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Exception bei Update|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Änderung eines Appointments kann nicht auf Reservation übernommen werden<br> --> Validierungserror bei Update|Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll<br>- ErrorMail wird versendet||[CollaborationService] - Validation Error occured during Sync but trying again: {0}

### Aktion für das Löschen eines Appointments nach Exchange, Serie/Reservation gelöscht/annulliert (IsDelete = true)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine SyncItemId oder AppointmentOid|Aktion wird gelöscht||[CollaborationService] - Cannot remove appointment, no syncitemid or appointmentoid
|Exception beim Löschen des Appointments|Intervall erhöht|ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Löschen des Appointments ist nicht erfolgreicht|Aktion wird gelöscht|| [CollaborationService] - Failed removing appointment on Exchange {0}

### Aktion für Update von Reservation/en nach Exchange, Vorbereitung
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Keine Reservation verknüpft|Aktion wird gelöscht|||
|Exception beim suchen der Reservation|Intervall erhöht|CollaborationAktionHandler Exception||[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Reservation kann nicht gefunden werden|Aktion wird gelöscht||[CollaborationService] - Reservation not found in Rooms: {0}
|Keine SyncItemId aber AppointmentOid gesetzt|Warten auf Backsync, intervall erhöht| Intervall 0-5 jede Minute, Intervall 6 - 48 alle 30 minuten|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|

### Aktion für Update von Reservation nach Exchange, neue Reservation (SyncItemId leer)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exchange Exception beim Erstellen von Appointment|Intervall erhöht|CollaborationAktionHandler ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Exception beim Erstellen von Appointment|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Exception beim speichern der Reservation (SyncItemId / AppointmentOid)|Appointment wird wieder gelöscht|CollaborationAktionHandler Exception|[CollaborationService] - Reservation: {0} could not be saved after creation on Exchange, removing Appointment<br>[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}

### Aktion für Update von Reservation nach Exchange, Reservation aktualisiert (SyncItemId nicht leer)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exchange Exception beim Finden von Appointment|Intervall erhöht|CollaborationAktionHandler ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment nicht gefunden|Bei intervall > 1 wird Sync deaktiviert, intervall erhöht|CollaborationAktionHandler ExchangeManager (DataProcessing)|[CollaborationService] - Appointment not found on Exchange for reservation: {0} 
|Appointment ist noch teil einer Serie (in Rooms nicht mehr) |Sync wird zurückgesetzt / Appointment wird gelöscht (Exception möglich) / Intervall erhöht|2x alle 5 Minuten|[CollaborationService] - Simple reservation in rooms is serie in Exchange, removing appointment re-sync reservation: {0}|
|Exchange Exception beim Speichern von Appointment|Intervall erhöht|CollaborationAktionHandler ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Exception beim Speichern von Appointment|Intervall erhöht|CollaborationAktionHandler Exception|[CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}

### Aktion für Update von Serie nach Exchange, neue Serie (SyncItemId leer)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|
|Exchange Exception beim Speichern von Appointment|Intervall erhöht|CollaborationAktionHandler ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment konnte nicht richtig erstellt werden|Intervall erhöht|CollaborationAktionHandler ExchangeManager (DataProcessing)|
[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}|
|Exception beim erstellen von Serie Appointments|Master Appointment wird wieder gelöscht|CollaborationAktionHandler ExchangeManager (DataProcessing)|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}|
|Einzelne Reservationen können nicht synchronisiert werden|Seriestatus wird auf Unsynchronisierbar gesetzt<br>Aktion wird gelöscht|[CollaborationService] - Serie {0}, sync is broken, reservations with no syncitemid: {1}, disabling sync 

### Aktion für Update von Serie nach Exchange, Serie aktualisiert (SyncItemId nicht leer)
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Serie mit unsychronisierbarem Status|Aktion wird gelöscht|
|Exchange Exception beim Finden von Appointment|Intervall erhöht|CollaborationAktionHandler ExchangeManagerException|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}
|Appointment nicht gefunden|Bei intervall > 1 wird Sync deaktiviert, intervall erhöht|CollaborationAktionHandler ExchangeManager (DataProcessing)|[CollaborationService] - Appointment not found on Exchange for serie: {0} 
|Appointment ist nicht SerieMaster |Sync wird zurückgesetzt / Appointment wird gelöscht (Exception möglich) / Intervall erhöht|2x alle 5 Minuten|[CollaborationService] - Simple reservation in rooms is serie in Exchange, removing appointment re-sync reservation: {0}|
|Appointment konnte nicht richtig erstellt werden|Intervall erhöht|CollaborationAktionHandler ExchangeManager (DataProcessing)|
[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}|
|Exception beim erstellen von Serie Appointments|Master Appointment wird wieder gelöscht|CollaborationAktionHandler ExchangeManager (DataProcessing)|[CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4}|
|Einzelne Reservationen können nicht synchronisiert werden|Seriestatus wird auf Unsynchronisierbar gesetzt<br>Aktion wird gelöscht|[CollaborationService] - Serie {0}, sync is broken, reservations with no syncitemid: {1}, disabling sync 

## Push subscription Dienst

Die einzige Aufgabe des Push subscription Dienstes ist es, auf Exchange eine Subscription erstellen/aktualisieren. Dabei wird die entsprechende URL z.B. http://rooms.example.com/Webservices/SyncNotification.svc mitgegeben.

Nach erfolgreicher Subscription sendet Exchange Subscription Updates nach Rooms.

### Neue Subscriptions erstellen/aktualisieren
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Subscription is keine Person/Ressource|Exception||[PushSubscriptionService] - Error while creating a subscription for an unkown entity: 
|Subscriber hat inzwischen SyncMode None|Sync wird deaktiviert||
|Exception beim erstellen des Push Subscription<br>--> ExchangeManagerException|In einer Minute wird erneut probiert||[PushSubscriptionService] - {0} {1}, subscription exchange error, ({2} - {3}) ({4} - {5}).
|Exception beim erstellen des Push Subscription<br>--> DB Timeout|Exception wird weitergeworfen||
|Exception beim erstellen des Push Subscribers<br>--> Exception|Sync wird deaktiviert||[PushSubscriptionService] - {0} {1}, subscription error, ({2} - {3}).
|Push subscription ist nicht erfolgreich|In einer Minute wird erneut probiert|| [PushSubscriptionService] - Subscription: {0} {1} is invalid: '{2}'.

### Well Known Folders aktualisieren (Deleted-Items )
|Möglicher Fehler|Resultat|Intervall|Logmeldung
|---|---|---|---|
|Exception beim Abonnieren der Folders|In einer Minute wird erneut probiert||[PushSubscriptionService] - DeletedItemsFolder Subscription for {0} {1}, failed, ({2} - {3})
|DB Timeout beim Abonnieren der Folders|Exception wird weitergeworfen||

### Sync deaktivieren (Subscription kann nicht aktualisiert werden)

Sync für die Person wird deaktiviert. (SyncMode auf None, Person erhält eine Mitteilung

## Sync Intervalle

### BackSyncIntervall
- 3x alle 5 Sekunden sofort wieder 
- 3x alle 30 Sekunden
- 3x alle 1 Stunde
- 3x alle 6 Stunden
- 2x alle 12 Stunden
- Nach ca. 47 Stunden wird Aktion gelöscht HandleSyncError aufgerufen

### CollaborationAktionHandler ExchangeManagerException handling
|Exchange Fehler|Intervall|
|---|---|
|DataProcessing, InternalError|3x Retry alle 5 Minuten|
|Connectivity|24x Retry alle 60 Minuten|
|Authentication, Authorization|8x Retry alle 120 Minuten|
|UserUnknown|4x Retry alle 360 Minuten|
|Alle anderen Exchange Fehler|3x Retry alle 3 Minuten|

### CollaborationAktionHandler Exception handling
- Intervall 0 --> Retry in 1 Minute
- Intervall 1 - 3 --> Retry nach alle 20 Minuten

## Testing

### Testen von verzögerter BackSycn

Um eine verzögerte BackSync zu simulieren kann folgender Gobaler Pararameter genutzt werden:

- System --> Globale Parameter --> 


