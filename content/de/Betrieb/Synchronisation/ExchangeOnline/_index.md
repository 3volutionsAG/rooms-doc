---
title: "Exchange Online (M365)"
linkTitle: "Exchange Online"
weight: 2
description: Einrichten von Synchronisation mit Exchange Online (M365)
---

Bei den Personen muss der korrekte SyncModus gewählt werden

Setting --> Personen --> Person 

hier muss O365 oder O365Pull gewählt werden.

Die korrekte Sync URL wird bereits vorausgefüllt:

[https://outlook.office365.com/EWS/Exchange.asmx](https://outlook.office365.com/EWS/Exchange.asmx)

# Authentisierung

Auf dem Applikationsserver müssen die Anmeledinformationen in das RoomsAppSettings.config eingetragen werden. Dafür können diese Schritte befolgt werden:

1. Öffnen Sie einen Browser und navigieren Sie zum Azure Active Directory Admin Center. Melden Sie sich mit einem persönlichen Konto (auch: Microsoft-Konto) oder einem Geschäfts- oder Schulkonto an.
2. Wählen Sie in der linken Navigationsleiste Azure Active Directory aus und wählen Sie dann App-Registrierungen unter Verwalten aus.
3. Wählen Sie Neue Registrierung aus. Legen Sie auf der Seite Anwendung registrieren die Werte wie folgt fest.
	1. Geben Sie unter Name einen Anzeigenamen für Ihre App an.
	2. Legen Sie Unterstützte Kontotypen auf den Wert fest, der für Ihr Szenario sinnvoll ist.
4. Wählen Sie Registrieren aus. Kopieren Sie auf der nächsten Seite den Wert der Anwendungs-ID (Client-ID), und speichern Sie ihn. Sie benötigen ihn im nächsten Schritt.
5. Wählen Sie in der linken Navigation unter Verwalten die Option API-Berechtigungen aus.
6. Wählen Sie Berechtigung hinzufügen aus. Wählen Sie auf der Seite API-Berechtigungen anfordern unter Meine Apps die Option Office 365 Exchange Online aus.
7. Wählen Sie Anwendungsberechtigungen und dann full\_access\_as\_app aus. Klicken Sie auf Berechtigungen hinzufügen.
8. Wählen Sie Administratorzustimmung für Organisation gewähren aus und bestätigen Sie Ihre Auswahl im Dialogfeld &quot;Zustimmung&quot;.
9. Wählen Sie in der linken Navigation unter Verwalten die Option Zertifikate und Geheimnisse aus.
10. Wählen Sie Neuer geheimer Clientschlüssel aus, geben Sie eine kurze Beschreibung ein, und wählen Sie dann Hinzufügen aus.
11. Kopieren Sie den Wert des neu hinzugefügten geheimen Clientschlüssels und speichern Sie ihn. Sie benötigen ihn später.


Nun können die folgenden Zeilen zum RoomsAppSettings.config hinzugefügt werden und der Rooms Service neugestartet werden, xxx sollte mit den Werten, die man aus den vorherigen Schritten erlangt hat, ersetzt werden dieses File findet man im Installationsverzeichnis von ROOMS (Default: C:\Program Files (x86)\Garaio\ROOMS\Configuration).

RoomsAppSettings.config
```
<RoomsAppSettings>
...
    <add key="ExchangeTenantId" value="xxx" />
    <add key="ExchangeAppId" value="xxx" />
    <add key="ExchangeClientSecret" value="xxx" />
...
</RoomsAppSettings>
```

### Authentisieren mit Zertifikat

Mit Rooms Release 4.7.2111 ist Authentisierung mit Zertifikat möglich.

1. Laden Sie unter "Certificates" Ihr Zertifikat hoch und notieren Sie sich den Thumbprint.
2. Fügen Sie das Zertifikat nun auf dem Applikationsserver unter Local Computer (Local Machine) --> Personal (My) hinzu.

Nun können die folgenden Zeilen zum RoomsAppSettings.config hinzugefügt werden und der Rooms Service neugestartet werden, xxx sollte mit den Werten, die man aus den vorherigen Schritten erlangt hat ersetzt werden.

```
<RoomsAppSettings>
...
    <add key="ExchangeTenantId" value="xxx" />
    <add key="ExchangeAppId" value="xxx" />
    <add key="ExchangeCertThumbprint" value="xxx" />
...
</RoomsAppSettings>
```

[https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth)

