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

##### Vorübergehend blockierte Anmeldung

Bei der Anmeldung mit Benutzername und Passwort über den RoomsPro Identity Provider können zu viele Fehlversuche eine vorübergehende Sperre auslösen. Während einer Kontosperre wird auch das richtige Passwort abgewiesen. Die Kontosperre dauert 20 Minuten; die Anzahl erlaubter Fehlversuche wird vom Betriebsteam festgelegt.

Erscheint **Zu viele fehlgeschlagene Anmeldeversuche. Bitte versuchen Sie es später erneut.**, warten Sie vor weiteren Versuchen. Diese Grenze gilt für die gemeinsame Client-IP und kann deshalb auch durch Fehlversuche anderer Personen oder Geräte im selben Netzwerk erreicht werden. Wiederholen Sie die Anmeldung nicht laufend und wenden Sie sich bei wiederholten Sperren an Ihr Betriebsteam. Für persönliche PINs und QR-Codes gilt ebenfalls diese IP-Grenze.

Die [Betriebshinweise zu Anmeldegrenzen]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#schutz-vor-wiederholten-anmeldeversuchen" >}}) erklären die Standardwerte, die Wartezeit und die Prüfung der Proxy-Konfiguration. Die hier beschriebenen Grenzen gelten nicht für die Anmeldung beim externen Anbieter oder die direkte Anmeldung an der Legacy Website.

##### Zu viele Anfragen beim Passwort-Reset

Erscheint beim Zurücksetzen des Passworts über den RoomsPro Identity Provider **Zu viele Anfragen. Bitte versuchen Sie es später erneut.**, lösen Sie vorerst keine weiteren Anfragen aus. Diese Grenze ist von den fehlgeschlagenen Anmeldeversuchen getrennt. Sie gilt gemeinsam für Passwort-Reset-Anfragen und Verfügbarkeitsprüfungen von E-Mail-Adressen und Benutzernamen über dieselbe Client-IP. Deshalb können auch Anfragen anderer Personen im selben Netzwerk dazu beitragen. Warten Sie bis zum Ende des Zeitfensters und wenden Sie sich bei wiederholten Meldungen an Ihr Betriebsteam. Die [Betriebshinweise zu Passwort-Reset und Verfügbarkeitsprüfungen]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#passwort-reset-und-verfügbarkeitsprüfungen" >}}) erklären die gemeinsame Grenze und ihre Konfiguration.

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
