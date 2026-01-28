---
title: "Personen konfigurieren"
linkTitle: "Personen konfigurieren"
weight: 3
description: 'Synchronisation auf den Personen aktivieren'
---

Die Synchronisation muss nun für jede gewünschte Person aktiviert werden, idealerweise wird dies über einen Benutzerdatenimport gesteuert.

Personen --> Edit

*SyncModus*

Muss entsprechend der ausgewählten Authentisierung Methode und Subscription art ausgewählt werden. (Siehe Kapitel ExchangeOnline/ExchangeOnPrem, PullSubscription/PushSubscription)

*Sync Url*

Muss auf die EWS Schnittstelle des Exchange Servers zeigen, bei O365 ist das: https://outlook.office365.com/EWS/Exchange.asmx

Unter Personen --> Edit --> Notifikationen 

"Outlook Sync" aktivieren bei den gewünschten Ressourcentypen.

### Zusätzliche Einstellungen

*Buchungen beim Anpassen der Synchronisationseinstellungen neu abgleichen*

Kann aktiviert werden, wenn Exchange Termine auf einen neuen Exchange Server migriert wurden und die Id's der Termine dabei geändert wurde. Bitte kontaktieren Sie uns bei so einem Fall vorher.

*Eigene Buchungen mit Kalender synchronisieren*

Grundsätzlich kann bei jeder Buchung in Rooms über eine Checkbox gewählt werden ob diese nun Synchronisiert werden soll oder nicht. Ist diese Einstellung aktiviert so ist diese Checkbox standardmässig aktiviert.

*Mail bei Synchronisationsfehler*

Dies sollte aktiviert werden, damit der Benutzer über Probleme mit der Synchronisation informiert wird. Verschiebt z.B. ein User einen Termin direkt in Outlook auf einen Zeitpunkt bei dem in Rooms bereits eine Buchung liegt, so wird dieser Termin zurückgesetzt und der User über dieses Mail informiert.

Siehe Kapitel Sync-Error Mails.