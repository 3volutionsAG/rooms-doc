---
title: "Logons"
linkTitle: "Logons"
weight: 7
description: 'Unter dem Tab Logons stellen Sie ein, sofern Sie über genügend Berechtigungen verfügen, wie das Login ins ROOMS erfolgen soll.'
---
## Grundlegende Information zu Logons


Sie können als Benutzer:in mehrere Logins beinhalten (z.B. verschiedene Windows Accounts, welche aber auf dasselbe (User-) Profil gemappt sein müssen).
Führen Sie Änderungen in diesem Bereich gewissenhaft durch. Unachtsamkeiten können dazu führen, dass sich eine Benutzer*in nicht mehr anmelden kann.

## Logons bearbeiten und neu erstellen und löschen


Mit Klick auf das Stift Icon _Bearbeiten_ gelangen Sie zur Einstellung der Logondaten. Besteht noch kein Logon, kann dieses via _Erstellen_ hinterlegt werden . Es besteht ebenfalls die Möglichkeit, ein bereits vorhandenes zu löschen. Dies erfolgt über Klick auf den untenstehenden Button _Entfernen_.

{{< imgproc Logons_allgemein_speichern Resize "960x" >}}
Logons bearbeiten
{{< /imgproc >}}


Beim Neu erstellen und bearbeiten eines Logons werden Sie nach folgenden Daten gefragt:

* Logontyp
* Logonname: dient der eindeutigen Benutzerkennung nur bei Forms Credential, Windows Credential & Custom Servervariable verfügbar
* Passwort: erscheint nur bei Logontyp _Forms Credentials_ – dann ist dieser obligatorisch
* Passwort bestätigen

{{< imgproc Logons_bearbeiten Resize "960x" >}}
Logons bearbeiten
{{< /imgproc >}}


### Logontypen


Sie können verschiedene Logontypen erstellen und wählen zwischen:

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


Die Berechtigung für die Maske bearbeiten.

#### Custom Servervariable

{{< imgproc Logons_Custom Resize "960x" >}}
Logons Custom Servervariable erstellen
{{< /imgproc >}}

#### OAuth 2.0

{{< imgproc Logons_OA Resize "960x" >}}
Logon OAuth 2.0 erstellen
{{< /imgproc >}}

#### PIN


Der Logontyp _Pin_ wird Ihnen nur angezeigt, wenn in der globalen Konfiguration von ROOMS der Wert _Darf PIN Authentisierung nutzen_ aktiviert ist.


Sie erstellen einen Pin, indem Sie auf den Button _Code erstellen_ klicken. Der PIN enthält den generierten im System eindeutigen 4-6 stelligen PIN.

{{< imgproc Logons_Pins Resize "960x" >}}
Logons PIN erstellen
{{< /imgproc >}}

#### QR Code


Wählen Sie den Typ _QR Code_ aus, erstellen Sie beim Klicken auf den Button _Code erstellen_ einen QR Code.  Diesen implementieren Sie über den Button speichern. Dieser QR Code enthält den generierten und verschlüsselten QR Code von Ihnen als Benutzer:in.


{{< imgproc Logons_QR_Code Resize "960x" >}}
Logons QR Code erstellen
{{< /imgproc >}}

#### Windows Nt Credentials

{{< imgproc Logons_WindowsNt Resize "960x" >}}
Logons Windows Nt Credentials erstellen
{{< /imgproc >}}


### Logon Ansicht in der Liste


Haben Sie ein Logon erfolgreich hinzugefügt oder bearbeitet, aktualisiert Rooms Ihre Listenansicht im Menüpunkt _Logons_.
Haben Sie mehrere Logons hinzugefügt, werden diese Ihnen in der Liste angezeigt. Sobald Sie ein Element aus der Liste entfernen oder hinzufügen, aktualisiert sich die Liste automatisch und Sie gelangen wieder in die Übersicht der Logons.

{{< imgproc Logons_Listenansicht Resize "960x" >}}
Listenansicht mehrerer Logons
{{< /imgproc >}}

### Logon Informationen Überblick


Haben Sie alle Logons hinzugefügt und gespeichert, können Sie im Start Modus unter Einstellungen-Persönliche Einstellungen Ihre Informationen einsehen.

{{< imgproc Logons_Informationen_Übersicht Resize "960x" >}}
Informationen Überblick im Start
{{< /imgproc >}}
