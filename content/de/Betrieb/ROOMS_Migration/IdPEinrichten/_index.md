---
title: "IdP einrichten"
linkTitle: "IdP einrichten"
weight: 30
description: Leitfaden, wie Sie die IdP nach einem Update von ROOMS einrichten.
---
### Eigene Seite für IdP einrichten

1. Richten Sie eine eigene Seite für die IdP ein.
2. Fügen Sie einen **Application Pool** hinzu und geben Sie ihm den Namen **IDP**.
3. Klicken Sie auf **Advanced Settings**
4. Wählen Sie im Feld **Identity** die Einstellung *Service User*.

{{< imgproc IDP-Site Resize "640x" >}} {{< /imgproc >}}

5. Erzeugen Sie eine **neue Seite** und geben Sie ihr den Namen **IDP**.
6. Wählen Sie den zuvor **Applications Pool IDP**.
7. Geben Sie in das Feld **Physical Path** den Pfad für die IdP ein.

{{< imgproc addSite Resize "640x" >}} {{< /imgproc >}}

8. Fügen Sie eine **Authentifizierungs-Methode** hinzu.
9. Setzen Sie das Feld **Anonymous & Windows Authentification Status** auf *Enabled*.

{{< imgproc EditAuth Resize "640x" >}} {{< /imgproc >}}

### appsettings.json konfigurieren

1. Rufen Sie dei Datei **appsettings.json** auf, standardmäßig:
   
   ```
   C:\inetpub\wwwroot\config\IDP
   ```

2. Erzeugen Sie eine **Log Output** Datei.
3. Platzieren Sie den Cursor zwischen **WriteTo** und **Enrich**.
   
   ```
    2.	            {
    3.	                "Name": "File",
    4.	                "Args": {
    5.	                    "path":  "C:\\inetpub\\wwwroot\\IDP\\idp_log\\serilog.txt"
    6.	                }
    1.              }
    ```

    {{< imgproc OutputFile Resize "640x" >}} {{< /imgproc >}}

4. Fügen Sie den **Connection String** nach *RoomsDatabase* hinzu
        
    ```
    "RoomsDatabase": "Data Source=10.1.16.12;Initial 
    Catalog=ROOMS_O_REL047;Integrated 
    Security=True;MultipleActiveResultSets=True;",
    ```

5.	Fügen Sie einen **Auftrag** hinzu.
    
    ```
    "Mandate": "Default",
    ```

6. Fügen Sie ROOMS Endpoint zu **RoomsEndpoint** hinzu (Rooms URI).

    ```
    "RoomsEndpoint": "http://10.1.16.31/Default/",
    ```
7. Erzeugen Sie einen **neuen ECDsaKey** und **ersetzen den ECDsaKey**.

    Beispiel mit IdentyServer.Cli.exe:

    ```
    C:\xx\IdentityServer.Cli.exe keys new
    ```

    Beispiel Key:

    ```
    "ECDsaKey": "30770201010420E590CFB1105F888B9B03700F5E835FC2BDF527F123034BEECED6803C8A5ED87AA00A06082A8648CE3D030107A14403420004207E4208473DAF1DE68A3E6A9E372259F79EEC12355139FF7D31865647742C65F3C6B92BCC9FAB1993FD89F7DA386B5ABD2FF0D844ED36CEBC8A8C7B9D089F95",
    ```

8.	Erzeugen Sie ein **neuen ClientSecret** und setzen Sie ihn in *ClientSecrets* Backup used Passwort
    Beispiel with IdentyServer.Cli.exe: 

    ```
    C:\..\IdentityServer.Cli.exe secrets new
    ```

    {{< imgproc ClientSecret Resize "640x" >}} {{< /imgproc >}}

    ```
        "ClientSecrets": [
	    {
	    	"Value": "lTuA8CKtUsN1VLJyisVnAkJXdgeg7tFdlbEFirbipFE="
    	} 
    ],
    ```

9. Ersetzen Sie die **RedirectUris** durch die zuvor angegebenen URIs.

    ```
        "RedirectUris": [
	    "http://10.1.16.31/Default/",
	    "https://10.1.16.31/Default/"
    ],
    ```
10. Ersetzen Sie die **PostLogoutRedirectUris** durch die zuvor angegebenen URIs.

    ```
    "PostLogoutRedirectUris": [
    "http://10.1.16.31/Default/Home/Account/PostLogout",
    "https://10.1.16.31/Default/Home/Account/PostLogout"
    ],
    ```

### Authentifizierungen konfigurieren

1. Suchen Sie **RoomsAppSettings.config**, standardmäßig unter

    ```
    C:\Program Files (x86)\3VOLUTIONS\ROOMS\Configuration
    ```
    
2. **Windows-Authentifizierung + Anonym (Formulare)**

    ```
    <RoomsAppSettings>
		<add key="DefaultMandator" value="Default"/>
	
		<!--MixedAuth Legacy 4.7 Authentication-->
		<add key="UseLegacyAuth" value="false"/>
	
		<!--IDP Configuration-->
		<!-- Authentication-->
		<add key="UseWindowsAuthAsDefault" value="false" />
		<!-- IDP Communcation-->
		<add key="Authority" value="http://10.1.16.31:8888"/>
		<add key="ClientSecret" value="p2wYi6gm2pGtxAy"/>
		<add key="RedirectUri" value="http://10.1.16.31/Default/"/>
		<add key="CallbackPath" value="/Default/"/>
    
    </RoomsAppSettings>
    ```

3. **Microsoft Azure AD (O365)**

    ```
    <RoomsAppSettings>
		<add key="DefaultMandator" value="Default"/>
	
		<!--MixedAuth Legacy 4.7 Authentication-->
		<add key="UseLegacyAuth" value="false"/>
	
		<!--IDP Configuration-->
		<!-- IDP Communcation-->
    	<add key="Authority" value="http://10.1.16.31:8888"/>
		<add key="ClientSecret" value="p2wYi6gm2pGtxAy"/>
		<add key="RedirectUri" value="http://10.1.16.31/Default/"/>
		<add key="CallbackPath" value="/Default/"/>
    
    </RoomsAppSettings>
    ```

4. Bearbeiten Sie **appsettings.json** und fügen Sie **ExternalOpenIdConnectProvider** hinzu.

    ```
        "ExternalOpenIdConnectProvider": [{ 
        "Id": "microsoft",
        "Label": "Microsoft / Azure AD",
        "Authority": "https://login.microsoftonline.com/common/v2.0/",
        "ClientId": "YOUR-CLIENT-ID",
        "ClientSecret": "YOUR-CLIENT-SECRET",
        "Scopes": [ "profile", "email" ],
        "CallbackPath": "/signin-microsoft",
        "ValidateIssuer": false,
        "UserIdClaim": "preferred_username",
        "ValidateAudience": true,
        "Audience":  "YOUR-AUDIENCE"
    }],

### Beispiel Konfiguration

---
|||
|---|---|---|
|appsettings.json|  |IDP|
|RoomsAppSettings.config|  |ROOMS|
|config.json|  |Addin|
