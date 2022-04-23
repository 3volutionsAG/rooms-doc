---
title: "Raumeinheiten"
linkTitle: "Raumeinheiten"
weight: 7
description: >
  In diesem Bereich legen Sie die Raumeinheiten und Listen der Raumeinheiten an. Fügen Sie neue Raumeinheiten hinzu oder löschen Sie bestehende Raumeinheiten. 
 


---
## Ansicht Raumeinheiten
Im linken Sidepanel finden Sie die Filterfunktionen, mit deren Hilfe Sie nach Raumeinheiten suchen können. 

Im rechten Feld sehen Sie die Raumeinheitenliste mit den eingetragenen Raumeinheiten. (Abbildung a)

{{< imgproc Raumeinheiten_erstellen_suchen Resize "1280x" >}}
Abbildung a: Ansicht Raumeinheiten
{{< /imgproc >}}

Sie speichern alle Änderungen über den Button "Speichern". 
Zum Löschen von Listenelementen, aktivieren Sie die Checkbox und klicken Sie auf den Button "Entfernen". Die Liste aktualisiert sich automatisch. 

Über das Icon "Im Plan anzeigen" öffnet sich ein neues Fenster und Sie sehen im Plan die zugeteilten Räume. Der Inhalt wird nur angezeigt, sofern Verknüpfung auf Plan erfolgt ist.

### Raumeinheiten suchen 
Im Sidepanel können Sie nach den folgenden Kriterien filtern: 

* Gespeicherte Listen
* Bezeichnung 
* Status 
* Standort: Über das Plus Zeichen einen gespeicherten Standort auswählen

Über den Button "Anzeigen" finden Sie die Raumeinheiten in der Liste. Diese aktualisiert sich automatisch. 

### Daten einsehen
Sie können die Daten einer gespeicherten Raumeinheit einsehen, indem Sie auf den Namen des Listenelements klicken. Es öffnet sich ein Fenster. In diesem sehen Sie die gespeicherten Stammdaten und die Historie. 

{{< imgproc Raumeinheiten_Daten_einsehen Resize "1280x" >}}
Abbildung ad: Daten einsehen
{{< /imgproc >}}

Aus dieser Funktion heraus können Sie die Raumeinheit über den Button "Bearbeiten" wieder bearbeiten. 

## Raumeinheiten bearbeiten
Sie können eine bestehende Raumeinheit über das Stift Icon neben dem Listenelement bearbeiten (Abbildung a). Es öffnet sich ein neues Feld. In diesem geben Sie die Stammdaten ein und wählen Personen aus. 

### Stammdaten der Raumeinheit bearbeiten
Die folgenden Stammdaten können Sie ändern und bearbeiten: 

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
| Gewichtung | Über die Pfeiltasten (up/down) entsprechende Gewichtung auswählen  | 
| Status (aktiv*/inaktiv)* = markiert | Ankreuzen, wenn zutreffend  | 

Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung rb).

{{< imgproc Raumeinheiten_Stammdaten Resize "1280x" >}}
Abbildung aa: Stammdaten der Raumeinheiten bearbeiten
{{< /imgproc >}}


## Personen der Raumeinheit bearbeiten
Sie können eine oder mehrere Personen einer Raumeinheit zuweisen. Bereits hinzugefügte Personen sehen Sie in der Personenliste. Eine Person kann mehrmals der gleichen Raum Einheit zugeordnet werden (auch zeitlich überschneidend) und eine Person kann in verschiedenen Raum Einheiten vorkommen (auch zeitlich überschneidend).

Wählen Sie Personen für die Raumeinheit über den untenstehenden Button "Hinzufügen" aus. (Abbildung ab) 

{{< imgproc Raumeinheiten_Personen Resize "1280x" >}}
Abbildung ab: Personen der Raumeinheiten bearbeiten
{{< /imgproc >}}

Es öffnet sich ein Feld, in welchem Sie über die Checkbox eine oder mehrere Personen auswählen können. Speichern Sie Ihre Auswahl über den Button "Hinzufügen". (Abbildung ac)

{{< imgproc Raumeinheiten_Person_hinzufügen Resize "1280x" >}}
Abbildung ac: Eine oder mehrere Personen hinzufügen
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Personen in dieser. (Abbildung ad)

{{< imgproc Raumeinheiten_Personen_in_Liste Resize "1280x" >}}
Abbildung ad: Aktualisierte Liste der Personen einer Raumeinheit
{{< /imgproc >}}

Im unteren Feld haben Sie die Möglichkeit "Gültig von" und "Gültig bis" auszuwählen. Die Felder können leer bleiben oder Sie weisen ein bestimmtes Start- und Enddatum einer Person zu.


## Raumeinheiten neu erstellen
Eine neue Raumeinheit erstellen Sie über den untenstehenden Button "Erstellen" (Abbildung a). In dem Feld, welches sich öffnet, legen Sie folgende Daten fest (Abbildung aa) 
* die Stammdaten
* Person  

Die neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung aa).

{{< imgproc Raumeinheit_erstellen Resize "1280x" >}}
Abbildung af: Erstellen und suchen einer Raumeinheit
{{< /imgproc >}}

{{< imgproc Raumeinheit_neu_in_Liste Resize "1280x" >}}
Abbildung ag: Neue Raumeinheit in der Liste
{{< /imgproc >}}