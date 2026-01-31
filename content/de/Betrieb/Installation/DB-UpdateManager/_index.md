---
title: "DB Update Manager"
linkTitle: "DB Update Manager"
weight: 70
description: 'Generelle Informationen zum DB Update Manager'
---
<p align = "justify">
Der DBUpdateManager aktualisiert automatisch die Datenbanken auf genau den Stand, der mit den installierten Applikationsdateien übereinstimmt. Dieser Assistent muss nach jedem Setup für jede verwendete Datenbank einmal ausgeführt werden; es spielt keine Rolle, auf welcher Maschine der Assistent ausgeführt wird. </p>

1. Ist der DBUpdateManager noch nicht installiert, kann er im <a href="https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/508690433"> Downloadbereich </a> heruntergeladen werden. 
2. Nach der Installation steht im Startmenu unter "3volutions" die Verknüpfung **DBUpdateManager Wizard** zur Verfügung.
3. In Ausnahmefällen können während der Aktualisierung Dialoge mit Rückfragen angezeigt werden. Erscheint ein solcher Dialog, ist gemäss Angaben der entsprechenden **Release Notes** zu verfahren oder **Rücksprache mit 3volutions** zu nehmen.
4. **Option 2 auswählen** und Verzeichnis mit den Applikationsdateien angeben: Auf Maschinen mit der Webapplikation wird das Unterverzeichnis "bin" im angegebenen Verzeichnispfad:

    ``` 
    C:\inetpub\wwwroot\ROOMS\bin 
    ```

    auf Maschinen mit dem Windows Service das Hauptverzeichnis verlangt:

    ``` 
    C:\Program Files (x86)\3volutions\ROOMS\WindowsService 
    ```

    {{< imgproc DBUpdate Resize "640x" >}} {{< /imgproc >}}

5. Alle Optionen markiert lassen.
   
   {{< imgproc DBUpdate_Fam Resize "640x" >}} {{< /imgproc >}}

6. **MS SQL Server** (Servername oder IP Adresse) **angeben** (mit Instanznamen, wenn es sich nicht um die Default-Instanz handelt) und **Authentifizierungsinformationen hinterlegen**. Es ist ein Benutzer mit Administratorenzugriff (db_owner) erforderlich.
   
   {{< imgproc DBUpdate_Serv Resize "640x" >}} {{< /imgproc >}}

7. Falls gewünscht kann ein Backup erstellt werden.
   
   {{< imgproc DBUpdate_BackUp Resize "640x" >}} {{< /imgproc >}}

8. Oben die zu aktualisierende **Datenbank auswählen**; unten muss immer *Version* angegeben werden.
   
   {{< imgproc DBUpdate_DBang Resize "640x" >}} {{< /imgproc >}}

9.  Zusammenfassung: Der Assistent listet alle auszuführenden Arbeiten auf.
    
    {{< imgproc DBUpdate_Zus Resize "640x" >}} {{< /imgproc >}}

10. Zusammenfassung: Der Assistent listet alle ausgeführten Arbeiten auf.
    
    {{< imgproc DBUpdate_Zus2 Resize "640x" >}} {{< /imgproc >}}

<p align = "justify">
Falls vor dem Ende des Updates noch Fenster aufgehen mit dem Titel <i>Script obsolete</i> und dem Text <i>Es gibt ein ausgeführtes Script, das in der aktuellen Assembly nicht mehr enthalten ist. Bitte Entscheiden Sie, ob das Datenbankupdate abgebrochen oder der Konflikt bereinigt werden soll</i>. In diesem Fall sollten Sie unbedingt anhand der Release Notes vorgehen oder jemanden von 3volutions kontaktieren. </p>

{{< imgproc DBUpdate_BackUp_fehl Resize "640x" >}} {{< /imgproc >}}
