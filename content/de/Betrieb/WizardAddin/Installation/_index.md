---
title: "Installation"
linkTitle: "Installation"
weight: 1 

description: >
   <p style="text-align: justify">Wizard/Addin installieren</p>
---

## Voraussetzungen Wizard

In der Anleitung werden folgende URLs verwendet:

ROOMS: https://rooms.example.com/Default
<br>IDP: https://idp.example.com
<br>Wizard: https://wizard.example.com

Bezeichnungen:

Fogende Voraussetzungen müssen erfüllt sein.

Laufende 4.7 Rooms und IDP instanz. 

Rooms muss IDP als Authentisierung nutzen dies wird über RoomsAppSettings aktiviert:

    ```
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

## Voraussetzungen Outlook Addin

Addin: Der Wizard wird als Addin bezeichnet wenn er auf einem Outlook Client oder in Outlook Online integriert läuft.

https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets?view=common-js-preview&tabs=xmlmanifest

Unterstützte Exchange Versionen:

- Exchange Online
- Exchange on-premises 	
   <br>2019 (Addin funktioniert nur mit Client nicht in OWA)
   <br>2016 (Addin funktioniert nur mit Client nicht in OWA)

Unterstützte Outlook versionen:

Windows:

- Microsoft 365 subscription
- Retail version: Outlook 2016, Outlook 2019, Outook 2021
- Volume license version: Outlook 2021

Mac
- classic UI
- new UI

Grunsätzlich braucht das Addin mindestens das Requirement Set 1.7

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


