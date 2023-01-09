---
title: "Exchange Ressource Sync"
linkTitle: "Exchange Ressource Sync"
weight: 50
description: Synchronisation von Exchange Ressourcen mit Rooms Ressourcen
---

Um die Ressourcen-Sync zu aktivieren, muss in einem ersten Schritt diese aktiviert werden:

Einstellungen --> System --> Globale Parameter

Exchange Ressource Sync enabled --> auf true setzten

In der StructureMap muss sichergestellt werden dass der folgende eintrag exisitert:

```xml
<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
```

Nun können die Ressourcen für die Synchronisation konfiguriert werden:

Einstellungen --> Ressourcen --> Edit

Relevant sind folgende Parameter:

*External Identifier*

muss auf die primäre SMTP Mail-Adresse der Exchange Ressource gesetzt werden

*Sync-Modus/Sync Url*

Entsprechender SyncModus/Url muss ausgewählt werden (siehe vorherige Kapitel)

Verfügbar ab Rooms 4.7.2211:

*Ist Sync-Master*

Gibt es eine Buchung von Exchange zu Rooms welche auf Rooms nicht gebucht werden kann (z.B. besteht zu dieser Zeit bereits eine Buchung oder eine Sperrzeit). So wird die Rooms buchung nicht erstellt, es wird ein Sync-Error Mail versendet und falls "Ist Sync-Master" aktiviert ist, so wird die Raumbuchung auf seiten Exchange entfernt, bzw. wird die Ressource als Teilnehmer bei dem Raum entfernt. Wenn "Ist Sync-Master" nicht gesetzt, so bleibt der Termin in Exchange bestehen und es wird nur eine Mail ausgelöst.

Ab Rooms 4.7.2211 ist die Ressourcen-Sync mit dem neuen Addin kompatibel. Jedoch dürfen ab 4.7.2211 die Ressourcen nicht mehr direkt auf dem Ressourcen Kalender gebucht werden.

# Nicht unterstützte Verhalten

*Vor-Nachlaufzeit

Achtung! Ist die RessourcenSync auf einer Ressource aktiviert kann die Vor/Nachlaufzeit nicht mehr verwendet werden. Bei allen Buchungen auf der Ressource wird die Vor/Nachlaufzeit 0 gesetzt.

*Termin mit mehreren Ressourcen erstellen*

Bei einem Outlook Termin darf immer nur eine Ressource hinzugefügt/eingeladen werden.

*Neues Addin: Ressource nicht einladen*

Wenn über das neue Addin eine synchronisierte Ressource gebucht wird, darf diese nicht zusätzlich als Teilnehmer hinzugefügt werden. Dies wird automatisch von der Synchronisation übernommen.

*Exchange Ressource direkt auf dem Kalender buchen*

Es ist nicht erlaubt auf der Exchange Ressource direkt einen Termin zu erstellen. Die Synchronisation funktioniert nur, wenn ein neues Appointment im Namen eines mit Rooms Synchronisierten Person erstellt wird und dort die Ressource hinzugefügt wird oder als Teilnehmer eingeladen wird.

Dieses Problem kann einfach umgangen werden indem den Usern keinen direkten Zugriff auf die Exchange Ressource Mailbox gewährt wird.







