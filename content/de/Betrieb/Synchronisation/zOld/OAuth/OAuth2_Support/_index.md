---
title: "OAuth 2.0 Support"
linkTitle: "OAuth 2.0 Support"
weight: 1
description: Folgender Leitfaden beschreibt die Konfiguration von Azure Active Directory und ROOMS. Mit diesen Konfigurationen wird die Applikation in der Lage sein, AAD als externen Identity Provider zu verwenden.
---
Die Konfiguration erfolgt in zwei Schritten:

1. Konfiguration im O365 Admin Center
2. Konfiguration in 3V ROOMS

### Konfiguration in O365 - Admin Center

1. Loggen Se sich in Ihr [O365 Admin Center](https://admin.microsoft.com/AdminPortal/Home#/homepage) ein.
2. Klicken Sie im linken Panel auf **Azure Active Directory**. Es öffnet sich ein neues Fenster.
3. Klicken Sie auf **Azure Active Directory**.
4. Wählen Sie **App Registrations**.
5. Kicken Sie auf die Schaltfläche **+ New Registration** </br>

    {{< imgproc NewReg Resize "640x" >}}{{< /imgproc >}}

6. Füllen Sie die Eingabemaske aus:

    1. Name: ROOMS
    2. Supported Account Types: *Accounts in any organizational directory.
    3. Redirect URI: </br>
        https:// *Ihre Rooms Domäne* /signin-microsoft.com </br>
        Z.B.: https://vnext.idp.3vrooms.app/signin-microsoft.com

### Konfiguration in ROOMS

Damit ROOMS mit externen Identity Providern, wie Microsoft Azure Active Directory (O365) umgehen kann, müssen diese der Applikation bekannt gemacht werden.

1. Klicken Sie in der Menüleiste auf **Einstellungen**.
2. Wählen Sie im Sidepanel **System**.
3. Öffnen Sie das Subpanel **Globale Parameter**.
4. Suchen Sie den Eintrag **BezeichnungIdentity Providers - OAuth 2.0**.
5. Klicken Sie auf den **Bleistift**, um die Parameter einzustellen.
6. Geben Sie in das Feld Wert folgend Zeilen ein: </br>

    ```
   <IdentityProviders>
         <Provider Name="">
            <Audience>   </Audience>
            <AuthorizationEndpoint>   </AuthorizationEndpoint>
            <ClaimLookup>   </ClaimLookup>
            <ClientId>   </ClientId>
            <Issuer>   </Issuer>
            <Secret>   </Secret>
            <TokenEndpoint>   </TokenEndpoint>
		    <MetadataEndpoint>   </MetadataEndpoint>
            <UserInformationEndpoint>   </UserInformationEndpoint>
        </Provider>
    </IdentityProviders>
    ```

7. Füllen Sie die Felder entsprechend Ihrer Anforderungen. Orientieren Sie sich dabei an der Erklärung der Felder:

    ---
    |Feld|Erklärung|
    |---|---|---|
    |Name|Unique name provided by ROOMS, which identifies the identity provider.|
    |Audience|Identifies the recipient resource the token is intended for.|
    |AuthorizationEndpoint|The URI, where the client will be redirected to authenticate.|
    |ClaimLookup|The claim name, which value is used, to lookup an available logon.|
    |ClientID|The Application ID assigned to your app, when it's registered with your Identity Provider.|
    |Issuer|Identifies the STS (Security Token Service), that emitted the token, optionally as well as the tenant (e.g. Azure).|
    |Secret|The application secret, you created within your Identity Provider.|
    |TokenEndpoint|The URI the middleware will access to exchange the OAuth token.|
    |MetadataEndpoint|The URI the middleware will access to retrieve basic metadata about the Identity Provider.|
    |UserInformationEndpoint|The URI the middleware will access to obtain the user information.|
    ---

Meist ist es nicht nötig alle Felder auszufüllen, mindestens müssen jedoch **Name**, **ClaimLookup**, **ClientId** sowie **Secret** angegeben werden.

Für O365 könnte die Konfiguration wie folgt aussehen:

```
<IdentityProviders>
    <Provider Name="Microsoft">
        <ClaimLookup>preferred_username</ClaimLookup>
        <ClientId>bdfb10ba-8e07-4aef-92f9-031de0e1f1ef</ClientId>
        <Secret>zejnamOHLYWC44+hX977$+}</Secret>
       	<Issuer>https://login.microsoftonline.com/{TenantId}/v2.0</Issuer>
	    <MetadataEndpoint>https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration</MetadataEndpoint>
    </Provider>
</IdentityProviders>
```

<p align="justify">
Jeder Person welche in der Lage sein soll OAuth zu verwenden, muss ein Logon vom Typ **OAuth 2.0** hinterlegt werden (Dies kann optional durch den Benutzerdatenimport automatisiert werden). Der Name muss hierbei dem Inhalt, welcher im Claim mit dem Key ClaimLookup definiert wurde entsprechen. </p>

1. Klicken Sie in der Menüleiste auf **Einstellungen**.
2. Wählen Sie im Sidepanel **Personen**.
3. Suchen Sie die Person, für welche Sie Parameter bearbeiten möchten und klicken Sie auf den **Bleistift** hinter dem Namen.
4. Gehen Sie zum Tab **Logins**.
5. Klicken Sie auf **Erstellen** und wählen Sie die entsprechenden Parameter aus.

    {{< imgproc LogonDetails Resize "640x" >}}{{< /imgproc >}}

6. Klicken Sie auf **Speichern**.
