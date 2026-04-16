---
title: "Microsoft 365 (Graph API)"
linkTitle: "Microsoft365 / Graph"
weight: 2
description: "Einrichten der Graph-basierten Kalender-Synchronisation mit SyncModus `Microsoft365`."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Prüfen Sie vor dem Setup:

- im Profil ist wirklich **`SyncModus = Microsoft365`** gesetzt und **nicht** `O365`
- die **E-Mail-Adresse** der Person oder Ressource entspricht der **primären SMTP-Adresse**
- `CalendarSync:Graph` ist vollständig konfiguriert
- die Basis-URL des IDP / `RoomsPro.Web` ist öffentlich erreichbar
- die Pfade **`/api/webhooks/graph`** und **`/api/webhooks/graph/lifecycle`** werden anonym per `POST` akzeptiert
- die **Hintergrundverarbeitung** läuft
{{% /alert %}}

## Kurzüberblick

Der SyncModus `Microsoft365` ist der **Graph-basierte** Kalender-Sync für Exchange Online / Microsoft 365.

Wichtig:

- `EWS1`, `EWS2` und `O365` sind weiterhin **EWS-basierte** Modi gegen eine `.asmx`-Schnittstelle
- `Microsoft365` ist ein **eigener Modus** mit **Microsoft Graph API**, Graph-Webhooks und separater `CalendarSync`-Konfiguration in `appsettings.json`

## EWS-Modi vs `Microsoft365`

{{< bootstrap-table "table table-striped" >}}
| Thema | `EWS1` / `EWS2` / `O365` | `Microsoft365` |
|-------|---------------------------|----------------|
| Grundtechnologie | Exchange Web Services (`.asmx`) | Microsoft Graph API |
| Sync-URL im Profil | erforderlich | nicht relevant |
| Webhook-Endpunkt | `/api/webhooks/exchange` | `/api/webhooks/graph` und `/api/webhooks/graph/lifecycle` |
| Hauptkonfiguration | `RoomsAppSettings.config` / EWS-Konfiguration | `appsettings.json` → `CalendarSync:Graph` |
| Typischer Einsatz | EWS-basierte Setups | Graph-basierte Exchange-Online-Setups |
{{< /bootstrap-table >}}

## `AppOnly` vs `Delegated`

{{< bootstrap-table "table table-striped" >}}
| Thema | `AppOnly` | `Delegated` |
|-------|-----------|-------------|
| Zugriff wird erteilt durch | Administrator zentral | Benutzer selbst oder Administrator, je nach Tenant-Richtlinie |
| Graph-Rechte | `Calendars.ReadWrite` (Application) | `Calendars.ReadWrite`, `User.Read` (Delegated) |
| Refresh Tokens | nicht relevant | `offline_access` wird im OAuth-Flow angefordert |
| UX für Enduser | kein Connect-/Disconnect-Flow, keine Consent-Maske | Connect-/Disconnect-Status sichtbar, Consent-Maske beim ersten Verbinden möglich |
| Start des Personensyncs | automatisch nach Provisionierung | erst nach erfolgreichem Consent |
| Ressourcen-Sync | app-basiert | ebenfalls app-basiert |
| Tokenhaltung | keine Benutzer-Refresh-Tokens | verschlüsselte Access-/Refresh-Tokens pro Person |
{{< /bootstrap-table >}}

{{% alert color="info" title="Wichtig" %}}
Der Unterschied `AppOnly` vs `Delegated` betrifft in der Praxis **vor allem Personen**.

**Ressourcen** laufen auch in einer `Delegated`-Umgebung weiterhin **app-basiert**, da es für ein Ressourcenpostfach keinen Enduser-Consent-Flow gibt.
{{% /alert %}}

## UX-Unterschied für Enduser

### `AppOnly`

- Benutzer sehen **keinen** Connect-/Disconnect-Button
- es erscheint **keine** Graph-Consent-Maske beim Login
- nach dem Setzen von `SyncModus = Microsoft365` läuft die Provisionierung im Hintergrund
- wenn Mailadresse, Rechte und Worker stimmen, startet der Sync ohne weiteren Benutzer-Schritt

### `Delegated`

- Benutzer sehen im Personenprofil einen **Connect-/Disconnect-Status**
- beim ersten Login oder nach dem Speichern der Person kann ROOMS den **Graph-Consent-Flow automatisch starten**
- ohne Consent wird für diese Person **keine** Graph-Subscription angelegt
- typische Status:
  - `None` - noch nicht verbunden
  - `Pending` - Zustimmung wurde angestossen, aber noch nicht abgeschlossen
  - `Granted` - verbunden, Sync darf laufen
  - `Revoked` - Verbindung wurde entzogen

## Microsoft Entra ID einrichten

### Variante A: `AppOnly`

1. **App registrieren**
   - Microsoft Entra ID → App-Registrierungen → Neue Registrierung
   - in den meisten Fällen ist **Single Tenant** die richtige Wahl
   - einen anderen Kontotyp nur wählen, wenn Ihr Entra- / Mandantenmodell das ausdrücklich erfordert
   - Client ID und Tenant ID notieren

2. **API-Berechtigungen**
   - Microsoft Graph → **Application permissions**
   - **`Calendars.ReadWrite`**
   - **Admin Consent** für die Organisation erteilen

3. **Secret oder Zertifikat**
   - entweder Client Secret erstellen
   - oder Zertifikat hinterlegen und Thumbprint notieren

4. **Optional: Mailboxzugriff einschränken**
   - empfohlen: **Exchange Application RBAC**
   - ältere Alternative: **Application Access Policy**

### Variante B: `Delegated`

1. **App registrieren**
   - Microsoft Entra ID → App-Registrierungen → Neue Registrierung
   - Client ID und Tenant ID notieren

2. **Redirect URI**
   - Typ `Web`
   - Redirect URI: `https://<idp-host>/signin-graph`

3. **API-Berechtigungen**
   - Microsoft Graph → **Delegated permissions**
   - **`Calendars.ReadWrite`**
   - **`User.Read`**

4. **Consent-Richtlinie prüfen**
   - wenn Benutzer-Consent im Tenant erlaubt ist, kann der Benutzer selbst zustimmen
   - in restriktiven Tenants muss ein Administrator die Zustimmung zentral erteilen oder den Consent-Workflow freigeben

5. **Refresh Token zulassen**
   - ROOMS fordert im OAuth-Flow zusätzlich **`offline_access`** an
   - dadurch kann ROOMS Benutzer-Tokens im Hintergrund erneuern
6. **Wichtig für den Consent-Flow**
   - der interaktive `GraphConsent`-Flow verwendet weiterhin **`ClientSecret`**
   - für `Delegated` sollte daher `ClientSecret` konfiguriert sein, auch wenn Sie Zertifikate für andere Graph-Pfade verwenden

## ROOMS konfigurieren

Die Graph-Konfiguration liegt in der **`appsettings.json`** des IDP / `RoomsPro.Web` unter `CalendarSync:Graph`.

### Erforderliche Schlüssel

{{< bootstrap-table "table table-striped" >}}
| Schlüssel | Bedeutung |
|-----------|-----------|
| `AppId` | Client ID der Entra-App |
| `TenantId` | Tenant ID |
| `AuthMode` | `AppOnly` oder `Delegated` |
| `ClientState` | gemeinsames Secret zur Validierung eingehender Graph-Webhooks |
| `CallbackUrl` | optionale Override-Basis-URL für Graph-Webhooks |
| `ClientSecret` | Secret für Graph-Authentisierung und den Delegated-Consent-Flow |
| `CertificateThumbprint` | Zertifikat für AppOnly- / Hintergrundpfade |
{{< /bootstrap-table >}}

Hinweise:

- `CallbackUrl` ist **optional**
- wenn `CallbackUrl` leer bleibt, verwendet ROOMS automatisch die `IdpRootUrl`
- `CallbackUrl` ist die **Basis-URL**, **ohne** `/api/webhooks/graph`
- `AppOnly`-Pfad für Subscription- / Management-Operationen unterstützt **Client Secret oder Zertifikat**
- `Delegated` benötigt für den interaktiven Consent-Flow weiterhin **`ClientSecret`**
- eine per-Mail-Domain-Umschaltung wie `DomainOverrides` gibt es für Graph **nicht**

### Wichtige Limitationen der Graph-Implementierung

Anders als beim EWS-basierten Provider `O365` kennt die Graph-Konfiguration **keine** per-Mail-Domain-Overrides.

Das bedeutet:

- `CalendarSync:Graph` verwendet immer **eine gemeinsame Graph-Konfiguration**
- es gibt **keine** tenant- oder credential-spezifische Umschaltung auf Basis der Mail-Domäne
- mehrere unterschiedliche M365-Tenants lassen sich mit dem Graph-Sync **nicht** analog zu `O365:DomainOverrides` pro Mail-Domäne aufteilen

### Zertifikatsauthentisierung: genauer Support-Umfang

Die Codebasis enthält **zwei** Graph-Pfade:

- ein Graph-Client-/Session-Pfad in der legacy ROOMS-Logik
- die neuere RoomsPro-Graph-Infrastruktur für Subscription-Provisionierung, Renewal und weitere Verwaltungsoperationen

Code-verifiziert gilt:

- die **legacy Graph-Client-Erzeugung** unterstützt **Client Secret oder Zertifikat**
- die **RoomsPro-Graph-Infrastruktur** unterstützt für **AppOnly- / Hintergrundoperationen** ebenfalls **Client Secret oder Zertifikat**
- der interaktive **`Delegated`-Consent-Flow** verwendet weiterhin **`ClientSecret`**

Praktische Folge:

- für **`AppOnly`** kann Graph mit **Client Secret oder Zertifikat** betrieben werden
- für **`Delegated`** sollten Sie weiterhin **`ClientSecret`** einplanen, weil der Consent-Flow davon abhängt

Ein vollständiges Beispiel für die komplette `CalendarSync`-Section finden Sie unter [Konfigurationen]({{< relref "Betrieb/Synchronisation/Rooms/Konfigurationen/_index.md" >}}).

## Personen und Ressourcen in ROOMS konfigurieren

### Personen

- **SyncModus**: `Microsoft365`
- **E-Mail**: primäre SMTP-Adresse
- **Sync-URL**: nicht relevant
- **Sync deaktiviert**: darf nicht aktiv sein, wenn automatisch provisioniert werden soll

`Delegated`-Umgebungen:

- Benutzer verbinden den Kalender einmalig
- der Consent-Status ist im Personenprofil sichtbar
- nach `Granted` wird die Person-Subscription automatisch provisioniert

`AppOnly`-Umgebungen:

- kein Benutzer-Consent nötig
- die Person-Subscription wird im Hintergrund angelegt

### Ressourcen

- **SyncModus**: `Microsoft365`
- **E-Mail**: primäre SMTP-Adresse der Ressourcenmailbox
- **Sync-URL**: nicht relevant

Ressourcen werden bei `Microsoft365` immer **app-basiert** verarbeitet.

## Webhooks veröffentlichen

Für `Microsoft365` müssen folgende Endpunkte erreichbar sein:

- `https://<basis-url>/api/webhooks/graph`
- `https://<basis-url>/api/webhooks/graph/lifecycle`

Empfehlungen:

- gültiges öffentliches TLS-Zertifikat
- keine Pre-Authentication vor den Webhooks
- anonyme `POST`-Requests zulassen
- wenn möglich Zugriff via Reverse Proxy absichern

## Hintergrundverarbeitung

Der Graph-Sync nutzt einen separaten **Hintergrundverarbeitungsdienst**.

Wichtige Jobs:

- `GraphSubscriptionProvisioning`
- `GraphSubscriptionRenewal`
- `DelegatedTokenRefresh`
- `MigrateSyncItemIds`
- `PrepareGraphToEwsBackSync`

Es ist **keine** manuelle `StructureMapXml`-Aktivierung für Graph-Subscription-Management nötig.

Zur Betriebsprüfung:

- `RoomsPro.Worker` muss laufen
- Dashboard für Hintergrundjobs unter `/tickerq` prüfen

## Was passiert im Hintergrund?

- für Personen und Ressourcen werden **Graph-Subscriptions** angelegt
- Graph sendet Änderungen an den Webhook
- Lifecycle-Webhooks lösen Erneuerungen / Re-Authorisierung aus
- bei der ersten Person-Subscription werden bestehende EWS-`SyncItemId`s in Graph-IDs migriert
- beim Rückwechsel von `Microsoft365` auf EWS wird eine Vorbereitung **Graph → EWS** eingeplant

## Hilfreiche Links

- [Konfigurationen]({{< relref "Betrieb/Synchronisation/Rooms/Konfigurationen/_index.md" >}}) - vollständiges `CalendarSync`-Beispiel
- [Personen konfigurieren]({{< relref "Betrieb/Synchronisation/Rooms/SyncAufPersonAktivieren/_index.md" >}}) - Profile sauber setzen
- [Aktivieren der Services]({{< relref "Betrieb/Synchronisation/Rooms/ServiceAktivierung/_index.md" >}}) - Hintergrundverarbeitung und legacy Sessions
- [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}) - Fehlersuche im Betrieb

## Referenzen

- Graph permissions reference: https://learn.microsoft.com/en-us/graph/permissions-reference
- Change notifications overview: https://learn.microsoft.com/en-us/graph/change-notifications-overview
- Exchange Application RBAC: https://learn.microsoft.com/en-us/exchange/permissions-exo/application-rbac
