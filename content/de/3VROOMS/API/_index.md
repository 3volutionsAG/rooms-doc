---
title: "API"
type: swagger
weight: 12
description: Reference for the ROOMS REST-API
---

Das ROOMS REST-API ist via SwaggerUI dokumentiert. Sofern der Konfig-Wert `SwaggerEnabled` im RoomsAppSettings.config auf `true` gesetzt ist kann die API-Doc via `https://\<rooms_url\>/swagger` aufgerufen werden.

## Authentisierung

### Rooms ohne IDP

1. Erstellen eines Benutzers für den Zugang
In einem ersten Schritt muss auf Rooms einen Benutzer(Person), mit den entsprechenden Rechten, erstellt werden, oder es wird ein bereits bestehender Benutzer verwendet.

1. Über diesen Benutzer(Person) kann nun ein PIN generiert werden, welcher als API Key genutzt werden kann.
    Person --> Bearbeiten --> Logons --> Erstellen --> PIN --> Code Erstellen

1. Dieser API Key kann nun im Header folgendermassen übergeben werden:
    Header Key: APIKEY Value: \<PIN\>

Beispiel Url:

https://\<rooms_url\>/Default/api/v1.0/ressources/\<resource_id\>/bookings?end=2022-10-10

Über den Header "Accept" kann zudem definiert werden, in welchem Format die Daten zurückgegeben werden sollen:

z.B. Key: Accept Value: application/xml oder Key: Accept Value: application/json

### Rooms mit IDP Authentisierung

Über die IDP appsettings.json können Clients hinzugefügt werden mit GrandType apikey:

Beispiel:

			{
				"Enabled": true,
				"ClientId": "xxx",
				"ClientName": "XXX",
				"ClientSecrets": [
					{
						"Value": "xxx"
					}
				],
				"AllowedGrantTypes": [
					"apikey"
				],
				"AllowedScopes": [
					"rooms_api"
				],
				"RequireConsent": false,
				"RequirePkce": true,
				"RequireClientSecret": "false"
			},
