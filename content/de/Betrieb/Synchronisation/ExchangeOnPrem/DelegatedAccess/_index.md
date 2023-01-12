---
title: "Delegated Access"
linkTitle: "Delegated Access"
weight: 2 
description: Einrichten von Synchronisation mit Delegated Access
---
Mit dem Delegated access kann ROOMS auf einige oder alle Ordner des Postfachbesitzers zugreifen und im Auftrag des Postfachbesitzers agieren. Durch delegated Access können die Berechtigungen für den ROOMS Service User feiner granuliert werden. Somit ist es möglich dem Service User nur Berechtigungen auf einzelnen Exchange Folders zu geben wie bspw: 

    Kalender

    Tasks

    Posteingang

    Kontakte

    Gelöschte Elemente

Wenn ein Benutzer delegated access auf einen oder mehrere dieser Ordner hat, kann er Elemente in diesem Ordner abhängig der erteilten Berechtigungen verwalten.

Wie die Anwendung diese Aktionen durchführt, hängt davon ab, ob ein expliziter oder impliziter Zugriff erforderlich ist. 3V-ROOMS verwendet ausschliesslich den expliziten Zugriff.

### Berechtigungen

ROOMS benötigt zwingend Editor Rechte im Ordner Kalender und Gelöschte Elemente.

Autor: Ein Stellvertreter kann Elemente lesen und erstellen sowie erstellte Elemente ändern und löschen.
Editor: Ein Editor (Stellvertreter) kann alles tun, was ein Autor kann und ausserdem die Elemente ändern und löschen, die der Postfachbesitzer erstellt hat.

## Konfiguration ROOMS

ROOMS verwendet standartmässig die Impersonierung um im Kontext eines anderen Benutzers dessen Kalendereinträge zu verwalten. Falls Sie sich jedoch entschliessen Delegated Access zu verwenden, müssen folgende Konfigurationseinträge im RoomsAppSettings.config ergänzt werden:

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
Add-MailboxFolderPermission -Identity lukas.laederach@sales.3v-rooms.ch:\Calendar -User roomsservice@sales.3v-rooms.ch -AccessRights Editor
Add-MailboxFolderPermission -Identity "lukas.laederach@sales.3v-rooms.ch:\Deleted Items" -User roomsservice@sales.3v-rooms.ch -AccessRights Editor
Add-MailboxFolderPermission -Identity "lukas.laederach@sales.3v-rooms.ch:\Drafts" -User roomsservice@sales.3v-rooms.ch -AccessRights Editor

```
Ebenfalls sollte das Recht auf Recoverable Deleted Items Folder gesetzt werden, bis jetzt noch unklar wie dies möglich ist.