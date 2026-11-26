---
title: "Aktivieren der Services"
linkTitle: "Aktivieren der Services"
weight: 2
description: "Synchronisationsaufgaben im RoomsPro Worker konfigurieren und ihre Ausführung prüfen."
---

**RoomsPro.Worker** führt sowohl die konfigurierten Service-Sessions als auch die übrigen Hintergrundjobs aus. Betreiben Sie genau einen Worker pro Installation. Für Exchange- und Google-Synchronisations-Sessions ist eine gültige Collaboration-Lizenz erforderlich.

## Subscription-Management

Für die Subscription-Verwaltung und die nachfolgenden Hintergrundjobs ist keine manuelle `StructureMapXml`-Aktivierung nötig. Die zugehörigen Aufträge werden vom Produkt eingeplant.

### Hintergrundjobs für Synchronisation

- `EwsSubscriptionManagementJob`
- `EwsProvisionSubscriptionJob`
- `GraphSubscriptionProvisioningJob`
- `GraphSubscriptionRenewalJob`
- `DelegatedTokenRefreshJob`
- `SyncItemIdMigrationJob`
- `PrepareGraphToEwsBackSyncJob`

Zur Betriebsprüfung:

- prüfen, ob **`RoomsPro.Worker`** läuft
- [Dashboard für Hintergrundjobs]({{< relref "Betrieb/Hintergrundjobs/_index.md" >}}) unter **`/jobs`** an der RoomsPro.Web-Adresse öffnen. Dafür ist das globale Recht **Darf Konfiguration Datenimport verwalten** (ID 29) erforderlich.

## Service-Sessions konfigurieren

Die benötigten Sessions werden über die globale Konfiguration **StructureMapXml** festgelegt. Änderungen gehören in die Hand der für die Installation verantwortlichen Administration. Ergänzen Sie nur die benötigten Einträge in der bestehenden Konfiguration und ersetzen Sie diese nicht durch die folgenden Ausschnitte. Der Worker gleicht die konfigurierten Sessions jede Minute mit seiner Planung ab. Für die folgenden Sessions startet kein separater Windows-Dienst.

### `collaborationService`

Führt die klassische ausgehende Synchronisation aus:

```xml
<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
```

### `backSyncService`

Wird für klassische BackSync-Szenarien benötigt, insbesondere für Legacy-Add-In-Abläufe und bestimmte EWS-Ressourcen-Sync-Szenarien:

```xml
<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
```

### `syncTestService`

Wird für den klassischen Synchronisationstest benötigt:

```xml
<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```

## Ausführung prüfen

Öffnen Sie **Einstellungen → System → About**, Abschnitt **Services**, und prüfen Sie die erwarteten Aufgaben. Die [Betriebsanleitung für Hintergrundjobs]({{< relref "Betrieb/Hintergrundjobs/_index.md#services-auf-der-about-seite-prüfen" >}}) erklärt die benötigten Rechte, Zeitpläne, Zustände und Eingriffe.

Fehlt eine erwartete Session, prüfen Sie auch **ServiceSessionSchedulingJob** und dessen Fehlermeldung. Fehlende oder ungültige Konfigurationswerte können die Einrichtung verhindern. Eine Pause bleibt über einen Worker-Neustart erhalten. Setzen Sie eine benötigte Aufgabe gezielt mit **Resume** fort, statt den Worker vorsorglich neu zu starten.
