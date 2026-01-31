---
title: "Ressource über O365 Outlook buchen"
linkTitle: "Ressource über O365 Outlook buchen"
weight: 100
description: 'Das Office 365 Outlook Add-In ermöglicht das Buchen einer Ressource in Outlook.'
---
</br>

1. Öffnen Sie O365 Outlook (lokal oder webbasiert).
2. Legen Sie einen neuen Termin / ein neues Ereignis an, indem Sie im Aktionsmenü auf **Neuer Termin** / **Neues Ereignis** klicken oder im Kalender bei der gewünschten Zeit doppelklicken. </br>
Es öffnet sich die Eingabemaske zur Terminerstellung.
3. Geben Sie **Titel** und **Beschreibung** ein. Nehmen Sie ggf. **Einstellungen für einen Serientermin** vor.
4. Öffnen Sie das Outlook Add-In, indem Sie </br>

      - in der *Web-Anwendung* in der Menüzeile auf **...** klicken und aus dem Auswahlmenü **3V-ROOMS add-in** wählen.
         {{< imgproc O365Outlook_web Resize "960x">}} {{< /imgproc >}}
      - in der *lokalen Anwendung* im Aktionsmenü auf **Raum buchen** klicken.
         {{< imgproc O365Outlook_lokal Resize "960x">}} {{< /imgproc >}}
5. Klicken Sie auf den **Ressourcentyp**, den Sie buchen möchten, z.B. Raum. Es öffnet sich eine Filtermaske:
   - *Datum und Uhrzeit* werden aus dem Outlook-Ereignis übernommen
   - *Teilnehmerzahl* wird mit den Standardeinstellungen des Benutzenden aus 3V ROOMS ausgefüllt
   - Die Einstellung *Alle Bestuhlungsarten* berücksichtigt auch Räume für mehr Personen als die angegebene Teilnehmerzahl.
   - *Standort* grenzt die Suche lokal ein, es können mehrere Standort ausgewählt werden.
</br>
      {{< imgproc O365Outlook_web_RaumFilter Resize "960x">}} {{< /imgproc >}}

6. Klicken Sie auf **Weiter zu den Räumen**, die Zahl auf der Schaltfläche gibt die Anzahl der verfügbaren Ressourcen an. Es öffnet sich eine Liste mit den entsprechenden Ressourcen. Die Einträge enthalten folgenden Informationen:
   - Ressourcenname
   - Ressourcenbild (wenn vorhanden)
   - Standort
   - bei Räumen: maximale Personenzahl bei Standardbestuhlung, in Klammern Mindestpersonenzahl und maximale Personenzahl bei alternativer Bestuhlung
   - Catering & Service, falls bei diesem Raum grundsätzlich verfügbar
   - Schaltfläche Buchen mit Preisangabe, falls der Preis hinterlegt ist
</br>
   {{< imgproc O365Outlook_web_ResErgebnis Resize "960x">}} {{< /imgproc >}}

7. Wählen Sie eine Ressource und klicken Sie auf **Buchen**. Die Ressource wird in 3V ROOMS blockiert, jedoch noch nicht gebucht. Es öffnet sich die Zusammenfassung der Buchung.

   **Die Buchungsdetails, ausser der Titel, können nicht mehr geändert werden. Wird das Datum oder die Uhrzeit in Outlook geändert, startet der Buchungsassistent neu. Die Blockierung der Ressource wird aufgehoben.**

   {{< imgproc O365Outlook_web_Zus Resize "960x">}} {{< /imgproc >}}

8. Je nach Konfiguration können Sie weitere Informationen hinterlegen (Kostenträger, Bestuhlungsart, Equipment, ...). Schieben Sie dazu den Laufbalken rechts neben der Zusammenfassung runter.
   {{< imgproc O365Outlook_web_weitereInfos Resize "960x">}} {{< /imgproc >}}
9. Klicken Sie auf **Buchen**, um die Buchung verbindlich abzuschliessen. Die Buchung wird in 3V ROOMS übernommen und bestätigt. </br> Der Name der Ressource wird in das Feld Standort des Outlook-Termins übertragen.
   {{< imgproc O365Outlook_web_Buchungsbest Resize "960x">}} {{< /imgproc >}}
10. Klicken Sie auf **Senden**. Der Termin wird im Kalender gespeichert und die Termineinladung an die Teilnehmenden versendet.
