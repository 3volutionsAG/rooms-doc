---
title: "Synchronisationsdetails"
linkTitle: "Synchronisationsdetails"
weight: 60
description: "Details darüber, welche Daten in welche Richtung synchronisiert werden."
---

Die folgende Tabelle beschreibt die fachlichen Daten, die bei der Kalender-Synchronisation zwischen ROOMS und Exchange / Outlook synchronisiert werden.

Sie gilt grundsätzlich für:

- `EWS1`
- `EWS2`
- `O365`
- `Microsoft365`

{{< bootstrap-table "table table-striped" >}}
| ROOMS Bezeichnung | Exchange / Outlook Bezeichnung | ROOMS → Exchange | Exchange → ROOMS | Spezielle Bemerkungen |
|---|---|---|---|---|
| Titel | Subject | x | x | |
| Ressource / Raum | Location | x |  | |
| Organisator | Appointment-Ersteller | x | x | bestimmt die Mailbox, in welcher synchronisiert wird; in Exchange nicht änderbar |
| ExternalReminder | ReminderInMinutes | x | x | |
| Ist privat | Sensitivity / Privat | x | x | einzelne Serientermine direkt in Outlook anzupassen bleibt eingeschränkt |
| FreeBusy | FreeBusy | x | x | |
| Start | Start | x | x | |
| Ende | Ende | x | x | |
| Teilnehmer | Teilnehmer | x | x | |
| Serie | Serie | x | x | |
{{< /bootstrap-table >}}
