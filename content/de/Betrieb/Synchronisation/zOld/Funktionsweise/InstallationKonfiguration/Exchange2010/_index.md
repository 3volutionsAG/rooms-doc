---
title: "Exchange 2010"
linkTitle: "Exchange 2010"
weight: 400
description: 
---
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