---
title: "Raumeinheiten"
linkTitle: "Raumeinheiten"
weight: 7
description: 'In diesem Bereich legen Sie die Raumeinheiten und Listen der Raumeinheiten an. Fügen Sie neue Raumeinheiten hinzu oder löschen Sie bestehende Raumeinheiten.'
---
## Ansicht Raumeinheiten

<p style="text-align: justify">
Im linken Sidepanel finden Sie die Filterfunktionen, mit deren Hilfe Sie nach Raumeinheiten suchen können. </br>

Im rechten Feld sehen Sie die Raumeinheitenliste mit den eingetragenen Raumeinheiten. </p>

{{< imgproc Raumeinheiten_erstellen_suchen Resize "960x" >}}
Ansicht Raumeinheiten
{{< /imgproc >}}

<p style="text-align: justify">
Sie speichern alle Änderungen über den Button <i>Speichern</i>. </br>
Zum Löschen von Listenelementen, aktivieren Sie die Checkbox und klicken Sie auf den Button <i>Entfernen</i>. Die Liste aktualisiert sich automatisch. </p>

<p style="text-align: justify">
Über das Icon <i>Im Plan anzeigen</i> öffnet sich ein neues Fenster und Sie sehen im Plan die zugeteilten Räume. Der Inhalt wird nur angezeigt, sofern Verknüpfung auf Plan erfolgt ist. </p>

### Raumeinheiten suchen 

<p style="text-align: justify">
Im Sidepanel können Sie nach den folgenden Kriterien filtern: </p>

* Gespeicherte Listen
* Bezeichnung 
* Status 
* Standort: Über das Plus Zeichen einen gespeicherten Standort auswählen

<p style="text-align: justify">
Über den Button <i>Anzeigen</i> finden Sie die Raumeinheiten in der Liste. Diese aktualisiert sich automatisch. </p>

### Daten einsehen

<p style="text-align: justify">
Sie können die Daten einer gespeicherten Raumeinheit einsehen, indem Sie auf den Namen des Listenelements klicken. Es öffnet sich ein Fenster. In diesem sehen Sie die gespeicherten Stammdaten und die Historie. </p>

{{< imgproc Raumeinheiten_Daten_einsehen Resize "960x" >}}
Daten einsehen
{{< /imgproc >}}

<p style="text-align: justify">
Aus dieser Funktion heraus können Sie die Raumeinheit über den Button <i>Bearbeiten</i> wieder bearbeiten. </p>

## Raumeinheiten bearbeiten

<p style="text-align: justify">
Sie können eine bestehende Raumeinheit über das Stift Icon neben dem Listenelement bearbeiten. Es öffnet sich ein neues Feld. In diesem geben Sie die Stammdaten ein und wählen Personen aus. </p>

### Stammdaten der Raumeinheit bearbeiten

<p style="text-align: justify">
Die folgenden Stammdaten können Sie ändern und bearbeiten: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung       |<p style="text-align: justify"> Bezeichnung der Raumeinheit eintragen. Werden in der von Ihnen gespeicherten Sprache angezeigt. </p>|
| Beschreibung      |<p style="text-align: justify"> Die Raumeinheit beschreiben.  </p>| 
| Standort  | <p style="text-align: justify">Standort über das "Plus-Zeichen" hinzufügen Bsp: Bern  </p>   |  
| Raumeinheit Typ    |<p style="text-align: justify"> Einsprachig. Werte aus Liste (z.B. Archiv, Schulung, Material, etc.). Das Editieren der Liste muss über ein SQL Script oder XML erfolgen. </p> |  
| Kostenträger  |<p style="text-align: justify">  Kostenträger eintragen; Sie bekommen im Suchfeld Kostenträger vorgeschlagen </p>|  
| Anzahl Personen |<p style="text-align: justify"> Über die Pfeiltasten (up/down) entsprechende Personenanzahl auswählen  </p>| 
| Fläche |<p style="text-align: justify"> Über die Pfeiltasten (up/down) entsprechende Fläche auswählen. Fläche wird in Quadratmetern angegeben. </p> | 
| Höhe |<p style="text-align: justify"> Über die Pfeiltasten (up/down) entsprechende Höhe auswählen </p> | 
| Gewichtung | <p style="text-align: justify"> Über die Pfeiltasten (up/down) entsprechende Gewichtung auswählen </p>  | 
| Status (aktiv*/inaktiv)* = markiert |<p style="text-align: justify"> Ankreuzen, wenn zutreffend </p> | 

<p style="text-align: justify">
Die geänderten Daten speichern Sie über den untenstehenden Button <i>Speichern</i>.

{{< imgproc Raumeinheiten_Stammdaten Resize "960x" >}}
Stammdaten der Raumeinheiten bearbeiten
{{< /imgproc >}}

## Personen der Raumeinheit bearbeiten

<p style="text-align: justify">
Sie können eine oder mehrere Personen einer Raumeinheit zuweisen. Bereits hinzugefügte Personen sehen Sie in der Personenliste. Eine Person kann mehrmals der gleichen Raum Einheit zugeordnet werden (auch zeitlich überschneidend) und eine Person kann in verschiedenen Raum Einheiten vorkommen (auch zeitlich überschneidend). </p>

<p style="text-align: justify">
Wählen Sie Personen für die Raumeinheit über den untenstehenden Button <i>Hinzufügen</i> aus.</p> 

{{< imgproc Raumeinheiten_Personen Resize "960x" >}}
Personen der Raumeinheiten bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Es öffnet sich ein Feld, in welchem Sie über die Checkbox eine oder mehrere Personen auswählen können. Speichern Sie Ihre Auswahl über den Button <i>Hinzufügen</i>.</p>

{{< imgproc Raumeinheiten_Person_hinzufügen Resize "960x" >}}
Eine oder mehrere Personen hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Personen in dieser.</p>

{{< imgproc Raumeinheiten_Personen_in_Liste Resize "960x" >}}
Aktualisierte Liste der Personen einer Raumeinheit
{{< /imgproc >}}

<p style="text-align: justify">
Im unteren Feld haben Sie die Möglichkeit <i>Gültig von</i> und <i>Gültig bis</i> auszuwählen. Die Felder können leer bleiben oder Sie weisen ein bestimmtes Start- und Enddatum einer Person zu. </p>


## Raumeinheiten neu erstellen

<p style="text-align: justify">
Eine neue Raumeinheit erstellen Sie über den untenstehenden Button <i>Erstellen</i>. In dem Feld, welches sich öffnet, legen Sie folgende Daten fest. </p>

* die Stammdaten
* Person  

<p style="text-align: justify">
Die neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i>.

{{< imgproc Raumeinheit_erstellen Resize "960x" >}}
Erstellen und suchen einer Raumeinheit
{{< /imgproc >}}

{{< imgproc Raumeinheit_neu_in_Liste Resize "960x" >}}
Neue Raumeinheit in der Liste
{{< /imgproc >}}