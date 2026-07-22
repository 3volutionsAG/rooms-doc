---
title: "Buchung in O365 Outlook ändern"
linkTitle: "Buchung in O365 Outlook ändern"
weight: 200
description: 'Termine mit einer 3V ROOMS Buchung können auch in Outlook geändert werden.'
---
Ein Termin kann auf zwei Arten geändert werden:

- im Outlook-Kalender
- über das 3V ROOMS Outlook Add-In

Bei beiden Arten sind Besonderheiten zu beachten.

### Termin im Outlook-Kalender ändern

1. **Öffnen** Sie den Termin im Outlook-Kalender durch Doppelklicken oder markieren Sie den Termin un klicken Sie auf Bearbeiten.
2. Öffnen Sie das **Outlook Add-In**, indem Sie

      - in der *Web-Anwendung* in der Menüzeile auf **...** klicken und aus dem Auswahlmenü **3V-ROOMS add-in** wählen.
         {{< imgproc O365Outlook_web Resize "960x">}} {{< /imgproc >}}
      - in der *lokalen Anwendung* im Aktionsmenü auf **Raum buchen** klicken.
         {{< imgproc O365Outlook_lokal Resize "960x">}} {{< /imgproc >}}


    Es wird die ROOMS Buchungsbestätigung angezeigt.

   {{< imgproc O365Outlook_web_BGbest Resize "960x">}} {{< /imgproc >}}

3. Klicken Sie oben rechts in der Buchungsbestätigung auf das Zahnrad.

   {{< imgproc O365Outlook_web_BGedit Resize "960x">}} {{< /imgproc >}}

    Sie können die Buchungsdetails nun ändern.

Alternativ können Sie den Termineintrag im Kalender verschieben, um Datum und Zeit zu ändern.

    {{< imgproc O365Outlook_web_BGaendern Resize "960x">}} {{< /imgproc >}}


Die Terminänderung wird automatisch mit 3V ROOMS synchronisiert. Sollte die ROOMS Ressource zum neuen Termin nicht verfügbar sein, wird die Buchung auf den ursprünglichen Termin zurück gesetzt.


Je nach Konfigurationen werden entsprechende Mitteilungen an Teilnehmende, organisierende und verantwortliche Personen versendet.

### Synchronisierten Raum direkt in Outlook wechseln

Wenn die bisherige und die neue Ressource mit Exchange synchronisiert sind, können Sie den Raum direkt im Outlook-Termin wechseln:

1. Fügen Sie den neuen Raum über die Outlook-Raumsuche als Ressource hinzu.
2. Entfernen Sie den bisherigen Raum aus dem Termin.
3. Speichern oder senden Sie den Termin.

ROOMS ordnet die Änderung der bestehenden Buchung zu und übernimmt den neuen Raum, sofern die Buchung dort zulässig ist. Lassen Sie nicht mehrere synchronisierte Räume im Termin stehen. Sind vorübergehend nur der bisherige und ein neuer Raum vorhanden, behandelt ROOMS den neuen Raum als Ersatz und bereinigt den bisherigen Raum bei der Synchronisation.


Werden Änderungen an Terminen in der Vergangenheit vorgenommen, werden die neuen Information nicht mit 3V ROOMS synchronisiert.
