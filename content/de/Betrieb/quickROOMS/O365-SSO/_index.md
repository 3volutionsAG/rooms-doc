---
title: "Addin O365 SSO"
linkTitle: "Addin O365 SSO"
weight: 2 

description: 'Addin: Single sign on mit O365'
---

Wird Forms oder Windows auth verwendet z.B. mit einem OnPrem Exchange, kann dieser Punkt übersprungen werden. 

Loggen Sie sich in ihren Azure Plattform als Administrator ein

1. Navigieren Sie zu "Azure Active Directory"

1. Navigieren Sie zu "App registration"

1. Klicken Sie auf "+New registration" 

   - Fügen Sie einen Namen hinzu, z.B. "3V-ROOMS SSO"

   - Wählen Sie zum Beispiel "Single tenant"

   - Fügen Sie die Redirect URL hinzu und wählen Sie "web" (Beispiel: https://idp.example.com/signin-microsoft)

1. Notieren Sie folgende Daten:

   - Application (client) ID 

   - Object ID

   - Directory (tenant) ID

1. Navigieren Sie auf  "Client credentials"

   - Klicken Sie auf "+New client secret"

   - Fügen Sie einen Namen hinzu und definieren Sie das Ablaufdatum (INFO: die Secrets müssen nach Ablauf neu erstellt und der 3volutions mitgeteilt werden)

   - Klicken Sie auf "add"

   - Notieren Sie sich den Wert (ClientSecret)

1. Navigieren Sie auf "API permission"

1. Klicken Sie auf "+Add a permission"

   - Wählen Sie Microsoft Graph
   - Delegierte Berechtigungen
   - openid und profile

1. Navigieren Sie auf "Eine API verfügbar machen"
   - Setzen Sie die AnwendungsURL z.B. auf
   - api://wizard.example.com/075c0bb3-d1d3-439f-9f86-67720ee18f57
   - Fügen Sie einen Bereich(scope) hinzu:
   - Name: access_as_user
   - Wer darf einwilligen: Administratoren und Benutzer
   - Anzeigename: Lesen von Profildaten
   - Beschreibung: Ermöglicht der App das Lesen der Profildaten
   - Bereich hinzufügen
   - Eine Clientanwendung hinzufügen: Eben erstellter bereich auswählen
   - folgende GUID einfügen: ea5a67f6-b6f3-4338-b240-c655ddc3cc8e

   > **Hinweis** Die ea5a67f6-b6f3-4338-b240-c655ddc3cc8e ID autorisiert Office auf allen folgenden Plattformen vorab. Alternativ können Sie eine ordnungsgemäße Teilmenge der folgenden IDs eingeben, wenn Sie aus irgendeinem Grund die Autorisierung für Office auf einigen Plattformen verweigern möchten. Lassen Sie einfach die IDs der Plattformen weg, von denen Sie die Autorisierung verweigern möchten. Benutzer Ihres Add-Ins auf diesen Plattformen können Ihre Web-APIs nicht aufrufen, aber andere Funktionen in Ihrem Add-In funktionieren weiterhin.<br>d3590ed6-52b3-4102-aeff-aad2292ab01c (Microsoft Office<br>93d53678-613d-4013-afc1-62e9e444a0a5 (Office im Web)<br>bc59ab01-8403-45c6-8796-ac3ef710b3e3 (Outlook im Web)
1. Navigieren Sie auf "Manifest"
   - Geben Sie 2 als Wert für die Eigenschaft ```accessTokenAcceptedVersion``` ein.
   - Wählen Sie speichern aus
   > *Achtung*: Es kann eine weile dauern bis die Änderung zieht.

https://learn.microsoft.com/en-us/office/dev/add-ins/develop/register-sso-add-in-aad-v2

Nun kann der IDP für diese neu eingerichtete Authentisierung konfiguriert werden.

# IDP konfigurieren

Nun kann der IDP für die O365 Auth konfiguriert werden:

```json
		"ExternalOpenIdConnectProvider": [
			{
				"Id": "microsoft",
				"Label": "Microsoft / Azure AD",
				"Authority": "https://login.microsoftonline.com/(hier TenantId einfügen)/v2.0/",
				"ClientId": "(hier ClientId einfügen)",
				"ClientSecret": "(hier ClientSecret einfügen)",
				"Scopes": [
					"profile",
					"email",
					"rooms_api"
				],
				"CallbackPath": "/signin-microsoft",
				"ValidateIssuer": true,
				"Issuer": "https://login.microsoftonline.com/(hier TenantId einfügen)/v2.0",
				"UserIdClaim": "preferred_username",
				"ValidateAudience": false
			},
      ]
```

Somit kann nun Microsoft als Login für Rooms und das Addin verwendet werden.

Jedes Login muss in Rooms hinterlegt sein, normalerweise wird dies über einen Benutzerdatenimport durchgeführt.<br>
z.B.<br>
Einstellungen --> Personen --> Person editieren --> Logins --> Erstellen --> Logontyp: OAuth 2.0 --> Logonname: Mail z.B. hans@example.com