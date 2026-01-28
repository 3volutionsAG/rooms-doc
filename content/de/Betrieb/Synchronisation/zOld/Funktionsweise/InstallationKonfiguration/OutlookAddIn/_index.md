---
title: "Outlook Add-In"
linkTitle: "Outlook Add-In"
weight: 500
description: ''
---
Es wird nur die 32Bit Version von MS Outlook unterstützt.

### Allgemeines

Um Reservationen direkt in einem MS Outlook Client vornehmen zu können, muss das ROOMS OutlookAddin auf allen gewünschten Clients installiert werden. Die Installation muss mit dem für die jeweilige MS Outlook Version optimierten Setup Paket erfolgen. Ein Assistent fragt schrittweise nach den Konfigurationseinstellungen (Installationspfad und Root-Url der ROOMS Web Applikation) und führt die notwendigen Installationsaktionen aus. Nach der Installation steht das Addin allen Benutzern des entsprechenden Clients zur Verfügung.

### Voraussetzungen Outlook 2007-2013

- Microsoft .NET Framework 4.0 Extended (oder höher)
- Visual Studio Tools for Office 4.0

### Installation

Die Installationsdatei Rooms\_OutlookAddin\_Office20XX\_X.msi steht in unserem Downloadbereich zur Verfügung.

Outlook sollte vor der Installation beendet werden.

Die Installationsdatei kann für Erstinstallationen wie auch für Updates verwendet werden. Eine Deinstallation bereits installierter Versionen ist nicht notwendig, da das Setup diese Aufgabe selber übernimmt. Bei einem Update werden die bei der vorgängigen Installation angegebenen Werte übernommen.

| **Installationsschritt** | **Beschreibung** |
| --- | --- |
| Begrüssungsschritt – keine Interaktion. |
| Akzeptieren der Lizenz- und Hersteller Bedingungen. |
| Angabe eines Installationspfads. Es wird empfohlen, den vorgegebenen Pfad zu verwenden. |
| Angabe der URL der zu verwendenen ROOMS Installation im Format &quot;http(s)://server/mandant&quot;. |
| Bestätigungsschritt - keine Interaktion. |

Um die Installation bei einer grösseren Anzahl Clients automatisiert durchzuführen, kann folgender Befehl für eine sogenannte &quot;unattended installation&quot; verwendet werden:

_msiexec /i Rooms\_OutlookAddin\_Office20XX\_X.msi /quiet AGREETOLICENSE=yes ADDINURI=http(s)://server/mandant_

Name der Installationsdatei und URL sind entsprechend anzupassen.

### Deinstallation

Entweder die Installationsdatei erneut ausführen und nach Akzeptieren der Lizenz- und Herstellerbedingungen die Option &quot;Entfernen&quot; auswählen ODER die Systemsteuerung, Programme und Funktionen öffnen, den Eintrag &quot;GARAIO ROOMS OutlookAddin Office20XX&quot; selektieren und &quot;Entfernen&quot; klicken.

Um die Deinstallation bei einer grösseren Anzahl Clients automatisiert durchzuführen, kann folgender Befehl für eine sogenannte &quot;unattended deinstallation&quot; verwendet werden:

_msiexec /x Rooms\_OutlookAddin\_Office20XX\_X.msi /quiet AGREETOLICENSE=yes ADDINURI=http(s)://server/mandant_

Name der Installationsdatei und URL sind entsprechend anzupassen.