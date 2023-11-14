---
title: "Microsoft Teams Integration"
linkTitle: "Microsoft-Teams Integration"
weight: 5
description: Diese Dokumentation bietet eine detaillierte Anleitung zur Integration von Microsoft Teams in ROOMS. Die Integration ermöglicht die nahtlose Verbindung von Teams-Meetings mit Ihren ROOMS-Ressourcen.
---

## ROOMS Konfiguration

### Benötigte ROOMS Rechte

Um Teams-Meetings zu erstellen, werden folgende Rechte benötigt:
- Globales Recht `Darf Teams Meeting buchen`

### Teams Meeting automatisch erstellen beim Buchen

Die Checkbox `Teams Meeting standardmässig hinzufügen` ermöglicht es, festzulegen, ob bei der Erstellung einer neuen Buchung automatisch ein Teams Meeting erstellt wird.

### Teams Meetings in Serien

Für Serien wird immer nur ein Teams Meeting erstellt, das dann wiederverwendet wird.

## Microsoft EntraID Konfiguration

### App-Registrierung einrichten

Um die Integration zu starten, muss eine neue App im Azure EntraID registriert werden oder die bestehende Exchange App kann verwendet werden.

Folgende API-Berechtigungen werden benötigt:
- `OnlineMeetings.ReadWrite.All` (Anwendung).

Für das Mapping von Benutzern stehen zwei Optionen zur Verfügung:

- `User.Read.All` (Anwendung) - Die Benutzer werden dann per E-Mail gefunden.
- Anpassung des AzureAD Benutzerdatenimports (falls vorhanden) und Ergänzung der Spalte `AzureObjectId` in der Persontabelle mit den ObjectIds der Benutzer in Azure.

### Application Access Policy

Für Online-Meetings muss eine Application Access Policy definiert und der zuvor erstellten App zugewiesen werden. Zur Vereinfachung sollte diese global festgelegt werden.

Empfohlenes Setup:

```powershell
New-CsApplicationAccessPolicy -Identity Teams-policy -AppIds "xxx" -Description "Erlaubt die Erstellung von Teams Meetings"
Grant-CsApplicationAccessPolicy -PolicyName Teams-policy -Global
```

Weitere Informationen dazu finden Sie unter [Grant-CsApplicationAccessPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csapplicationaccesspolicy?view=skype-ps).

### App Credentials

Wenn bereits Exchange OAuth 2.0 eingerichtet ist, können diese Informationen wiederverwendet werden. Alternativ kann auch die Zertifikatauthentifizierung verwendet werden.

Für Exchange OAuth 2.0:

```xml
<add key="ExchangeTenantId" value="xxx" />
<add key="ExchangeAppId" value="xxx" />
<add key="ExchangeClientSecret" value="xxx" />
```

Für Zertifikatauthentifizierung:

```xml
<add key="ExchangeTenantId" value="xxx" />
<add key="ExchangeAppId" value="xxx" />
<add key="ExchangeCertThumbprint" value="xxx" />
```

Wenn unterschiedliche Anmeldeinformationen (App) oder nur Teams ohne Exchange verwendet werden, können die folgenden Schlüssel genutzt werden:

Für Anmeldeinformationen (App):

```xml
<add key="TeamsTenantId" value="xxx" />
<add key="TeamsAppId" value="xxx" />
<add key="TeamsClientSecret" value="xxx" />
```

Für Zertifikatauthentifizierung:

```xml
<add key="TeamsTenantId" value="xxx" />
<add key="TeamsAppId" value="xxx" />
<add key="TeamsCertThumbprint" value="xxx" />
```

### Teams ohne Exchange Synchronisation

Um Teams-Meetings für Personen ohne Exchange-Synchronisation zu ermöglichen, muss in der StructureMap der folgende Service aktiviert werden:

Einstellungen --> System --> Globale Parameter --> StructureMapXML

```xml
<AddInstance Key="teamsServiceSession"
    PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core"
    PluggedType="Garaio.Products.Rooms.Core.WindowsServices.TeamsService.TeamsServiceSession,Garaio.Products.Rooms.Core" />
```

Dies ermöglicht die nahtlose Integration von Teams-Meetings in ROOMS, auch für Benutzer ohne Exchange-Synchronisation.