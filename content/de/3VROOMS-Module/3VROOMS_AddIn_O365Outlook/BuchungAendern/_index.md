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

### Zeitpunkt einer Einzelbuchung im Add-In ändern

1. Öffnen Sie den gebuchten Outlook-Termin und rufen Sie das Add-In auf. Wählen Sie im Menü der Buchungsübersicht **Buchung editieren**.
2. Klicken Sie auf **Raum oder Zeitpunkt ändern** (bei anderen Ressourcenarten entsprechend bezeichnet) und wählen Sie **Zeitpunkt ändern**. Passen Sie Datum, Beginn und Ende im Kalender an.
3. Klicken Sie auf **Zeitpunkt übernehmen**. Damit übernehmen Sie den gewünschten Zeitpunkt zur weiteren Bearbeitung im Add-In. Die gespeicherte ROOMS-Buchung und der Outlook-Termin behalten vorerst ihren bisherigen Zeitpunkt.
4. Prüfen Sie die Buchungsangaben und füllen Sie einen allfälligen Fragenkatalog aus. Klicken Sie auf **Buchung ändern** und warten Sie auf die Bestätigung. Erst nach erfolgreicher Bestätigung durch ROOMS überträgt das Add-In den neuen Zeitpunkt in den Outlook-Termin.
5. Prüfen Sie Beginn und Ende in Outlook. Senden Sie bei eingeladenen Personen das Update in Outlook, damit diese den geänderten Termin erhalten. Die Erinnerung **Buchung geändert** bleibt sichtbar, bis Sie sie schliessen; das Schliessen der Meldung versendet kein Update.

Bis zum verbindlichen Abschluss zeigt das Add-In **Änderung noch nicht gespeichert** sowie den bisherigen und den gewünschten Wert bei den geänderten Datums- und Zeitangaben mit **nicht gespeichert** an. Mit **Änderung verwerfen** setzen Sie die vorgemerkte Zeitänderung auf den bisherigen Outlook-Zeitpunkt zurück. Ohne erfolgreichen Abschluss mit **Buchung ändern** wird der vorgemerkte Zeitpunkt weder in der gespeicherten ROOMS-Buchung noch im Outlook-Termin wirksam.

Ändern Sie den Zeitpunkt währenddessen direkt in Outlook, hat der Outlook-Zeitpunkt Vorrang vor der vorgemerkten Änderung im Add-In. Prüfen Sie vor dem Abschluss nochmals Datum und Uhrzeit. Für Änderungen an der ganzen Serie passen Sie den Zeitpunkt in Outlook an; der Kalender im Add-In ist bei der Bearbeitung der ganzen Serie schreibgeschützt.

{{% alert title="Neue Zeit konnte nicht in Outlook übernommen werden" color="warning" %}}
Meldet das Add-In, dass die Buchung geändert wurde, die neue Zeit aber nicht in den Outlook-Termin übernommen werden konnte, ist die Änderung in ROOMS bereits gespeichert. Prüfen und korrigieren Sie **Beginn und Ende** des Outlook-Termins anhand der bestätigten ROOMS-Buchung, bevor Sie ein Update senden. Auch eine nur teilweise übernommene Zeitänderung ist möglich.
{{% /alert %}}

### Synchronisierten Raum direkt in Outlook wechseln

Wenn die bisherige und die neue Ressource mit Exchange synchronisiert sind, können Sie den Raum direkt im Outlook-Termin wechseln:

1. Fügen Sie den neuen Raum über die Outlook-Raumsuche als Ressource hinzu.
2. Entfernen Sie den bisherigen Raum aus dem Termin.
3. Speichern oder senden Sie den Termin.

ROOMS ordnet die Änderung der bestehenden Buchung zu und übernimmt den neuen Raum, sofern die Buchung dort zulässig ist. Lassen Sie nicht mehrere synchronisierte Räume im Termin stehen. Sind vorübergehend nur der bisherige und ein neuer Raum vorhanden, behandelt ROOMS den neuen Raum als Ersatz und bereinigt den bisherigen Raum bei der Synchronisation.


Werden Änderungen an Terminen in der Vergangenheit vorgenommen, werden die neuen Information nicht mit 3V ROOMS synchronisiert.
