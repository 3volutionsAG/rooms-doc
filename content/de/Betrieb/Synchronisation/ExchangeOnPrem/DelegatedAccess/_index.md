---
title: "Delegated Access"
linkTitle: "Delegated Access"
weight: 2 
description: Einrichten von Synchronisation mit Delegated Access
---
Mit dem Delegated access kann ROOMS auf einige oder alle Ordner des Postfachbesitzers zugreifen und im Auftrag des Postfachbesitzers agieren. Durch delegated Access können die Berechtigungen für den ROOMS Service User feiner granuliert werden. Somit ist es möglich dem Service User nur Berechtigungen auf einzelnen Exchange Folders zu geben wie bspw: 

- Kalender
- Tasks
- Posteingang
- Kontakte
- Gelöschte Elemente

Wenn ein Benutzer delegated access auf einen oder mehrere dieser Ordner hat, kann er Elemente in diesem Ordner abhängig der erteilten Berechtigungen verwalten.

### Berechtigungen

ROOMS benötigt zwingend `Editor` Rechte im Ordner Kalender.

- `Editor`: Ein Editor (Stellvertreter) kann alles tun, was ein Autor kann und ausserdem die Elemente ändern und löschen, die der Postfachbesitzer erstellt hat.
- `Autor`: Ein Stellvertreter kann Elemente lesen und erstellen sowie erstellte Elemente ändern und löschen.

## Konfiguration ROOMS

Folgender Konfigurationseinträge im RoomsAppSettings.config muss ergänzt werden:

RoomsAppSettings.config

```xml
<RoomsAppSettings>
	<add key="ExchangeUseImpersonation" value="false" />
</RoomsAppSettings>
```
Ansonsten ist die Konfiguration analog ROOMS Konfiguration vorzunehmen.

*Delgated User*

Wichtig: Der ServiceUser (im obigen Beispiel delegationservice@sales.3v-rooms.ch) muss zwingend ein Postfach in Exchange besitzen. Ein reiner Service user wie er bei der Impersonation eingesetzt werden kann, reicht nicht aus.

### Vergabe des Editor Rechts für den delegated User via Exchange Management Shell

Damit delegated Access via Powershell eingerichtet werden kann, werden die aktuellsten Exchange Cmdlets benötigt. Um zu überprüfen ob eine aktuelle Version installiert kann folgender Befehl abgesetzt werden: 

```powershell
$UserCredential = Get-Credential
# Create a remote PowerShell session to the Exchange server:
$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://<ExchangeServerFQDN>/PowerShell/ -Authentication Kerberos -Credential $UserCredential
Import-PSSession $Session -DisableNameChecking
# You can now run Exchange cmdlets within this session. For example:
Get-Mailbox
```

```powershell
# Exchange On-Premises: SharingPermissionFlags sind nicht verfügbar
Add-MailboxFolderPermission -Identity test.benutzer1@sales.3v-rooms.ch:\Calendar -User roomsservice@sales.3v-rooms.ch -AccessRights Editor
Add-MailboxFolderPermission -Identity "test.benutzer1@sales.3v-rooms.ch:\Drafts" -User roomsservice@sales.3v-rooms.ch -AccessRights FolderVisible
```

Die `Editor` Rolle beinhaltet folgende Rechte: `CreateItems`, `DeleteAllItems`, `DeleteOwnedItems`, `EditAllItems`, `EditOwnedItems`, `FolderVisible`, `ReadItems`

Das `FolderVisible` Recht erlaubt es dem Delegated-Benutzer den angegebenen Ordner zu sehen, aber keine Elemente im angegebenen Ordner zu lesen oder bearbeiten.


### Private Elemente sichtbar machen (On-Premises)

In Exchange On-Premises kann das Flag `CanViewPrivateItems` nicht über `Add-MailboxFolderPermission` gesetzt werden (der Parameter `-SharingPermissionFlags` ist nur in Exchange Online verfügbar).

Um ROOMS den Zugriff auf private Kalendereinträge zu ermöglichen, stehen folgende Wege zur Verfügung:

1. Outlook (pro Postfach)
   - Als Postfachbesitzer in Outlook: Datei → Kontoeinstellungen → Zugriffsrechte für Stellvertretungen.
   - Stellvertreter hinzufügen/öffnen: `roomsservice@sales.3v-rooms.ch`.
   - Berechtigungen: Kalender = Editor.
   - Option aktivieren: „Stellvertretungen können private Elemente sehen“.

2. EWS-basiert (automatisierbar)
   - Über EWS-Delegation kann die Eigenschaft `ViewPrivateItems` gesetzt werden. Dies kann mit dem EWS Managed API erfolgen. Beispiel:

```powershell
Add-Type -Path "C:\\Program Files\\Microsoft\\Exchange\\Web Services\\2.2\\Microsoft.Exchange.WebServices.dll"
$service = New-Object Microsoft.Exchange.WebServices.Data.ExchangeService([Microsoft.Exchange.WebServices.Data.ExchangeVersion]::Exchange2013_SP1)
$service.Credentials = New-Object System.Net.NetworkCredential("<admin_or_impersonation_user>", "<password>", "<domain>")
$service.Url = [Uri] "https://<exchange-fqdn>/EWS/Exchange.asmx"

$mailbox = "test.benutzer1@sales.3v-rooms.ch"
$delegate = New-Object Microsoft.Exchange.WebServices.Data.DelegateUser("roomsservice@sales.3v-rooms.ch")
$delegate.Permissions.CalendarFolderPermissionLevel = [Microsoft.Exchange.WebServices.Data.DelegateFolderPermissionLevel]::Editor
$delegate.ViewPrivateItems = $true

# MeetingRequestsDeliveryScope kann nach Bedarf angepasst werden
$null = $service.AddDelegates($mailbox, [Microsoft.Exchange.WebServices.Data.MeetingRequestsDeliveryScope]::NoForward, $delegate)
```

Hinweise:
- Für das Setzen per EWS muss das Skript entweder mit den Anmeldeinformationen des Postfachbesitzers laufen oder dem verwendeten Konto wurde die Rolle `ApplicationImpersonation` gewährt (nur zur Einrichtung empfohlen).
- Die oben gezeigten `Add-MailboxFolderPermission`-Befehle bleiben weiterhin erforderlich, damit ROOMS die notwendigen Ordnerrechte besitzt.

{{% alert color="primary" title="Referenzen" %}}
> Exchange Online: `CanViewPrivateItems` per `SharingPermissionFlags` setzen: `https://learn.microsoft.com/en-us/troubleshoot/exchange/user-and-shared-mailboxes/private-items-not-display`
>
> Exchange On-Premises: Delegation mit EWS (Beispiel EWS Managed API): `https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-add-and-remove-delegates-by-using-ews-in-exchange`
{{% /alert %}}