---
title: "Daten Importe/Exporte"
linkTitle: "Daten Importe/Exporte"
weight: 2
description: 'Im Bereich Daten Importe- & Exporte sehen Sie die Importliste und bearbeiten diese. Es steht Ihnen der generische Service für Import und Export von verschiedenen Datenstämmen zur Konfiguration zur Verfügung. Erlaubt sind Importe/Exporte aus/in CSV, XML, TXT, MS SQL, AD.'
---

## Daten Importe/Exporte hinzufügen

<p style="text-align: justify">
Über den untenstehenden Button <i>Hinzufügen</i> fügen Sie einen neuen Import Parameter zur Importliste hinzu. Bei diesem bearbeiten Sie die Stammdaten.

{{< imgproc Importe_hinzufügen_suchen Resize "960x" >}}
Globale Parameter, Konfigurationsdaten bearbeiten
{{< /imgproc >}}

### Stammdaten bearbeiten

<p style="text-align: justify">
Folgende Daten können für den Import Parameter bearbeitet werden: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Name      |<p style="text-align: justify"> Namen des Importparameters angeben. Freie Eingabe eines beliebigen Namens des Import/Export Jobs. </p>| 
| Nächste Ausführung      |<p style="text-align: justify"> Datum und Zeit der Ausführung eintragen. Zum Starten des Jobs muss eine nächste Ausführung angegeben werden. Standard = leer. Datum/Zeit können auch in Vergangenheit liegen => sofortige Ausführung. Datumpicker verfügt nur über Datum/Zeit (kein von/bis) </p>|
| Intervall in Minuten      |<p style="text-align: justify">  Standard = leer. Validierung auf positive Ganzzahlen. leer = einmalige Ausführung </p>|
| Konfiguration |<p style="text-align: justify"> XML basierende Konfiguration des Imports oder Exports. Wird durch GARAIO Softwareentwickler definiert.  </p>|  

{{< imgproc Importe_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten der Importparameter bearbeiten
{{< /imgproc >}}

## Daten Importe/Exporte durchsuchen 

<p style="text-align: justify">
Über das linke Sidepanel durchsuchen Sie die Importliste nach dem Namen des Importparameters. </p>


