---
title: "Konfigurationen"
linkTitle: "Konfigurationen"
weight: 5
description: "Konfigurationseinstellungen für EWS- und Graph-basierte Kalender-Synchronisation."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für die Kalender-Synchronisation gibt es **zwei Konfigurationswelten**:

- **EWS-basierte Modi** (`EWS1`, `EWS2`, `O365`) nutzen primär EWS-/Legacy-Konfiguration
- **Graph-basierter Modus** (`Microsoft365`) nutzt die **`CalendarSync`**-Section in `appsettings.json`

Die Graph-Konfiguration gehört **nicht** in `RoomsAppSettings.config`.
{{% /alert %}}

## Relevante globale Parameter

Unter **Einstellungen → System → Globale Parameter** sind insbesondere folgende Werte relevant:

{{< bootstrap-table "table table-striped" >}}
| Parameter | Bedeutung |
|-----------|-----------|
| `Exchange Ressource Sync enabled` | aktiviert / deaktiviert die Exchange-Ressourcen-Synchronisation |
| `Exchange: Subscriptions intervall` | legacy / EWS-bezogene Subscription-Erneuerung |
| `IDP Root-Url` | Basis-URL des IDP / `RoomsPro.Web`; relevant für Webhook-Callbacks und Health-Checks |
{{< /bootstrap-table >}}

## `appsettings.json` - `CalendarSync`-Section

Die Kalender-Synchronisation wird in der **`appsettings.json`** des IDP / `RoomsPro.Web` konfiguriert.

Der genaue Installationspfad hängt vom Deployment ab. Entscheidend ist die **deployte** `appsettings.json` der `RoomsPro.Web`-Instanz.

### Vollständiges Beispiel

```json
{
  "CalendarSync": {
    "Graph": {
      "AppId": "<entra-client-id>",
      "TenantId": "<entra-tenant-id>",
      "AuthMode": "AppOnly",
      "ClientState": "<random-shared-secret-for-graph-webhooks>",
      "CallbackUrl": "https://idp.example.com",
      "ClientSecret": "<client-secret>",
      "CertificateThumbprint": "<thumbprint-optional-for-apponly>"
    },
    "Ews": {
      "Common": {
        "NotificationEndpointUrl": "https://idp.example.com/api/webhooks/exchange",
        "RenewalThresholdMinutes": 40,
        "StatusFrequencyMinutes": 30
      },
      "Providers": {
        "Ews1": {
          "EwsUrl": "https://exchange01.example.com/EWS/Exchange.asmx",
          "ServiceUser": "roomsservice",
          "ServicePassword": "<password>",
          "ServiceDomain": "EXAMPLE"
        },
        "Ews2": {
          "EwsUrl": "https://exchange02.example.com/EWS/Exchange.asmx",
          "ServiceUser": "roomsservice2",
          "ServicePassword": "<password>",
          "ServiceDomain": "EXAMPLE"
        },
        "O365": {
          "EwsUrl": "https://outlook.office365.com/EWS/Exchange.asmx",
          "TenantId": "<entra-tenant-id>",
          "AppId": "<entra-client-id>",
          "ClientSecret": "<client-secret>",
          "UseImpersonation": true,
          "DomainOverrides": {
            "subsidiary.onmicrosoft.com": {
              "TenantId": "<second-tenant-id>",
              "AppId": "<second-app-id>",
              "ClientSecret": "<second-client-secret>",
              "UseImpersonation": false,
              "ServiceUser": "delegationservice@subsidiary.onmicrosoft.com",
              "ServicePassword": "<delegation-password>"
            }
          }
        }
      }
    }
  }
}
```

### Hinweise zur Graph-Konfiguration

- `AuthMode` ist entweder `AppOnly` oder `Delegated`
- für **`AppOnly`** unterstützen die Graph-Hintergrundpfade **`ClientSecret` oder `CertificateThumbprint`**
- `CallbackUrl` ist die **Basis-URL** - **ohne** `/api/webhooks/graph`
- wenn `CallbackUrl` leer bleibt, verwendet ROOMS automatisch `IdpRootUrl`
- `ClientState` sollte ein ausreichend zufälliges Shared Secret sein
- für **`Delegated`** ist **`ClientSecret`** weiterhin erforderlich, weil der Consent-Flow darüber konfiguriert wird

Wichtig:

- die legacy Graph-Client-Erzeugung unterstützt Zertifikate
- die neuere RoomsPro-Graph-Infrastruktur unterstützt Zertifikate für **AppOnly- / Hintergrundoperationen**
- der interaktive **`Delegated`-Consent-Flow** verwendet weiterhin **`ClientSecret`**

### Hinweise zur EWS-Konfiguration

- `Ews1`, `Ews2` und `O365` entsprechen den gleichnamigen SyncModi in Personen- und Ressourcenprofilen
- `NotificationEndpointUrl` ist **nur** für EWS-Webhooks relevant
- `O365` bleibt ein **EWS-basierter** Exchange-Online-Modus

### `DomainOverrides` für `O365`

Für den Provider **`O365`** können Sie optional **`DomainOverrides`** definieren.

Damit lässt sich abhängig von der **Mail-Domäne** der synchronisierten Mailbox auf **andere M365-Tenants bzw. andere Credentials** umschalten.

Der Code verwendet dafür den Teil **nach dem `@`** der Mailadresse, z. B.:

- Mailbox `user@subsidiary.onmicrosoft.com`
- Override-Key `subsidiary.onmicrosoft.com`

Wenn ein passender Override vorhanden ist, verwendet ROOMS für diese Mailbox die dort hinterlegten Werte anstelle der Standardwerte des `O365`-Providers.

Überschrieben werden können:

- `TenantId`
- `AppId`
- `ClientSecret`
- `CertificateThumbprint`
- `ServiceUser`
- `ServicePassword`
- `UseImpersonation`

Typischer Einsatz:

- mehrere Exchange-Online-Tenants
- unterschiedliche Tochtergesellschaften / Domänen
- gemischte Setups aus AppOnly und Delegated innerhalb des `O365`-Providers

Wichtig:

- `DomainOverrides` gibt es **nur** für `CalendarSync:Ews:Providers:O365`
- für `EWS1` und `EWS2` gibt es keine entsprechende per-Mail-Domain-Umschaltung
- für **`Microsoft365` / Graph** gibt es diese Funktion **derzeit nicht**

## `RoomsAppSettings.config` - legacy / Kompatibilitätswerte

Die Datei **`RoomsAppSettings.config`** bleibt für legacy oder kompatibilitätsbezogene Einstellungen relevant.

Beispiel:

```xml
<RoomsAppSettings>
  <add key="ExchangeSyncResolveDistributionGroups" value="true" />
</RoomsAppSettings>
```

Wenn dieser Wert `true` ist, werden Distribution Groups bei der Synchronisation von Exchange nach ROOMS in die entsprechenden Teilnehmer aufgelöst.

Weitere EWS-/Legacy-spezifische Overrides:

- `ExchangePushNotificationEndpointUrl` - absolute Override-URL für EWS-Webhooks
- `ExchangePushNotificationUseLegacyEndpoint` - Rollback auf `SyncNotification.svc`

Diese beiden Werte gelten **nicht** für `Microsoft365` / Graph.

## Passende Detailseiten

- [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) - Graph-Rechte, `AppOnly` vs `Delegated`, UX
- [Exchange Online (EWS / legacy)]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}}) - `O365`
- [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}}) - `EWS1` / `EWS2`
- [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) - EWS-Webhooks
