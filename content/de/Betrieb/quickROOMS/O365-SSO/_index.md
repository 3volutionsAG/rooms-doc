---
title: "Microsoft 365 SSO für das Outlook Add-In"
linkTitle: "Microsoft 365 SSO"
weight: 2
description: "Microsoft Entra ID für Single Sign-On im quickROOMS Outlook Add-In konfigurieren."
---

Mit dieser Konfiguration melden sich Benutzer im quickROOMS Outlook Add-In über Microsoft 365 an. Dafür werden eine App-Registrierung in **Microsoft Entra ID** und ein externer OpenID-Connect-Provider im ROOMS IDP eingerichtet.

{{% alert title="Wann ist diese Konfiguration erforderlich?" color="info" %}}
Diese Anleitung gilt für das Microsoft-365-SSO des Outlook Add-Ins. Wenn das Add-In Forms- oder Windows-Authentisierung verwendet, beispielsweise mit Exchange On-Premises, können Sie diese Konfiguration überspringen.

Microsoft bezeichnet dieses Verfahren inzwischen als **Legacy Office SSO**. quickROOMS verwendet für diese Integration weiterhin diesen Ablauf.
{{% /alert %}}

## Voraussetzungen

- Administrativer Zugriff auf **Microsoft Entra ID** mit Berechtigung für App-Registrierungen und Administratorzustimmungen
- HTTPS-Adresse des ROOMS IDP, beispielsweise `https://idp.example.com`
- HTTPS-Adresse von quickROOMS, beispielsweise `https://wizard.example.com`
- Zugriff auf die Konfiguration des ROOMS IDP

## Benötigte Werte

Halten Sie während der Einrichtung folgende Werte bereit. Die Platzhalter werden in den nachfolgenden Schritten wiederverwendet.

{{< bootstrap-table "table table-striped" >}}
| Wert | Beispiel | Verwendung |
|---|---|---|
| IDP-Adresse | `https://idp.example.com` | Redirect-URI und IDP-Konfiguration |
| quickROOMS-Domain | `wizard.example.com` | Anwendungs-ID-URI |
| Mandanten-ID | `<TENANT-ID>` | Entra-ID-Endpunkte im ROOMS IDP |
| Anwendungs-ID | `<CLIENT-ID>` | App-Registrierung und ROOMS IDP |
| Geheimer Clientschlüssel | `<CLIENT-SECRET>` | Vertrauliche Anmeldung des ROOMS IDP |
{{< /bootstrap-table >}}

## 1. App in Microsoft Entra ID registrieren

1. Öffnen Sie im [Microsoft Entra Admin Center](https://entra.microsoft.com/) **Identität → Anwendungen → App-Registrierungen**.
2. Wählen Sie **Neue Registrierung**.
3. Erfassen Sie die Anwendung:

   {{< bootstrap-table "table table-striped" >}}
   | Feld | Wert |
   |---|---|
   | Name | Aussagekräftiger Name, beispielsweise `3V ROOMS SSO` |
   | Unterstützte Kontotypen | In der Regel **Nur Konten in diesem Organisationsverzeichnis** |
   | Plattform der Umleitungs-URI | **Web** |
   | Umleitungs-URI | `https://idp.example.com/signin-microsoft` |
   {{< /bootstrap-table >}}

4. Wählen Sie **Registrieren**.
5. Kopieren Sie aus der Übersicht:
   - **Anwendungs-ID (Client-ID)** als `<CLIENT-ID>`
   - **Verzeichnis-ID (Mandanten-ID)** als `<TENANT-ID>`

## 2. Geheimen Clientschlüssel erstellen

1. Öffnen Sie in der App-Registrierung **Zertifikate und Geheimnisse → Geheime Clientschlüssel**.
2. Wählen Sie **Neuer geheimer Clientschlüssel**.
3. Erfassen Sie eine Beschreibung und ein Ablaufdatum.
4. Wählen Sie **Hinzufügen**.
5. Kopieren Sie sofort den angezeigten **Wert** als `<CLIENT-SECRET>`.

{{% alert title="Wichtig: Ablauf des Clientschlüssels" color="warning" %}}
Der Wert des Clientschlüssels wird nur einmal vollständig angezeigt. Speichern und übermitteln Sie ihn ausschliesslich über einen sicheren Kanal.

ROOMS kann sich nach Ablauf des Schlüssels nicht mehr bei Microsoft Entra ID anmelden. Planen Sie die Erneuerung vor dem Ablaufdatum ein und aktualisieren Sie danach die IDP-Konfiguration.
{{% /alert %}}

## 3. Microsoft-Graph-Berechtigungen hinzufügen

1. Öffnen Sie **API-Berechtigungen → Berechtigung hinzufügen**.
2. Wählen Sie **Microsoft Graph → Delegierte Berechtigungen**.
3. Fügen Sie folgende OpenID-Berechtigungen hinzu:
   - `openid`
   - `profile`
   - `email`
4. Wählen Sie **Administratorzustimmung für `<Mandant>` erteilen** und bestätigen Sie den Dialog.

## 4. API für das Outlook Add-In bereitstellen

### Anwendungs-ID-URI festlegen

1. Öffnen Sie **Eine API verfügbar machen**.
2. Wählen Sie bei **Anwendungs-ID-URI** die Aktion **Festlegen**.
3. Erfassen Sie die URI im folgenden Format:

```text
api://wizard.example.com/<CLIENT-ID>
```

Die Domain muss mit der Domain übereinstimmen, die im Outlook-Add-In-Manifest verwendet wird.

### Bereich `access_as_user` hinzufügen

1. Wählen Sie **Bereich hinzufügen**.
2. Erfassen Sie den Bereich:

   {{< bootstrap-table "table table-striped" >}}
   | Feld | Wert |
   |---|---|
   | Bereichsname | `access_as_user` |
   | Wer darf zustimmen? | **Administratoren und Benutzer** |
   | Anzeigename | `Profildaten lesen` |
   | Beschreibung | `Ermöglicht dem Outlook Add-In den Zugriff auf die ROOMS Web-API im Namen des Benutzers.` |
   | Status | **Aktiviert** |
   {{< /bootstrap-table >}}

3. Wählen Sie **Bereich hinzufügen**.

### Microsoft-Office-Clients vorautorisieren

1. Wählen Sie **Clientanwendung hinzufügen**.
2. Erfassen Sie als Client-ID:

```text
ea5a67f6-b6f3-4338-b240-c655ddc3cc8e
```

3. Aktivieren Sie den eben erstellten Bereich `access_as_user`.
4. Wählen Sie **Anwendung hinzufügen**.

{{% alert title="Hinweis zu den Office-Client-IDs" color="info" %}}
Die Client-ID `ea5a67f6-b6f3-4338-b240-c655ddc3cc8e` autorisiert die unterstützten Microsoft-Office-Endpunkte gemeinsam. Wenn Sie nur einzelne Plattformen zulassen möchten, können Sie stattdessen die passenden IDs separat hinterlegen:

| Plattform | Client-ID |
|---|---|
| Microsoft Office | `d3590ed6-52b3-4102-aeff-aad2292ab01c` |
| Office im Web | `93d53678-613d-4013-afc1-62e9e444a0a5` |
| Outlook im Web | `bc59ab01-8403-45c6-8796-ac3ef710b3e3` |
{{% /alert %}}

## 5. Zugriffstoken-Version festlegen

1. Öffnen Sie **Manifest**.
2. Setzen Sie innerhalb des Objekts `api` die Eigenschaft `requestedAccessTokenVersion` auf `2`:

```json
"api": {
  "requestedAccessTokenVersion": 2
}
```

3. Wählen Sie **Speichern**.

{{% alert title="Hinweis" color="info" %}}
Es kann einige Minuten dauern, bis Microsoft Entra ID die Änderung für alle Endpunkte übernommen hat.
{{% /alert %}}

## 6. Microsoft Entra ID im ROOMS IDP konfigurieren

Ergänzen Sie den Microsoft-Provider im Abschnitt `ExternalOpenIdConnectProvider` der IDP-Konfiguration. Ersetzen Sie die Platzhalter mit den zuvor notierten Werten.

```json
"ExternalOpenIdConnectProvider": [
  {
    "Id": "microsoft",
    "Label": "Microsoft / Entra ID",
    "Authority": "https://login.microsoftonline.com/<TENANT-ID>/v2.0/",
    "ClientId": "<CLIENT-ID>",
    "ClientSecret": "<CLIENT-SECRET>",
    "Scopes": [
      "profile",
      "email"
    ],
    "CallbackPath": "/signin-microsoft",
    "ValidateIssuer": true,
    "Issuer": "https://login.microsoftonline.com/<TENANT-ID>/v2.0",
    "UserIdClaim": "preferred_username",
    "ValidateAudience": false
  }
]
```

{{< bootstrap-table "table table-striped" >}}
| Einstellung | Bedeutung |
|---|---|
| `Authority` | OpenID-Connect-Endpunkt des Microsoft-Entra-Mandanten |
| `ClientId` | Anwendungs-ID der App-Registrierung |
| `ClientSecret` | Wert des geheimen Clientschlüssels |
| `CallbackPath` | Muss zur Umleitungs-URI `/signin-microsoft` passen |
| `UserIdClaim` | Microsoft-Claim, der dem ROOMS-Login zugeordnet wird |
{{< /bootstrap-table >}}

Starten Sie den ROOMS IDP nach der Konfigurationsänderung neu.

## 7. Microsoft-Login einer ROOMS-Person zuordnen

Der Wert aus dem Microsoft-Claim `preferred_username` muss als Login der Person in ROOMS vorhanden sein. Normalerweise erfolgt diese Zuordnung über den Benutzerdatenimport.

Für eine manuelle Zuordnung:

1. Öffnen Sie **Einstellungen → Personen**.
2. Bearbeiten Sie die gewünschte Person.
3. Öffnen Sie **Logins → Erstellen**.
4. Wählen Sie als Logontyp **OAuth 2.0**.
5. Erfassen Sie als Logonname den Wert von `preferred_username`, üblicherweise die geschäftliche E-Mail-Adresse beziehungsweise den User Principal Name.

## Konfiguration prüfen

- Microsoft wird auf der IDP-Anmeldeseite als Login-Anbieter angezeigt.
- Der Benutzer kann sich in ROOMS über Microsoft anmelden.
- Das Outlook Add-In erhält ein SSO-Token und öffnet quickROOMS ohne zusätzliche Anmeldung.
- In der [ROOMS-Ereignisanzeige]({{% relref "/3VROOMS/Einstellungen/System/Ereignisanzeige" %}}) erscheinen keine Fehler zur Tokenvalidierung oder Benutzerzuordnung.

## Weiterführende Dokumentation

- [quickROOMS installieren und konfigurieren]({{% relref "../Installation" %}})
- [Outlook Add-In über Microsoft 365 bereitstellen]({{% relref "../AddinDeployment/O365" %}})
- [Microsoft: Office Add-In für Legacy Office SSO registrieren](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/register-sso-add-in-aad-v2)
