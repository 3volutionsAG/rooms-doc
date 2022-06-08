---
title: "Wizard einrichten"
linkTitle: "Wizard einrichten"
weight: 40
description: Leitfaden, wie Sie das Buchungs-Wizard nach einem Update von ROOMS einrichten.
---
1. Erstellen Sie eine eigene **Seite für das Wizard** bzw. das Add-In.
2. Erstellen Sie ein entsprechendes **Verzeichnis**, standardmäßig unter
   
   ```
    C:\inetpub\wwwroot\ADDIN
    ```

3. Legen Sie die **bereitgestellten Dateien** in dem erstellten Ordner ab.

    {{< imgproc SeiteErzeugen Resize "640x" >}} {{< /imgproc >}}

4. Fügen Sie eine **neue Seite** hinzu und geben Sie ihr den Namen *ADDIN*.
5. Setzen Sie den **Application Pool** auf *ADDIN*.
6. Geben Sie in das Feld **Physical Path** den Pfad für das Wizard ein.

    {{< imgproc SeiteHinzu Resize "640x" >}} {{< /imgproc >}}

7. Setzen Sie bei der Authentifizierung den Status Anonym auf **Enabled**.

    {{< imgproc Auth Resize "640x" >}} {{< /imgproc >}}

8. Suchen Sie die Datei **appsettings.json**, standardmäßig unter
    
    ```
    C:\inetpub\wwwroot\IDP
    ```

9. Fügen Sie nach *Clients* **Addin Site & Configurations** hinzu.

    ```
    {
	      "Enabled": true,
	      "ClientId": "xrooms",
	      "ClientName": "ROOMS O365 Addin",
	     "AllowedGrantTypes": [
	         "authorization_code",
	        "translation"
	     ],
	     "AllowedScopes": [
	         "openid",
	         "profile",
	         "rooms_api"
	     ],
	     "RedirectUris": [
	         "http://10.1.16.31:8088/callback.html",
	         "http://10.1.16.31:8088/silent"
	     ],
	     "PostLogoutRedirectUris": [
	         "http://10.1.16.31:8088/auth-logout"
	     ],
	     "AllowedCorsOrigins": [
	        "http://10.1.16.31:8088"
	    ],
	    "RequireConsent": false,
	    "RequirePkce": true,
	    "RequireClientSecret": "false"
     },
     ```

10. Suchen Sie die Datei **config.json**, standardmäßig unter:
    
    ```
    C:\inetpub\wwwroot\ADDIN\assets\config
    ```

    oder

    ```
    {
		"rootUrl": "http://10.1.16.31/Default",
		"oauthConfig": {
			"authority": "http://10.1.16.31:8888",
			"clientId": "xrooms",
			"redirectUri": "http://10.1.16.31:8088/callback.html",
			"useWindowsAuthAsDefault": false,
			"useCustomAuthHeader": false
		},
		"bookingsConfig": {
			"timeInterval": 15,
			"preSaveOutlookItems": true
		}
    }
    ```

    {{< imgproc Beispiel Resize "640x" >}} {{< /imgproc >}}
