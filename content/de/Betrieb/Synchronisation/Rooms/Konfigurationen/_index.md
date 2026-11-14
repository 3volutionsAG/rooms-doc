---
title: "Konfigurationen"
linkTitle: "Konfigurationen"
weight: 5
description: "Konfigurationseinstellungen für EWS- und Graph-basierte Kalender-Synchronisation."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Die Kalender-Synchronisation wird in der gemeinsamen **`appsettings.operator.json`** konfiguriert:

- **EWS-basierte Modi** (`EWS1`, `EWS2`, `O365`) nutzen `CalendarSync:Ews` sowie die benötigten Anwendungseinstellungen unter `Rooms`.
- **Graph-basierter Modus** (`Microsoft365`) nutzt `CalendarSync:Graph` und für app-basierte Kalenderzugriffe die passenden Zugangsdaten unter `Rooms`.

Stellen Sie die benötigten Werte identisch für ROOMS-Website, RoomsPro API und RoomsPro Worker bereit. Die [zentrale Konfigurationsanleitung]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}}) beschreibt Verteilung, Priorität der Quellen und Neustart.
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

## `appsettings.operator.json` - `CalendarSync`-Section

Ergänzen Sie die Section `CalendarSync` in der zentralen **`appsettings.operator.json`**, ohne die übrigen Abschnitte zu ersetzen.

Der genaue Installationspfad hängt vom Deployment ab. Alle drei Komponenten lesen die bereitgestellte Datei aus ihrem Verzeichnis `config`.

### Beispiel für `CalendarSync`

Dieses Beispiel zeigt den Abschnitt `CalendarSync`. Ergänzen Sie die passenden [Anwendungseinstellungen unter `Rooms`](#anwendungseinstellungen-unter-rooms) für die verwendeten SyncModi.

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

Stellen Sie die vollständige Graph-Konfiguration in **allen drei Komponenten** bereit. Bei einer Konfiguration über Umgebungsvariablen lautet ein Schlüssel beispielsweise `CalendarSync__Graph__DomainOverrides__subsidiary.onmicrosoft.com__TenantId`; `AppId`, `ClientSecret` und `CertificateThumbprint` folgen demselben Schema.

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

## Anwendungseinstellungen unter `Rooms`

Kalenderzugriffe der ROOMS-Anwendungslogik lesen zusätzlich Werte unter **`Rooms`** in derselben `appsettings.operator.json`. Die gemeinsame Datei ersetzt diese getrennten Schlüssel nicht durch eine automatische Zuordnung aus `CalendarSync`. Stimmen Sie die Zugangsdaten und den Authentisierungsmodus für beide Abschnitte ab.

{{< bootstrap-table "table table-striped" >}}
| SyncModus | Anwendungseinstellungen unter `Rooms` | Passender Bereich unter `CalendarSync` |
|---|---|---|
| `EWS1` | `Ews1ServiceUser`, `Ews1ServicePassword`, `Ews1ServiceDomain`, `Ews1UseImpersonation` | `Ews:Providers:Ews1`: `ServiceUser`, `ServicePassword`, `ServiceDomain`, `UseImpersonation` |
| `EWS2` | Entsprechende Schlüssel mit `Ews2` statt `Ews1` | `Ews:Providers:Ews2` |
| `O365` | `ExchangeTenantId`, `ExchangeAppId`, `ExchangeClientSecret` oder `ExchangeCertThumbprint`; bei Delegation zusätzlich `ExchangeServiceUser`, `ExchangeServicePassword`, `ExchangeUseImpersonation=false` | `Ews:Providers:O365`: `TenantId`, `AppId`, `ClientSecret` oder `CertificateThumbprint`; bei Delegation `ServiceUser`, `ServicePassword`, `UseImpersonation=false` |
| `Microsoft365`, app-basierter Zugriff | `Microsoft365TenantId`, `Microsoft365AppId`, `Microsoft365ClientSecret` oder `Microsoft365CertificateThumbprint` | `Graph`: `TenantId`, `AppId`, `ClientSecret` oder `CertificateThumbprint` |
{{< /bootstrap-table >}}

Beispiel für die app-basierten Graph-Zugangsdaten passend zum Standard-Tenant im obigen `CalendarSync`-Beispiel:

```json
{
  "Rooms": {
    "Microsoft365TenantId": "<entra-tenant-guid>",
    "Microsoft365AppId": "<entra-client-id>",
    "Microsoft365ClientSecret": "<client-secret>"
  }
}
```

Auch bei Graph-Ressourcenpostfächern in einer `Delegated`-Umgebung werden app-basierte Zugangsdaten benötigt. Für abweichende Mail-Domänen verwenden die Anwendungseinstellungen flache Schlüssel wie `Rooms:subsidiary.onmicrosoft.com_Microsoft365TenantId`; `Microsoft365AppId` und der Secret- oder Zertifikatsschlüssel folgen demselben Schema. Hinterlegen Sie dort einen vollständigen, zum `CalendarSync:Graph:DomainOverrides`-Eintrag passenden Satz. Für `O365` gilt dasselbe Domänenpräfix mit den `Exchange`-Schlüsseln. Ein `DomainOverrides`-Eintrag allein setzt diese `Rooms`-Werte nicht.

Der EWS-Webhook wird über `CalendarSync:Ews:Common:NotificationEndpointUrl` konfiguriert. Ohne diesen Wert verwendet ROOMS `IdpRootUrl + /api/webhooks/exchange`.

## Passende Detailseiten

- [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) - Graph-Rechte, `AppOnly` vs `Delegated`, UX
- [Exchange Online (EWS / legacy)]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}}) - `O365`
- [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}}) - `EWS1` / `EWS2`
- [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) - EWS-Webhooks
