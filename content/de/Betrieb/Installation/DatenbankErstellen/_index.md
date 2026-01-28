---
title: "Datenbank erstellen"
linkTitle: "Datenbank erstellen"
weight: 20
description: 'Generelle Beschreibung über das Erstellen einer Datenbank'
---
<p align = "justify">
3volutions stellt für die Erstellung von Datenbanken im Downloadbereich ein Backup zur Verfügung, welches bereits über für den Kunden optimierte Stammdaten verfügt <a href="https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/529432586"> 3volutions Datenbank - Baukasten.bak </a>; mit diesem Backup wird ein gewöhnlicher Restore durchgeführt. </p>

### Restore durchführen

1. MS SQL Server Management Studio öffnen und mit dem entsprechenden SQL Server verbinden.
   
   {{< imgproc SQLServerMangStudio Resize "640x" >}}
MS SQL Server Management Studio
{{< /imgproc >}}

2. Rechtsklick auf "Databases", "Restore Database" anwählen.
   
   {{< imgproc Database Resize "640x" >}}
Rechtsklick auf Database

{{< /imgproc >}}
    {{< imgproc RestoreDatabase Resize "640x" >}}

Restore Database auswählen

{{< /imgproc >}}
    {{< imgproc EingabefensterRestoreDatabase Resize "640x" >}}
Eingabefenster Restore Database 
{{< /imgproc >}}

3. Option **From device** anklicken und das von 3volutions bereitgestellte Backup auswählen.
4. In der danach angezeigten Liste darunter die Checkbox vor dem gewünschten Backup anklicken.
5. Neuen Namen der Datenbank ganz oben unter **To database** eintragen.
   
   {{< imgproc toDatabase Resize "640x" >}} {{< /imgproc >}}

6. Auf die Ansicht **Options** wechseln und prüfen, ob die Pfadangaben und Namen der aufgeführten Dateien unter **Restore As** korrekt sind.
   
   {{< imgproc Options-RestoreAs Resize "640x" >}} {{< /imgproc >}}

7. **Ok** klicken und warten, bis der Restore abgeschlossen ist. Danach bei Bedarf mit demselben Backup weitere Datenbanken (Mandanten) anlegen.

### SQL Berechtigungen vergeben

<p align = "justify">
Nun müssen die Berechtigungen der neu installierten Datenbank(en) angepasst werden. Wir empfehlen die Verwendung eines dedizierten Service Domänen-Accounts; entsprechend müssen diesem User nun die benötigten Rechte für Lese- und Schreibzugriffe auf die Datenbank(en) vergeben werden: </p>

1. **MS SQL Server Management Studio** öffnen und mit dem entsprechenden **SQL Server verbinden**.
2. Unterordner **Security**, **Logins** öffnen.
   
   {{< imgproc Security-Logins Resize "640x" >}} {{< /imgproc >}}

3. Wird der angesprochene Service Domänen-Account darunter nicht aufgeführt, muss, mittels der Schritte 4 und 5, ein entsprechendes Login erstellt werden; ansonsten das Login doppelklicken und mit Schritt 6 weiterfahren.
4. Rechtsklick auf **Logins**, **New Login** anwählen.
   
   {{< imgproc Logins-NewLogin Resize "640x" >}} {{< /imgproc >}}

5. Unter **Login name** den vollständigen Namen des Service Domänen-Accounts im Format *Domäne\Benutzer* eingeben. Mit *Search* kann ein Dialog geöffnet werden, welcher eine entsprechende Suche und Validierung ermöglicht.
   
   {{< imgproc LoginName Resize "640x" >}} {{< /imgproc >}} </br>
   
   **Anmerkung**: </br>
   Als Default Language des Benutzers muss zwingend <default> verwendet werden, ansonsten laufen wir Gefahr dass Datumswerte falsch konvertiert werden.

6. Auf die Ansicht **User Mapping** wechseln. </br>
   Rechts im oberen Bereich die erste der neu angelegten **Datenbanken auswählen**, danach im unteren Bereich die Berechtigungen **db_datareader**, **db_datawriter** und **public** vergeben. </br> 
   Diesen Schritt für alle neu angelegten Datenbanken wiederholen.
   
   {{< imgproc UserMapping Resize "640x" >}} {{< /imgproc >}}

7. **Ok** klicken.

### 3V ROOMS Benutzeraccount erstellen

Zuletzt muss noch für einen initialen Benutzer die Administrator-Berechtigung innerhalb der ROOMS Applikation vergeben werden:

1. **MS SQL Server Management Studio** öffnen und mit dem entsprechenden **SQL Server** verbinden.
2. Unterordner **Databases**, danach die erste der neu angelegten **Datenbanken** und darunter **Tables** öffnen.
   
   {{< imgproc Database_Tables Resize "640x" >}} {{< /imgproc >}}

3. Rechtsklick auf Tabelle **Logon**, **Edit Top 200 Rows** anwählen.
   
   {{< imgproc EditTop200Rows Resize "640x" >}} {{< /imgproc >}}

4. Bei einem der aufgeführten Benutzer in der Spalte _Name_ einen **Benutzer im Format _Domäne\Benutzer_** hinterlegen, mit dem nach der Installation auf ROOMS zugegriffen werden soll. </br>
   Dies ist üblicherweise NICHT der Service Domänen-Account von oben, sondern bspw. ein IT-Verantwortlicher oder der verantwortliche ROOMS Projektleiter.
   
   {{< imgproc Name Resize "640x" >}} {{< /imgproc >}}

5. **Tabelle schließen**. Diesen Schritt für alle neu angelegten Datenbanken wiederholen.

<p align = "justify">
Alternativ können Datenbanken, anstelle eines Restores, auch von Grund auf neu erstellt werden. In diesem Fall muss das entsprechende ROOMS Script verwendet werden und der initiale Benutzer kann erst nach Ausführung des  <a href="https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/1959165953?src=127677552">DB Update Managers</a> hinterlegt werden. Dieses Vorgehen sollte aber nur von 3volutions Spezialisten durchgeführt werden und wird deshalb hier nicht weiter dokumentiert. </p>
