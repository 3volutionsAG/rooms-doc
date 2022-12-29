---
title: "ROOMZ"
linkTitle: "ROOMZ"
weight: 2

description: >
   <p style="text-align: justify">ROOMZ Konfigurationsparameter</p>
---
## Vorbereitung
Damit Sie die IDP Konfiguration testen und das ROOMZ-Türschild konfigurieren können, benötigen Sie einen *API_KEY*.   
Eine Anleitung dazu finden Sie unter [Türschildbenutzer und API KEY]({{< ref "betrieb/tuerschilder/tuerschildbenutzer" >}})

## Konfiguration IDP

{{% alert title="Info" color="info" %}}
Diese Konfiguration wird bei unseren SaaS Kunden durch uns vorgenommen.
{{% /alert %}}



Damit die Türschilder mit Rooms kommunizieren können, muss im IDP ein Client konfiguriert werden.   
Ergänzen Sie dazu die Datei `appsettings.json` im `config` Verzeichnis folgendermassen:

``` json
{
	"IdentityServer": {
      // Existierende Konfiguration
		"Clients": [
			{
            // Existierenede Clients
			},
			{
				"Enabled": true,
				"ClientId": "{{ Die ClientId erhalten Sie von uns }}",
				"ClientName": "{{ Den ClientName erhalten Sie von uns }}"
,
				"ClientSecrets": [
					{
						"Value": "{{ Das Verschlüsselte Secret erhalten Sie von uns }}"
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
		]
	}
}
```
### Testen des Clients
Um den Client zu testen, können sie folgende Abfrage machen (z.B. mit Postman, Insomnia, curl etc.)   
Bei einer korrekten Konfiguration erhalten Sie in der Response ein Bearer Token.

Verwenden Sie als *API KEY* den PIN ihres Türschildbenutzers (siehe [Türschildbenutzer und API KEY]({{< ref "betrieb/tuerschilder/tuerschildbenutzer" >}}))

```
url: https://{{ URL ihres IDPs }}/connect/token
method: POST
headers:
   content-type: application/x-www-form-urlencoded
body: grant_type=apikey&apikey={{ API KEY }}&client_id={{ Die erhaltene ClientId }}&scope=rooms_api&client_secret={{ Das Plaintext Secret }}
```


## Konfigurationsparameter Roomz-Türschild
Nachfolgend finden Sie die Konfigurationsparameter für das Türschild:

Verwenden Sie als *API KEY* den PIN ihres Türschildbenutzers (siehe [Türschildbenutzer und API KEY]({{< ref "betrieb/tuerschilder/tuerschildbenutzer" >}}))

```
    API Key = {{ API_KEY }}
    Login URL = https://{{ URL ihres IDPs }}/connect/token
    ClientId = {{ Die erhaltene ClientId}}
    Secret = {{ Das Plaintext Secret }}
```