---
title: "Exchange Online (M365)"
linkTitle: "Exchange Online"
weight: 2
description: Einrichten von Synchronisation mit Exchange Online (M365)
---

{{% alert color="info" title="Hinweis" %}}
Sie verwenden Exchange Online. Die Anleitung für Exchange On-Premises finden Sie hier: [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}})
{{% /alert %}}

## Kurzüberblick

ROOMS unterstützt in Exchange Online zwei Betriebsarten:

- Impersonation (App-Only, über OAuth „full_access_as_app“)
- Delegated Access (Benutzerkontext, über OAuth „EWS.AccessAsUser.All“)

Beide Varianten können pro Deployment gewählt werden. Nachfolgend sind Voraussetzungen, ROOMS-Konfiguration und Einrichtungs-Schritte beschrieben.

## Einstellungen in ROOMS

- Personen → Person → SyncModus: `O365` oder `O365Pull`
- Sync-URL: `https://outlook.office365.com/EWS/Exchange.asmx` (voreingestellt)

## Impersonation (App-Only)

Einrichtung der App-Only-Authentifizierung via Azure AD mit Anwendungsberechtigungen.

1) App in Azure AD registrieren
- Azure AD → App-Registrierungen → Neue Registrierung → Name vergeben, unterstützte Kontotypen wählen
- Anwendungs-ID (Client-ID) notieren

2) API-Berechtigungen erteilen
- Office 365 Exchange Online → Anwendungsberechtigungen → `full_access_as_app`
- Administratorzustimmung für die Organisation erteilen

3) Geheimnis oder Zertifikat konfigurieren
- Variante Geheimnis: Zertifikate & Geheimnisse → Neuer geheimer Clientschlüssel → Wert sicher ablegen
- Variante Zertifikat: Zertifikat hochladen; Thumbprint notieren

4) ROOMS konfigurieren (RoomsAppSettings.config)

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

Hinweise:
- Der Windows-Dienst-Account von ROOMS benötigt Zugriff auf den privaten Schlüssel des Zertifikats. Bei „Keyset does not exist“ dem Dienst-Account Rechte auf den Private Key geben (z. B. via „Manage private key“).
- Weitere Details: `https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth`

## Zugriff begrenzen (Application Access Policy)

Mit Application Access Policies kann Impersonation auf bestimmte Postfächer begrenzt werden.

PowerShell vorbereiten:

```powershell
Install-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName o365admin@rooms.myo365.site
```

Sicherheitsgruppe erstellen und Benutzer hinzufügen (oder bestehende verwenden):

```powershell
New-DistributionGroup -Name "SyncIsAllowed" -Type "Security"
Add-DistributionGroupMember -Identity "SyncIsAllowed" -Member "DiegoS@rooms.myo365.site"
```

Policy erstellen (verwenden Sie Ihre AppId aus oben):

```powershell
New-ApplicationAccessPolicy -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f -PolicyScopeGroupId "SyncIsAllowed" -AccessRight RestrictAccess -Description "Restrict this app to members of distribution group SyncIsAllowed."
```

Überprüfen:

```powershell
Test-ApplicationAccessPolicy -Identity "DiegoS@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
Test-ApplicationAccessPolicy -Identity "AdeleV@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
```

Hinweis: Änderungen an Policies können bis zu 1 Stunde dauern. Alternativ zu `RestrictAccess` ist auch `DenyAccess` möglich.

## Delegated Access

Delegated Access vergibt gezielte Ordnerberechtigungen pro Postfach. ROOMS agiert als Stellvertretung des Postfachbesitzers.

### Voraussetzungen und ROOMS-Konfiguration

- Der Service-User `MUSS` ein eigenes Exchange-Postfach besitzen.
- Delegation aktivieren in `RoomsAppSettings.config`:

```xml
<RoomsAppSettings>
  <add key="ExchangeUseImpersonation" value="false" />
</RoomsAppSettings>
```

### App in Azure AD registrieren (Delegated Permissions)
- Azure AD → App-Registrierungen → Neue Registrierung → Name und Kontotypen wählen
- Authentifizierung → Erweiterte Einstellungen → Öffentliche Clientflows zulassen → Mobilgerät-/Desktopflows aktivieren: Ja
- API-Berechtigungen → Delegierte Berechtigungen → `EWS.AccessAsUser.All`
- Administratorzustimmung erteilen

### ROOMS mit Benutzeranmeldeinformationen konfigurieren:

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
# PowerShell vorbereiten:
Install-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName o365admin@rooms.myo365.site

# Berechtigungen setzen:
Add-MailboxFolderPermission -Identity "DiegoS@rooms.myo365.site:\\Calendar" -User o365admin@rooms.myo365.site -AccessRights Editor -SharingPermissionFlags Delegate,CanViewPrivateItems
Add-MailboxFolderPermission -Identity "DiegoS@rooms.myo365.site:\\Drafts" -User o365admin@rooms.myo365.site -AccessRights FolderVisible
```

Rechte-Überblick:
- `Editor`: `CreateItems`, `DeleteAllItems`, `DeleteOwnedItems`, `EditAllItems`, `EditOwnedItems`, `FolderVisible`, `ReadItems`
- `FolderVisible`: Ordner sichtbar, keine Leseberechtigung für Inhalte

{{% alert color="primary" title="Hinweise" %}}
- `CanViewPrivateItems` muss explizit gesetzt werden: https://learn.microsoft.com/en-us/troubleshoot/exchange/user-and-shared-mailboxes/private-items-not-display
- Zertifikat-Fehler „Keyset does not exist“ beheben: https://improveandrepeat.com/2018/12/how-to-fix-the-keyset-does-not-exist-cryptographicexception/
{{% /alert %}}

