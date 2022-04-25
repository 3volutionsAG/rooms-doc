---
title: "Synchronisation Exchange"
linkTitle: "Funktionsweise"
weight: 10
description: Dieses Dokument enthält notwendige Informationen im Zusammenhang mit der Synchronisation von Reservationen einer ROOMS Umgebung mit Kalendereinträgen einer MS Exchange Umgebung.
---
## Einleitung

Der Ausdruck Exchange 20_XX_ ist austauschbar, wir sprechen künftig nur noch von Exchange, welche alle Versionen adressiert.

Die Synchronisation umfasst folgende Funktionalitäten:

1. Reservationen aus der ROOMS Umgebung können als Kalendereinträge in eine MS Exchange Umgebung exportiert werden. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._
2. Beim Erstellen oder Editieren von Kalendereinträgen können direkt in einem MS Outlook Client neue ROOMS Reservationen erstellt werden. _(Diese Funktionalität setzt zusätzlich die Installation des ROOMS OutlookAddins auf allen erwünschten Clients voraus; es handelt sich dabei aber um eine optionale Erweiterung, die für den Betrieb der Synchronisation nicht zwingend benötigt wird)._
3. In beiden Fällen werden in der Folge alle Änderungen an den betreffenden Elementen gegenseitig übernommen. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._
4. Abfrage und Anzeige der Free/BusyInformationen von Teilnehmern, wenn diese in Exchange vorhanden sind. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._

Grundsätzlich muss unterschieden werden, mit welchen MS Exchange Versionen die Synchronisierung vorgenommen werden soll; je nach gewünschter Funktionalität und eingesetzten Versionen werden unterschiedliche Installations- und Konfigurationsschritte benötigt. Bei den Informationen in diesem Dokument ist also darauf zu achten, ob sie eine oder mehrere bestimmte Versionen betreffen (Versionen werden ausgewiesen) oder allgemein gültig sind (keine Kennzeichnung vorhanden). Aktuell werden die MS Exchange Versionen 2007, 2010 und 2013 unterstützt.

Es ist möglich, die Synchronisation einer ROOMS Umgebung mit verschiedenen MS Exchange Versionen und Umgebungen gleichzeitig zu betreiben, da die Synchronisierung pro Benutzer konfiguriert wird. Pro Benutzer kann aber nur mit einer MS Exchange Version und Umgebung synchronisiert werden.

Die Synchronisation einer Reservation ist ausschliesslich mit dem Kalender des Organisators der Reservation möglich (Teilnehmer erhalten Reservationsanfragen des Organisators). Entspricht der in der ROOMS Web Applikation angemeldete Benutzer nicht dem Organisator einer Reservation (bei einer Reservation für eine Drittperson), wird bei einer allfälligen Synchronisation folglich ein Kalendereintrag in einem fremden Kalender erzeugt. Wechselt der Organisator einer bereits synchronisierten Reservation, wird der Kalendereintrag im Kalender des bisherigen Organisators gelöscht und ein neuer Eintrag im Kalender des neuen Organisators erstellt.

Die MS Outlook Version ist nicht an einen bestimmten Benutzer gebunden und es können verschiedene Versionen gleichzeitig betrieben werden. Aktuell werden die MS Outlook Versionen 2007, 2010 und 2013, 2016, 2019 und Exchange Online (O365) unterstützt.

## Systemübersicht

Nachstehendes Kapitel soll einen Überblick über die verschiedenen Systemkomponenten und deren Interaktionen geben.

{{< imgproc Uebersicht Resize "1024x" >}}{{< /imgproc >}}

_Die gewählte Skalierung bzw. die Anzahl der Server (Maschinen) und Aufteilung der Komponenten wird in der Darstellung nicht berücksichtigt._

**ROOMS Umgebung**

Dies umfasst die Datenbank, die Web Applikation mit den Web Services und den Windows Service.

**MS Exchange Umgebung**

Dies umfasst einen Client Access Server, einen Mailbox Server, sowie normalerweise weitere MS Exchange Server Komponenten, die für die Synchronisation nicht von Bedeutung sind.

**Client Umgebung**

Dies umfasst den MS Outlook Client sowie weitere Komponenten, die für die Synchronisation nicht von Bedeutung sind.

**MAPI Verbindung**

Dies umfasst die Kommunikation zwischen einem MS Outlook Client und einer MS Exchange Umgebung.

**Http(s)****Verbindung 1**

Dies umfasst Web Requests (REST) des ROOMS 4 Outlook Add-in an die ROOMS 4 Web Applikation. Diese Requests dienen dazu, die Verfügbarkeit von Ressourcen zu prüfen und die Reservationen vorzunehmen.

**Http(s)****Verbindung 2**

Dies umfasst Web Service Requests (SOAP) des ROOMS Windows Services an die Exchange Web Services eines MS Exchange Mailbox Servers. Diese Requests dienen dazu, die Kalendereinträge mit den Reservationen zu synchronisieren, die FreeBusy Informationen abzurufen und die Subscriptions der Push Notifications zu verwalten.

**Http(s)****Verbindung 3**

Dies umfasst Web Service Requests (SOAP) in Form von Push Notifications, die aus der MS Exchange Umgebung an die ROOMS Web Services gesendet werden. Diese Requests dienen dazu, die Reservationen mit den Kalendereinträgen zu synchronisieren.

# Prozesse

## (A)- Abonnieren der Push Notifikation

Der Windows Service erstellt für jeden Benutzer, welcher die Synchronisation eingeschaltet hat, ein Push Abonnement (über **Connection 2** ). Durch dieses Abonnement wird GARAIO ROOMS über alle Änderungen der Kalender-Einträge der jeweiligen Personen informiert.

## (B) - Neue Reservation über die Web Applikation

B1. Der Benutzer erstellt eine neue Reservation über die ROOMS Web Applikation (Browser).

B2. Der Windows Service erstellt über **Verbindung 2** einen neuen Kalendereintrag. Die ItemId des Kalendereintrags wird auf der Reservation, die AppointmentOid der Reservation auf dem Kalendereintrag abgelegt.

B3. Die MS Exchange Umgebung sendet eine Push Notifikation (Create) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (der Kalendereintrag wurde ja gerade erst mit den Werten der Reservation erstellt: B2).

## (C) - Neue Reservation über einen MS Outlook Client mit Add-in

C1. Der Benutzer erstellt einen neuen Kalendereintrag in einem MS Outlook Client und öffnet den Reservationsbereich des ROOMS OutlookAddins.

C2. Das ROOMS OutlookAddin sucht nach verfügbaren Ressourcen über **Verbindung 1**.

C3. Der Benutzer wählt eine Ressource aus und speichert den Kalendereintrag.

C4. Das ROOMS OutlookAddin erstellt eine neue Reservation über **Verbindung 1**. Die AppointmentOid der Reservation wird auf dem Kalendereintrag abgelegt.
_Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!_

C5. Die MS Exchange Umgebung sendet eine Push Notification (Create) über **Verbindung 3**. Es wird keine Reservation mit der entsprechenden ItemId gefunden.

C6. Der Windows Service sucht nach einem Kalendereintrag mit der entsprechenden AppointmentOid und hinterlegt dessen ItemId auf der Reservation.

## (D) Anpassung über die Web Applikation

D1. Der Benutzer ändert / annulliert eine Reservation über die ROOMS 4 Web Applikation (Browser).

D2. Der Windows Service aktualisiert / entfernt über **Verbindung 2** den Kalendereintrag mit der entsprechenden ItemId.

D3. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (der Kalendereintrag wurde ja gerade mit den Werten der Reservation aktualisiert: D2).

## (E) - Anpassung über einen MS Outlook Client mit Addin

E1. Der Benutzer ändert / löscht einen Kalendereintrag in einem MS Outlook Client mit ROOMS OutlookAddin. Die hinterlegte AppointmentOid kennzeichnet den Kalendereintrag als mit einer Reservation verknüpft.

E2. Das ROOMS OutlookAddin aktualisiert / annulliert die Reservation über **Verbindung 1**.
 Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!

E3. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (die Reservation wurde ja bereits mit den Werten des Kalendereintrags aktualisiert: F2).
_Hinweis: Wird auf einem Kalendereintrag im MS Outlook die Funktion Löschen aufgerufen, wird der Eintrag nicht gelöscht, sondern lediglich in den Papierkorb verschoben. Die Reservation in ROOMS 4 wird aber trotzdem annulliert - der Kalendereintrag sollte also nicht wieder hergestellt werden. (Tipp: Das Drücken der Taste Shift während dem Aufruf der Funktion Löschen führt zu einer direkten Löschung im MS Outlook.)_

## (F) – Anpassen über ein MS Outlook Client ohne Addin

F1. Der Benutzer ändert / löscht einen Kalendereintrag in einem MS Outlook Client ohne ROOMS OutlookAddin (oder MS Outlook Web Access, POP3, IMAP, usw.).
_Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!_

F2. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden und eine Veränderung festgestellt, die Reservation wird entsprechend aktualisiert / annulliert.

_Hinweis: Wird auf einem Kalendereintrag im MS Outlook die Funktion Löschen aufgerufen, wird der Eintrag nicht gelöscht sondern lediglich in den Papierkorb verschoben. Die Reservation in ROOMS wird aber trotzdem annulliert - der Kalendereintrag sollte also nicht wiederhergestellt werden. (__ **Tip:** _ _Das Drücken der Taste Shift während dem Aufruf der Funktion Löschen führt zu einer direkten Löschung im MS Outlook.)_

# Installation und Konfiguration

Die Anleitungen richten sich an Personen, welche mit der Konfiguration von MS Exchange Servern vertraut und das Durchführen von Installationsvorgängen gewohnt sind.

## Vorbemerkung

Eine Synchronisation mit einer MS Exchange Umgebung impliziert, dass aus der ROOMS Umgebung heraus Zugriffe auf MS Exchange Server und Mailboxen erfolgen. Da in den Mailboxen private und mitunter auch vertrauliche oder geschäftsrelevante Informationen vorhanden sind, ist dies ein heikler Vorgang.

ROOMS orientiert sich deshalb bei jeder MS Exchange Version an den verfügbaren Standards und optimiert die Synchronisation jeweils hinsichtlich Sicherheit und Performance. Auch bei sorgfältiger Berücksichtigung der genannten Punkte ist es unumgänglich, dass grundsätzlich Konzessionen in diesen Bereichen gemacht werden müssen. Eine dieser Konzessionen ist die Berechtigung eines Service Accounts auf die entsprechenden MS Exchange Server. Theoretisch ist es zwar möglich, die Synchronisation im Kontext des an der Web Applikation angemeldeten Benutzers durchzuführen und damit auf eine generelle Berechtigung eines Service Accounts zu verzichten. Dieses Konzept führt jedoch zu zahlreichen Schwierigkeiten:

- Der Konfigurationsaufwand erhöht sich massiv (Impersonierung, Service Principal Names, Delegation, MS Outlook Freigaben).
- Die Umsetzung einiger Funktionalitäten wird verunmöglicht (Reservationsänderungen, die nicht im Kontext des Benutzers erfolgen, dazu gehören beispielsweise alle Aktionen des ROOMS Windows Services, können nicht synchronisiert werden).
- Die Performance leidet spürbar (Benutzer müssen auf den Abschluss der Synchronisation warten, weil diese nicht asynchron erfolgen kann).

Unsere Erfahrungen im Enterprise-Umfeld haben gezeigt, dass dieses Konzept aufgrund der genannten Schwierigkeiten nicht praxistauglich ist und das Berechtigen eines Service Accounts als einzig brauchbare Lösung betrachtet werden muss.

Die damit verbundenen Sicherheitsrisiken müssen und können organisatorisch gelöst werden.
 Eine andere Konzession ist die erhöhte Auslastung der entsprechenden MS Exchange Server. Die Requests über Verbindung 2 und insbesondere die Requests über Verbindung 3 bzw. deren Aufbereitung können die Auslastung der MS Exchange wie auch der ROOMS Server u.U. markant erhöhen und evtl. zusätzliche Hardware erfordern. Auf jeden Fall müssen vor der Einführung entsprechende Berechnungen und Tests durchgeführt werden. Die Gefahr von Performance-Problemen muss und kann damit frühzeitig verhindert werden.

## ROOMS Umgebung

### Globale Konfiguration

Im Gegensatz zur restlichen Web Appplikation muss auf dem Unterverzeichnis &quot;WebServices&quot; anonyme Requests zugelassen werden. Dazu ist im IIS die entsprechende Einstellung zu setzen. _(Hinweis: Diese Einstellung wird auch so in der Installationsanleitung aufgeführt.)_

Damit der ROOMS Windows Service jegliche sync bezogenen Aktionen abarbeiten kann, müssen folgende Einträge zur Structuremap Konfiguration hinzugefügt werden.

```
<!--ServiceSessions - Exchange-Synchronisation-->
	<AddInstance Key="backSyncService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="collaborationService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.CollaborationService.CollaborationServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="pushSubscriberService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.PushSubscriberService.PushSubscriberServiceSession,Garaio.Products.Rooms.Core"/>
	<AddInstance Key="syncTestService" PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core" PluggedType="Garaio.Products.Rooms.Core.WindowsServices.SyncTestService.SyncTestServiceSession,Garaio.Products.Rooms.Core"/>
```

Zusätzlich muss überprüft werden, ob der Eintrag für die Root-URL korrekt hinterlegt wurde.
Diese URL wird verwenden, um den korrekten Pfad für die Push-Notifikationen zu generieren ( **Connection 3** ).

### Benutzer Konfiguration

Um die Synchronisation für einen Benutzer zu aktivieren müssen folgende Profileinstellungen getätigt werden.

{{< imgproc Benutzer_Konfiguration Resize "1024x" >}}{{< /imgproc >}}

**E-mail** : Primäre STMP Addresse für den entsprechenden Benutzer
**Sync. Mode** : Exchange Version auswählen
**Exchange20XX URL** : Die URL über welche die EWS ( **E** xchange **W** eb **S** ervices) aufgerufen werden können.

## Exchange 2013/2016/2019

Um die Synchronisation mit einer MS Exchange 2013 Umgebung zuzulassen, muss der Account, unter dem der ROOMS Windows Service läuft, über die entsprechenden Zugriffsrechte verfügen. Anstelle von normalen Vollzugriffsrechten kann dafür das sogenannte Impersonierungsrecht vergeben werden, welches den Vorteil besitzt, dass es nur im Kontext der MS Exchange Web Services verwendet werden kann. Der berechtigte Account kann dann Aktionen im Namen eines anderen Benutzers ausführen, womit die ROOMS Umgebung im Namen eines bestimmten Benutzers auf dessen eigene Mailbox zugreifen kann.

Zur Vergabe des Rechts muss in der Exchange Management Konsole folgender Befehl ausgeführt werden (gilt für alle Benutzer der Organisation):

Optional: Falls erwünscht, kann mittels Angabe eines Scopes die Berechtigung auf eine dedizierte Gruppe von Mailbox-Usern beschränkt werden. Dazu wird zuerst ein solcher Scope erstellt. Danach wird der oben aufgeführte Befehl ausgeführt, diesmal aber mit Angabe des eben erstellten Scopes (es kann natürlich auch ein bereits vorhandener Scope verwendet werden):


Der Wert für den RecipientRestrictionFilter-Parameter kann sehr detailliert angegeben werden. Hierzu ein Beispiel, welches auf Domänengruppe und Benutzertyp filtert:

Je nach Exchange Version kann es sein, dass bei der Ausführung des New-ManagementRoleAssignement Befehls diese Zuweisung standardmässig deaktiviert ist. In dem Fall kann dies wie folgt aufgehoben werden:

Das oben als „Datenrecht&quot; bezeichnete Impersonierungsrecht kann nur auf Stufe Mailbox Server oder Mailbox, nicht aber auf einzelnen Folders oder Elementen vergeben werden. Der Grund liegt darin, dass der MS Exchange Server die Impersonierung vorzeitig (bei Verbindungsaufnahme) durchführt und danach (beim Zugriff auf Folder und Elemente) keine Unterscheidung zwischen echten und impersonierten Benutzern mehr macht (auch in den Log-Files ist nicht ersichtlich, ob es sich um einen impersonierten Benutzer handelt oder nicht).

Der verwendete Account darf **kein** MS Exchange Administrator sein!

Zusätzlich müssen die sogenannten Client Throttling Policies berücksichtigt werden, mit denen sich der MS Exchange 2013 vor Angriffen schützt und für eine gerechte Verteilung der Ressourcen sorgt. Um einen uneingeschränkten Zugriff für ROOMS sicherzustellen, ist das Absetzen folgender Befehle in der Exchange Management Konsole erforderlich:

Weitere Informationen zu den verschiedenen Themen dieser Seite sind hier zu finden:

[Konfiguration Exchange Impersonation](http://msdn.microsoft.com/en-us/library/bb204095.aspx):
 http://msdn.microsoft.com/en-us/library/bb204095.aspx
ManagementScope erstellen (Technet):
 http://technet.microsoft.com/en-us/library/dd335137%28EXCHG.140%29.aspx
[Throttling Policies](http://technet.microsoft.com/en-us/library/dd298094.aspx):
[http://technet.microsoft.com/en-us/library/dd298094.aspx](http://technet.microsoft.com/en-us/library/dd298094.aspx)

## Exchange Online (O365)

### Step-by-step guide

Als Sync-Modus Exchange2013 auswählen und folgende URL eintragen: https://outlook.office365.com/EWS/Exchange.asmx

Achtung: Damit die Sync funktioniert muss ein Benutzer, welcher über Impersonierungsrechte verfügt, in der O365 Exchange admin console hinterlegt werden, dazu kann folgende Anleitung konsultiert werden: Setting up Application Impersonation for Office 365

Der erfasste Benutzer in der O365 Umgebung muss nun noch im RoomsAppSettings.config File hinterlegt werden, dieses File findet man im Installationsverzeichnis von ROOMS (Default: C:\Program Files (x86)\Garaio\ROOMS\Configuration).
RoomsAppSettings.config

```
<RoomsAppSettings>
...
    <add key="Exchange2013ServiceUser" value="service.user@domain.com" />
    <add key="Exchange2013ServicePassword" value="YourPW" />
    <add key="Exchange2013ServiceDomain" value="YourDomain.com" />
...
</RoomsAppSettings>
```

Ergänzen Sie das File mit den obigen drei Einträgen und den angepassten values.
Config.bat ausführen, um die angepasste Konfiguration zu verteilen.

Es muss sichergestellt werden, dass ROOMS von extern erreichbar ist und Anonymous Authentication auf dem WebServices directory aktiviert ist. Dies kann überprüft werden indem Sie außerhalb Ihres Netzes folgende URL aufrufen: http(s)://[ROOMS-URL]/WebServices/SyncNotification.svc

Wenn dies klappt, muss noch sichergestellt werden, dass die Applikation Root-Url in den "Globale Parameter" von ROOMS korrekt hinterlegt ist, also in der Form http(s)://[ROOMS-URL]/[Mandant]

### Ab Rooms Release 4.7.2010

Mit Rooms Release 4.7.2010 wird OAuth Authentication für Exchange Online unterstützt:

Exchange stellt folgende Authentisierungsoptionen zur Verfügung:

1. OAuth 2.0 (Exchange Online only)
2. NTLM (Exchange on-premises only)
3. Basic (no longer recommended)

[https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-authenticate-an-ews-application-by-using-oauth)

### Rooms für OAuth Authentication konfigurieren

In Setting --> Personen --> Person muss der Sync. Modus gesetzt werden

Die korrekte URL wird bereits vorausgefüllt:

[https://outlook.office365.com/EWS/Exchange.asmx](https://outlook.office365.com/EWS/Exchange.asmx)

Auf dem Applikationsserver müssen die Anmeledinformationen in das RoomsAppSettings.config eingetragen werden. Dafür können diese Schritte befolgt werden:

1. Öffnen Sie einen Browser und navigieren Sie zum Azure Active Directory Admin Center. Melden Sie sich mit einem persönlichen Konto (auch: Microsoft-Konto) oder einem Geschäfts- oder Schulkonto an.
2. Wählen Sie in der linken Navigationsleiste Azure Active Directory aus und wählen Sie dann App-Registrierungen unter Verwalten aus.
3. Wählen Sie Neue Registrierung aus. Legen Sie auf der Seite Anwendung registrieren die Werte wie folgt fest.
	1. Geben Sie unter Name einen Anzeigenamen für Ihre App an.
	2. Legen Sie Unterstützte Kontotypen auf den Wert fest, der für Ihr Szenario sinnvoll ist.
	3. Ändern Sie für URI umleiten die Dropdownliste in Öffentlicher Client (mobil &amp; Desktop), und legen Sie den Wert auf urn:ietf:wg:oauth:2.0:oob fest.
4. Wählen Sie Registrieren aus. Kopieren Sie auf der nächsten Seite den Wert der Anwendungs-ID (Client-ID), und speichern Sie ihn. Sie benötigen ihn im nächsten Schritt.
5. Wählen Sie in der linken Navigation unter Verwalten die Option API-Berechtigungen aus.
6. ~~Wählen Sie Berechtigung hinzufügen aus. Wählen Sie auf der Seite API-Berechtigungen anfordern unter Unterstützte Legacy-APIs die Option Exchange aus.~~
6. Wählen Sie Berechtigung hinzufügen aus. Wählen Sie auf der Seite API-Berechtigungen anfordern unter Meine Apps  die Option Office 365 Exchange Online aus.
7. Wählen Sie Anwendungsberechtigungen und dann full\_access\_as\_app aus. Klicken Sie auf Berechtigungen hinzufügen.
8. Wählen Sie Administratorzustimmung für Organisation gewähren aus und bestätigen Sie Ihre Auswahl im Dialogfeld &quot;Zustimmung&quot;.
9. Wählen Sie in der linken Navigation unter Verwalten die Option Zertifikate und Geheimnisse aus.
10. Wählen Sie Neuer geheimer Clientschlüssel aus, geben Sie eine kurze Beschreibung ein, und wählen Sie dann Hinzufügen aus.
11. Kopieren Sie den Wert des neu hinzugefügten geheimen Clientschlüssels und speichern Sie ihn. Sie benötigen ihn später.

Nun können die folgenden Zeilen zum RoomsAppSettings.config hinzugefügt werden und der Rooms Service neugestartet werden, xxx sollte mit den Werten, die man aus den vorherigen Schritten erlangt hat, ersetzt werden

```
<RoomsAppSettings>
...
    <add key="ExchangeTenantId" value="xxx" />
    <add key="ExchangeAppId" value="xxx" />
    <add key="ExchangeClientSecret" value="xxx" />
...
</RoomsAppSettings>
```

### Push Notifikationen von Exchange Online

Eine erfolgreiche Synchronisation bedingt, dass Push Notifikationen vom Exchange Server and den WebService gesendet werden können siehe 5.1.3.

Da sich bei Exchange Online der Exchange Server bei Microsoft in der Cloud befindet, benötigt es öffentlichen Zugang zu dem WebService. Mit Rooms 4.7.2010 ist es möglich, eine separate URL für den Service anzugeben:

```
<RoomsAppSettings>
...
	<add key="ExchangeServiceUrl" value="https://public.example.com/Webservices/SyncNotification.svc" />
...
</RoomsAppSettings>
```

## Exchange 2010

Um die Synchronisation mit einer MS Exchange 2010 Umgebung zuzulassen, muss der Account, unter dem der ROOMS Windows Service läuft, über die entsprechenden Zugriffsrechte verfügen. Anstelle von normalen Vollzugriffsrechten kann dafür das sogenannte Impersonierungsrecht vergeben werden, welches den Vorteil besitzt, dass es nur im Kontext der MS Exchange Web Services verwendet werden kann. Der berechtigte Account kann dann Aktionen im Namen eines anderen Benutzers ausführen, womit die ROOMS Umgebung im Namen eines bestimmten Benutzers auf dessen eigene Mailbox zugreifen kann.

Zur Vergabe des Rechts muss in der Exchange Management Konsole folgender Befehl ausgeführt werden (gilt für alle Benutzer der Organisation):
```
New-ManagementRoleAssignment -Name:NameDerBerechtigung
-Role:ApplicationImpersonation
-User:MeinServiceBenutzer
```

Optional: Falls erwünscht, kann mittels Angabe eines Scopes, die Berechtigung auf eine dedizierte Gruppe von Mailbox-Usern beschränkt werden. Dazu wird zuerst ein solcher Scope erstellt, danach wird der oben aufgeführte Befehl ausgeführt, diesmal aber mit Angabe des eben erstellten Scopes (es kann natürlich auch ein bereits vorhandener Scope verwendet werden):

```
New-ManagementScope -Name:NameDesScopes -RecipientRestrictionFilter:NameDesFilters
```

Der Wert für den RecipientRestrictionFilter-Parameter kann sehr detailliert angegeben werden. Hierzu ein Beispiel, welches auf Domänengruppe und Benutzertyp filtert:

```
New-ManagementScope -Name "Executive Mailboxes"
-RecipientRoot "roomspro.ch/Executives"
-RecipientRestrictionFilter {RecipientType -eq "UserMailbox"}

New-ManagementRoleAssignment -Name:NameDerBerechtigung
-Role:ApplicationImpersonationn -User:MeinServiceBenutzer
-CustomRecipientWriteScope:NameDesScopes
```

Je nach Exchange Version kann es sein, dass bei der Ausführung des New-ManagementRoleAssignement Befehls diese Zuweisung standardmässig disabled ist. In dem Fall kann dies wiefolgt aufgehoben werden:

```
Set-ManagementRoleAssignment "NameDerBerechtigung" -Enabled $true
```

Das oben als „Datenrecht&quot; bezeichnete Impersonierungsrecht kann nur auf Stufe Mailbox Server oder Mailbox, nicht aber auf einzelnen Folders oder Elementen vergeben werden. Der Grund liegt darin, dass der MS Exchange Server die Impersonierung vorzeitig (bei Verbindungsaufnahme) durchführt und danach (beim Zugriff auf Folder und Elemente) keine Unterscheidung zwischen echten und impersonierten Benutzern mehr macht (auch in den Log-Files ist nicht ersichtlich, ob es sich um einen impersonierten Benutzer handelt oder nicht).

Der verwendete Account darf **kein** MS Exchange Administrator sein!

Zudem müssen die sogenannten Client Throttling Policies berücksichtigt werden, mit denen sich der MS Exchange 2010 vor Angriffen schützt und für eine gerechte Verteilung der Ressourcen sorgt. Um einen uneingeschränkten Zugriff für ROOMS sicherzustellen, ist das Absetzen folgender Befehle in der Exchange Management Konsole erforderlich:
```
New-ThrottlingPolicy NameDerPolicy -EWSMaxConcurrency $null
-EWSPercentTimeInAD $null -EWSPercentTimeInCAS $null
-EWSPercentTimeInMailboxRPC $null -EWSMaxSubscriptions $null

Set-ThrottlingPolicyAssociation MeinServiceUser -ThrottlingPolicy NameDerPolicy
```

Die oben aufgeführten Befehle gelten für MS Exchange 2010 SP1 und höher. Falls Ihr Service Pack Level unter SP1 ist (wir empfehlen die Aktualisierung), müssen unterstehende Befehle ausgeführt werden.
```
Set-ThrottlingPolicy NameDerPolicy -EWSMaxConcurrency $null
-EWSPercentTimeInAD $null -EWSPercentTimeInCAS $null
-EWSPercentTimeInMailboxRPC $null -EWSMaxSubscriptions $null

Set-Mailbox MeinServiceBenutzer -ThrottlingPolicy NameDerPolicy
```
Weitere Informationen zu den verschiedenen Themen dieser Seite sind hier zu finden:

[Konfiguration Exchange Impersonation](http://msdn.microsoft.com/en-us/library/bb204095.aspx):
 http://msdn.microsoft.com/en-us/library/bb204095.aspx
[ManagementScope erstellen (Technet)](http://technet.microsoft.com/en-us/library/dd335137%28EXCHG.140%29.aspx):
 http://technet.microsoft.com/en-us/library/dd335137%28EXCHG.140%29.aspx
[Throttling Policies](http://technet.microsoft.com/en-us/library/dd298094.aspx):
 http://technet.microsoft.com/en-us/library/dd298094.aspx

## Outlook Addin

Es wird nur die 32Bit Version von MS Outlook unterstützt.

### Allgemeines

Um Reservationen direkt in einem MS Outlook Client vornehmen zu können, muss das ROOMS OutlookAddin auf allen gewünschten Clients installiert werden. Die Installation muss mit dem für die jeweilige MS Outlook Version optimierten Setup Paket erfolgen. Ein Assistent fragt schrittweise nach den Konfigurationseinstellungen (Installationspfad und Root-Url der ROOMS Web Applikation) und führt die notwendigen Installationsaktionen aus. Nach der Installation steht das Addin allen Benutzern des entsprechenden Clients zur Verfügung.

### Voraussetzungen Outlook 2007-2013

- Microsoft .NET Framework 4.0 Extended (oder höher)
- Visual Studio Tools for Office 4.0

### Installation

Die Installationsdatei Rooms\_OutlookAddin\_Office20XX\_X.msi steht in unserem Downloadbereich zur Verfügung.

Outlook sollte vor der Installation beendet werden.

Die Installationsdatei kann für Erstinstallationen wie auch für Updates verwendet werden. Eine Deinstallation bereits installierter Versionen ist nicht notwendig, da das Setup diese Aufgabe selber übernimmt. Bei einem Update werden die bei der vorgängigen Installation angegebenen Werte übernommen.

| **Installationsschritt** | **Beschreibung** |
| --- | --- |
| Begrüssungsschritt – keine Interaktion. |
| Akzeptieren der Lizenz- und Hersteller Bedingungen. |
| Angabe eines Installationspfads. Es wird empfohlen, den vorgegebenen Pfad zu verwenden. |
| Angabe der URL der zu verwendenen ROOMS Installation im Format &quot;http(s)://server/mandant&quot;. |
| Bestätigungsschritt - keine Interaktion. |

Um die Installation bei einer grösseren Anzahl Clients automatisiert durchzuführen, kann folgender Befehl für eine sogenannte &quot;unattended installation&quot; verwendet werden:

_msiexec /i Rooms\_OutlookAddin\_Office20XX\_X.msi /quiet AGREETOLICENSE=yes ADDINURI=http(s)://server/mandant_

Name der Installationsdatei und URL sind entsprechend anzupassen.

### Deinstallation

Entweder die Installationsdatei erneut ausführen und nach Akzeptieren der Lizenz- und Herstellerbedingungen die Option &quot;Entfernen&quot; auswählen ODER die Systemsteuerung, Programme und Funktionen öffnen, den Eintrag &quot;GARAIO ROOMS OutlookAddin Office20XX&quot; selektieren und &quot;Entfernen&quot; klicken.

Um die Deinstallation bei einer grösseren Anzahl Clients automatisiert durchzuführen, kann folgender Befehl für eine sogenannte &quot;unattended deinstallation&quot; verwendet werden:

_msiexec /x Rooms\_OutlookAddin\_Office20XX\_X.msi /quiet AGREETOLICENSE=yes ADDINURI=http(s)://server/mandant_

Name der Installationsdatei und URL sind entsprechend anzupassen.

1.
# Fehleranalyse

In diesem Kapitel sind die wichtigsten Punkte aufgeführt, die bei der Fehleranalyse behilflich sind.

**Für die Prüfung der Synchronisationseinstellungen steht im Benutzerprofil eine entsprechende Funktionalität zur Verfügung, die den kompletten Synchronisationsprozess automatisiert durchspielt und Konfigurationsprobleme ausgibt.**

## Exchange 2010

Alle Server-, Mandator- und Benutzernamen müssen auf die jeweilige Umgebung angepasst werden.

### Outlook Addin

- Addin Installationspfad öffnen
- config öffnen
- Eintrag **RootUrl** überprüfen:
```
<appSettings>
    <!-- RootUrl muss auf den korrekten Web-Server zeigen
 der Mandator muss zwingend angegeben werden -->
    <add key="RootUrl" value="https://ntlm.roomsweb2.rooms.test/Default}"/>
</appSettings>
```

- RootUrl muss vom Client her ohne Eingabe von Credentials aufrufbar sein

### Exchange Server

- Sicherstellen, dass der zu synchronisierende Mandant über die folgende URL erreichbar ist:
[https://anon.roomsweb2.rooms.test/webservices/syncnotification.svc?garaio](https://anon.roomsweb2.rooms.test/webservices/syncnotification.svc?Default)

### ROOMS WebService

Im Rooms überprüfen, ob der WebService korrekt läuft. Dies kann einfach überprüft werden, in dem folgende URL aufgerufen wird:

[https://anon.roomsweb2.rooms.test/webservices/syncnotification.svc](https://anon.roomsweb2.rooms.test/webservices/syncnotification.svc)

Wenn alles korrekt konfiguriert ist, muss folgende Seite erscheinen:

{{< imgproc Erfolgreicher_Push_Webservice Resize "512x" >}}{{< /imgproc >}}

### ROOMS Windows Service

Sicherstellen, dass der Windowsservice gestartet und der korrekte ConnectionString hinterlegt ist.

### ROOMS Benutzerprofil

Im Benutzerprofil die Sync-Settings überpfüfen:

{{< imgproc Person_Troubleshooting Resize "1024x" >}}{{< /imgproc >}}

**Fremdbuchungen (Sektretärinnenfunktion)**

Hier muss beachtet werden, dass die E-Mail-Adresse der Person, in deren Kalender gebucht werden soll, in ROOMS einer gültigen und aktiven Person entspricht.

## Outlook Addin

1. Systemsteuerung, „Programme und Funktionen&quot; öffnen: Ist das Addin installiert? Korrespondiert die Addin-Version mit der Office-Version (Beispiel: 2010/2010)?

- Das Addin ist nicht installiert: Installation durchführen
- Die Versionen korrespondieren nicht: Addin deinstallieren und korrespondierende Version installieren

MS Outlook starten, danach...

- Outlook 2010: Datei, Optionen, Add-Ins, COM Add-Ins, Gehe zu... auswählen
- Outlook 2007: Extras, Vertrauensstellungscenter, Add-Ins, COM-Add-Ins, Gehe zu... auswählen
- Outlook 2003: Extras, Optionen, Weitere, Erweiterte Einstellungen, COM Add-Ins auswählen

Wird das Addin aufgelistet? Ist die Checkbox davor aktiviert?

- Das Addin wird nicht aufgelistet: Regedit öffnen, HKLM\Software sowie HKCU\Software exportieren. Exportierte Datei zusammen mit Angabe der Versionen von Betriebssystem (x64?), MS Office und Addin Versionsnummer (siehe Screenshot, oder „Eigenschaften&quot; der Datei Garaio.Products.RoomsPro.OutlookAddin.Core.dll, Tab Details) an Garaio senden.
- Das Addin wird aufgelistet, die Checkbox davor ist aber nicht aktiviert: Checkbox aktivieren und Dialog schliessen. Wird die Sidebar jetzt angezeigt? Ist die Checkbox beim erneuten Öffnen des Dialogs noch aktiviert? </br>
 -\&gt; Nein: Ereignisanzeige öffnen, Suche nach gerade erzeugten Fehler-Einträgen. Inhalt kopieren und Garaio kontaktieren.