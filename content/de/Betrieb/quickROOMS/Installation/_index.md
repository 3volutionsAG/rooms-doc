---
title: "Installation"
linkTitle: "Installation"
weight: 1
description: 'quickROOMS installieren und konfigurieren'
---

In dieser Anleitung werden folgende Platzhalter-URLs verwendet:

{{< bootstrap-table "table table-striped" >}}
| Komponente | Beispiel-URL |
|---|---|
| ROOMS | `https://rooms.example.com/Default` |
| IDP | `https://idp.example.com` |
| quickROOMS (Wizard) | `https://wizard.example.com` |
{{< /bootstrap-table >}}

## Voraussetzungen

Folgende Voraussetzungen müssen erfüllt sein:

- Eine laufende **ROOMS**- und **IDP**-Instanz.
- ROOMS muss den IDP als Authentisierung nutzen. Dies wird über die `RoomsAppSettings` aktiviert:

```xml
<RoomsAppSettings>
	...
	<!-- IDP Communication -->
	<add key="UseLegacyAuth" value="false"/>
	<add key="Authority" value="https://idp.example.com"/>
	<add key="ClientSecret" value="xxx"/>
	<add key="RedirectUri" value="https://rooms.example.com/Default/"/>
	<add key="CallbackPath" value="/Default/"/>
	<add key="CorsOrigins" value="https://rooms.example.com,https://wizard.example.com,https://idp.example.com" />
	...
</RoomsAppSettings>
```

### Unterstützte Browser

Alle aktuellen Major-Browser werden unterstützt (Edge, Chrome, Firefox, Safari).

## Voraussetzungen Outlook Add-In

Der Wizard wird als **Add-In** bezeichnet, wenn er in einem Outlook Client oder in Outlook on the Web (OWA) integriert läuft.

Das Add-In benötigt mindestens das [Outlook API Requirement Set 1.7](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets).

### Unterstützte Exchange-Versionen

{{< bootstrap-table "table table-striped" >}}
| Exchange-Version | Desktop Client | OWA (Webmail) |
|---|---|---|
| Exchange Online | Ja | Ja |
| Exchange on-premises 2016 | Ja | Nein |
| Exchange on-premises 2019 | Ja | Nein |
| Exchange on-premises SE | Ja | Nein |
{{< /bootstrap-table >}}

{{% alert title="Hinweis" color="info" %}}
Auf on-premises Exchange funktioniert das Add-In ausschliesslich mit dem Desktop Outlook Client. OWA wird nicht unterstützt, da on-premises Exchange nur Requirement Sets bis 1.6 (OWA) bzw. 1.5 (Server) bereitstellt. Weitere Details: [Outlook API Requirement Sets (Microsoft)](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets).
{{% /alert %}}

### Unterstützte Outlook-Versionen

Windows:
- Microsoft 365 Subscription
- Retail: Outlook 2016, Outlook 2019, Outlook 2021, Outlook 2024
- Volume License: Outlook 2021, Outlook 2024

Mac:
- Classic UI
- New UI

### WebView-Anforderungen

Das Add-In wird innerhalb einer WebView-Engine gerendert. Für aktuelle Windows- und Office-Clients muss die **WebView2 Runtime** installiert sein:

- [WebView2 Runtime herunterladen (Microsoft)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- [Übersicht der verwendeten WebView-Engines nach Office-/Windows-Version (Microsoft)](https://learn.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-web-add-ins)

## Installation Wizard

Für die Installation wird die `.zip`-Datei der neusten Version extrahiert und auf den Webserver kopiert.

{{% alert title="Achtung" color="warning" %}}
Beim Kopieren wird die Datei `assets/config/config.json` überschrieben. Sichern Sie Ihre bestehende Konfiguration vor dem Update.
{{% /alert %}}

## Konfiguration

Die Konfiguration erfolgt in der Datei `config.json`:

```json
{
  "deployUrl": "",
  "rootUrl": "https://rooms.example.com/Default",
  "oauthConfig": {
    "authority": "https://idp.example.com",
    "clientId": "rooms-addin",
    "redirectUri": "https://wizard.example.com/callback.html",
    "useWindowsAuthAsDefault": false,
    "useCustomAuthHeader": false
  },
  "filterConfig": {
    "hideAllSeatingsOptions": false,
    "showAllSeatingsButton": false
  },
  "bookingsConfig": {
    "timeInterval": 15,
    "enableFileUpload": false
  },
  "bookingListConfig": {
    "bookingsAsPersonInChargeEnabledPerDefault": false
  },
  "ui": {
    "showResourceImages": true,
    "hideOutlookBodyInfo": false
  }
}
```

{{< bootstrap-table "table table-striped" >}}
| Einstellung | Beschreibung |
|---|---|
| `rootUrl` | URL der ROOMS-Instanz |
| `oauthConfig.authority` | URL des IDP-Servers |
| `oauthConfig.clientId` | Client-ID im IDP (Standard: `rooms-addin`) |
| `oauthConfig.redirectUri` | Callback-URL des Wizards |
| `oauthConfig.useWindowsAuthAsDefault` | `true` um Windows-Authentisierung als Standard zu verwenden |
{{< /bootstrap-table >}}

## IDP-Konfiguration

Damit der Wizard / das Add-In funktioniert, muss im IDP ein Client konfiguriert sein:

```json
"Clients": [
  {
    "Enabled": true,
    "ClientId": "rooms-addin",
    "ClientName": "ROOMS Outlook Addin",
    "AllowedGrantTypes": [
      "authorization_code",
      "translation",
      "apikey"
    ],
    "AllowedScopes": [
      "openid",
      "profile",
      "rooms_api"
    ],
    "RedirectUris": [
      "https://wizard.example.com/callback.html",
      "https://wizard.example.com/office-auth-callback.html"
    ],
    "PostLogoutRedirectUris": [
      "https://wizard.example.com/auth-logout"
    ],
    "AllowedCorsOrigins": [
      "https://wizard.example.com"
    ],
    "RequireConsent": false,
    "RequirePkce": true,
    "RequireClientSecret": "false",
    "ManifestId": "<GUID einfügen, z.B. 3fd613ed-d9a6-4096-8008-70d4d635d915>"
  }
]
```

Nach der Konfiguration sollte der Wizard unter `https://wizard.example.com` erreichbar sein. Der Login erfolgt über Forms- oder Windows-Authentisierung.
