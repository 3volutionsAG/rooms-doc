---
title: "Outlook Importe"
linkTitle: "Outlook Importe"
weight: 3
description: 'Fügen Sie Kontakte aus Ihrem Outlook Kalender und Adresslisten hinzu. CSV Exporte eines Outlook Kalenders in ROOMS importieren.'
---
## Outlook Importe hinzufügen

<p style="text-align: justify">
Sie finden Ihre Outlook Importe über den Button <i>Browse</i>. Dabei öffnet sich ein Feld ihres Browsers, worüber Sie den gewünschten Import (Exportdatei) auswählen. </p>

<p style="text-align: justify">
Generell können nur CSV Dateien verarbeitet werden. </br>
Die CSV wird automatisch durch einen Kalender Export aus Outlook generiert. </p>

{{< imgproc Outlook_Importe Resize "960x" >}}
Outlook Importe hinzufügen und bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Wenn Sie den Import starten möchten, wählen Sie den untenstehenden Button <i>Import starten</i> aus. </p>

### Allgemeine Daten der Outlook Importe bearbeiten

<p style="text-align: justify">
Folgende Daten bearbeiten Sie bei Ihren Outlook Importen:  </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Zielressource     |<p style="text-align: justify"> Wählen Sie ein Land der Resosurce über das _Pluszeichen_ aus </p>| 
| Trennzeichen      |<p style="text-align: justify"> Wählen Sie ein Trennzeichen aus (z.B.: , ; .) Standardwert: , (Komma).Alternativen:(Semikolon), \t (Tabulator) </p>|
| Feldbegrenzzeichen      |<p style="text-align: justify">  Das Zeichen am Anfang und Ende eines Felds. Kann je nach Sprache, Version, Einstellungen anders sein. Bsp: ' oder ". Standardwert: ". Alternativen: ' (Hochkomma) </p>|
| Maskierungszeichen |<p style="text-align: justify"> Das Zeichen am Anfang und Ende eines Felds. Kann je nach Sprache, Version, Einstellungen anders sein. Bsp: ' oder ".  </p> | 
 | Default-Organisator |<p style="text-align: justify"> Diese Person wird als Organisator der Buchung verwendet, falls die Person aus der Datei im System nicht gefunden wird. wird aufgelöst auf Grund der folgenden Parameter: Vorname Nachname, Nachname Vorname, E-Mail, Personalnummer. Konnte keine Auflösung stattfinden, wird der Organisator angezeigt und ein Edit Icon dargestellt </p>| 

 ### Reihenfolge der Spalten bearbeiten 

<p style="text-align: justify">
 Definiert die Reihenfolge der Spalten in der Importdatei. </br>
 Beispiel: an welcher Stelle steht der Titel?
 
| Feld         | Funktion         | 
| ------------- |-------------  | 
| Spaltenindex Titel     |<p style="text-align: justify"> Der Index beginnt bei 0, somit ist die erste Spalte in der CSV-Datei die Spalte 0. </p>| 
| Spaltenindex Beginn-Datum     | <p style="text-align: justify">Wählen Sie ein Beginn-Datum (Bsp: 1)   </p> |
| Spaltenindex Beginn-Zeit      |<p style="text-align: justify">  Wählen Sie eine Beginn-Zeit (Bsp: 2) </p>|
| Spaltenindex Ende-Datum |<p style="text-align: justify"> Wählen Sie ein End-Datum (Bsp: 3)  </p> | 
| Spaltenindex Ende-Zeit |<p style="text-align: justify"> Wählen Sie eine End-Zeit (Bsp: 4) </p>| 
| Spaltenindex Organisator |<p style="text-align: justify"></p>  | 
| Spaltenindex erforderliche Teilnehmer |<p style="text-align: justify"></p> | 
| Spaltenindex optionale Teilnehmer | <p style="text-align: justify"></p>| 
| Spaltenindex Bemerkung |<p style="text-align: justify"></p> | 
| Spaltenindex Ist Privat |<p style="text-align: justify"> </p> | 



