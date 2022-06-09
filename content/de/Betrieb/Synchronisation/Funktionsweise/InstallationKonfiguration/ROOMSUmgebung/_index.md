---
title: "ROOMS Umgebung"
linkTitle: "ROOMS Umgebung"
weight: 100
description: 
---
### Globale Konfiguration

Im Gegensatz zur restlichen Web Appplikation muss auf dem Unterverzeichnis &quot;WebServices&quot; anonyme Requests zugelassen werden. Dazu ist im IIS die entsprechende Einstellung zu setzen. _(Hinweis: Diese Einstellung wird auch so in der Installationsanleitung aufgeführt.)_

Damit der ROOMS Windows Service jegliche sync bezogenen Aktionen abarbeiten kann, müssen folgende Einträge zur Structuremap Konfiguration hinzugefügt werden.

```
<!--ServiceSessions - Exchange-Synchronisation-->
	<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="pushSubscriberService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PushSubscriberService.PushSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```

Zusätzlich muss überprüft werden, ob der Eintrag für die Root-URL korrekt hinterlegt wurde.
Diese URL wird verwenden, um den korrekten Pfad für die Push-Notifikationen zu generieren ( **Connection 3** ).

### Benutzer Konfiguration

Um die Synchronisation für einen Benutzer zu aktivieren müssen folgende Profileinstellungen getätigt werden.

{{< imgproc Benutzer_Konfiguration Resize "1024x" >}}{{< /imgproc >}}

**E-mail** : Primäre STMP Addresse für den entsprechenden Benutzer
**Sync. Mode** : Exchange Version auswählen
**Exchange20XX URL** : Die URL über welche die EWS ( **E** xchange **W** eb **S** ervices) aufgerufen werden können.
