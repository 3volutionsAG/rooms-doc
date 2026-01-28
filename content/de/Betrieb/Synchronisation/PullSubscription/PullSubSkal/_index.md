---
title: "Pull Subscription skalieren"
linkTitle: "Pull Subscription skalieren"
weight: 500
description: ''
---
Mit Rooms Release 4.7.2112 ist eine Skalierung des PullSubscription Services möglich.

Hinzufügen von zusätzlichen Services (Bsp: 4 Service worker):

```xml
<AddInstance Key="pullSubscriberServiceSession" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
<AddInstance Key="pullSubscriberServiceSession1" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
<AddInstance Key="pullSubscriberServiceSession2" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
<AddInstance Key="pullSubscriberServiceSession3" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
```

Nun können Personen und Ressourcen, welche mit Exchange Synchronisiert werden in sogenannte Priority Groups gesetzt werden. Welche dann Einfluss darauf haben, mit welcher Service Session die Pull-Synchronisation für diese Person/Ressource durchführt. (Im Beispiel 0-3)

Die Priority Group kann folgendermassen gesetzt werden:

Einstellungen --> Personen --> Edit

{{< imgproc Pull_subscription_priority_group Resize "1024x" >}}{{< /imgproc >}}

Dieselbe Einstellung kann bei den Ressourcen definiert werden.

Für jeden Service (im Beispiel 0-3) können eigene Konfigurationen definiert werden, siehe Pull Subscription konfigurieren.

Beispiel:

```xml
	<!--Intervall to wait after task is complete-->
	<add key="IntervallTaskInSeconds" value="0" />

	<!--Number of failed GetEvent calls at which point sync is disabled for this person/ressource-->
	<add key="FailedGetEventsTillDeactivate" value="20" />

	<!--Intervall to wait after task is complete-->
	<add key="IntervallTaskInSeconds1" value="60" />

	<!--Number of failed GetEvent calls at which point sync is disabled for this person/ressource-->
	<add key="FailedGetEventsTillDeactivate1" value="5" />

	<!--Intervall to wait after task is complete-->
	<add key="IntervallTaskInSeconds2" value="30" />

	<!--Intervall to wait after task is complete-->
	<add key="IntervallTaskInSeconds3" value="30" />

```

Hier ein Script um User auf eine bestimmte Anzahl von Priority Gruppen zuzuweisen:

```sql
  DECLARE @NumberOfServices INT;
  SET @NumberOfServices = 3

  UPDATE Person set PriorityGroup = Id % @NumberOfServices
```
