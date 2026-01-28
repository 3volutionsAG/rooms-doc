---
title: "Exchange Ressource Sync"
linkTitle: "Exchange Ressource Sync"
weight: 50
description: 'Synchronisation von Exchange Ressourcen mit ROOMS Ressourcen'
---
## Konfiguration 
Um die Exchange Ressourcen Synchronisation zu aktivieren müssen folgende Konfigurationswerte gesetzt werden:

### Global

- `Einstellungen` --> `System` --> `Globale Parameter` --> `Exchange Ressource Sync enabled` --> auf `true` setzten
- `Einstellungen` --> `System` --> `Globale Parameter` --> `StructureMapXml`
  In der StructureMapXml muss sichergestellt werden dass der folgende eintrag exisitert:
   ```xml
   <AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
   ```

### Ressource
Nun können die individuellen Ressourcen für die Synchronisation konfiguriert werden:

- `Einstellungen` --> `Ressourcen` --> `Edit`

Relevant sind folgende Parameter:

#### E-Mail

Die E-Mail muss auf die primäre SMTP Mail-Adresse der Exchange Ressource gesetzt werden.

#### Sync-Modus/Sync Url

Entsprechender SyncModus und Url muss ausgewählt werden

#### Ist Sync-Master

Falls eine Buchung in Exchange nicht für Rooms verfügbar ist, beispielsweise aufgrund einer bereits bestehenden Buchung oder einer Sperrzeit, wird die Rooms-Buchung nicht erstellt. Stattdessen wird eine E-Mail mit einem Synchronisationsfehler versendet. Wenn die Option "Ist Sync-Master" aktiviert ist, wird die Raumbuchung auch auf der Exchange-Seite entfernt bzw. der Teilnehmer wird aus Rooms Buchung entfernt. Wenn "Ist Sync-Master" nicht aktiviert ist, bleibt der Termin in Exchange bestehen und es wird lediglich eine E-Mail ausgelöst.

Ab Rooms `4.7.2211` ist die Ressourcen Synchronisation mit dem Addin kompatibel. Jedoch dürfen die Ressourcen nicht direkt im Outlook-Kalender gebucht werden sondern muss via Teilnehmer eingeladen werden.

## Limitationen

{{% alert title="Vor- und Nachlaufzeiten" color="warning" %}}
Ist die RessourcenSync auf einer Ressource aktiviert, können Vor- und Nachlaufzeiten nicht mehr verwendet werden. Bei allen Buchungen der Ressource werden die Vor- und Nachlaufzeiten auf **0** gesetzt.
{{% /alert %}}

Da Exchange Ressourcen das Konzept der Vor- und Nachlaufzeiten nicht unterstützen passt sich der Funktionsumfang der ROOMS Ressource entpsrechend an.

#### Termin mit mehreren Ressourcen erstellen

Bei einem Outlook Termin darf immer nur eine Ressource hinzugefügt/eingeladen werden.

#### Neues Addin: Ressource nicht einladen

Wenn über das neue Addin eine synchronisierte Ressource gebucht wird, darf diese nicht zusätzlich als Teilnehmer hinzugefügt werden. Diese wird automatisch im Synchronisationsprozess hinzugefügt.

#### Exchange Ressource direkt im Outlook-Kalender buchen

Es ist nicht erlaubt auf der Exchange Ressource direkt einen Termin zu erstellen. Die Synchronisation funktioniert nur, wenn ein neues Appointment im Namen eines mit Rooms Synchronisierten Person erstellt wird und dort die Ressource hinzugefügt wird oder als Teilnehmer eingeladen wird.

Es wird empfohlen den Benutzenden kein direkter Zugriff auf die Exchange Ressourcen Mailboxen zu gewähren.
