
---
title: "Eine Buchung im Kalender bearbeiten"
linkTitle: "Eine Buchung im Kalender bearbeiten"
weight: 2
date: 2020-06-30
description: 'Im Kalender können Sie eine bereits bestehende Buchung bearbeiten, wie z.B. die Buchungslänge oder eine Buchung verschieben.'
---

Um eine Buchung zu bearbeiten, wählen Sie das **+** in der Reservation im Kalender aus. Dafür fahren Sie mit der Maus auf die Buchung und es erscheinen ein **+** und eine Checkbox.


Klicken Sie auf das **+**, öffnet sich das Buchungsfenster. Unter dem Titel stehen die Ressource und der Buchungszeitraum. Welche Aktionen angezeigt werden, hängt von Ihren Rechten und dem Zustand der Buchung ab.

{{< imgproc Kalender_Buchung_Plus Resize "960x" >}}
Buchungsfenster nach dem Klick auf das +
{{< /imgproc >}}

### Aktionen im Buchungsfenster

Die häufig verwendeten Aktionen stehen direkt oben im Fenster:

* **Detail**: Zusammenfassung der Detailreservation ansehen
* **Bearbeiten**: Detailbuchung bearbeiten
* **Kopieren**: Buchung kopieren

Im Menü **Weitere Aktionen** finden Sie je nach Buchung:

* **Zum Anlass**: den zugehörigen Anlass öffnen
* **Annullieren** oder **Serie annullieren**: die Buchung oder Serie annullieren
* **Terminieren** und **Freigeben**: eine laufende Reservation beenden
* **No Show**: eine nicht genutzte Buchung annullieren und als No-Show kennzeichnen. Sie kann in der Listenansicht gefunden und ausgewertet werden. Voraussetzung ist das Recht **Darf Reservationen als No Show kennzeichnen**.
* **Löschen** oder **Serie löschen**: die Buchung oder Serie aus dem System löschen

Prüfen Sie vor dem Bestätigen einer Annullation oder Löschung, ob die Aktion eine einzelne Buchung oder die Serie betrifft. Das Schliessen des Bestätigungsdialogs führt die Aktion nicht aus.

**Terminieren und Freigeben:** Beim Terminieren bleibt die Nachlaufzeit berücksichtigt. Beim Freigeben wird auch die Nachlaufzeit beendet. Mit dem Recht **Darf Reservationen terminieren mit Zeitpunkt** beziehungsweise **Darf Reservationen freigeben mit Zeitpunkt** öffnet der Menüeintrag zuerst die passende Zeiteingabe. Wählen Sie den Zeitpunkt und klicken Sie anschliessend auf **Terminieren** beziehungsweise **Freigeben** bei der Zeiteingabe.

### Status ändern

Der aktuelle Buchungsstatus wird mit einem farbigen Punkt in der konfigurierten Statusfarbe angezeigt. Wenn ein Statuswechsel möglich ist, wählen Sie unter **Status Wechsel** den Zielstatus aus. Prüfen Sie die angebotenen E-Mail-Optionen und bei Serien die Option **Änderungen auf Serie übernehmen**, bevor Sie auf **Übernehmen** klicken und die Rückfrage bestätigen.

### Kalender-Synchronisation

Wenn die Kalender-Synchronisation für die Buchung angezeigt wird, steht ihr Status in der Fusszeile. Die Aktion **Synchronisieren** erscheint dort direkt, sofern sie für die Buchung verfügbar ist.

Zusätzliche Eingriffe finden Sie im Drei-Punkte-Menü **Synchronisationsaktionen** neben dem Status. Dieses Menü zeigt nur die für die Buchung verfügbaren Aktionen und setzt das Recht **Darf Konfiguration System verwalten** voraus. Bei Synchronisationsproblemen prüfen Sie zuerst die [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}), statt die Synchronisation ungeprüft zu erzwingen.

### Fenster schliessen

Sie können das Buchungsfenster über das Schliessen-Symbol, mit **Escape** oder durch einen Klick ausserhalb schliessen. Ein offenes Menü oder eine Auswahlliste wird mit Escape zuerst geschlossen. Ist ein vergrössertes Bemerkungsfeld geöffnet, wird zuerst dieses Fenster geschlossen. Der Klick ausserhalb schliesst das Fenster, ohne gleichzeitig eine andere Buchung zu öffnen.

{{% alert title="Ungespeicherte Eingaben" color="warning" %}}
Das Schliessen eines Buchungs- oder Schnellbuchungsfensters speichert keine Eingaben und erstellt keine Buchung. Schliessen Sie die Eingabe mit der vorgesehenen Aktion ab, bevor Sie das Fenster verlassen.
{{% /alert %}}

{{% alert title="Info: Tab „Fragenkatalog“ in Buchungen" color="info" %}}
In einigen Buchungen sehen Sie zusätzlich den Tab **„Fragenkatalog“**. Dieser erscheint nur, wenn für die ausgewählte Ressource (z.B. Raum) ein Fragenkatalog hinterlegt ist und relevante Fragen vorhanden sind.

Mehr dazu:
- [Fragenkatalog](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/fragenkatalog/)
- [Fragen](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/fragen/)
{{% /alert %}}

### Bearbeiten einer Buchung mittels Checkbox


Sie können ebenfalls eine Buchung bearbeiten, indem Sie die Checkbox auf der Buchung auswählen. In der unteren Leiste stehen Ihnen dann die Funktionen zur Verfügung:

* Bearbeiten: Sie gelangen zur Detailbuchung
* Freigeben: Steht bei einer Massenbearbeitung zur Verfügung
* Terminieren: Das Terminieren einer Buchung steht Ihnen bei einer Massenbuchung zur Verfügung
* Annulieren: Annulieren der Buchung
* Aktualisieren: Buchung aktualisieren

{{< imgproc Kalender_Buchung_auswählen Resize "960x" >}}
Buchung zum Bearbeiten über die Checkbox auswählen
{{< /imgproc >}}

### Buchungslänge ändern


Möchten Sie die Zeitspanne einer Buchung ändern, können Sie dies ganz einfach im Kalender machen. Dazu fahren Sie mit der Maus an den Anfang oder an das Ende einer Buchung, danach kann die Buchungszeit einfach mittels Ziehen der Maus verändert werden.

{{< imgproc Kalender_Buchung_Länge_ändern Resize "960x" >}}
Länge einer Buchung im Kalender ändern
{{< /imgproc >}}


Es werden keine weiteren Klicks benötigt, die neue Reservationszeit wird sofort abgespeichert.

### Buchung verschieben


Auf dem Kalender können Sie auch bestehende Buchungen verschieben. Verschieben Sie die Buchungen sowohl auf andere Zeitpunkte als auch auf andere Ressourcen.
Dabei sollten Sie beachten, dass die Buchungen einer Ressourcenart nur auf eine Ressource mit derselben Ressourcenart verschoben werden können. Eine solche Verschiebung funktioniert sehr einfach per Drag & Drop.

{{< imgproc Kalender_Buchung_verschieben Resize "960x" >}}
Eine bestehende Buchung im Kalender verschieben
{{< /imgproc >}}

### Buchung annullieren
Falls der Benutzer die Berechtigung "Darf Reservationen mit Kosten editieren" hat und die Buchung Kosten enthält, kann bei der Annullation angegeben werden, was mit den anfälligen Kosten auf der geschehen soll. Es gibt drei optionen:
* Annullierungskosten verrechnen (Standardverhalten)
* Alle kosten verrechnen
* Keine kosten verrechnen

{{< imgproc Kalender_Buchung_annullation Resize "500x" >}}
Buchung annullieren
{{< /imgproc >}}

## Massenbearbeitung einer Buchung im Kalender


Wählen Sie mehrere Buchungen mittels der Checkbox aus, steht Ihnen die Funktion der Massenbearbeitung zur Verfügung.
Sie können dann mehrere Buchungen gleichzeitig bearbeiten, freigeben, verschieben oder annulieren.


Eine genaue Beschreibung der Massenbearbeitung finden Sie hier:
[Massenbearbeitung](/3vrooms/buchen/massenbearbeitung/)

