---
title: "Lizenzen beziehen"
linkTitle: "Lizenzen beziehen"
weight: 80
description: Generelle Informationen, wie Sie eine Lizenzen beziehen
---
<p align = "justify">
Damit die Applikation ROOMS ohne Einschränkungen genutzt werden kann, müssen von 3volutions ausgestellte Lizenzen installiert werden. Die Lizenzen müssen bei der Erstinstallation eingerichtet und danach in bestimmten Abständen erneuert werden. Die Lizenzen sind normalerweise auf die Verwendung innerhalb einer bestimmten Domäne beschränkt; auch können die Datenbanken, die verwendet werden können, limitiert sein. </br> Zudem können Einschränkungen gemäß dem gewählten Lizenzierungsmodell (Anzahl Ressourcen, Verwendung der MS Exchange Synchronisation) bestehen. 3volutions informiert jeden Kunden gerne individuell über die bei ihm vorhandenen Beschränkungen und den Zeitpunkt der Erneuerungen. </br> </br>

Ist der LicenseManager noch nicht installiert, kann er im <a href = "https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/508690433"> Downloadbereich </a> heruntergeladen werden. Nach der Installation steht im Startmenu unter "3volutions" die Verknüpfung <i>DBLicenseManager Wizard</i> zur Verfügung. </p>

1. Es stehen drei Optionen zur Auswahl:

   1. Der LicenseManager wird in der Umgebung ausgeführt, in welcher die Lizenzen auch zum Einsatz kommen und es besteht eine **Internet-Verbindung**.
   2. Der LicenseManager wird in der Umgebung ausgeführt, in welcher die Lizenzen auch zum Einsatz kommen, aber es besteht **keine Internet-Verbindung**.
   3. Vorgängig ist Option 2 ausgewählt worden und die damals erzeugten Informationen sollen j**etzt über eine Internet-Verbindung** zum Einsatz kommen.

    Die Optionen 2 und 3 stellen lediglich eine Aufteilung der Option 1 dar und werden deshalb nicht separat dokumentiert (der Assistent enthält detaillierte Anweisungen).

    {{< imgproc AktionAuswaehlen Resize "640x" >}} {{< /imgproc >}}

2. Erzeugung eines **Passports** – keine Benutzerinteraktion.
   
   {{< imgproc Passport Resize "640x" >}} {{< /imgproc >}}

3. **Anmeldung** am Lizenzserver: 3volutions stellt die notwendigen Anmeldeinformationen bereit.
   
   {{< imgproc AnmeldInf Resize "640x" >}} {{< /imgproc >}}

4. **Herunterladen der Lizenzen**: 
   1. In der Liste die herunterzuladenden Lizenzen **selektieren**, 
   2. das **Zielverzeichnis** angeben
   3. die Lizenzen müssen im **Configuration** Verzeichnis des bei der Installation angegebenen Verzeichnispfads hinterlegt werden
   4. auf **Download** klicken.
   
   {{< imgproc Lizenz Resize "640x" >}} {{< /imgproc >}}

<p align = "justify"> 
Nach dem Download der Lizenzen muss im Zielverzeichnis <b> Config.bat</b> ausgeführt werden. </br>
Bei einem Update oder einer Erneuerung der Lizenzen sollten die <i>alten Lizenzen vor dem Ausführen der Config.bat aus den Zielverzeichnissen gelöscht</i> werden. </p>