---
title: "Exchange Ressource Sync"
linkTitle: "Exchange Ressource Sync"
weight: 50
description: Synchronisation von Exchange Ressourcen mit Rooms Ressourcen
---
## Konfiguration 
### Global
Um die Exchange Ressourcen Synchronisation zu aktivieren, muss diese in einem ersten Schritt aktiviert werden:

- `Einstellungen` --> `System` --> `Globale Parameter` --> `Exchange Ressource Sync enabled` --> auf `true` setzten
- In der StructureMap muss sichergestellt werden dass der folgende eintrag exisitert:
   ```xml
   <AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
   ```


### Ressource
Nun können die individuellen Ressourcen für die Synchronisation konfiguriert werden:

- `Einstellungen` --> `Ressourcen` --> `Edit`

Relevant sind folgende Parameter:

#### External Identifier & E-Mail

Die E-Mail und der External Identifier muss auf die primäre SMTP Mail-Adresse der Exchange Ressource gesetzt werden

#### Sync-Modus/Sync Url

Entsprechender SyncModus und Url muss ausgewählt werden (siehe vorherige Kapitel)

#### Ist Sync-Master

Falls eine Buchung in Exchange nicht für Rooms verfügbar ist, beispielsweise aufgrund einer bereits bestehenden Buchung oder einer Sperrzeit, wird die Rooms-Buchung nicht erstellt. Stattdessen wird eine E-Mail mit einem Synchronisationsfehler versendet. Wenn die Option "Ist Sync-Master" aktiviert ist, wird die Raumbuchung auch auf der Exchange-Seite entfernt bzw. der Teilnehmer wird aus Rooms Buchung entfernt. Wenn "Ist Sync-Master" nicht aktiviert ist, bleibt der Termin in Exchange bestehen und es wird lediglich eine E-Mail ausgelöst.

Ab Rooms `4.7.2211` ist die Ressourcen Synchronisation mit dem Addin kompatibel. Jedoch dürfen die Ressourcen nicht direkt auf im Ressourcen Kalender gebucht werden.

## Nicht unterstützte Verhalten

### Vor-Nachlaufzeit

Achtung! Ist die RessourcenSync auf einer Ressource aktiviert kann die Vor/Nachlaufzeit nicht mehr verwendet werden. Bei allen Buchungen auf der Ressource wird die Vor/Nachlaufzeit 0 gesetzt.

#### Termin mit mehreren Ressourcen erstellen

Bei einem Outlook Termin darf immer nur eine Ressource hinzugefügt/eingeladen werden.

#### Neues Addin: Ressource nicht einladen

Wenn über das neue Addin eine synchronisierte Ressource gebucht wird, darf diese nicht zusätzlich als Teilnehmer hinzugefügt werden. Dies wird automatisch von der Synchronisation übernommen.

#### Exchange Ressource direkt auf dem Kalender buchen

Es ist nicht erlaubt auf der Exchange Ressource direkt einen Termin zu erstellen. Die Synchronisation funktioniert nur, wenn ein neues Appointment im Namen eines mit Rooms Synchronisierten Person erstellt wird und dort die Ressource hinzugefügt wird oder als Teilnehmer eingeladen wird.

Dieses Problem kann einfach umgangen werden indem den Usern keinen direkten Zugriff auf die Exchange Ressource Mailbox gewährt wird.







