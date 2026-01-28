---
title: "Konfigurationen"
linkTitle: "Konfigurationen"
weight: 5
description: "Konfigurationseinstellungen vornehmen"
---

Folgende Einstellungen in den Globalen Parameter sind relevant für die Synchronisation:

Einstellungen --> System --> Globale Parameter

Exchange Ressource Sync enabled --> Aktiviert/Deaktiviert die Exchange Ressourcen Sync. Siehe Kapitel Exchange Ressource Sync.

Exchange: Subscriptions intervall --> Gibt an in welchem Intervall alle Subscriptions erneuert werden sollen (in Minuten). Nur relevant für PushSubscriptions.

IDP Root-Url --> Basis-URL des IdP/RoomsPro Servers (u.a. für Exchange Push-Callback `/api/webhooks/exchange` und Reachability-Test `/healthz`).

In **RoomsAppSettings.config**, standardmässig unter

    ```
    C:\Program Files (x86)\3VOLUTIONS\ROOMS\Configuration
    ```

Können weitere Einstellungen gemacht werden:

```
<RoomsAppSettings>
...
    <add key="ExchangeSyncResolveDistributionGroups" value="true" />
...
</RoomsAppSettings>
```

Wenn diese Einstellung auf true ist, dann werden bei der Synchronisation von Exchange zu Rooms die Distribution Groups aufgelöst in die entsprechenden Teilnehmer. Dies ist relevant für das neue Addin, mit alten Addin ist es nicht erlaubt Distribution Groups einzuladen.

Weitere Push-Subscription relevante Konfigurationen (Callback-URL/Legacy-Rollback):

- `ExchangePushNotificationEndpointUrl` (Override absolute URL)
- `ExchangePushNotificationUseLegacyEndpoint` (Rollback auf `SyncNotification.svc`)

Details siehe: [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}).
