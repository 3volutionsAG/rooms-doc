---
title: "Outlook Importe"
linkTitle: "Outlook Importe"
weight: 3
description: >
  Fügen Sie Kontakte aus Ihrem Outlook Kalender und Adresslisten hinzu. CSV Exporte eines Outlook Kalenders in ROOMS importieren.   
 


---
## Outlook Importe hinzufügen
Sie finden Ihre Outlook Importe über den Button "Browse" (Abbildung u). Dabei öffnet sich ein Feld ihres Browsers worüber Sie den gewünschten Import (Exportdatei) auswählen.

Generell können nur CSV Dateien verarbeitet werden.
Die CSV wird automatisch durch einen Kalender Export aus Outlook generiert.

{{< imgproc Outlook_Importe Resize "1280x" >}}
Abbildung u: Outlook Importe hinzufügen und bearbeiten
{{< /imgproc >}}

Wenn Sie den Import starten möchten, wählen Sie den untenstehenden Button "Import starten" aus. 

### Allgemeine Daten der Outlook Importe bearbeiten
Folgende Daten bearbeiten Sie bei Ihren Outlook Importen:  

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Zielressource     | Wählen Sie ein Land der Resosurce über das "Pluszeichen" aus | 
| Trennzeichen      | Wählen Sie ein Trennzeichen aus (z.B.: , ; .) Standardwert: , (Komma).Alternativen:(Semikolon), \t (Tabulator) |
| Feldbegrenzzeichen      |  Das Zeichen am Anfang und Ende eines Felds. Kann je nach Sprache, Version, Einstellungen anders sein. Bsp: ' oder ". Standardwert: ". Alternativen: ' (Hochkomma) |
| Maskierungszeichen | Das Zeichen am Anfang und Ende eines Felds. Kann je nach Sprache, Version, Einstellungen anders sein. Bsp: ' oder ".   | 
 | Default-Organisator | Diese Person wird als Organisator der Buchung verwendet, falls die Person aus der Datei im System nicht gefunden wird. wird aufgelöst auf Grund der folgenden Parameter: Vorname Nachname, Nachname Vorname, E-Mail, Personalnummer. Konnte keine Auflösung stattfinden wird der Organisator angezeigt und ein Edit Icon dargestellt| 

 ### Reihenfolge der Spalten bearbeiten 

 Definiert die Reihenfolge der Spalten in der Importdatei. 
 Beispiel: an welcher Stelle steht der Titel?
 
| Feld         | Funktion         | 
| ------------- |-------------  | 
| Spaltenindex Titel     | Der Index beginnt bei 0, somit ist die erste Spalte in der CSV-Datei die Spalte 0.| 
| Spaltenindes Beginn-Datum     | Wählen Sie ein Beginn-Datum (Bsp: 1)    |
| Spaltenindex Beginn-Zeit      |  Wählen Sie eine Beginn-Zeit (Bsp: 2) |
| Spaltenindex Ende-Datum | Wählen Sie ein End-Datum (Bsp: 3)   | 
| Spaltenindex Ende-Zeit | Wählen Sie eine End-Zeit (Bsp: 4) | 
| Spaltenindex Organisator |  | 
| Spaltenindex erforderliche Teilnehmer | | 
| Spaltenindex optionale Teilnehmer | | 
| Spaltenindex Bemerkung | | 
| Spaltenindex IstPrivat | | 



