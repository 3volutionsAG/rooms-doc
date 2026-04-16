---
title: "Exchange On-Premises (EWS)"
linkTitle: "Exchange On-Premises"
weight: 4
description: "Einrichten der EWS-basierten Synchronisation mit Exchange On-Premises."
aliases:
  - /de/Betrieb/Synchronisation/ExchangeOnPrem/Impersonation/
  - /de/Betrieb/Synchronisation/ExchangeOnPrem/DelegatedAccess/
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
In ROOMS-Profilen werden **keine expliziten Exchange-Serverversionen** als SyncModus verwendet.

- für Exchange On-Premises verwenden Sie **`EWS1`** oder **`EWS2`**
- beide Modi sprechen dieselbe **EWS `.asmx`-Technologie** an
- die Serverversion steckt im Zielsystem und in der EWS-Konfiguration, nicht im Namen des SyncModus
{{% /alert %}}

{{% alert color="info" title="Hinweis" %}}
Sie verwenden Exchange On-Premises. Die Anleitung für Exchange Online finden Sie hier: [Exchange Online (EWS / legacy)]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}}).
{{% /alert %}}

## Kurzüberblick

ROOMS unterstützt für Exchange On-Premises eine **EWS-basierte** Synchronisation über zwei konfigurierbare Slots:

- `EWS1`
- `EWS2`

Beide Modi verwenden technisch die gleiche EWS-Schnittstelle. Die Wahl hängt davon ab, welcher Slot in Ihrer Umgebung mit welchen Zugangsdaten und welcher Exchange-URL belegt ist.

## Einstellungen in ROOMS

- Personen → Person → **SyncModus**: `EWS1` oder `EWS2`
- Ressourcen → Ressource → **SyncModus**: `EWS1` oder `EWS2`
- **Sync-URL**: zeigt auf die EWS-Schnittstelle, z. B. `https://exchange01.customer.com/EWS/Exchange.asmx`

## Impersonation

Impersonation erlaubt dem ROOMS Service-Account, im Kontext der EWS-Schnittstelle Aktionen im Namen beliebiger Benutzer-Postfächer auszuführen (kein Vollzugriff, nur EWS).

### Rechte vergeben (`ApplicationImpersonation`)

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

- Impersonation wirkt auf Ebene Server/Postfach, nicht auf einzelne Ordner oder Elemente
- Logs unterscheiden später nicht zwischen „echt“ und „impersoniert“
- der verwendete Account darf kein Exchange-Administrator sein

### Client Throttling Policies (empfohlen)

```powershell
New-ThrottlingPolicy NameDerPolicy -EWSMaxConcurrency $null -EWSMaxSubscriptions $null
Set-ThrottlingPolicyAssociation MeinServiceBenutzer -ThrottlingPolicy NameDerPolicy
```

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

### Verbindung zur Exchange Management Shell (Remote PowerShell)

```powershell
$UserCredential = Get-Credential
$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://<ExchangeServerFQDN>/PowerShell/ -Authentication Kerberos -Credential $UserCredential
Import-PSSession $Session -DisableNameChecking
Get-Mailbox | Select-Object -First 1
```

### Ordnerberechtigungen vergeben

```powershell
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

### Private Kalenderelemente sichtbar machen

`CanViewPrivateItems` kann On-Premises nicht per `Add-MailboxFolderPermission` gesetzt werden.

Es gibt zwei Wege, ROOMS den Zugriff auf private Termine zu ermöglichen:

1. Outlook (pro Postfach)
   - Datei → Kontoeinstellungen → Zugriffsrechte für Stellvertretungen
   - Stellvertretung: `roomsservice@sales.3v-rooms.ch` als Editor für Kalender
   - Option aktivieren: „Stellvertretungen können private Elemente sehen“

2. EWS-gestützt (automatisierbar)
   - per EWS-Delegation `ViewPrivateItems` setzen:

```powershell
Add-Type -Path "C:\Program Files\Microsoft\Exchange\Web Services\2.2\Microsoft.Exchange.WebServices.dll"
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

- Skript mit Anmeldeinformationen des Postfachbesitzers ausführen oder temporär `ApplicationImpersonation` für die Einrichtung nutzen
- Ordnerberechtigungen per `Add-MailboxFolderPermission` bleiben weiterhin erforderlich

## Referenzen

- Delegation via EWS (EWS Managed API): https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-add-and-remove-delegates-by-using-ews-in-exchange
- Impersonation konfigurieren: https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-configure-impersonation
