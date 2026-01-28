---
title: "Problembehandlung"
linkTitle: "Problembehandlung"
weight: 50
description: 'Problembehandlung bei der Exchange Synchronisation'
---

Diese Seite hilft Administratoren und Support, typische Synchronisationsprobleme schnell zu identifizieren und zu lösen. Nutzen Sie die Logmeldungen, um Einträge im ROOMS-Log zielgenau zu finden.

- [Finden von Reservationen mit Synchronisationsfehlern](#finden-von-reservationen-mit-synchronisationsfehlern)
- [Wie kommt es zu einem Konflikt](#wie-kommt-es-zu-einem-konflikt--fehlgeschlagener-synchronisation)
- [Definitionen](#definitionen)
- [BackSync-Dienst](#backsync-dienst)
- [Collaboration-Dienst](#collaboration-dienst)
- [Push-Subscription-Dienst](#push-subscription-dienst)
- [Sync Intervalle](#sync-intervalle)

## Leitfaden zur Fehlersuche

### Finden von Reservationen mit Synchronisationsfehlern

Unter Listen --> Buchungen können Buchungen gefunden werden, bei welchem die Synchronisation fehlgeschlagen hat.

- Buchungen mit Synchronisationsproblemen
- Serienbuchungen mit Synchronisationsproblemen

In diesem Fall annulliert man am Besten die Buchung und erstellt eine neue.

Mit der Option

- Buchungen mit fehlender Back-Synchronisation

findet man Buchungen, welche über das Addin in Outlook erstellt wurden, dann aber von Rooms nicht in Exchange gefunden wurden. Liegt das Erstelldatum der Buchung lange in der Vergangenheit, ist wohl die dazugehörige Outlook Buchung annulliert worden (bevor die Back-Synchronisation durgeführt wurde).

{{< imgproc buchungen_mit_sync_problemen Resize "200x" >}}{{< /imgproc >}}

### Warum kommt es zu Konflikten/fehlgeschlagenen Synchronisationen?

*Einzelbuchung*

Eine Einzelbuchung mit dem Status Unsynchronisierbar --> Reservation.Unsynchronisierbar = 1, erhält keine direkten Updates mehr von Exchange. Updates von Rooms werden aber weiterhin nach Exchange synchronisiert.

Eine Einzelbuchung wird unsynchronisierbar wenn eine Notifikation von Exchange, welche wichtige Änderungen vornimmt, 5x nacheinander nicht verarbeitet werden konnte. Diese Anzahl von Updates, bis die Sync deaktiviert wird, kann in den RoomsAppSettings konfiguriert werden:

```xml
	<!--Stop sync after continuous failed updates to a reservation-->
	<add key="StopSyncAfterFailedAttempts" value="5" />
```
Beispiel:
- Eine Reservation wird 5x nacheinander auf eine in dem Raum bereits besetzte Zeit verschoben.

*Serie*

Bei der Serie gibt es zwei verschiedene Konflikt Status: 

UnsynchronizableUnrecoverableRoomsChanges --> Serie.SyncStatus = 1
UnsynchronizableUnrecoverableRoomsChanges --> Serie.SyncStatus = 2

Tritt einer dieser Status auf, wird die Serie komplett nicht mehr synchronisiert. Zu diesem Status kann es kommen wenn von Rooms aus Änderungen gemacht wurden, die nicht mehr synchronisiert werden können. Oder wenn, wie bei den Einzelbuchungen, wichtige Änderungen von Exchange 5x nacheinander nicht übernommen werden konnten.

### Begriffe

- Appointment: Termin in Exchange/Outlook
- Reservation: Termin in Rooms

### Nicht unterstützte Aktionen in Outlook

{{% alert title="Warning" color="warning" %}}
- Aus einem mit Rooms synchronisierten Einzelappointment eine Serie erstellen --> Serie wird nicht erstellt in Rooms --> Beim nächsten Update der Reservation wird die Serie/Serieappoitments in Outlook entfernt
- Serie erweitern (mehr Appointments als Reservationen) --> Zusätzliche Appointments werden wieder gelöscht / Serieappointments werden zurückgesetzt
- Sofortiges Löschen des Appointmens nach der Erstellung --> Reservation bleibt bestehen
- Datum/Zeitanpassung auf Outlook auf einen Zeitpunkt, zu dem der Raum bereits besetzt ist oder das Buchen nicht erlaubt ist --> Appointment wird zurückgesetzt --> Serienappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Anpassen von Serie/Reservation, welche zurzeit in Rooms geöffnet ist --> Appointment wird zurückgesetzt --> Serienappointment bleibt aber ein Ausnahmetermin (Teilnehmer erhalten für diesen Termin ein extra Updatemail)
- Bei Serie: Jährliche oder Wiederholung ohne Enddatum --> Bei der Erstellung wird dies vom Addin unterbunden
{{% /alert %}}


## BackSync-Dienst

Der BackSync-Dienst wird aktiv, wenn über das Outlook-Add-in eine Reservation/Appointment erstellt wird. Er verknüpft die Reservation mit dem Appointment in Exchange.

Werden in der Zwischenzeit (zwischen erstellen des Termins und ausführen der Backsync) Änderungen am Termin vorgenommen, muss der Backsync Dienst dies abhandeln. Rooms ist dabei der Master. Dieses Verhalten kann mit der Konfiguration: "BackSync delay in minutes" getestet werden.

### Vorbereitung
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Keine Lizenzen | Abbruch | 5 Minuten | [BackSync] - Missing license |
| Person wird nicht gefunden | Aktion wird gelöscht |  |  |
| Person SyncMode auf None | Aktion wird gelöscht |  |  |
| Person Mailbox leer | Aktion wird gelöscht |  |  |
| Reservation ist in der Vergangenheit | Aktion wird gelöscht |  |  |
| Serie ist komplett in der Vergangenheit | Aktion wird gelöscht |  |  |
| Aktion keiner Reservation zugeteilt | Aktion wird gelöscht |  |  |
| Exception beim Suchen von Reservation | Intervall erhöht | BackSyncIntervall | [BackSync] - Error occured trying to find Reservation {0} |
| Reservation wird nicht gefunden | Aktion wird gelöscht |  | [BackSync] - Reservation {0} was not found in Rooms BackSync failed |
{{< /bootstrap-table >}}

### Aktion für BackSync einzelner Reservation
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Exception beim Durchführen der BackSync → Exchange Exception | Intervall erhöht | BackSyncIntervall | [BackSync] - Exchange Error occured while trying to find or save Appointment, related Reservation: {0}, Mailbox: {1} |
| Exception beim Durchführen der BackSync → DB Timeout | Service wird 5 Minuten gestoppt, beim 2. Mal wird Aktion gelöscht |  |  |
| Exception beim Durchführen der BackSync → Exception | Intervall erhöht | BackSyncIntervall | [BackSync] - Error occured during BackSync of Reservation: {0} |
| Appointment kann nicht gefunden werden | Intervall erhöht | BackSyncIntervall |  |
| Validation Errors beim Speichern der Reservation | Intervall erhöht | BackSyncIntervall | [BackSync] - Error occured while trying to change reservation {0}: {1} |
{{< /bootstrap-table >}}

### Aktion für BackSync, wenn Reservation Teil einer Serie ist
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Exception beim Durchführen der BackSync → Exchange Exception | Intervall erhöht | BackSyncIntervall | [BackSync] - Exchange Error occured while trying to find or save Appointment, related Serie: {0}, Mailbox: {1} |
| Exception beim Durchführen der BackSync → DB Timeout | Service wird 5 Minuten gestoppt, beim 2. Mal wird Aktion gelöscht |  |  |
| Exception beim Durchführen der BackSync → Exception | Intervall erhöht | BackSyncIntervall | [BackSync] - Error occured during BackSync of Serie: {0} |
| Master Appointment kann nicht gefunden werden | Intervall erhöht | BackSyncIntervall |  |
| Weniger Appointments als Reservationen vorhanden → Buchungen werden annulliert → Validation Error beim Annullieren |  |  | [BackSync] - Error occured while trying to cancle reservation {0}: {1} |
| Validation Errors beim Speichern von Reservation | Aktion wird gelöscht |  | [BackSync] - Error occured while trying to change reservation {0} in serie: {1}: {2} |
{{< /bootstrap-table >}}

## Collaboration-Dienst

Der Collaboration Dienst ist das Hauptstück der Synchronisation, er behandelt sowohl Subscription Updates von Exchange sowie auch Updates auf seiten Rooms.

### Vorbereitung
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Keine Lizenzen | Abbruch | 5 Minuten | [CollaborationService] - Missing license |
| Reservation ist in der Vergangenheit | Aktion wird gelöscht |  |  |
| Serie ist komplett in der Vergangenheit | Aktion wird gelöscht |  |  |
| Person wird nicht gefunden | Aktion wird gelöscht |  |  |
| Person SyncMode auf None | Aktion wird gelöscht |  |  |
| Person Mailbox leer | Aktion wird gelöscht |  |  |
{{< /bootstrap-table >}}

### Vorbereitung für Exchange Subscription Update (IsSubscription = true)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Keine Reservation verknüpft – Kommunikationsproblem mit Exchange beim Suchen von Appointment | Intervall erhöht | ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Keine Reservation verknüpft – Appointment wird in Exchange nicht gefunden | Aktion wird gelöscht |  |  |
| Keine Reservation verknüpft – Appointment besitzt keine Rooms Identifizierung (AppointmentOid) | Aktion wird gelöscht |  |  |
| Keine Reservation verknüpft – Reservation oder Serie wird über AppointmentOid nicht gefunden | Aktion wird gelöscht |  |  |
| Reservation verknüpft wird nicht gefunden | Aktion wird gelöscht |  | [CollaborationService] - Reservation {0} not found in rooms, subscription update will be removed |
| Bei IstSerieübernahme: Serie existiert nicht in Rooms | Aktion wird gelöscht |  |  |
| Bei IstSerieübernahme: Serie befindet sich in einem unsynchronisierbaren Status | Aktion wird gelöscht |  |  |
{{< /bootstrap-table >}}

### Exchange Subscription Update für das Löschen eines Termins (IsSubscription = true, IsDelete = true)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Reservation/Serie kann nicht annulliert werden | Sync-Error-Mail wird versendet → Aktion wird gelöscht |  | [CollaborationService] - Serie/Reservation {0} could not be cancled in rooms: {1} |
| Nach Annullation Reservation/Serie: Exception bei Reset der Sync | Aktion wird gelöscht |  | [CollaborationService] - Failed to reset SyncProperties of Serie/Reservation {0} |
{{< /bootstrap-table >}}

### Exchange Subscription Update erhalten (Einzelreservation) (IsSubscription = true)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Reservation ist nicht mehr synchronisiert (keine SyncItemId) | Aktion wird gelöscht |  | [CollaborationService] - Reservation {0} is not synced anymore, ingoring subscription update |
| Appointment wird nicht gefunden → Exception | Intervall erhöht | ExchangeManageException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Appointment wird nicht gefunden | Aktion wird gelöscht |  | [CollaborationService] - Reservation subscription update {0}, appointment not found, ingoring subscription update |
| Änderung von Appointment kann nicht auf Reservation übernommen werden → Exception bei Update | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Änderung von Appointment kann nicht auf Reservation übernommen werden | Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll → Error-Mail wird versendet |  | [CollaborationService] - Validation Error occured during Sync but trying again: {0} |
{{< /bootstrap-table >}}

### Exchange Subscription Update erhalten (Serie) (IsSubscription = true)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Serie ist nicht mehr synchronisiert (keine SyncItemId) | Aktion wird gelöscht |  | [CollaborationService] - Serie {0} is not synced anymore, ingoring subscription update |
| Appointment wird nicht gefunden → Exception | Intervall erhöht | ExchangeManageException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Appointment wird nicht gefunden | Aktion wird gelöscht |  | [CollaborationService] - Serie subscription update {0}, appointment not found, ingoring subscription update |
| Es existieren mehr Appointments als Reservationen in Rooms | Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll → Error-Mail wird versendet |  | [CollaborationService] - Serie {0}, Subscription update, more appointments in exchange than in rooms appointment will be reset; Validation Error occured during Sync but trying again: {0} |
| Reservation muss annulliert werden → Exception bei Annullierung | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Reservation muss annulliert werden → Validierungserror bei Annullierung | Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll → Error-Mail wird versendet |  | [CollaborationService] - Validation Error occured during Sync but trying again: {0} |
| Änderung eines Appointments kann nicht auf Reservation übernommen werden → Exception bei Update | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Änderung eines Appointments kann nicht auf Reservation übernommen werden → Validierungserror bei Update | Aktion wird umgeschrieben von Subscription auf Update mit MeetingRequestUpdateType = SendToAll → Error-Mail wird versendet |  | [CollaborationService] - Validation Error occured during Sync but trying again: {0} |
{{< /bootstrap-table >}}

### Aktion: Löschen eines Appointments auf Exchange (Serie/Reservation gelöscht/annulliert) (IsDelete = true)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Keine SyncItemId oder AppointmentOid | Aktion wird gelöscht |  | [CollaborationService] - Cannot remove appointment, no syncitemid or appointmentoid |
| Exception beim Löschen des Appointments | Intervall erhöht | ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Löschen des Appointments ist nicht erfolgreich | Aktion wird gelöscht |  | [CollaborationService] - Failed removing appointment on Exchange {0} |
{{< /bootstrap-table >}}

### Aktion: Update von Reservation/en nach Exchange – Vorbereitung
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Keine Reservation verknüpft | Aktion wird gelöscht |  |  |
| Exception beim Suchen der Reservation | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Reservation kann nicht gefunden werden | Aktion wird gelöscht |  | [CollaborationService] - Reservation not found in Rooms: {0} |
| Keine SyncItemId aber AppointmentOid gesetzt | Warten auf BackSync, Intervall erhöht | Intervall 0–5 jede Minute, Intervall 6–48 alle 30 Minuten |  |
| Serie mit unsynchronisierbarem Status | Aktion wird gelöscht |  |  |
{{< /bootstrap-table >}}

### Aktion: Update von Reservation nach Exchange – neue Reservation (SyncItemId leer)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Exchange Exception beim Erstellen von Appointment | Intervall erhöht | CollaborationAktionHandler ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Exception beim Erstellen von Appointment | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Exception beim Speichern der Reservation (SyncItemId / AppointmentOid) | Appointment wird wieder gelöscht | CollaborationAktionHandler Exception | [CollaborationService] - Reservation: {0} could not be saved after creation on Exchange, removing Appointment; Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
{{< /bootstrap-table >}}

### Aktion: Update von Reservation nach Exchange – Reservation aktualisiert (SyncItemId nicht leer)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Exchange Exception beim Finden von Appointment | Intervall erhöht | CollaborationAktionHandler ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Appointment nicht gefunden | Bei Intervall > 1 wird Sync deaktiviert, Intervall erhöht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Appointment not found on Exchange for reservation: {0} |
| Appointment ist noch Teil einer Serie (in Rooms nicht mehr) | Sync wird zurückgesetzt / Appointment wird gelöscht (Exception möglich) / Intervall erhöht | 2x alle 5 Minuten | [CollaborationService] - Simple reservation in rooms is serie in Exchange, removing appointment re-sync reservation: {0} |
| Exchange Exception beim Speichern von Appointment | Intervall erhöht | CollaborationAktionHandler ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Exception beim Speichern von Appointment | Intervall erhöht | CollaborationAktionHandler Exception | [CollaborationService] - Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
{{< /bootstrap-table >}}

### Aktion: Update von Serie nach Exchange – neue Serie (SyncItemId leer)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Serie mit unsynchronisierbarem Status | Aktion wird gelöscht |  |  |
| Exchange Exception beim Speichern von Appointment | Intervall erhöht | CollaborationAktionHandler ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Appointment konnte nicht richtig erstellt werden | Intervall erhöht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Exception beim Erstellen von Serie-Appointments | Master Appointment wird wieder gelöscht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Einzelne Reservationen können nicht synchronisiert werden | Seriestatus wird auf unsynchronisierbar gesetzt → Aktion wird gelöscht |  | [CollaborationService] - Serie {0}, sync is broken, reservations with no syncitemid: {1}, disabling sync |
{{< /bootstrap-table >}}

### Aktion: Update von Serie nach Exchange – Serie aktualisiert (SyncItemId nicht leer)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Serie mit unsynchronisierbarem Status | Aktion wird gelöscht |  |  |
| Exchange Exception beim Finden von Appointment | Intervall erhöht | CollaborationAktionHandler ExchangeManagerException | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Appointment nicht gefunden | Bei Intervall > 1 wird Sync deaktiviert, Intervall erhöht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Appointment not found on Exchange for serie: {0} |
| Appointment ist nicht SerieMaster | Sync wird zurückgesetzt / Appointment wird gelöscht (Exception möglich) / Intervall erhöht | 2x alle 5 Minuten | [CollaborationService] - Simple reservation in rooms is serie in Exchange, removing appointment re-sync reservation: {0} |
| Appointment konnte nicht richtig erstellt werden | Intervall erhöht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Exception beim Erstellen von Serie-Appointments | Master Appointment wird wieder gelöscht | CollaborationAktionHandler ExchangeManager (DataProcessing) | [CollaborationService] - Exchange Error trying to sync Reservation: {0}, IsSubscription: {1}, IsDelete: {2}, IsSerieUebernahme: {3}, Mailbox: {4} |
| Einzelne Reservationen können nicht synchronisiert werden | Seriestatus wird auf unsynchronisierbar gesetzt → Aktion wird gelöscht |  | [CollaborationService] - Serie {0}, sync is broken, reservations with no syncitemid: {1}, disabling sync |
{{< /bootstrap-table >}}

## Push-Subscription-Dienst

Die einzige Aufgabe des Push subscription Dienstes ist es, auf Exchange eine Subscription zu erstellen/aktualisieren. Dabei wird die entsprechende URL z.B. http://rooms.example.com/Webservices/SyncNotification.svc mitgegeben.

Nach erfolgreicher Subscription sendet Exchange Subscription Updates nach Rooms.

### Neue Subscriptions erstellen/aktualisieren
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Subscription ist keine Person/Ressource | Exception |  | [PushSubscriptionService] - Error while creating a subscription for an unkown entity: |
| Subscriber hat inzwischen SyncMode None | Sync wird deaktiviert |  |  |
| Exception beim Erstellen des Push Subscription → ExchangeManagerException | In einer Minute wird erneut probiert |  | [PushSubscriptionService] - {0} {1}, subscription exchange error, ({2} - {3}) ({4} - {5}). |
| Exception beim Erstellen des Push Subscription → DB Timeout | Exception wird weitergeworfen |  |  |
| Exception beim Erstellen des Push Subscribers → Exception | Sync wird deaktiviert |  | [PushSubscriptionService] - {0} {1}, subscription error, ({2} - {3}). |
| Push subscription ist nicht erfolgreich | In einer Minute wird erneut probiert |  | [PushSubscriptionService] - Subscription: {0} {1} is invalid: '{2}'. |
{{< /bootstrap-table >}}

### Well Known Folders aktualisieren (Deleted-Items)
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Möglicher Fehler | Resultat | Intervall | Logmeldung |
|---|---|---|---|
| Exception beim Abonnieren der Folders | In einer Minute wird erneut probiert |  | [PushSubscriptionService] - DeletedItemsFolder Subscription for {0} {1}, failed, ({2} - {3}) |
| DB Timeout beim Abonnieren der Folders | Exception wird weitergeworfen |  |  |
{{< /bootstrap-table >}}

### Sync deaktivieren (Subscription kann nicht aktualisiert werden)

Sync für die Person wird deaktiviert (SyncMode auf None, Person erhält eine Mitteilung).

## Sync-Intervalle

### BackSyncIntervall
- 3x alle 5 Sekunden sofort wieder 
- 3x alle 30 Sekunden
- 3x alle 1 Stunde
- 3x alle 6 Stunden
- 2x alle 12 Stunden
- Nach ca. 47 Stunden wird Aktion gelöscht, HandleSyncError aufgerufen

### CollaborationAktionHandler ExchangeManagerException handling
{{< bootstrap-table "table table-sm table-striped table-bordered" >}}
| Exchange Fehler | Intervall |
|---|---|
| DataProcessing, InternalError | 3x Retry alle 5 Minuten |
| Connectivity | 24x Retry alle 60 Minuten |
| Authentication, Authorization | 8x Retry alle 120 Minuten |
| UserUnknown | 4x Retry alle 360 Minuten |
| Alle anderen Exchange Fehler | 3x Retry alle 3 Minuten |
{{< /bootstrap-table >}}

### CollaborationAktionHandler Exception handling
- Intervall 0 → Retry in 1 Minute
- Intervall 1–3 → Retry alle 20 Minuten