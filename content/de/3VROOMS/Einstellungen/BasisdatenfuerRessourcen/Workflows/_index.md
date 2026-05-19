---
title: "Workflows"
linkTitle: "Workflows"
weight: 3
description: 'In diesem Bereich legen Sie neue Workflows an, erstellen Workflowlisten oder entfernen die gespeicherten Workflows. Bereits definierte Status werden zu einem Workflow konfiguriert und einer Ressource zugeordnet.'
---
## Workflow Ansicht

Im linken Feld finden Sie die Suchfunktion im Sidepanel. Im rechten Feld sehen Sie die Workflowliste. Diese können Sie bearbeiten, löschen oder neue Workflows hinzufügen.

{{< imgproc Workflow_Ansicht Resize "960x" >}}
Workflow Ansicht Startbildschirm
{{< /imgproc >}}

### Workflow durchsuchen


Im linken Menü finden Sie unter der Kategorie _Workflow_ eine Suchfunktion, mit dessen Hilfe Sie nach einem Workflow suchen können. Sie können hierbei nach folgenden Kriterien suchen:

* Bezeichnung

Bestätigen Sie Ihre Suche über den Button _Finden_.

## Workflowliste bearbeiten


Den Workflow in der Workflowliste bearbeiten Sie indem Sie auf das Stift Icon _Bearbeiten_ auswählen . Es öffnet sich ein Feld, in welchem Sie die Bezeichnung des Workflows ändern können.

{{< imgproc Workflow_bearbeiten Resize "960x" >}}
Workflow: Informationen bearbeiten und speichern
{{< /imgproc >}}

### Ereignisse bearbeiten


Klicken Sie auf den nächsten Reiter _Ereignisse_, können Sie dort Ereignisse bearbeiten, löschen oder neue hinzufügen. Wechseln Sie den Status (z.B. Besetzt auf provisorisch). Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.
Über das Aktivieren der Checkbox des Listenelements wählen Sie ein Element aus, welches Sie löschen wollen. Dies machen Sie über den untenstehenden Button _Entfernen_.

{{< imgproc Workflow_bearbeiten_Ereignisse Resize "960x" >}}
Workflow Ereignisse bearbeiten und löschen
{{< /imgproc >}}


Sie bearbeiten ein Ereignis über das Stift Icon. Es öffnet sich das gleiche Feld mit den zu bearbeitenden Funktionen wie unter _Workflow bearbeiten_.


Sie fügen ein Ereignis über den untenstehenden Button _hinzufügen_ hinzu. Es öffnet sich ein Feld, in welchem Sie die Ereignisdetails eingeben.

{{< imgproc Workflow_bearbeiten_Ereignisse_hinzufügen Resize "960x" >}}
Ereignisse zu Workflow hinzufügen
{{< /imgproc >}}

#### Ereignisdetails


Ein Ereignis setzt sich immer zusammen aus einem Wechsel von einem Status in einen zweiten:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Wechsel von Status  |  Mittels Dropdown wählen aus gespeicherten Status. In Dropdown _Wechsel von Status_ ist zusätzlich der Eintrag _neu_ (Zustand einer unbebuchten Ressource) verfügbar. Sie sehen alle Status Angaben, die Sie gespeichert haben. |
| Wechsel in Status | In Dropdown _Wechsel in Status_ ist der zusätzliche Reservationsstatus _annulliert_ verfügbar.    |
| Notifikationsgruppe | Definition einer Benutzergruppe, welche bei Status Änderung per E-Mail notifiziert wird. Alle Member der entsprechenden Gruppe erhalten eine Notifikation.    |
| Nachricht an Ersteller:in    | Wird der Ereignisschritt ausgelöst, erhält die Ersteller:in die Reservation-Änderungsnotifikation (Standard: deaktiviert (Nein))   |
| Nachricht an Organisator:in    |  Wird der Ereignisschritt ausgelöst, erhält die Organisator:in die Reservation-Änderungsnotifikation (Standard: deaktiviert (Nein))  |
| Nachricht an Verantwortliche:n  |  Wird der Ereignisschritt ausgelöst, erhält die Verantwortliche die Reservation-Änderungsnotifikation (Standard: deaktiviert (Nein))    |
| Sortierung    |  Auswahl, an welcher Stelle das Listenelement angezeigt werden soll.   |
{{< /bootstrap-table >}}

## Workflow neu erstellen


Indem Sie auf den Button _Erstellen_ klicken, können Sie einen neuen Workflow erstellen. Es öffnen sich die gleichen Felder mit zu bearbeitenden Informationen.

{{< imgproc Workflow_erstellen Resize "960x" >}}
Neuen Workflow erstellen
{{< /imgproc >}}


Haben Sie einen Workflow erfolgreich bearbeitet oder neu erstellt, aktualisiert sich die Liste automatisch. Sie sehen das Element im View Modus.

{{< imgproc Workflo_neu_in_Liste Resize "960x" >}}
Bearbeiteter oder neuer Workflow in aktualisierter Liste
{{< /imgproc >}}

### Workflow: Daten einsehen


Wenn Sie die gespeicherten Daten nur einsehen wollen, fahren Sie mit dem Mauszeiger über den Namen der Bestuhlung und klicken Sie auf diesen. Es öffnet sich eine Zusammenfassung der eingetragenen und gespeicherten Daten zu diesem Workflow. Dort sehen Sie die Stammdaten, die Ereignisse und die Historie. Über den untenstehenden Button _Bearbeiten_ können Sie diese Daten auch aus diesem Feld heraus bearbeiten oder drucken. Mit dem Zurück-Button gelangen Sie zurück zur Personenliste.

{{< imgproc Workflow_Daten_einsehen Resize "960x" >}}
Workflow:Daten einsehen und bearbeiten
{{< /imgproc >}}
