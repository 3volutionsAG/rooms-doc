---
title: "Teams Integration"
linkTitle: "Teams Integration"
weight: 50

description: >
   <p style="text-align: justify">Teams Integration einrichten</p>
---


# Aktivieren der Microsoft-Teams Integration

## Vergabe von Rechte

Folgendes Recht muss hinzugefügt werden um einem Benutzer zu erlauben Teams Meetings zu erstellen:

Globales Recht: *Darf Teams meeting buchen*

## Authentisierung einrichten

### App-Registrierung einrichten

Eine neue App muss im Azure Active-Directory registiert werden, oder es kann die bestehende Exchange App verwendet werden.

Folgende API-Berechtigung muss gesetzt werden:

*OnlineMeetings.ReadWrite.All*  --> Anwendung

Um die Users zu mappen gibt es zwei Optionen:

>Zusätzlich noch folgende API-Berechtigung hinzufügen:

>*User.Read.All* --> Anwendung

>Die User werden dann per Mail gefunden.

Oder

>  Anpassen vom Benutzerdatenimport, Spalte 'AzureObjectId' in der Persontabelle ergänzen mit den ObjectIds der Users in Azure.

### Application Access Policy

Für Online-Meetings muss zwingend eine Application Access Policy definiert werden und der im vorderen Schritt erstellten App zugewiesen werden. Einfachhalber sollte diese Global gesetzt werden

https://docs.microsoft.com/en-us/graph/cloud-communication-online-meeting-application-access-policy

Vorschlag 3V:

```
New-CsApplicationAccessPolicy -Identity Teams-policy -AppIds "xxx" -Description "Allow creation of teams meetings"

Grant-CsApplicationAccessPolicy -PolicyName Teams-policy -Global
```
New-CsApplicationAccessPolicy -Identity Teams-policy -AppIds "xxx" -Description "Allow creation of teams meetings"

### App Credentials

Wenn bereits Exchange OAuth 2.0 eingerichtet ist, kann dieser wiederverwendet werden:

```
    <add key="ExchangeTenantId" value="xxx" />
    <add key="ExchangeAppId" value="xxx" />
    <add key="ExchangeClientSecret" value="xxx" />
```
oder auch mit Certificate Authentication
```
    <add key="ExchangeTenantId" value="xxx" />
    <add key="ExchangeAppId" value="xxx" />
    <add key="ExchangeCertThumbprint" value="xxx" />
```
Falls unterschiedliche Credentials(App) oder nur Teams ohne Exchange verwendet wird, können folgende Keys genutzt werden:

```
    <add key="TeamsTenantId" value="xxx" />
    <add key="TeamsAppId" value="xxx" />
    <add key="TeamsClientSecret" value="xxx" />-->
```
ebenso mit Certificate Authentication möglich:
```
    <add key="TeamsTenantId" value="xxx" />
    <add key="TeamsAppId" value="xxx" />
    <add key="TeamsCertThumbprint" value="xxx" />
```

### Teams ohne Exchange Synchronisation

Sollen Teams Meetings erstellt werden können für Personen ohne Exchange Synchronisation, so muss in der StructureMap folgender Service aktiviert werden. Einstellungen --> System --> Globale Parameter --> StrucutreMapXML

```
<AddInstance Key="teamsServiceSession" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.TeamsService.TeamsServiceSession,Garaio.Products.Rooms.Core" />
```

# Standardmässige Teams Meeting Erstellung bei gewissen Ressourcen

Über die Checkbox *Teams Meeting standardmässig hinzufügen* kann auf der Ressource definiert werden ob bei der Erstellung einer neuen Buchung standardmässig auch gerade ein Teams Meeting dazu erstellt wird.

# Teams Meetings in Serien

Bei Serien wird immer nur ein Teams Meeting erstellt, dieses wird dann wiederverwendet.





