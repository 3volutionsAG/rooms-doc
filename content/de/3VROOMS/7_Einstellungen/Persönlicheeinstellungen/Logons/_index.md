---
title: "Logons"
linkTitle: "Logons"
weight: 7
description: >
  Unter dem Tab Logons stellen Sie ein, sofern Sie über genügend Berechtigungen verfügen, wie das Login ins ROOMS erfolgen soll. 

 
 


---
## Grundlegende Information zu Logons
Sie können als Benutzer:in mehrere Logins beinhalten (z.B. verschiedene Windows Accounts, welche aber auf dasselbe (User-) Profil gemappt sein müssen). 
Führen Sie Änderungen in diesem Bereich gewissenhaft durch. Unachtsamkeiten können dazu führen, dass sich eine Benutzer*in nicht mehr anmelden kann.

## Logons bearbeiten und neu erstellen und löschen
Mit Klick auf das Stift Icon „Bearbeiten“ gelangen Sie zur Einstellung der Logondaten (siehe Abbildung la). Besteht noch kein Logon, kann dieses via „Erstellen“ hinterlegt werden (Abbildung m). Es besteht ebenfalls die Möglichkeit, ein bereits vorhandenes zu löschen. Dies erfolgt über Klick auf den untenstehenden Button "Entfernen".

{{< imgproc Logons_allgemein_speichern Resize "1280x" >}}
Abbildung la: Logons bearbeiten 
{{< /imgproc >}}

Beim Neu erstellen und bearbeiten eines Logons werden Sie nach folgenden Daten gefragt:
* Logontyp 
* Logonname: dient der eindeutigen Benutzerkennung nur bei Forms Credential, Windows Credential & Custom Servervariable verfügbar 
* Passwort: erscheint nur bei Logontyp „Forms Credentials“ – dann ist dieser obligatorisch
* Passwort bestätigen

{{< imgproc Logons_bearbeiten Resize "1280x" >}}
Abbildung l: Logons bearbeiten 
{{< /imgproc >}}


### Logontypen
Sie können verschiedene Logontypen erstellen und wählen zwischen (Abbildung m): 
* Form Credentials 
* Custom Servervariable
* OAuth 2.0
* PIN 
* QR Code 
* Windows Nt Credentials

{{< imgproc Logons_erstellen_entfernen Resize "1280x" >}}
Abbildung m: Logons erstellen und bearbeiten 
{{< /imgproc >}}

#### Form Credentials  
Die Berechtigung für die Maske bearbeiten. (Abbildung l)

#### Custom Servervariable 

{{< imgproc Logons_Custom Resize "1280x" >}}
Abbildung ls: Logons Custom Servervariable erstellen
{{< /imgproc >}}

#### OAuth 2.0


{{< imgproc Logons_OA Resize "1280x" >}}
Abbildung m: Logon OAuth 2.0 erstellen 
{{< /imgproc >}}
#### PIN 
Der Logontyp "Pin" wird Ihnen nur angezeigt, wenn in der globalen Konfiguration von ROOMS der Wert "Darf PIN Authentisierung nutzen" aktiviert ist. 

Sie erstellen einen Pin, indem Sie auf den Button "Code erstellen" klicken. Der PIN enthält den generierten im System eindeutigen 4-6 stelligen PIN.

{{< imgproc Logons_Pins Resize "1280x" >}}
Abbildung m: Logons PIN erstellen
{{< /imgproc >}}

#### QR Code 
Wählen Sie den Typ "QR Code" aus, erstellen Sie beim Klicken auf den Button "Code erstellen" einen QR Code.  Diesen implementieren Sie über den Button speichern. Dieser QR Code enthält den generierten und verschlüsselten QR Code von Ihnen als Benutzer:in. 


{{< imgproc Logons_QR_Code Resize "1280x" >}}
Abbildung m: Logons QR Code erstellen 
{{< /imgproc >}}
#### Windows Nt Credentials 
{{< imgproc Logons_WindowsNt Resize "1280x" >}}
Abbildung m: Logons Windows Nt Credentials erstellen
{{< /imgproc >}}


### Logon Ansicht in der Liste 
Haben Sie ein Logon erfolgreich hinzugefügt oder bearbeitet, aktualisiert Rooms Ihre Listenansicht im Menüpunkt "Logons". 
Haben Sie mehrere Logons hinzugefügt, werden diese Ihnen in der Liste angezeigt. Sobald Sie ein Element aus der Liste entfernen oder hinzufügen, aktualisiert sich die Liste automatisch und Sie gelangen wieder in die Übersicht der Logons.

{{< imgproc Logons_Listenansicht Resize "1280x" >}}
Abbildung lb: Listenansicht mehrerer Logons 
{{< /imgproc >}}

### Logon Informationen Überblick 
Haben Sie alle Logons hinzugefügt und gespeichert, können Sie im Start Modus unter Einstellungen-Persönliche Einstellungen Ihre Informationen einsehen. (Abbildung li)

{{< imgproc Logons_Informationen_Übersicht Resize "1280x" >}}
Abbildung li: Informationen Überblick im Start
{{< /imgproc >}}