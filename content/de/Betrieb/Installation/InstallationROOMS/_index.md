---
title: "Installation 3V ROOMS"
linkTitle: "Installation 3V ROOMS"
weight: 40
description: 'Grundlegende Informationen zur Installation von 3V ROOMS'
---
<p align = "justify">
Die Dateien werden in Form eines MSI-Setups ausgeliefert, welches in unserem <a hfref = "https://us04st1.zoom.us/web_client/1q1nf58/html/externalLinkPage.html?ref=https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536"> Downloadbereich </a> heruntergeladen werden kann (<i>Rooms_Core_X.msi</i>). Das Core-Setup beinhaltet die Webapplikation, den Windows Service sowie Dateien zum Konfigurieren der Applikation. </br>
Die Installationsdatei kann für Erstinstallationen wie auch für Updates verwendet werden. Eine Deinstallation bereits installierter Versionen ist nicht notwendig, da das Setup diese Aufgabe selber übernimmt. Bei einem Update werden die bei der vorgängigen Installation angegebenen Werte übernommen. </br>
Bei einem Update wird empfohlen, vorgängig den IIS zu stoppen: Kommandozeile als Administrator öffnen und <i>iisreset /stop </i> eingeben; nach dem Update <i> iisreset /start </i> eingeben.
</p>

### Installationsassistent

1. Öffnen Sie den **GARAIO ROOMs Core** Installlationsassistenten.
   
   {{< imgproc Installationsassistent Resize "640x" >}} {{< /imgproc >}}

2. Akzeptieren Sie die **Lizenzvereinbarung**.
   
   {{< imgproc Lizenzvereinbarung Resize "640x" >}} {{< /imgproc >}}

3. Wählen Sie die **gewünschten Optionen**.
   <p align = "justify">
   Wie unter <a href="/betrieb/skalierung/">Skalierung</a> aufgeführt, ist es möglich, die Webapplikation und den Windows Service auf verschiedenen Maschinen zu betrieben oder die Webapplikation für ein LoadBalancing sogar auf mehreren Maschinen zu installieren. Die gewünschten Optionen sind entsprechend anzupassen - die Konfigurationskomponenten müssen aber immer auf allen Maschinen mitinstalliert werden. Bei Bedarf können für alle Optionen auch die Installationsverzeichnisse mit einem Klick auf <b>Durchsuchen</b> angepasst werden </p>

   {{< imgproc BenutzerSetup Resize "640x" >}} {{< /imgproc >}}

   {{< imgproc CustomSetup Resize "640x" >}} {{< /imgproc >}}

4. Geben Sie den **Service Domäne-Account** ein. Im Kontext dieses Benutzers wird der Windows Service ausgeführt. Werden die beiden Felder leer gelassen, wird der lokale System-Account verwendet. Die Option _Service nach der Installation automatisch starten_ nicht anwählen.
   
   {{< imgproc ServiceKonfig Resize "640x" >}} {{< /imgproc >}}
   
   **Anmerkung**: </br>
   Der Benutzername muss zwingend mit der vorangestellten Domäne angegeben werden, ansonsten bricht das Setup während der Installation ab. </br>
5. Klicken Sie auf **Installieren**.
   
   {{< imgproc Installieren Resize "640x" >}} {{< /imgproc >}}

<p align = "justify">
Nach dem Abschluss ALLER Installations-/Update-Schritte muss der Service manuell gestartet werden. Dazu den <b>Server Manager</b> starten und unter <b>Configuration</b>, <b>Services</b> den Service <b>ROOMS</b> rechtsklicken und mit <b>Start</b> ausführen. </br> </br>
Es wird empfohlen, zuerst die Webapplikation zu testen und den Windows Service erst zu starten, wenn die Webapplikation vollumfänglich läuft. </p>

### Deinstallation

<p align = "justify">
Vorgängig alle <b>Konfigurationsdateien</b> und Lizenzen im Configuration Verzeichnis des, bei der Installation angegebenen Verzeichnispfads, <b>löschen</b>. Danach entweder die Installationsdatei erneut ausführen und nach Akzeptieren der Lizenz- und Herstellerbedingungen die Option <b>Entfernen</b> auswählen ODER die Systemsteuerung, Programme und Funktionen öffnen, den Eintrag <b>3V-ROOMS Core</b> selektieren und <b>Entfernen</b> klicken.
