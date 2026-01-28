---
title: "Pull Subscription konfigurieren"
linkTitle: "Pull Subscription konfigurieren"
weight: 400
description: ''
---
Folgende Einstellungen können über RoomsAppSettings.config gemacht werden:

```xml
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
	<!--Completely disable logging for all pullsubscription services-->
	<add key="PullSubscriptionDisableAllLogging" value="true" />

	<!--Enable Extended Logging for all pullsubscription services-->
	<add key="PullSubscriptionEnableExtendedLogging" value="true" />
