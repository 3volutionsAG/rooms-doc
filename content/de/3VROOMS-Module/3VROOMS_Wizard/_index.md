---
title: "3V ROOMS Wizard"
linkTitle: "3V ROOMS Wizard"
weight: 20
description: '3V ROOMS Wizard ist ein Buchungsassistent, der eine vereinfachte Buchung von Ressourcen über den Webbrowser ermöglicht. Er ist auch für mobile Endgeräte (Tablet, Smartphone, ...) geeignet.'
---
### 3V ROOMS Wizard öffnen

1. Öffnen Sie den Webbrowser.
2. Geben Sie die URL des 3V ROOMS Wizards ein:
   <!-- Wie lautet die URL? -->
    {{< imgproc Buchungsassistent Resize "960x" >}} Buchungsassistent im Webbrowser {{< /imgproc >}}

Das weitere Vorgehen entspricht dem Vorgehen im [3V ROOMS Add-In für Office 365 Outlook](/3vrooms-module/3vrooms_addin_o365outlook/).

Mit den entsprechenden Einstellungen werden Buchungen, die mit dem 3V ROOMS Wizard erstellt wurden mit Office 365 Outlook synchronisiert, siehe dazu [Empfohlene Konfigurationen](/3vrooms-module/addin-wizard_konfigurieren/).

## Serie verwerfen und einen Einzeltermin buchen

{{% alert title="Kommende Version" color="info" %}}
Die nachfolgende Buchungssperre und das Verwerfen einer abgelehnten Serie sind erst für eine kommende quickROOMS-Version vorgesehen. Sie sind noch nicht als veröffentlichte Version bestätigt.
{{% /alert %}}

Kann ROOMS eine gewünschte Serie nicht erstellen, erscheint **Serie konnte nicht erstellt werden.** Die Serienanzeige wird rot und der verbindliche Buchungsabschluss bleibt gesperrt. Passen Sie das Serienmuster oder die Ressource an und lassen Sie die Serie erneut prüfen, wenn Sie weiterhin eine Serie buchen möchten.

Wenn Sie bei einer **neuen oder kopierten Buchung** stattdessen bewusst nur einen Einzeltermin buchen möchten:

1. Öffnen Sie über die Serienanzeige in der Buchungsübersicht den Dialog **Ihre Seriebuchung**.
2. Warten Sie eine laufende Serienprüfung ab. Währenddessen ist **Löschen** gesperrt.
3. Wählen Sie **Löschen**, um das Serienmuster zu verwerfen. Dies ist auch möglich, wenn bereits das erste Serienmuster abgelehnt wurde.
4. Prüfen Sie Datum, Uhrzeit und Ressource der verbleibenden Einzelbuchung und schliessen Sie diese ab. Die übrigen Buchungsvoraussetzungen müssen weiterhin erfüllt sein.

**Löschen** verwirft hier das Serienmuster der noch nicht bestätigten Buchung. Es storniert keine bestehende Serie. Beim Bearbeiten einer bestehenden Buchung steht diese Aktion nicht zur Verfügung.

Im Outlook Add-In entfernen Sie die Wiederholung stattdessen im [Outlook-Termin]({{< relref "3VROOMS-Module/3VROOMS_AddIn_O365Outlook/RessourceBuchen/_index.md#serie-konnte-nicht-erstellt-werden" >}}).
