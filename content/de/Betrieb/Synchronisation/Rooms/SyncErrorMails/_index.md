---
title: "Sync-Error Mails"
linkTitle: "Sync-Error Mails"
weight: 4 
description: Konfiguration des Sync-Error Mails
---

Über folgenden Pfad können die Sync-Error Mails konfiguriert werden:

Basisdaten für Ressourcen --> Standorte --> Standort auswählen --> Edit --> Notifikationen

Nun den Notifikationstyp "Synchronisation - Fehlermeldung" auswählen.

Hier ein Beispiel wie eine solche Mail aussehen kann:

```
Die ROOMS Buchung konnte mit Outlook nicht richtig synchronisiert werden und wurde möglicherweise zurückgesetzt.

[Reservation.Titel]
[Reservation.VorlaufbeginnDatum], [Reservation.VorlaufbeginnZeit] - [Reservation.NachlaufendeZeit]
Link zur ROOMS Buchung

Informationen zur fehlgeschlagenen Synchronisation:
[SynchronisationValidierung]
[Validierungsfehler]
[/SynchronisationValidierung]

[BetrifftGanzeSerie]
Dies betrifft eine Einzelbuchung einer Serie oder die gesamte Serie:
[SerieReservationen]
[Ressourcenbezeichnung] [Von Wochentag], [Von Datum/Zeit] [Bis Wochentag], [Bis Datum/Zeit]
[/SerieReservationen]
[/BetrifftGanzeSerie]
```

























