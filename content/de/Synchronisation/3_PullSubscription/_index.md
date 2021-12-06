---
title: "Pull Subscription"
linkTitle: "Pull Subscription"
weight: 30

description: >
   <p style="text-align: justify">Pull Synchronisation einrichten</p>
---

{{< imgproc Pull_Subscription_Overview Resize "1024x" >}}{{< /imgproc >}}

## Aktivieren des Pull-Subscription Dienstes

Der Dienst kann über die Structure Map aktiviert werden:

```
<AddInstance Key="pullSubscriberServiceSession" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PullSubscriberService.PullSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
```

Weiterhin vorhanden sein muss:

```
	<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
```
Um die Tests erfolgreicht durchzuführen muss noch folgender Dienst aktiviert werden:

```
	<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```

## Pull Subscription für eine Person einrichten

Um die Subscription für eine Person zu aktivieren muss in den Einstellungen der Person der SyncMode auf Exchange2016Pull (basic Auth) oder O365Pull (OAuth 2.0) gesetzt werden.

{{< imgproc pull_subscription_aktivieren Resize "1024x" >}}{{< /imgproc >}}

Folgende Scripts können helfen Personen auf Pullsubscription zu migrieren:

```
			UPDATE Person
                SET SettingsXml.modify('replace value of (//PersonSettings/SyncMode/text())[1] with "Exchange2016Pull"')
            WHERE SettingsXml IS NOT NULL 
            AND person.id in (select id from person where IstImportiert = 1)

         UPDATE Person
                SET SettingsXml.modify('insert <SyncMode>Exchange2016Pull</SyncMode> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<SyncMode>'
		            AND person.id in (select id from person where IstImportiert = 1)  

		 UPDATE Person
                SET SettingsXml.modify('insert <Exchange2016PullSyncUrl>https://some-url/EWS/Exchange.asmx</Exchange2016PullSyncUrl> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<Exchange2016PullSyncUrl>'
		            AND person.id in (select id from person where IstImportiert = 1)

```

```
			UPDATE Person
                SET SettingsXml.modify('replace value of (//PersonSettings/SyncMode/text())[1] with "O365Pull"')
            WHERE SettingsXml IS NOT NULL 
            AND person.id in (select id from person where IstImportiert = 1)

         UPDATE Person
                SET SettingsXml.modify('insert <SyncMode>O365Pull</SyncMode> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<SyncMode>'
		            AND person.id in (select id from person where IstImportiert = 1)   

		 UPDATE Person
                SET SettingsXml.modify('insert <O365PullSyncUrl>https://outlook.office365.com/EWS/Exchange.asmx</O365PullSyncUrl> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<O365PullSyncUrl>'
		            AND person.id in (select id from person where IstImportiert = 1)
```

## Basic auth oder O365 einrichten

### Basic Auth
SyncMode: Exchange2016Pull

RoomsAppSettings.config

```
	<add key="Exchange2016ServiceUser" value="user@domain" />
	<add key="Exchange2016ServicePassword" value="xxx" />
```

### OAuth 2.0
SyncMode: O365Pull

RoomsAppSettings.config

```
	<add key="ExchangeTenantId" value="xxx" />
	<add key="ExchangeAppId" value="xxx" />
	<add key="ExchangeClientSecret" value="xxx" />
```

## Pull Subscription konfigurieren

Folgende Einstellungen können über RoomsAppSettings.config gemacht werden:

```
	<!---->
	<!--Pull Subscription configuration settings-->
	<!---->

	<!--Size of the batches at which the subscriptions getevents are polled.-->
	<add key="BatchGetEventsSize" value="100" />

	<!--Amount to sleep between batches of getevent calls. Default is zero, thus next batch is immediately processed.-->
	<add key="BatchGetEventsSleepBetweenBatchesInMiliseconds" value="0" />

	<!--Timeout for the GetEvents call-->
	<add key="BatchGetEventsTimeoutInMiliseconds" value="100000" />

	<!--Size of the batches that we generating pull subscriptions. E.g. Create subscription for 100 persons at once.-->
	<add key="BatchSubscribeSize" value="100" />

	<!--Timeout for the Subscribe call-->
	<add key="BatchSubscribeTimeoutInMiliseconds" value="10000" />

	<!--Number of failed GetEvent calls at which point sync is disabled for this person/ressource-->
	<add key="FailedGetEventsTillDeactivate" value="10" />

	<!--Number of failed Subscribe calls at which point sync is disabled for this person/ressource-->
	<add key="FailedSubscribeTillDeactivate" value="10" />

	<!--Intervall at which to check for new subscriptions or resubscriptions-->
	<add key="IntervallSubscribeInMinutes" value="20" />

	<!--Intervall to wait after task is complete-->
	<add key="IntervallTaskInSeconds" value="30" />

	<!--An OAuth 2.0 token is valid for 1H, per default we renew it 20 mins before expiration.-->
	<add key="OAuthTokenMinutesBeforeRenew" value="20" />

	<!--Subscription Timeout, the timeout is reset with every GetEvents() call. Defaults to 1 Day.-->
	<add key="SubscriptionTimeoutInMinutes" value="720" />
```


