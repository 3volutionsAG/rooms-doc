---
title: "API"
type: swagger
weight: 12
description: Reference for the ROOMS REST-API
---

Das ROOMS REST-API ist via SwaggerUI dokumentiert. Sofern der Konfig-Wert `SwaggerEnabled` im RoomsAppSettings.config auf `true` gesetzt ist kann die API-Doc via `https://\<rooms_url\>/swagger` aufgerufen werden.

## Authentisierung

### Allgemein

1. Erstellen eines Benutzers für den Zugang.   
In einem ersten Schritt muss in ROOMS ein Benutzer (Person) mit den entsprechenden Rechten erstellt werden, oder es wird ein bereits bestehender Benutzer verwendet.

2. Generieren eines Pins als API Key.    
Für diesen Benutzer (Person) kann nun ein PIN generiert werden, welcher als API Key genutzt werden kann.   
    _Person --> Bearbeiten --> Logons --> Erstellen --> PIN --> Code Erstellen_

### ROOMS ohne IDP Authentisierung

Der oben unter Punkt [Allgemein]({{< ref "_index.md#allgemein" >}} "Allgemein") erstellte PIN kann nun im Header folgendermassen übergeben werden:
- Key: `APIKEY`
- Value: `\<PIN\>`

Beispiel Url:

`https://\<rooms_url\>/Default/api/v1.0/ressources/\<resource_id\>/bookings?end=2022-10-10`

Über den Header "Accept" kann zudem definiert werden, in welchem Format die Daten zurückgegeben werden sollen:

z.B. `Accept Value: application/xml` oder `Accept Value: application/json`

### ROOMS mit IDP Authentisierung

In der Konfigurationsdatei des IDP (appsettings.json) muss ein Client hinzugefügt werden mit AllowedGrantTypes "apikey":

Beispiel:

```json
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
}
```

Dieser Client kann danach verwendet werden, um vom IDP mittels dem unter Punkt [Allgemein]({{< ref "_index.md#allgemein" >}} "Allgemein") erstellten Pin ein Token zu beziehen.
Dazu muss ein HTTP POST Request an den IDP gesendet werden:

```
Method: POST
Content-Type: application/x-www-form-urlencoded
Url: [UrlToIDP]/connect/token
Data:
    grant_type: apikey
    scope: rooms_api
    client_id: <ClientIdFromIDPConfig\>
    apikey: <PIN\>
    client_secret: <ClientSecretFromIDPConfig\>
```

Dieser Request liefert ein Accesstoken zurück welches dann im Header verwendet werden kann, um Abfragen an ROOMS zu senden:   
- Key: `Authorization`
- Value: `Bearer \<Accesstoken\>`

Beispiel Url:

`https://\<rooms_url\>/Default/api/v1.0/ressources/\<resource_id\>/bookings?end=2022-10-10`

Über den Header "Accept" kann zudem definiert werden, in welchem Format die Daten zurückgegeben werden sollen:

z.B. `Accept Value: application/xml` oder `Accept Value: application/json`
