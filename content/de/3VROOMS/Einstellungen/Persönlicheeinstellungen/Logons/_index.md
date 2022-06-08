---
title: "Logons"
linkTitle: "Logons"
weight: 7
description: >
  <p style="text-align: justify"> Unter dem Tab Logons stellen Sie ein, sofern Sie über genügend Berechtigungen verfügen, wie das Login ins ROOMS erfolgen soll. </p>

 
 


---
## Grundlegende Information zu Logons

<p style="text-align: justify">
Sie können als Benutzer:in mehrere Logins beinhalten (z.B. verschiedene Windows Accounts, welche aber auf dasselbe (User-) Profil gemappt sein müssen). </br>
Führen Sie Änderungen in diesem Bereich gewissenhaft durch. Unachtsamkeiten können dazu führen, dass sich eine Benutzer*in nicht mehr anmelden kann. </p>

## Logons bearbeiten und neu erstellen und löschen

<p style="text-align: justify">
Mit Klick auf das Stift Icon <i>Bearbeiten</i> gelangen Sie zur Einstellung der Logondaten. Besteht noch kein Logon, kann dieses via <i>Erstellen</i> hinterlegt werden . Es besteht ebenfalls die Möglichkeit, ein bereits vorhandenes zu löschen. Dies erfolgt über Klick auf den untenstehenden Button <i>Entfernen</i>. </p>

{{< imgproc Logons_allgemein_speichern Resize "960x" >}}
Logons bearbeiten 
{{< /imgproc >}}

<p style="text-align: justify">
Beim Neu erstellen und bearbeiten eines Logons werden Sie nach folgenden Daten gefragt: </p>

* Logontyp 
* Logonname: dient der eindeutigen Benutzerkennung nur bei Forms Credential, Windows Credential & Custom Servervariable verfügbar 
* Passwort: erscheint nur bei Logontyp _Forms Credentials_ – dann ist dieser obligatorisch
* Passwort bestätigen

{{< imgproc Logons_bearbeiten Resize "960x" >}}
Logons bearbeiten 
{{< /imgproc >}}


### Logontypen

<p style="text-align: justify">
Sie können verschiedene Logontypen erstellen und wählen zwischen: </p>

* Form Credentials 
* Custom Servervariable
* OAuth 2.0
* PIN 
* QR Code 
* Windows Nt Credentials

{{< imgproc Logons_erstellen_entfernen Resize "960x" >}}
Logons erstellen und bearbeiten 
{{< /imgproc >}}

#### Form Credentials  

<p style="text-align: justify">
Die Berechtigung für die Maske bearbeiten.</p>

#### Custom Servervariable 

{{< imgproc Logons_Custom Resize "960x" >}}
Logons Custom Servervariable erstellen
{{< /imgproc >}}

#### OAuth 2.0

{{< imgproc Logons_OA Resize "960x" >}}
Logon OAuth 2.0 erstellen 
{{< /imgproc >}}

#### PIN 

<p style="text-align: justify">
Der Logontyp <i>Pin</i> wird Ihnen nur angezeigt, wenn in der globalen Konfiguration von ROOMS der Wert <i>Darf PIN Authentisierung nutzen</i> aktiviert ist. </p>

<p style="text-align: justify">
Sie erstellen einen Pin, indem Sie auf den Button <i>Code erstellen</i> klicken. Der PIN enthält den generierten im System eindeutigen 4-6 stelligen PIN. </p>

{{< imgproc Logons_Pins Resize "960x" >}}
Logons PIN erstellen
{{< /imgproc >}}

#### QR Code 

<p style="text-align: justify">
Wählen Sie den Typ <i>QR Code</i> aus, erstellen Sie beim Klicken auf den Button <i>Code erstellen</i> einen QR Code.  Diesen implementieren Sie über den Button speichern. Dieser QR Code enthält den generierten und verschlüsselten QR Code von Ihnen als Benutzer:in. 


{{< imgproc Logons_QR_Code Resize "960x" >}}
Logons QR Code erstellen 
{{< /imgproc >}}

#### Windows Nt Credentials 

{{< imgproc Logons_WindowsNt Resize "960x" >}}
 Logons Windows Nt Credentials erstellen
{{< /imgproc >}}


### Logon Ansicht in der Liste 

<p style="text-align: justify">
Haben Sie ein Logon erfolgreich hinzugefügt oder bearbeitet, aktualisiert Rooms Ihre Listenansicht im Menüpunkt <i>Logons</i>. </br>
Haben Sie mehrere Logons hinzugefügt, werden diese Ihnen in der Liste angezeigt. Sobald Sie ein Element aus der Liste entfernen oder hinzufügen, aktualisiert sich die Liste automatisch und Sie gelangen wieder in die Übersicht der Logons. </p>

{{< imgproc Logons_Listenansicht Resize "960x" >}}
Listenansicht mehrerer Logons 
{{< /imgproc >}}

### Logon Informationen Überblick 

<p style="text-align: justify">
Haben Sie alle Logons hinzugefügt und gespeichert, können Sie im Start Modus unter Einstellungen-Persönliche Einstellungen Ihre Informationen einsehen.

{{< imgproc Logons_Informationen_Übersicht Resize "960x" >}}
Informationen Überblick im Start
{{< /imgproc >}}