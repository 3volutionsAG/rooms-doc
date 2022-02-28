---
title: "Terminals"
linkTitle: "Terminals"
weight: 6
description: >
  Im Bereich Terminals legen Sie Terminallisten fest. Die einzelnen Terminals können Sie neu hinzufügen oder ändern. 
  Terminaltypen müssen vorgängig implementiert werden. Aktuell implementierte Typen: SPS Steuerung  
 

---
## Ansicht: Terminals 
Im linken Sidepanel finden Sie unter der Kategorie "Tarife" eine Suchfunktion mit dessen Hilfe Sie nach einem Tarif suchen können (Abbildung t). Sie können hierbei nach folgenden Kriterien suchen: 
* Bezeichnung
* Typ

Im rechten Feld sehen Sie die Terminalliste. Sollten keine Terminals gespeichert sein ist diese Liste leer. 

{{< imgproc Terminals_Ansicht Resize "1280x" >}}
Abbildung t: Start Ansicht der Terminalliste
{{< /imgproc >}}

Aktivieren Sie die Checkbox neben dem Listenelement, um einen Terminal aus der Liste zu entfernen. Dazu klicken Sie auf den untenstehenden Button "Entfernen". 

### Daten einsehen
Sie können die gespeicherten Daten der Listenelemente über Klick auf den Namen des Listenelements einsehen. 

## Terminals bearbeiten
Klicken Sie auf das Sift Icon neben einem Listenelement, können Sie die Stammdaten und die Ressourcen eines Terminals bearbeiten.

## Terminal hinzufügen
Terminals erstellen Sie über den untenstehenden Button "Hinzufügen". In dem Feld, welches sich öffnet legen Sie die Stammdaten sowie die Ressourcen für die jeweiliege Tarifkategorie fest (Abbildung hi).

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung hi).

{{< imgproc Terminals_neu_hinzufügen Resize "1280x" >}}
Abbildung hi: Stammdaten der Terminals bearbeiten und speichern
{{< /imgproc >}}

### Stammdaten der Terminals bearbeiten
Die folgenden Daten legen Sie bei den Stammdaten der Terminals fest:

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Terminaltyp        | Über das "drop-down" Menü den Terminaltyp (Bsp.: SPS Steuerung) festlegen. Selektion eines implementierten Terminaltyps.| 
| Bezeichnung   | Die Bezeichnung des Terminals festlegen   |  
| IP Adresse | IP Adresse angeben. Validierung auf IP Adresse.  |  



### Ressourcen bearbeiten
Im Reiter Ressourcen fügen Sie die entsprechenden Ressorcen für den Terminal hinzu (Abbildung hv). Sollten noch keine Ressourcen ausgewählt sein, klicken Sie auf den untenstehenden Button "Hinzufügen".

{{< imgproc Terminals_Ressourcen Resize "1280x" >}}
Abbildung hv: Ressourcen der Terminals festlegen
{{< /imgproc >}}

Es öffnet sich ein Feld, in welchem Sie eine oder mehrere Ressourcen über das Aktivieren der Checkbox auswählen können. Speichern Sie Ihre Auswahl über den Button "Speichern".

{{< imgproc Terminals_Ressourcen_hinzufügen Resize "1280x" >}}
Abbildung hx: Ressourcen aus der Liste hinzufügen
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch und Sie sehen Ihre ausgewählten Ressourcen in der Übersicht.

{{< imgproc Terminals_Ressourcen_in_Liste Resize "1280x" >}}
Abbildung hz: Hinzugefügte Ressourcen in der Liste 
{{< /imgproc >}}