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

```
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







