---
title: "Daten Importe/Exporte"
linkTitle: "Daten Importe/Exporte"
weight: 2
description: >
  Im Bereich Daten Importe- & Exporte sehen Sie die Importliste und bearbeiten diese. Es steht Ihnen der generische Service für Import und Export von verschiedenen Datenstämmen zur Konfiguration zur Verfügung. Erlaubt sind Importe/Exporte aus/in CSV, XML, TXT, MS SQL, AD.
 


---

## Daten Importe/Exporte hinzufügen
Über den untenstehenden Button "Hinzufügen" fügen Sie einen neuen Import Parameter zur Importliste hinzu (Abbildung i). Bei diesem bearbeiten Sie die Stammdaten (Abbildung ia).

{{< imgproc Importe_hinzufügen_suchen Resize "1280x" >}}
Abbildung i: Globale Parameter, Konfigurationsdaten bearbeiten
{{< /imgproc >}}

### Stammdaten bearbeiten
Folgende Daten können für den Import Parameter bearbeitet werden: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Name      | Namen des Importparameters angeben. Freie Eingabe eines beliebigen Namens des Import/Export Jobs. | 
| Nächste Ausführung      | Datum und Zeit der Ausführung eintragen. Zum Starten des Jobs muss eine nächste Ausführung angegeben werden. Standard = leer. Datum/Zeit können auch in Vergangenheit liegen => sofortige Ausführung. Datumpicker verfügt nur über Datum/Zeit (kein von/bis) |
| Intervall in Minuten      |  Standard = leer. Validierung auf positive Ganzzahlen. leer = einmalige Ausführung |
| Konfiguration | XML basierende Konfiguration des Imports oder Exports. Wird durch GARAIO Softwareentwickler definiert.  |  

{{< imgproc Importe_Stammdaten_bearbeiten Resize "1280x" >}}
Abbildung ia: Stammdaten der Importparameter bearbeiten
{{< /imgproc >}}

## Daten Importe/Exporte durchsuchen 
Über das linke Sidepanel durchsuchen Sie die Importliste nach dem Namen des Importparameters (Abbildung i).


