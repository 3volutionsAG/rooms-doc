---
title: "Exchange Online (EWS / legacy)"
linkTitle: "Exchange Online (legacy)"
weight: 3
description: "Einrichten der legacy Exchange-Online-Synchronisation über EWS (`O365`)."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Diese Seite gilt **nur** für den SyncModus `O365`.

- `O365` ist **kein** Graph-Modus, sondern weiterhin **EWS** über `https://outlook.office365.com/EWS/Exchange.asmx`
- für Graph-basierten Exchange-Online-Sync ist **`Microsoft365`** die passende Wahl
- im Personen-/Ressourcenprofil ist `O365` der passende legacy Modus für Exchange Online auf EWS-Basis
{{% /alert %}}

{{% alert color="info" title="Hinweis" %}}
Sie möchten den Graph-basierten Sync einrichten? Dann verwenden Sie die Seite [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}).
{{% /alert %}}

## Kurzüberblick

ROOMS unterstützt für Exchange Online weiterhin eine **EWS-basierte** Betriebsart über den SyncModus `O365`.

Technisch gehört `O365` zur gleichen Familie wie `EWS1` und `EWS2`:

- alle drei Modi arbeiten gegen eine **EWS `.asmx`-Schnittstelle**
- Unterschiede betreffen vor allem Zielsystem und Authentisierung

## Einstellungen in ROOMS

- Personen → Person → **SyncModus**: `O365`
- Ressourcen → Ressource → **SyncModus**: `O365`
- **Sync-URL**: `https://outlook.office365.com/EWS/Exchange.asmx`

## Mehrere M365-Tenants mit `DomainOverrides`

Für den EWS-basierten SyncModus `O365` unterstützt ROOMS **`DomainOverrides`**.

Damit können Sie abhängig von der **Mail-Domäne** der synchronisierten Mailbox unterschiedliche Credentials bzw. unterschiedliche M365-Tenants verwenden.

Beispiel:

- Standard-`O365`-Provider für `@contoso.com`
- Override für `@subsidiary.onmicrosoft.com`

Die Auswahl erfolgt anhand der Mailadresse der betroffenen Person oder Ressource:

- `user@subsidiary.onmicrosoft.com` → Override `subsidiary.onmicrosoft.com`

Damit können Sie in einem gemeinsamen ROOMS-Setup mehrere Exchange-Online-Tenants bedienen, solange der Sync weiterhin über **EWS / `O365`** läuft.

Die Konfiguration erfolgt in:

- `appsettings.json`
- `CalendarSync:Ews:Providers:O365:DomainOverrides`

Ein vollständiges Beispiel finden Sie unter [Konfigurationen]({{< relref "Betrieb/Synchronisation/Rooms/Konfigurationen/_index.md" >}}).

## App-Only (Impersonation)

Einrichtung der App-Only-Authentifizierung via Microsoft Entra ID mit EWS-Anwendungsrechten.

1. App in Microsoft Entra ID registrieren.
2. API-Berechtigung **Office 365 Exchange Online → `full_access_as_app`** vergeben.
3. Administratorzustimmung für die Organisation erteilen.
4. Secret oder Zertifikat konfigurieren.
5. ROOMS konfigurieren.

### ROOMS konfigurieren (`RoomsAppSettings.config`)

Geheimnis-basierte Anmeldung:

```xml
<RoomsAppSettings>
  <add key="ExchangeTenantId" value="xxx" />
  <add key="ExchangeAppId" value="xxx" />
  <add key="ExchangeClientSecret" value="xxx" />
</RoomsAppSettings>
```

Zertifikat-basierte Anmeldung:

```xml
<RoomsAppSettings>
  <add key="ExchangeTenantId" value="xxx" />
  <add key="ExchangeAppId" value="xxx" />
  <add key="ExchangeCertThumbprint" value="xxx" />
</RoomsAppSettings>
```

### Zertifikatsauthentisierung - was der Code tatsächlich macht

Die EWS-Implementierung für `O365` unterstützt Zertifikatsauthentisierung **im App-Only- / Impersonation-Modus**.

Code-verifiziert:

- das Zertifikat wird anhand des Thumbprints aus **`LocalMachine\My`** geladen
- ROOMS / der Windows-Dienst bzw. Worker-Prozess benötigt Zugriff auf den **privaten Schlüssel**
- wenn `UseImpersonation = false` (delegierter EWS-Modus), verwendet der Code **Benutzername/Passwort** und **nicht** das Zertifikat

Praktisch bedeutet das:

- **Zertifikat + `UseImpersonation = true`** → unterstützt
- **Zertifikat + `UseImpersonation = false`** → nicht der relevante Pfad; hier zählen `ExchangeServiceUser` + `ExchangeServicePassword`

### Zertifikatsauthentisierung einrichten

1. Zertifikat in **`LocalMachine\My`** auf dem Server importieren, auf dem der ROOMS-Prozess läuft.
2. Thumbprint ohne Tippfehler / Copy-Paste-Artefakte übernehmen.
3. In Microsoft Entra ID das Zertifikat bei der App-Registrierung hochladen.
4. In ROOMS den Thumbprint via `ExchangeCertThumbprint` konfigurieren.
5. Sicherstellen, dass der laufende Dienst / Worker Zugriff auf den **privaten Schlüssel** hat.

Typische Fehlerbilder:

- Zertifikat nicht im richtigen Store
- falscher Thumbprint
- privater Schlüssel fehlt oder ist für den Dienstaccount nicht lesbar
- Zertifikat nur lokal beim Admin importiert, nicht auf dem effektiven Laufzeitserver

{{% alert color="warning" title="Wichtig" %}}
Wenn Sie Zertifikatsauthentisierung für `O365` verwenden wollen, kombinieren Sie diese mit **AppOnly / Impersonation**. Für den delegierten EWS-Modus ist weiterhin der Service-User mit Passwort massgeblich.
{{% /alert %}}

### Zugriff auf bestimmte Postfächer begrenzen

Für bestehende Setups kann der Zugriff mit einer **Application Access Policy** eingeschränkt werden:

```powershell
Install-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName o365admin@rooms.myo365.site

New-DistributionGroup -Name "SyncIsAllowed" -Type "Security"
Add-DistributionGroupMember -Identity "SyncIsAllowed" -Member "DiegoS@rooms.myo365.site"

New-ApplicationAccessPolicy -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f `
  -PolicyScopeGroupId "SyncIsAllowed" `
  -AccessRight RestrictAccess `
  -Description "Restrict this app to members of distribution group SyncIsAllowed."
```

Überprüfen:

```powershell
Test-ApplicationAccessPolicy -Identity "DiegoS@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
Test-ApplicationAccessPolicy -Identity "AdeleV@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
```

{{% alert color="warning" title="Hinweis" %}}
Für Graph-basierte Exchange-Online-Setups empfiehlt Microsoft **Exchange Application RBAC** als moderneren Mailbox-Scoping-Mechanismus. Application Access Policies funktionieren weiterhin, sind aber eher eine Legacy-Option.
{{% /alert %}}

## Delegated Access

Delegated Access vergibt gezielte Ordnerberechtigungen pro Postfach. ROOMS agiert als Stellvertretung des Postfachbesitzers.

### Voraussetzungen und ROOMS-Konfiguration

- der Service-User **muss** ein eigenes Exchange-Postfach besitzen
- Delegation in `RoomsAppSettings.config` aktivieren:

```xml
<RoomsAppSettings>
  <add key="ExchangeUseImpersonation" value="false" />
</RoomsAppSettings>
```

### App in Microsoft Entra ID registrieren

- App-Registrierung anlegen
- öffentliche Clientflows zulassen
- delegierte Berechtigung **`EWS.AccessAsUser.All`** vergeben
- Administratorzustimmung erteilen

### ROOMS mit Benutzeranmeldeinformationen konfigurieren

```xml
<RoomsAppSettings>
  <add key="ExchangeTenantId" value="{GUID}" />
  <add key="ExchangeAppId" value="{GUID}" />
  <add key="ExchangeServiceUser" value="roomsdelegated@rooms.myo365.site" />
  <add key="ExchangeServicePassword" value="mySecretPassword" />
</RoomsAppSettings>
```

### Berechtigungen pro Postfach setzen

```powershell
Install-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName o365admin@rooms.myo365.site

Add-MailboxFolderPermission -Identity "DiegoS@rooms.myo365.site:\Calendar" `
  -User o365admin@rooms.myo365.site `
  -AccessRights Editor `
  -SharingPermissionFlags Delegate,CanViewPrivateItems

Add-MailboxFolderPermission -Identity "DiegoS@rooms.myo365.site:\Drafts" `
  -User o365admin@rooms.myo365.site `
  -AccessRights FolderVisible
```

Rechte-Überblick:

- `Editor`: `CreateItems`, `DeleteAllItems`, `DeleteOwnedItems`, `EditAllItems`, `EditOwnedItems`, `FolderVisible`, `ReadItems`
- `FolderVisible`: Ordner sichtbar, keine Leseberechtigung für Inhalte

## UX für Enduser

Der Enduser-Unterschied zwischen `O365` und `Microsoft365` ist wichtig:

- `O365` ist ein **legacy EWS-Modus**
- Benutzer sehen hier **keinen Graph Connect-/Disconnect-Flow**
- es gibt **keine** Graph-Consent-Maske im Benutzerprofil
- wenn Sie explizite Benutzer-Zustimmung, Graph-Consent-Status oder Graph-Webhooks brauchen, verwenden Sie **`Microsoft365`**

## Referenzen

- EWS OAuth App-Only: https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth
- Exchange Application RBAC: https://learn.microsoft.com/en-us/exchange/permissions-exo/application-rbac
- `CanViewPrivateItems`: https://learn.microsoft.com/en-us/troubleshoot/exchange/user-and-shared-mailboxes/private-items-not-display
