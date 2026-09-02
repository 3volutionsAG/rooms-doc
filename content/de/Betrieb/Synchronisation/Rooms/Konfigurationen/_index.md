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

Die Kalender-Synchronisation wird in der **`appsettings.json`** des IDP / `RoomsPro.Web` konfiguriert. Die Graph-Konfiguration muss zudem mit denselben Werten für `RoomsPro.Worker` bereitgestellt werden.

Der genaue Installationspfad hängt vom Deployment ab. Entscheidend ist die **deployte** Konfiguration der API- und Worker-Instanzen.

### Vollständiges Beispiel

```json
{
  "CalendarSync": {
    "Graph": {
      "AppId": "<entra-client-id>",
      "TenantId": "<entra-tenant-guid>",
      "AuthMode": "AppOnly",
      "ClientState": "<random-shared-secret-for-graph-webhooks>",
      "CallbackUrl": "https://idp.example.com",
      "ClientSecret": "<client-secret>",
      "DomainOverrides": {
        "subsidiary.onmicrosoft.com": {
          "TenantId": "<second-entra-tenant-guid>",
          "AppId": "<second-entra-client-id>",
          "ClientSecret": "<second-client-secret>"
        }
      }
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
- ersetzen Sie die Beispielwerte für `TenantId` durch die Verzeichnis-IDs Ihrer Tenants; Tenant-Domänen wie `contoso.onmicrosoft.com` sind hier nicht zulässig
- `CallbackUrl` ist die **Basis-URL** - **ohne** `/api/webhooks/graph`
- wenn `CallbackUrl` leer bleibt, verwendet ROOMS automatisch `IdpRootUrl`
- `ClientState` sollte ein ausreichend zufälliges Shared Secret sein
- für **`Delegated`** ist **`ClientSecret`** weiterhin erforderlich, weil der Consent-Flow darüber konfiguriert wird

Wichtig:

- die legacy Graph-Client-Erzeugung unterstützt Zertifikate
- die neuere RoomsPro-Graph-Infrastruktur unterstützt Zertifikate für **AppOnly- / Hintergrundoperationen**
- der interaktive **`Delegated`-Consent-Flow** verwendet weiterhin **`ClientSecret`**

### `DomainOverrides` für `Microsoft365` / Graph

Mit `CalendarSync:Graph:DomainOverrides` können app-basierte Graph-Zugriffe abhängig von der Mail-Domäne der synchronisierten Mailbox auf einen anderen Microsoft-365-Tenant und eine andere Entra-App umgeschaltet werden.

Der Schlüssel ist der Teil **nach dem `@`** der primären SMTP-Adresse:

- Mailbox: `user@subsidiary.onmicrosoft.com`
- Override-Schlüssel: `subsidiary.onmicrosoft.com`

Gross- und Kleinschreibung werden bei der Zuordnung nicht berücksichtigt, die Domäne muss aber vollständig übereinstimmen. Der Schlüssel enthält kein `@`; Wildcards und automatische Treffer für Subdomains werden nicht unterstützt. Für nicht zugeordnete Domänen verwendet ROOMS die Standardwerte unter `CalendarSync:Graph`.

Jeder Override ist ein **vollständiger Credential-Satz** und benötigt:

- `TenantId` als Verzeichnis-ID im GUID-Format, nicht als Tenant-Domäne
- `AppId`
- entweder `ClientSecret` oder `CertificateThumbprint`

Werte werden nicht einzeln aus der Standardkonfiguration geerbt. Jede Entra-App benötigt in ihrem Ziel-Tenant die erforderlichen Graph-Anwendungsberechtigungen und den Admin Consent.

Die Overrides gelten nur für app-basierte Zugriffe. Dazu gehören alle Zugriffe bei `AuthMode = AppOnly` sowie Ressourcenpostfächer in einer `Delegated`-Umgebung. Delegierter Personen-Consent und Refresh Tokens verwenden weiterhin die globale Graph-App. Auch `AuthMode`, `CallbackUrl` und `ClientState` bleiben global.

Stellen Sie die vollständige Graph-Konfiguration in **API und Worker** bereit. Bei einer Konfiguration über Umgebungsvariablen lautet ein Schlüssel beispielsweise `CalendarSync__Graph__DomainOverrides__subsidiary.onmicrosoft.com__TenantId`; `AppId`, `ClientSecret` und `CertificateThumbprint` folgen demselben Schema.

In Kubernetes kann dieser Schlüssel wegen der Punkte in der Domäne nicht als Name unter `env` verwendet werden. Stellen Sie die Domain-Overrides dort über eine eingebundene, dateibasierte .NET-Konfigurationsquelle bereit.

{{% alert color="warning" title="Bestehende Graph-Subscriptions" %}}
Die Konfigurationsänderung migriert bestehende Graph-Subscriptions nicht. Löschen Sie bestehende Subscriptions mit den ursprünglichen Credentials, bevor Sie Tenant, App oder Mail-Domäne ändern, und lassen Sie sie danach neu erstellen. Stellen Sie die unterstützenden API- und Worker-Versionen bereit, bevor Sie `DomainOverrides` aktivieren.
{{% /alert %}}

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

- `CalendarSync:Ews:Providers:O365:DomainOverrides` und `CalendarSync:Graph:DomainOverrides` sind getrennte Konfigurationen; ein EWS-Override gilt nicht für Graph
- für `EWS1` und `EWS2` gibt es keine entsprechende per-Mail-Domain-Umschaltung

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
