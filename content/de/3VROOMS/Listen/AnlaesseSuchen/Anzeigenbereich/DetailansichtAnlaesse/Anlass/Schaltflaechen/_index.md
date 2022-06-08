---
title: "Schaltflächen"
linkTitle: "Schaltflächen"
weight: 1
---
Im Folgenden werden die Schaltflächen im Einzelnen beschrieben:

### Bearbeiten

<p style="text-align: justify"> Über <i>Bearbeiten</i> werden Sie auf die Eingabemaske zur Erstellung eines Anlasses weitergeleitet. Dort können Sie den Anlass bearbeiten und ändern. </p>

{{< imgproc List_ANL_DS_Schalt Resize "960x" >}}
Schaltflächen zur Anlassverwaltung
{{< /imgproc >}}

<p style="text-align: justify"> Eine genaue Beschreibung der Eingabemaske finden sie im Kapitel <a href="/3vrooms/listen/anlaessesuchen/anlasserstellen/"> Anlass Erstellen </a>. </p>

### Kopieren

<p style="text-align: justify"> Mit dieser Schaltfläche kopieren Sie den betrachteten Anlass. Dies ist dann hilfreich, wenn ein Anlass mit gleichen Rahmenbedingungen und/oder Teilnehmenden zu einem anderen Zeitpunkt erneut stattfinden soll. </p>

<p style="text-align: justify"> Es öffnet sich die Eingabemaske zur Erstellung eines Anlasses. Alle Details werden aus dem ursprünglichen Anlass übernommen, die Sie nun bearbeiten können. </p>

_Bitte achten Sie darauf das Datum anzupassen, da dieses auch übernommen wird._

{{< imgproc List_ANL_DS_Copy Resize "960x" >}}
Eingabemaske um einen kopierten Anlass zu bearbeiten und zu speichern
{{< /imgproc >}}

<p style="text-align: justify"> Eine genaue Beschreibung der Eingabemaske finden Sie im Kapitel <a href="/3vrooms/listen/anlaessesuchen/anlasserstellen/">Anlass erstellen</a>. </p>

### Anlass für Serien

<p style="text-align: justify"> Neben der Möglichkeit einen Anlass für eine komplette Serie zu erstellen, gibt es an dieser Stelle auch die Möglichkeit je einen Anlass für die Serienbuchungseinträge zu erstellen. Hierzu muss bereits ein Anlass vorliegen und eine Serienbuchung enthalten sein. Die Stammdaten des ursprünglichen Anlasses werden in die Folgeanlässe kopiert. Ebenso werden Catering & Service Bestellungen sowie die Teilnehmenden übernommen. </br>
Sind mehrere Buchungen mit einem Anlass verbunden, so müssen alle Buchungen zeitlich identische (Wochentag und Uhrzeit) Serienbuchungen sein. Gebuchte Räume dürfen innerhalb einer Serie variieren. </p>

{{< imgproc List_ANL_DS_Serie_xSerie_b Resize "960x" >}}
Fehlermeldung: Nicht alle, dem Anlass zugeordneten Buchungen, sind Serienbuchungen  
{{< /imgproc >}}

<p style="text-align: justify"> Sollten einzelne Buchungen zeitlich nicht synchron stattfinden (z.B. weil an einem Tag der gewünschte Raum erst später verfügbar sein sollte), so wird für diesen Tag kein Anlass erstellt. Das gleiche gilt für Buchungsserien, die nicht die gleiche Serienlänge haben. </p>

{{< imgproc List_ANL_DS_Serie_Error_b Resize "960x" >}}
Hinweis, dass nicht alle Serienbuchungseinträge zu einem Anlass zusammen gefügt werden konnten 
{{< /imgproc >}}

<p style="text-align: justify"> Konnten alle Serienbuchungselemente zu Anlässen zusammengeführt werden, erscheint eine entsprechende Bestätigung im Actionpanel. </p>

{{< imgproc List_ANL_DS_Serie_Best_b Resize "960x" >}}
Bestätigung im Actionpanel, dass alle Serienbuchungselemente erfolgreich in je einem Anlass zusammengeführt werden konnten
{{< /imgproc >}}

_**Beispiel 1:**_ </br>
**Anlass:** Teambesprechungen </br>
**Serienbuchung 1:** Teambesprechung Dokumentation </br>
14:00-15:00 Uhr ab 20.10. jeden Dienstag im Raum Matterhorn </br>
**Serienbuchung 2:** Teambesprechung Buchhaltung </br>
14:00-15:00 Uhr ab 20.10. jeden Dienstag im Raum Everest

=>  *Alle Serienbuchungseinträge können zu je einem Anlass zusammengeführt werden*

_**Beispiel 2:**_ </br>
**Anlass**: Teambesprechungen </br>
**Serienbuchung 1**: Teambesprechung Dokumentation </br>
14:00-15:00 Uhr ab 20.10. jeden Dienstag im Raum Matterhorn </br>
**Serienbuchung 2**: Teambesprechung Buchhaltung </br>
14:30-15:30 Uhr ab 20.10. jeden Dienstag im Raum Everest

=>  *Die Serienbuchungen können nicht zu Anlässen zusammengeführt werden, da sie zeitlich nicht identisch sind.*

_**Beispiel 3:**_ </br>
**Anlass**: Teambesprechungen </br>
**Serienbuchung 1**: Teambesprechung Dokumentation </br>
14:00-15:00 Uhr ab 20.10. jeden Dienstag im Raum Matterhorn </br>
Ausnahme: 27.10. 15:00-16:00 Uhr </br>
**Serienbuchung 2**: Teambesprechung Buchhaltung </br>
14:00-15:00 Uhr ab 20.10. jeden Dienstag im Raum Everest

=>  *Die Serienbuchungen können, bis auf die Serienbuchungselemente am 27.10, jeweils zu einem Anlass zusammengeführt werden*

### Drucken

<p style="text-align: justify"> Sie haben die Möglichkeit die Detailansicht des Anlasses auszudrucken. Über die Schaltfläche <i>Drucken</i> öffnet sich das Drucker Dialogfenster mit Ihren persönlichen und firmeninternen Voreinstellungen. </p>

{{< imgproc List_ANL_DS_Druck Resize "960x" >}}
Drucker Dialogfenster um die Detailsansicht zum Anlass auszudrucken 
{{< /imgproc >}}

### Anlass stornieren

<p style="text-align: justify"> Über die Schaltfläche <i>Anlass stornieren</i> sagen Sie einen Anlass mit allen zugehörigen Buchungen ab und entfernen diese aus dem Kalender. Der Anlass und die zugehörigen Buchungen bleiben jedoch in den Listen und in den Reports sichtbar.
Es könnten Stornierungskosten anfallen. </br>
Im erscheinenden Dialogfenster muss der Stornierungsvorgang bestätigt werden. Zudem haben Sie die Möglichkeit, Notifikation an die organisierenden und verantwortlichen Personen zu versenden, in dem Sie die Checkbox vor dem Bestätigen aktivieren. Die Teilnehmenden erhalten Notifikation. </p>

{{< imgproc List_ANL_DS_Ann_b Resize "960x" >}}
Dialogfenster zur Bestätigung des Stornierungsvorgangs
{{< /imgproc >}}
