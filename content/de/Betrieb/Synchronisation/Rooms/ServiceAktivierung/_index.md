---
title: "Aktivieren der Services"
linkTitle: "Aktivieren der Services"
weight: 2
description: "Welche Synchronisationsaufgaben über die Hintergrundverarbeitung laufen und welche legacy Service Sessions noch relevant sind."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Die Dokumentation enthält historisch alte Service-Namen. Für produktive Setups gilt:

- **`bodyBackSyncService` existiert nicht mehr**
- **`pushSubscriberServiceSession` wird nicht mehr explizit aktiviert**
- Subscription-Management und mehrere Sync-Hintergrundjobs laufen über die **Hintergrundverarbeitung** und `RoomsPro.Worker`
{{% /alert %}}

## Architektur

Die Hintergrundverarbeitung läuft über:

- **`RoomsPro.Worker`**
- die integrierte Planung / Ausführung von Hintergrundjobs

Für bereits migrierte Jobs ist **keine** manuelle `StructureMapXml`-Aktivierung nötig.

### Über die Hintergrundverarbeitung laufende Jobs

- `EwsSubscriptionManagement`
- `ProvisionEwsSubscription`
- `GraphSubscriptionProvisioning`
- `GraphSubscriptionRenewal`
- `DelegatedTokenRefresh`
- `MigrateSyncItemIds`
- `PrepareGraphToEwsBackSync`

Zur Betriebsprüfung:

- prüfen, ob **`RoomsPro.Worker`** läuft
- Dashboard für Hintergrundjobs unter **`/tickerq`** öffnen

## Legacy Service Sessions

Falls Ihre Umgebung noch den klassischen Windows-Service- / StructureMap-Pfad verwendet, bleiben folgende Service Sessions relevant:

### `collaborationService`

Führt die klassische ausgehende Synchronisation aus:

```xml
<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
```

### `backSyncService`

Wird weiterhin für klassische BackSync-Szenarien benötigt, insbesondere für legacy Add-in-Flows und bestimmte EWS-Ressourcen-Sync-Szenarien:

```xml
<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
```

### `syncTestService`

Wird für den klassischen Synchronisationstest benötigt:

```xml
<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```

## Veraltete Einträge nicht mehr verwenden

Folgende Einträge sollen **nicht** mehr neu konfiguriert werden:

- `pushSubscriberServiceSession`
- `bodyBackSyncService`

Wenn solche Einträge nur noch in alten Projektdateien oder Alt-Dokumentationen auftauchen, betrachten Sie sie als **legacy**.
