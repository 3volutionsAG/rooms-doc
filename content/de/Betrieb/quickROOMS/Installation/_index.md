---
title: "Installation"
linkTitle: "Installation"
weight: 1 
description: quickROOMS installieren
---

In der Anleitung werden folgende URLs verwendet:

- ROOMS: https://rooms.example.com/Default
- IDP: https://idp.example.com
- quickROOMS: https://wizard.example.com

## Voraussetzungen

Fogende Voraussetzungen müssen erfüllt sein.
- Laufende ROOMS und IDP instanz. 
- ROOMS muss IDP als Authentisierung nutzen, dies wird über RoomsAppSettings aktiviert:

```xml
<RoomsAppSettings>
	...
	<!-- IDP Communcation-->
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

- Alle aktuellen Major Browser werden unterstützt
- Internet Explorer 11 wird nicht unterstützt

## Voraussetzungen Outlook Addin

Addin: Der Wizard wird als Addin bezeichnet wenn er auf einem Outlook Client oder in Outlook Online integriert läuft.

https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets?view=common-js-preview&tabs=xmlmanifest

### Unterstützte Exchange Versionen:

- Exchange Online
- Exchange on-premises 	
  - 2016 (Addin funktioniert nur mit Client nicht in OWA)
  - 2019 (Addin funktioniert nur mit Client nicht in OWA)

### Unterstützte Outlook versionen:

Grunsätzlich braucht das Addin mindestens das Requirement Set 1.7.

Windows:
- Microsoft 365 subscription
- Retail version: Outlook 2016, Outlook 2019, Outlook 2021, Outlook 2024
- Volume license version: Outlook 2021, Outlook 2024

Mac
- classic UI
- new UI

### Unterstützte Browser

Die Benutzerfreundlichkeit ist für die EdgeHTML-Engine gewährleistet, mit Ausnahme der Drag & Drop-Funktion für Serienalternativen

Internet Explorer als Web-Engine wird nicht unterstützt. 

Eine Liste aller verwendeten Webansichten für Kombinationen von Windows und Office finden Sie unter diesem Link:
https://docs.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-web-add-ins

Für aktuelle Windows- und O365-Clients muss WebView2 installiert sein:
https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section


## Installation Wizard

Für die Installation kann lediglich die .zip Datei mit der neusten Version extrahiert und auf den Webserver kopiert werden. Achtung die assets/config/config.json datei wird dabei überschrieben.

## Konfiguration

Folgende Konfigurationen können/müssen in der config.json Datei gemacht werden:

```json
{
	"deployUrl": "",
	"rootUrl": "https://rooms.example.com/Default",
	"useExchangeOnPrem": false,
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

## IDP konfiguration

Um den Wizard / Addin zu verwenden muss zwingend der IDP eingerichtet sein.

In der IDP Konfiguration muss ein Client für den Wizard hinzugefügt werden.

Bspw.:

```json
		"Clients": [
         ...
			{
				"Enabled": true,
				"ClientId": "rooms-addin",
				"ClientName": "ROOMS O365 Outlook Addin",
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
					"https://wizard.example.com",
				],
				"RequireConsent": false,
				"RequirePkce": true,
				"RequireClientSecret": "false",
				"ManifestId": "ersetzten mit guid z.B. 3fd613ed-d9a6-4096-8008-70d4d635d915"
			}
         ...
      ]
```

Somit sollte der Wizard auf der URL https://wizard.example.com laufen und das Login sollte über Forms oder Windows authentisierung möglich sein.