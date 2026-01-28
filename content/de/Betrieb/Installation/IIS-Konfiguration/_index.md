---
title: "IIS Konfiguration"
linkTitle: "IIS Konfiguration"
weight: 60
description: 'Generelle Informationen zur IIS Konfiguration'
---
## Voraussetzungen

- Microsoft .NET Framework 3.5
- Microsoft .NET Framework 4.0 Extended (oder höher)

**Anmerkung**
Ab MR 2019, ROOMS 4.7, wird .NET Framework 4.7.2 oder neuer benötig </br>

Check if you RUN .NET 4.7.2:
```
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full\'

Get-ItemPropertyValue -Name Release

Foreach-Object { $_ -ge 461800 }
```

Microsoft Internet Information Service IIS 7.0 (oder höher) mit folgenden Rollendiensten: </br>
(Installation über *Server Manager*, *Roles*", *Web Server (IIS) - Role Services*, *Add Role Services*):

- Server Rolls - Web Server
  - Common HTTP Features
    - Default Document
    - HTTP Errors
    - Static Content
    - HTTP Redirection
  - Health an Diagnostics
    - HTTP Logging
  - Performance
    - Static Content Compression
    - Dynamic Content Compression
  - Security
    - Request Filtering
    - Basic Authentification
    - Windows Authentification
  - Application Development
    - .NET Extensibility
    - ASP.NET
    - ISAPI Extensions
    - ISAPI Filters
  - Managemnte Tools
- Features
    - .NET Framework Features
    - HTTP Activation
    - Non.HTTP Activation
    - ASP.NET
    - WCF Services
- WebDAV Publishing

<p align = "justify">
<b>Anmerkung</b>:
Die Rolle WebDAV Publishing unter den Common HTTP Features darf nicht installiert werden. Durch das Einschalten dieser Rolle werden PUTS und DELETES als HTTP-Verb nicht mehr unterstützt. </p>

Unter Features: WCF Funktionalitäten müssen auch installiert werden.

Alle weiteren Rollendienste sind optional.

{{< imgproc Roles Resize "640x" >}} {{< /imgproc >}}



## Berechtigungen vergeben

<p align = "justify">
Wir empfehlen die Verwendung eines Service Domänen-Accounts; diesem Account muss nun auf jedem Web Server die Berechtigung vergeben werden, eine IIS Website zu betreiben: </p>

1. **Server Manager** öffnen und unter **Configuration**, **Local Users and Groups**, **Groups** anwählen.
   
   {{< imgproc SererManager-Config Resize "640x" >}} {{< /imgproc >}}

2. Die Gruppe **IIS_IUSRS** doppelklicken und über **Add** den Service Domänen-Account hinzufügen.
   
   {{< imgproc ILS_IUSRS Resize "640x" >}} {{< /imgproc >}}

3. Alle Fenster mit **Ok** bestätigen.

## Application Pool erstellen

Jetzt kann im IIS die Website wie folgt konfiguriert werden:

1. Unter **Administrative Tools** den **Internet Information Services (IIS) Manager** öffnen.
   
   {{< imgproc AdminTools-IIS Resize "640x" >}} {{< /imgproc >}}

2. Den zu konfigurierenden Web Server öffnen und darunter auf **Application Pools** klicken.
   
   {{< imgproc AppPool Resize "640x" >}} {{< /imgproc >}}

3. Ganz rechts unter **Actions** auf **Add Application Pool** klicken.
4. Den neuen Application Pool wie in der nachfolgenden Darstellung **konfigurieren**:
   
   {{< imgproc AppPool-konfig Resize "640x" >}} {{< /imgproc >}}

5. Danach **Ok** klicken, den neuen **Application Pool** in der Liste anwählen und rechts unter **Actions** auf **Advanced Settings** klicken.
   
   {{< imgproc AppPool-konfig Resize "640x" >}} {{< /imgproc >}}

6. Folgende **Einstellungen** anpassen (bei allen anderen Einstellungen den voreingestellten Wert belassen):
   1. Identity: Hier wiederum den Service Domänen-Account hinterlegen.
   2. Failure Interval (minutes): Auf 1 setzen.
   3. Maximum Failures: Auf 25 setzen.
7. Jetzt links unter dem zu konfigurierenden Web Server das Unterverzeichnis **Sites** öffnen und darunter die **Default Website** anwählen.
   
   {{< imgproc AppPool-Sites Resize "640x" >}} {{< /imgproc >}}

8. Rechts unter **Actions** auf **Basic Settings** klicken. Die Einstellungen der Website so festlegen, dass als **Application pool** der oben erstellte *ROOMS* und als **Physical path** das *Installationsverzeichnis der Webapplikation* verwendet wird.
   
   {{< imgproc AppPool_BasicSet Resize "640x" >}} {{< /imgproc >}}

   <p align = "justify">
   Üblicherweise wird die ROOMS Webapplikation im Browser nicht einfach über Eingabe des entsprechenden Web Server Namens, sondern über Eingabe eines dedizierten DNS-Eintrags aufgerufen (z.B. *rooms.kunde.com* oder im Intranet einfach nur *rooms*); dieser DNS-Eintrag verweist dann auf den Web Server (oder bei einer WebFarm auf den LoadBalancing Server). Wird ein solcher DNS-Eintrag verwendet, muss er jetzt auf der Website konfiguriert werden: </p>
9. Rechts unter **Actions** auf **Bindings** klicken und die Konfiguration im Fenster über **Add** / **Edit** / **Remove** anpassen:
    
    {{< imgproc SiteBindings Resize "640x" >}} {{< /imgproc >}}

10. Danach **Ok** klicken und im mittleren Bereich **Authentication** doppelklicken. Die Einstellungen so festlegen, dass **Windows Authentication** aktiviert (Enabled) und alle anderen Optionen deaktiviert (Disabled) sind. Die Umschaltung erfolgt über Rechtsklick, **Enable/Disable**.
    
    {{< imgproc AppPool_Auth Resize "640x" >}} {{< /imgproc >}}

11. Links das Unterverzeichnis **WebServices** anwählen und wiederum im mittleren Bereich **Authentication** doppelklicken. Die Einstellungen diesmal so festlegen, dass **Anonymous Authentication** aktiviert (Enabled) und alle anderen Optionen deaktiviert (Disabled) sind. Die Umschaltung erfolgt über Rechtsklick, **Enable/Disable**.
    
    {{< imgproc AppPool_WebServ Resize "640x" >}} {{< /imgproc >}}

<p align = "justify">
Bei Bedarf können für die Website auch andere Authentifizierungsarten zum Einsatz kommen - möglicherweise müssen dadurch aber auch Konfigurationsanpassungen an ROOMS vorgenommen werden (mit 3volutions besprechen). Das Unterverzeichnis "WebServices" muss hingegen immer mit "Anonymous Authentication" betrieben werden. </br>
Der IIS ist nun für den Einsatz von ROOMS konfiguriert. </br>
Bei Bedarf kann ROOMS auch über SSL (HTTPS) betrieben werden. Für detaillierte Angaben zu Konfiguration und Einsatz des IIS mit SSL verweisen wir auf die entsprechende <a href="http://technet.microsoft.com/de-de/library/cc771438(v=ws.10)"> Online-Dokumentation von Microsoft </a>. </p>

## Deinstallation

<p aligne = "justify">
Die Website kann mit einem Rechtsklick, <b>Remove</b> gelöscht oder nach Belieben umkonfiguriert und wiederverwendet werden. Der erstellte <i>ROOMS Application Pool</i> kann ebenfalls mit einem Rechtsklick, <b>Remove</b> gelöscht werden.
