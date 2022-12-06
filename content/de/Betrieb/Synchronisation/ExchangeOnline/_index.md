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

Achtung, der Service User mit dem der ROOMS Service läuft benötigt Zugriff auf den Private key, falls die Fehlermeldung "Keyset does not exist" im Rooms Log auftaucht, dann muss dem Service User die Rechte gegeben werden:

Rechtsklick auf Certifikat --> All Tasks --> Manage private key

Service User hinzufügen (Full control)

https://improveandrepeat.com/2018/12/how-to-fix-the-keyset-does-not-exist-cryptographicexception/


## Zugriff auf gewisse Mailboxen / User begrenzen

https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access

Powershell vorbereiten
```
Install-Module -Name ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName o365admin@rooms.myo365.site
```
Distribution Gruppe erstellen und Benutzer hinzufügen, es kann auch eine bereits bestehende verwendet werden.

```
New-DistributionGroup -Name "SyncIsAllowed" -Type "Security"
Add-DistributionGroupMember -Identity "SyncIsAllowed" -Member "DiegoS@rooms.myo365.site"
```
Access Policy erstellen, dabei wird die ExchangeAppId vom schritt oben und die Distribution Gruppe gebraucht.
```
New-ApplicationAccessPolicy -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f -PolicyScopeGroupId "SyncIsAllowed" -AccessRight RestrictAccess -Description "Restrict this app to members of distribution group SyncIsAllowed."
```

Nun kann das ganze überprüft werden:

```
Test-ApplicationAccessPolicy -Identity "DiegoS@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f


AppId             : 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
Mailbox           : DiegoS
MailboxId         : 07742579-71ac-4659-abd7-aa1a1be5d33a
MailboxSid        : S-1-5-21-3752945577-1385056011-2515546586-533997
AccessCheckResult : Granted

Test-ApplicationAccessPolicy -Identity "AdeleV@rooms.myo365.site" -AppId 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f


AppId             : 6e9157a8-801c-4f5c-9522-9ae9ffd2aa4f
Mailbox           : AdeleV
MailboxId         : 1cfe2bc2-368a-4de5-92d6-5b2846c8d162
MailboxSid        : S-1-5-21-3752945577-1385056011-2515546586-533996
AccessCheckResult : Denied

```

Achtung: Änderungen an Anwendungszugriffsrichtlinien können länger als 1 Stunde in Microsoft Graph REST-API-Aufrufen wirksam werden, auch wenn Test-ApplicationAccessPolicy positive Ergebnisse anzeigt.

Grundsätzlich ist es auch möglich DenyAccess anstatt RestrictAccess zu verwenden um nur einer bestimmten Gruppe den Zugang zu verwehren.
