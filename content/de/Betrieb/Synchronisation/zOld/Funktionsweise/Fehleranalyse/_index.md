---
title: "Fehleranalyse"
linkTitle: "Fehleranalyse"
weight: 50
description: 
---
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