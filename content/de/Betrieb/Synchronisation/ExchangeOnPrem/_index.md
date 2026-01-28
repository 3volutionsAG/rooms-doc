---
title: "Exchange On-Premises"
linkTitle: "Exchange On-Premises"
weight: 3
description: 'Einrichten von Synchronisation mit Exchange on-premise Server'
aliases:
  - /de/Betrieb/Synchronisation/ExchangeOnPrem/Impersonation/
  - /de/Betrieb/Synchronisation/ExchangeOnPrem/DelegatedAccess/
---

{{% alert color="info" title="Hinweis" %}}
Sie verwenden Exchange On-Premises. Die Anleitung für Exchange Online finden Sie hier: [Exchange Online]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}})
{{% /alert %}}

## Kurzüberblick

ROOMS unterstützt in Exchange On-Premises zwei Betriebsarten für den Zugriff auf Postfächer:

- Impersonation (EWS ApplicationImpersonation, server-/postfachweit)
- Delegated Access (Ordnerberechtigungen pro Postfach/Ordner)

Die Wahl hängt vom Sicherheits- und Berechtigungskonzept Ihrer Umgebung ab. Beide Varianten sind unten beschrieben.

## Einstellungen in ROOMS

- Personen → Person → SyncModus: `Exchange2010`, `Exchange2013`, `Exchange2016` oder `Exchange2016Pull`
- Sync-URL: zeigt auf die EWS-Schnittstelle, z. B.: `https://exchange01.customer.com/EWS/Exchange.asmx`

## Impersonation

Impersonation erlaubt dem ROOMS Service-Account, im Kontext der EWS-Schnittstelle Aktionen im Namen beliebiger Benutzer-Postfächer auszuführen (kein Vollzugriff, nur EWS).

### Rechte vergeben (ApplicationImpersonation)

Für alle Benutzer der Organisation:

```powershell
New-ManagementRoleAssignment -Name:NameDerBerechtigung -Role:ApplicationImpersonation -User:MeinServiceBenutzer
```

Optional: Scope auf eine definierte Benutzergruppe einschränken. Zuerst Scope erstellen, dann Zuweisung mit Scope setzen:

```powershell
New-ManagementScope -Name:NameDesScopes -RecipientRestrictionFilter:NameDesFilters
New-ManagementScope -Name "Executive Mailboxes" -RecipientRoot "roomspro.ch/Executives" -RecipientRestrictionFilter {RecipientType -eq "UserMailbox"}
New-ManagementRoleAssignment -Name:NameDerBerechtigung -Role:ApplicationImpersonation -User:MeinServiceBenutzer -CustomRecipientWriteScope:NameDesScopes
```

Falls die Zuweisung nach dem Erstellen deaktiviert ist:

```powershell
Set-ManagementRoleAssignment "NameDerBerechtigung" -Enabled $true
```

### Hinweise

- Impersonation wirkt auf Ebene Server/Postfach, nicht auf einzelne Ordner/Elemente.
- Logs unterscheiden später nicht zwischen „echt“ und „impersoniert“.
- Der verwendete Account darf kein Exchange-Administrator sein.

### Client Throttling Policies (empfohlen)

```powershell
New-ThrottlingPolicy NameDerPolicy -EWSMaxConcurrency $null -EWSMaxSubscriptions $null
Set-ThrottlingPolicyAssociation MeinServiceBenutzer -ThrottlingPolicy NameDerPolicy
```

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

### Verbindung zur Exchange Management Shell (Remote PowerShell)

```powershell
$UserCredential = Get-Credential
$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://<ExchangeServerFQDN>/PowerShell/ -Authentication Kerberos -Credential $UserCredential
Import-PSSession $Session -DisableNameChecking
Get-Mailbox | Select-Object -First 1
```

### Ordnerberechtigungen vergeben (On-Premises)

```powershell
# Kalender: Editor-Rechte für den ROOMS Service-User
Add-MailboxFolderPermission -Identity test.benutzer1@sales.3v-rooms.ch:\Calendar -User roomsservice@sales.3v-rooms.ch -AccessRights Editor
Add-MailboxFolderPermission -Identity "test.benutzer1@sales.3v-rooms.ch:\Drafts" -User roomsservice@sales.3v-rooms.ch -AccessRights FolderVisible
```

Rechte-Überblick:
- `Editor`: `CreateItems`, `DeleteAllItems`, `DeleteOwnedItems`, `EditAllItems`, `EditOwnedItems`, `FolderVisible`, `ReadItems`
- `FolderVisible`: Ordner sichtbar, ohne Leseberechtigung für Inhalte

Berechtigungen prüfen:

```powershell
Get-MailboxFolderPermission -Identity test.benutzer1@sales.3v-rooms.ch:\Calendar | Where-Object { $_.User -like "roomsservice*" }
```

### Private Kalenderelemente sichtbar machen (On-Premises)

`CanViewPrivateItems` kann On-Prem nicht per `Add-MailboxFolderPermission` gesetzt werden.

Es gibt zwei Wege, ROOMS den Zugriff auf private Termine zu ermöglichen:

1. Outlook (pro Postfach)
   - Datei → Kontoeinstellungen → Zugriffsrechte für Stellvertretungen
   - Stellvertretung: `roomsservice@sales.3v-rooms.ch` als Editor für Kalender
   - Option aktivieren: „Stellvertretungen können private Elemente sehen“

2. EWS-gestützt (automatisierbar)
   - Per EWS-Delegation `ViewPrivateItems` setzen (EWS Managed API):

```powershell
Add-Type -Path "C:\\Program Files\\Microsoft\\Exchange\\Web Services\\2.2\\Microsoft.Exchange.WebServices.dll"
$service = New-Object Microsoft.Exchange.WebServices.Data.ExchangeService([Microsoft.Exchange.WebServices.Data.ExchangeVersion]::Exchange2013_SP1)
$service.Credentials = New-Object System.Net.NetworkCredential("<admin_or_impersonation_user>", "<password>", "<domain>")
$service.Url = [Uri] "https://<exchange-fqdn>/EWS/Exchange.asmx"

$mailbox = "test.benutzer1@sales.3v-rooms.ch"
$delegate = New-Object Microsoft.Exchange.WebServices.Data.DelegateUser("roomsservice@sales.3v-rooms.ch")
$delegate.Permissions.CalendarFolderPermissionLevel = [Microsoft.Exchange.WebServices.Data.DelegateFolderPermissionLevel]::Editor
$delegate.ViewPrivateItems = $true

$null = $service.AddDelegates($mailbox, [Microsoft.Exchange.WebServices.Data.MeetingRequestsDeliveryScope]::NoForward, $delegate)
```

Hinweise:
- Skript mit Anmeldeinformationen des Postfachbesitzers ausführen ODER temporär `ApplicationImpersonation` für die Einrichtung nutzen
- Ordnerberechtigungen per `Add-MailboxFolderPermission` bleiben weiterhin erforderlich

{{% alert color="primary" title="Referenzen" %}}
> Exchange Online: `CanViewPrivateItems` per `SharingPermissionFlags`: https://learn.microsoft.com/en-us/troubleshoot/exchange/user-and-shared-mailboxes/private-items-not-display
>
> Exchange On-Premises: Delegation via EWS (EWS Managed API): https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-add-and-remove-delegates-by-using-ews-in-exchange
{{% /alert %}}
