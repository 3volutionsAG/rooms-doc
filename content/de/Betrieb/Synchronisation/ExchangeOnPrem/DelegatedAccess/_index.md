 f---
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
	...
	<add key="ExchangeUseImpersonation" value="false" />
	...
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
Add-MailboxFolderPermission -Identity test.benutzer1@sales.3v-rooms.ch:\Calendar -User roomsservice@sales.3v-rooms.ch -AccessRights Editor -SharingPermissionFlags Delegate,CanViewPrivateItems
Add-MailboxFolderPermission -Identity "test.benutzer1@sales.3v-rooms.ch:\Deleted Items" -User roomsservice@sales.3v-rooms.ch -AccessRights FolderVisible
Add-MailboxFolderPermission -Identity "test.benutzer1@sales.3v-rooms.ch:\Drafts" -User roomsservice@sales.3v-rooms.ch -AccessRights FolderVisible
```

Die `Editor` Rolle beinhaltet folgende Rechte: `CreateItems`, `DeleteAllItems`, `DeleteOwnedItems`, `EditAllItems`, `EditOwnedItems`, `FolderVisible`, `ReadItems`

Das `FolderVisible` Recht erlaubt es dem Delegated-Benutzer den angegebenen Ordner zu sehen, aber keine Elemente im angegebenen Ordner zu lesen oder bearbeiten.

{{% alert title="Warning" color="warning" %}}
Ebenfalls sollte das Recht auf Recoverable Deleted Items Folder gesetzt werden, da es sich jedoch um einen System-Folder handelt ist dies nicht möglich.
{{% /alert %}}