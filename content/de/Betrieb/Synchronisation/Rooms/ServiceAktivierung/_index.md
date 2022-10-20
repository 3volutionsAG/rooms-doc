---
title: "Aktivieren der Services"
linkTitle: "Aktivieren der Services"
weight: 2 
description: Aktivieren der für die Synchronisation benötigten Dienste
---

Über die Structure Map können die benötigten Services aktiviert werden:

System --> Globale Parameter --> StructureMapXml

Die CollaborationServiceSession muss in jedem fall aktiviert werden, dieser Service führt die Synchronisation aus:
```xml
<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
```

Einer oder beide der Services PullSubscriberService und PushSubscriberService müssen aktiviert werden. Mehr dazu in den Kapitel PushSubscription/PullSubscription.

```xml
<AddInstance Key="pushSubscriberServiceSession" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PushSubscriberService.PushSubscriberServiceSession,Garaio.Products.Rooms.Core" /> 
```
```xml
<AddInstance Key="pullSubscriberServiceSession" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
```

Der BodyBackSyncService wird benötigt um die Termine aus dem neuen Outlook Addin mit Rooms zu verbinden.
```xml
<AddInstance Key="bodyBackSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BodyBackSyncServiceSession,Garaio.Products.Rooms.Core"/>
```

Der BackSyncService wird benötigt um die Termine aus dem alten Outlook Addin mit Rooms zu verbinden. Zusätzlich wird dieser Service für die Exchange Ressource Sync benötigt.
```xml
<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
```

Um die Tests erfolgreich durchzuführen, muss noch folgender Dienst aktiviert werden:

```xml
<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```
