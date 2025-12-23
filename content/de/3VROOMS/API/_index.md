---
title: "API"
type: swagger
weight: 12
description: Reference for the ROOMS REST-API
---

Das ROOMS REST-API ist via SwaggerUI dokumentiert. Sofern der Konfig-Wert `SwaggerEnabled` im RoomsAppSettings.config auf `true` gesetzt ist kann die API-Doc via `https://vnext.book.3vrooms.local/swagger` aufgerufen werden.

Alle Zeitangeben sind immer in UTC. Eine konvertierung in Lokalzeit muss der Aufrufende selbständig durchführen. 

## Guides

- [JobManager REST API – Usage Guide]({{< relref "JobManager-Usage" >}}): Fachliche Verwendung (202 Accepted / asynchroner Batch-Flow, Polling, Fehlerhandling)

## Authentisierung

Die Kommunikation mit dem REST-API erfolgt immer authentisiert mit einem Benutzer. Um API Calls mit einem spezifischen Benutzer durchzuführen müssen folgende Schritte durchgeführt werden.

### ROOMS Konfiguration

Jeder Benutzer der das API nutzen will muss in ROOME ein API Key erstellen welcher dann für die Authentisierung verwendet werden kann. Damit die sogenannte `Pin Authentisierung` genutzt werden kann muss der Global Parameter: `Darf PIN Authentisierung nutzen` auf `True` gesetzt werden.

- Generieren eines Pins welcher als API Key verwendet werden kann
  - `Person` --> `Bearbeiten` --> `Logons` --> `Erstellen` --> `PIN` --> `Code Erstellen`

### ROOMS mit IDP Authentisierung

In der Konfigurationsdatei des IDP (appsettings.json) muss ein Client hinzugefügt werden mit `AllowedGrantTypes: apikey`:

```json
{
	"Enabled": true,
	"ClientId": "xxx",
	"ClientName": "xxx",
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

```sh
@apikey = 867269

### login
# @name postToken
POST https://vnext.idp.3vrooms.local/connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=apikey
&scope=rooms_api
&client_id=xxx
&apikey={{apikey}}
&client_secret=xxx

@token = {{postToken.response.body.access_token}}
```

Dieser Request liefert ein `access_token` welches dann in nachfolgenden Requests im `Authorization` Header als `Bearer token` mitgegeben werden muss: `Authorization: Bearer {{token}}`

Beispiel:
```sh
### Get booking by id
GET https://vnext.book.3vrooms.local/Default/api/v1.0/bookings/1177
Accept: application/json
X-JsonPropertyFormat: camel
Authorization: Bearer {{token}}
```

### ROOMS ohne IDP Authentisierung

Falls ROOMS im legacy Mode betrieben wird und noch kein IDP zur Verfügung steht muss der API Key direkt als Http Header mitgegeben werden.

Beispiel:
```sh
### Get booking by id
GET https://vnext.book.3vrooms.local/Default/api/v1.0/bookings/1177
Accept: application/json
X-JsonPropertyFormat: camel
APIKEY: {{apikey}}
```

## Request Headers

ROOMS stellt folgende custom HTTP Headers zur verfügung um Requests zu parameterisieren:

### Anpassen der JSON-Response-Formatierung

Mit dem Header `X-JsonPropertyFormat` kann die Formatierung der gelieferten JSON-Response angepasst werden. Standardmässig wird `Pascal` Case für die Antworten verwendet. Wenn dem Request der Header `X-JsonPropertyFormat: camel` hinzugefügt wird, wird die gelieferte Antwort im `Camel` Case formatiert.

Pascal:
```json
{
	"Titel": "Hallo Welt",
	"StandartStandort": 69
}
```

Camel:
```json
{
	"titel": "Hallo Welt",
	"standartStandort": 69
}
```

### Anpassen der Zeitzone
In ROOMS werden grundsätzlich alle Zeitangaben in UTC abgelegt. Es existieren jedoch einige Ausnahmen für welche die Zeiten unabhängig einer spezifischen Zeitzone fix abgelegt werden. Folgendes Beispiel:

Zwei buchbare Ressourcen, eine in London (GMT) und die andere in New York (Eastern Time Zone), jede von ihnen hat feste Öffnungszeiten von 09:00 bis 18:00 Uhr.
Die angegebenen Stunden von 09:00 bis 18:00 Uhr sind konstante Referenzpunkte und werden unabhängig von der lokalen Zeitzone, in der sie beobachtet werden beibehalten. Diese festen Stunden unterliegen keinen Anpassungen für die Sommerzeit oder andere Zeitzone-Variationen.

Werden nun die Öffnungszeiten via RestAPI bezogen werden die Öffnungszeiten in UTC basierend der Zeitzone der authentisierten Person umgerechnet:

```sh
### Get booking by id
GET https://vnext.book.3vrooms.local/Default/api/v1.0/opening-hours/all/{{bern}}
Accept: application/json
X-JsonPropertyFormat: camel
Authorization: Bearer {{token}}
```

Die kann mit dem Header: `X-timezone-locationId` überschrieben werden.

```sh
### Get booking by id
GET https://vnext.book.3vrooms.local/Default/api/v1.0/opening-hours/all/{{bern}}
Accept: application/json
X-JsonPropertyFormat: camel
X-timezone-locationId: {{usa}}
Authorization: Bearer {{token}}
```

Durch das setzen des headers werden nun die Öffnungszeiten basierend der Zeizone des angegebenen ROOMS Standortes in UTC umgerechnet. Das wird bspw. bei onsiteROOMS verwendet damit die Zeitzone der Ressource und nicht des Benutzers welcher das Türschild konfiguriert hat berücksichtigt wird.