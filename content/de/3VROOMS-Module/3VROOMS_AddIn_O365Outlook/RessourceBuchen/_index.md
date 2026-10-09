---
title: "Ressource über O365 Outlook buchen"
linkTitle: "Ressource über O365 Outlook buchen"
weight: 100
description: 'Das Office 365 Outlook Add-In ermöglicht das Buchen einer Ressource in Outlook.'
---


1. Öffnen Sie O365 Outlook (lokal oder webbasiert).
2. Legen Sie einen neuen Termin / ein neues Ereignis an, indem Sie im Aktionsmenü auf **Neuer Termin** / **Neues Ereignis** klicken oder im Kalender bei der gewünschten Zeit doppelklicken.
Es öffnet sich die Eingabemaske zur Terminerstellung.
3. Geben Sie **Titel** und **Beschreibung** ein. Nehmen Sie ggf. **Einstellungen für einen Serientermin** vor.
4. Öffnen Sie das Outlook Add-In, indem Sie

      - in der *Web-Anwendung* in der Menüzeile auf **...** klicken und aus dem Auswahlmenü **3V-ROOMS add-in** wählen.
         {{< imgproc O365Outlook_web Resize "960x">}} {{< /imgproc >}}
      - in der *lokalen Anwendung* im Aktionsmenü auf **Raum buchen** klicken.
         {{< imgproc O365Outlook_lokal Resize "960x">}} {{< /imgproc >}}
5. Klicken Sie auf den **Ressourcentyp**, den Sie buchen möchten, z.B. Raum. Es öffnet sich eine Filtermaske:
   - *Datum und Uhrzeit* werden aus dem Outlook-Ereignis übernommen
   - *Teilnehmerzahl* wird mit den Standardeinstellungen des Benutzenden aus 3V ROOMS ausgefüllt
   - Die Einstellung *Alle Bestuhlungsarten* berücksichtigt auch Räume für mehr Personen als die angegebene Teilnehmerzahl.
   - *Standort* grenzt die Suche lokal ein; es können mehrere Standorte ausgewählt werden.
   - Welche *Gliederungstypen* (z. B. Raumtyp oder Raumlabel) und *Gliederungen* zur Auswahl stehen, richtet sich nach der gewählten Ressourcenart und den Standorten. Das Add-In zeigt nur Einträge an, die mindestens einer aktiven Ressource an einem gewählten Standort oder dessen Unterstandorten zugeordnet sind. Ändern Sie die Standortauswahl, werden die verfügbaren Gliederungen aktualisiert und nicht mehr passende Auswahlen entfernt. Ist kein Standort gewählt, stehen die standortübergreifend verfügbaren Gliederungen zur Auswahl.

      {{< imgproc O365Outlook_web_RaumFilter Resize "960x">}} {{< /imgproc >}}

6. Klicken Sie auf **Weiter zu den Räumen**, die Zahl auf der Schaltfläche gibt die Anzahl der verfügbaren Ressourcen an. Es öffnet sich eine Liste mit den entsprechenden Ressourcen. Die Einträge enthalten folgenden Informationen:
   - Ressourcenname
   - Ressourcenbild (wenn vorhanden)
   - Standort
   - bei Räumen: maximale Personenzahl bei Standardbestuhlung, in Klammern Mindestpersonenzahl und maximale Personenzahl bei alternativer Bestuhlung
   - Catering & Service, falls bei diesem Raum grundsätzlich verfügbar
   - Schaltfläche Buchen mit Preisangabe, falls der Preis hinterlegt ist

   {{< imgproc O365Outlook_web_ResErgebnis Resize "960x">}} {{< /imgproc >}}

7. Wählen Sie eine Ressource und klicken Sie auf **Buchen**. Die Ressource wird in 3V ROOMS blockiert, jedoch noch nicht gebucht. Es öffnet sich die Zusammenfassung der Buchung.

   **Die Buchungsdetails, ausser der Titel, können nicht mehr geändert werden. Wird das Datum oder die Uhrzeit in Outlook geändert, startet der Buchungsassistent neu. Die Blockierung der Ressource wird aufgehoben.**

   {{< imgproc O365Outlook_web_Zus Resize "960x">}} {{< /imgproc >}}

8. Je nach Konfiguration können Sie weitere Informationen hinterlegen (Kostenträger, Bestuhlungsart, Equipment, ...). Schieben Sie dazu den Laufbalken rechts neben der Zusammenfassung runter.
   {{< imgproc O365Outlook_web_weitereInfos Resize "960x">}} {{< /imgproc >}}
9. Wenn die Buchung privat sein soll, markieren Sie den Outlook-Termin vor dem Abschluss der Buchung in quickROOMS als **Privat**. quickROOMS übernimmt diesen Status in die ROOMS-Buchung.

   {{% alert title="Privatstatus" color="info" %}}
   In Office.js-basierten Outlook-Clients setzt die Übernahme mindestens Outlook API Version 1.14 (Requirement Set `Mailbox 1.14`) voraus. Unterstützt der Client diese API nicht oder kann die Einstellung nicht gelesen werden, kann quickROOMS den Outlook-Privatstatus nicht an ROOMS übertragen.
   {{% /alert %}}

10. Klicken Sie auf **Buchen**, um die Buchung verbindlich abzuschliessen. Die Buchung wird in 3V ROOMS übernommen und bestätigt.   Der Name der Ressource wird in das Feld Standort des Outlook-Termins übertragen.
    {{< imgproc O365Outlook_web_Buchungsbest Resize "960x">}} {{< /imgproc >}}
11. Klicken Sie auf **Senden**. Der Termin wird im Kalender gespeichert und die Termineinladung an die Teilnehmenden versendet.

## Serie konnte nicht erstellt werden

{{% alert title="Kommende Version" color="info" %}}
Die nachfolgende Buchungssperre ist erst für eine kommende quickROOMS-Version vorgesehen. Sie ist noch nicht als veröffentlichte Version bestätigt.
{{% /alert %}}

Kann ROOMS die gewünschte Serie nicht erstellen, erscheint **Serie konnte nicht erstellt werden.** Die Serienanzeige in der Buchungsübersicht wird rot und der verbindliche Buchungsabschluss bleibt gesperrt. quickROOMS bestätigt nicht stattdessen nur den ersten Termin.

- **Weiterhin als Serie buchen:** Passen Sie das Serienmuster in Outlook oder die gewählte Ressource an und warten Sie die erneute Prüfung ab. Erst wenn die Serie gültig ist und die übrigen Buchungsvoraussetzungen erfüllt sind, können Sie die Buchung abschliessen.
- **Bewusst nur einen Einzeltermin buchen:** Entfernen Sie bei der noch nicht bestätigten Buchung die Wiederholung im Outlook-Termin. Warten Sie, bis quickROOMS die Änderung übernommen hat, und prüfen Sie Datum, Uhrzeit und Ressource. Schliessen Sie anschliessend die Einzelbuchung ab.

Die Fehlermeldung kann weiterhin nur einen technischen Fehler statt des konkreten Ablehnungsgrunds anzeigen. Eine noch vorhandene Wiederholung im Outlook-Entwurf bestätigt keine Raumbuchung. Senden Sie die Einladung nicht in der Annahme, die abgelehnte Serie sei gebucht; prüfen Sie zuerst die Buchungsbestätigung in quickROOMS.

Im Browser-Wizard entfernen Sie das Serienmuster stattdessen im [Seriendialog]({{< relref "3VROOMS-Module/3VROOMS_Wizard/_index.md#serie-verwerfen-und-einen-einzeltermin-buchen" >}}).
