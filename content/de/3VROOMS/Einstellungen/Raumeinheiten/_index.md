---
title: "Raumeinheiten"
linkTitle: "Raumeinheiten"
weight: 7
description: 'In diesem Bereich legen Sie die Raumeinheiten und Listen der Raumeinheiten an. Fügen Sie neue Raumeinheiten hinzu oder löschen Sie bestehende Raumeinheiten.'
---
## Ansicht Raumeinheiten


Im linken Sidepanel finden Sie die Filterfunktionen, mit deren Hilfe Sie nach Raumeinheiten suchen können.

Im rechten Feld sehen Sie die Raumeinheitenliste mit den eingetragenen Raumeinheiten.

{{< imgproc Raumeinheiten_erstellen_suchen Resize "960x" >}}
Ansicht Raumeinheiten
{{< /imgproc >}}


Sie speichern alle Änderungen über den Button _Speichern_.
Zum Löschen von Listenelementen, aktivieren Sie die Checkbox und klicken Sie auf den Button _Entfernen_. Die Liste aktualisiert sich automatisch.


Über das Icon _Im Plan anzeigen_ öffnet sich ein neues Fenster und Sie sehen im Plan die zugeteilten Räume. Der Inhalt wird nur angezeigt, sofern Verknüpfung auf Plan erfolgt ist.

### Raumeinheiten suchen


Im Sidepanel können Sie nach den folgenden Kriterien filtern:

* Gespeicherte Listen
* Bezeichnung
* Status
* Standort: Über das Plus Zeichen einen gespeicherten Standort auswählen


Über den Button _Anzeigen_ finden Sie die Raumeinheiten in der Liste. Diese aktualisiert sich automatisch.

### Daten einsehen


Sie können die Daten einer gespeicherten Raumeinheit einsehen, indem Sie auf den Namen des Listenelements klicken. Es öffnet sich ein Fenster. In diesem sehen Sie die gespeicherten Stammdaten und die Historie.

{{< imgproc Raumeinheiten_Daten_einsehen Resize "960x" >}}
Daten einsehen
{{< /imgproc >}}


Aus dieser Funktion heraus können Sie die Raumeinheit über den Button _Bearbeiten_ wieder bearbeiten.

## Raumeinheiten bearbeiten


Sie können eine bestehende Raumeinheit über das Stift Icon neben dem Listenelement bearbeiten. Es öffnet sich ein neues Feld. In diesem geben Sie die Stammdaten ein und wählen Personen aus.

### Stammdaten der Raumeinheit bearbeiten


Die folgenden Stammdaten können Sie ändern und bearbeiten:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Bezeichnung       | Bezeichnung der Raumeinheit eintragen. Werden in der von Ihnen gespeicherten Sprache angezeigt. |
| Beschreibung      | Die Raumeinheit beschreiben.  |
| Standort  | Standort über das "Plus-Zeichen" hinzufügen Bsp: Bern     |
| Raumeinheit Typ    | Einsprachig. Werte aus Liste (z.B. Archiv, Schulung, Material, etc.). Das Editieren der Liste muss über ein SQL Script oder XML erfolgen.  |
| Kostenträger  |  Kostenträger eintragen; Sie bekommen im Suchfeld Kostenträger vorgeschlagen |
| Anzahl Personen | Über die Pfeiltasten (up/down) entsprechende Personenanzahl auswählen  |
| Fläche | Über die Pfeiltasten (up/down) entsprechende Fläche auswählen. Fläche wird in Quadratmetern angegeben.  |
| Höhe | Über die Pfeiltasten (up/down) entsprechende Höhe auswählen  |
| Gewichtung |  Über die Pfeiltasten (up/down) entsprechende Gewichtung auswählen   |
| Status (aktiv*/inaktiv)* = markiert | Ankreuzen, wenn zutreffend  |
{{< /bootstrap-table >}}


Die geänderten Daten speichern Sie über den untenstehenden Button _Speichern_.

{{< imgproc Raumeinheiten_Stammdaten Resize "960x" >}}
Stammdaten der Raumeinheiten bearbeiten
{{< /imgproc >}}

## Personen der Raumeinheit bearbeiten


Sie können eine oder mehrere Personen einer Raumeinheit zuweisen. Bereits hinzugefügte Personen sehen Sie in der Personenliste. Eine Person kann mehrmals der gleichen Raum Einheit zugeordnet werden (auch zeitlich überschneidend) und eine Person kann in verschiedenen Raum Einheiten vorkommen (auch zeitlich überschneidend).


Wählen Sie Personen für die Raumeinheit über den untenstehenden Button _Hinzufügen_ aus.

{{< imgproc Raumeinheiten_Personen Resize "960x" >}}
Personen der Raumeinheiten bearbeiten
{{< /imgproc >}}


Es öffnet sich ein Feld, in welchem Sie über die Checkbox eine oder mehrere Personen auswählen können. Speichern Sie Ihre Auswahl über den Button _Hinzufügen_.

{{< imgproc Raumeinheiten_Person_hinzufügen Resize "960x" >}}
Eine oder mehrere Personen hinzufügen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Personen in dieser.

{{< imgproc Raumeinheiten_Personen_in_Liste Resize "960x" >}}
Aktualisierte Liste der Personen einer Raumeinheit
{{< /imgproc >}}


Im unteren Feld haben Sie die Möglichkeit _Gültig von_ und _Gültig bis_ auszuwählen. Die Felder können leer bleiben oder Sie weisen ein bestimmtes Start- und Enddatum einer Person zu.


## Raumeinheiten neu erstellen


Eine neue Raumeinheit erstellen Sie über den untenstehenden Button _Erstellen_. In dem Feld, welches sich öffnet, legen Sie folgende Daten fest.

* die Stammdaten
* Person


Die neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.

{{< imgproc Raumeinheit_erstellen Resize "960x" >}}
Erstellen und suchen einer Raumeinheit
{{< /imgproc >}}

{{< imgproc Raumeinheit_neu_in_Liste Resize "960x" >}}
Neue Raumeinheit in der Liste
{{< /imgproc >}}