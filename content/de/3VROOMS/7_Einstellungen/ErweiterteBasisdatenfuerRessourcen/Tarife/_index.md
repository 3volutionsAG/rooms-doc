---
title: "Tarife"
linkTitle: "Tarife"
weight: 3
description: >
  <p style="text-align: justify"> Im Bereich Tarife sehen und erstellen Sie Tarifkategorie-Listen. Ebenfalls können Sie neue Tarife erstellen und bearbeiten. Sie verwalten Tarife (Kosten und Annullationsgebühren) zentral und ordnen sie einer Ressource zu.  </p>
 


---
## Ansicht

<p style="text-align: justify">
Im linken Sidepanel finden Sie die Filterkriterien. Hier können Sie nach der Bezeichnung eines Tarifs suchen. Klicken Sie anschließend auf den Button <i>Anzeigen</i>.</p> 

<p style="text-align: justify">
Im rechten Feld sehen Sie die Tarifkategorie-Liste. Sollten keine Tarife eingetragen sein, ist diese leer. Tragen Sie neue ein, löschen oder bearbeiten Sie bestehende. </p>

{{< imgproc Tarife_Ansicht Resize "960x" >}}
Erstellen von Tarifkategorien
{{< /imgproc >}}

<p style="text-align: justify">
Generell können Sie zwischen drei Tarifmodellen wählen. Diese werden weiter unten beschrieben: </p>

1. Pauschales Modell
2. Kumultatives Modell 
3. Zeitabhängiges Modell

## Tarif neu erstellen

<p style="text-align: justify">
Tarifkategorien erstellen Sie über den untenstehenden Button <i>Neu</i>. In dem Feld, welches sich öffnet, legen Sie die Stammdaten sowie die Tarifoption für die jeweilige Tarifkategorie fest. </p>

<p style="text-align: justify">
Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i>.

<p style="text-align: justify">
Neu eingetragene Tarife sehen Sie anschließend in der Liste. Sie können von hier aus den Tarif bearbeiten über das Stift Icon. Mit Aktivierung der Checkbox können Sie den Tarif löschen. </p>

{{< imgproc Tarife_hinzugefügt_in_Liste Resize "960x" >}}
Erstellen von Tarifkategorien
{{< /imgproc >}}

### Stammdaten der Tarifkategorie bearbeiten

<p style="text-align: justify">
Die folgenden Daten legen Sie bei den Stammdaten der Tarife fest: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung        |<p style="text-align: justify"> Die Bezeichnung der Tarifkategorie festlegen </p>| 
| Tarifmodell   |<p style="text-align: justify"> Über das _drop-down_ Menü aus kumultativem, pauschalem oder zeitabhängigem Tarif auswählen </p> |  
| Mehrwertsteuer  |<p style="text-align: justify"> Angeben, ob die Mehrwertsteuer berücksichtigt werden soll oder nicht   </p> |  
| Tarife von Firma bevorzugen  |<p style="text-align: justify">  Ankreuzen, wenn zutreffend  </p> |  

{{< imgproc Tarife_neu_erstellen Resize "960x" >}}
Stammdaten des Tarifkategorien bearbeiten
{{< /imgproc >}}

### Tarif der Tarifkategorie bearbeiten

<p style="text-align: justify">
Wenn Sie eine neue Tarifkategorie erstellen, sehen Sie in der Liste noch keine Tarife. Fügen Sie neue Tarifkategorien über den Button <i>Neu</i> hinzu. </p>

{{< imgproc Tarife_neue_Tarife_hinzufügen Resize "960x" >}}
Eine neue Tarifkategorie hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Es öffnet sich ein Fenster, in welchem Sie die Daten der Tarife festlegen. </p>

Die folgenden Daten legen Sie bei den Tarifen der Tarifkategorie fest:

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung        |<p style="text-align: justify"> Geben Sie eine Bezeichnung für den Tarif ein (in der Sprache des angmeldeten Benutzers) </p> | 
| Art   | <p style="text-align: justify"> Wählen Sie mittels Drop-Down das Tarifmodell aus. Es stehen die Werte _Buchung_ und _Annullation_ zur Verfügung. Es wird definiert, ob es sich um eine Annullationspauschale handelt oder um eine Buchungspauschale. Bei Annullation sind die Werte Zeitrange und _Aktiviert am_ nicht auszufüllen </p>  |  
| Annullation in %  |<p style="text-align: justify"> wird nur angezeigt, wenn in der Dropdown _Tarif Art_ eine Annullation selektiert wurde Validierung auf Ganzzahlen (nummerischer Wert).</p>|  
| Gültigkeit  |<p style="text-align: justify"> Datumspicker, über welchen die Laufzeit eines Tarifs selektiert wird. </p>| 
| Aktivitätsstatus für die einzelnen Wochentage  |<p style="text-align: justify"> Alle Wochentage werden in Form von Checkboxen und Zeitrange Textboxen aufgelistet. Durch Selektion kann definiert werden, dass an diesem Tag der Tarif gültig ist und zu welcher Zeit am Tag er gültig ist. </p> |  
| Dauer in Minuten  |<p style="text-align: justify"> Definiert das Kostenintervall - für welche Zeiteinheit wird der Tarif berechnet. Beispiel: wird 60 angegeben wird auf Stundenbasis abgerechnet. Bei Annullationen bezieht sich die Dauer in Minuten auf die Annullation vor Reservationstart. Erläuterung an einem Beispiel: 0 = Annullation zur Laufzeit der Reservation = 100% der Reservationskosten (100=Tarif, %-Checkbox selektiert) 60 = Annullation zwischen 0 und 60 Minuten vor Reservationsstart = 50% der Reservationskosten (50=Tarif, %-Checkbox selektiert) 1440 = Annullation zwischen 60 Minuten und einem Tag vor Reservationsstart = fix 100.00 Franken (100 = Tarif, %-Checkbox nicht selektiert) </p> | 
| Firma  |<p style="text-align: justify"> Optionales Feld: Bleibt dieser Wert leer, ist der Tarif für alle gültig. Wird auf dem Tarif eine Firma selektiert, ist dies ein Spezialtarif für genau diese Firma. Mit diesem Mechanismus werden die Fixpreise definiert. </p>| 
| Währung  |<p style="text-align: justify"> alle aktivierten Währungen. Standardwert = Währung der im Profil der angemeldeten gewählten Kultur.Die Anzahl der aktivierten Währungen ist abhängig von der Anzahl der zur Verfügung gestellten Kulturen.</p>| 
| Kosten Intern  |<p style="text-align: justify"> Tarif, welcher für alle Firmen ohne selektierte "Extern" Checkbox gültig ist. Validierung auf nummerischer Wert.</p>| 
| Kosten Extern  |<p style="text-align: justify"> Tarif, welcher für alle Firmen MIT selektierte "Extern" Checkbox gültig ist. Validierung auf nummerischer Wert. </p>| 
| Kosten Extern minimal  |<p style="text-align: justify"> Wenn Kumulatives Preismodell gewählt auf Tarifkategorie, erscheint das Textfeld für die minimalen Kosten. </p> | 
| Kosten Extern maximal  | <p style="text-align: justify"> Wenn Kumulatives Preismodell gewählt auf Tarifkategorie, erscheint das Textfeld für die maximalen Kosten. </p> | 
| Kosten Intern minimal  |<p style="text-align: justify"> Wenn Kumulatives Preismodell gewählt auf Tarifkategorie, erscheint das Textfeld für die minimalen Kosten. </p>  | 
| Kosten Intern maximal  | <p style="text-align: justify">Wenn Kumulatives Preismodell gewählt auf Tarifkategorie, erscheint das Textfeld für die maximalen Kosten.</p> | 

{{< imgproc Tarife_anlegen Resize "960x" >}}
Tarifeinzelheiten und Gültigkeit festlegen
{{< /imgproc >}}

<p style="text-align: justify">
Speichern Sie die Tarifkategorie über den Button <i>Speichern</i>. Die Liste aktualisiert sich automatisch und Sie sehen die neue Tarifkategorie. </p>

{{< imgproc Tarife_neu_angelegt_in_Liste Resize "960x" >}}
Neu angelegte Tarifkategorie in der Liste
{{< /imgproc >}}

## Erklärung Tarifmodelle mit Beispielen

1. **Pauschales Modell**:
Es wird der kleinst größere Minuten-Tarif direkt verwendet. </br>
Beispiele:

* 1: Tarife mit 1, 2, 4, 8 Stunden Dauer. Die Buchung beträgt 30 Minuten. -> Dann wird der Tarif mit einer "1 Stunde" Dauer genommen.
* 2: Tarife mit 1, 2, 4, 8 Stunden Dauer. Die Buchung beträgt 3 Stunden. -> Dann wird der Tarif mit "4 Stunden" Dauer genommen.
* 3: Tarife mit 1, 2, 4, 8 Stunden Dauer. Die Buchung beträgt 10 Stunden. -> Dann wird der Tarif mit "8 Stunden" Dauer genommen.

2. **Kumulatives Modell**:
<p style="text-align: justify"> Es wird der kleinst größere Minuten-Tarif zusammenaddiert. Es werden dabei, falls gesetzt, minimale und maximale Werte berücksichtigt. Dies kann bedeuten: Pro Stunde 10 Franken, aber mindestens 50 Franken oder maximal 100 Franken. </p>

Beispiele: 

* 1: Tarife mit 1, 2, 4, 8 Stunden. Reservation ist 1 Stunde. -> Dann wird der Tarif mit 1 Stunde Dauer genommen.
* 2: Tarife mit 1, 2, 4, 8 Stunden. Reservation ist 2 Stunden. -> Dann wird der Tarif mit 2 Stunde Dauer genommen.
* 3: Tarife mit 1, 2, 4, 8 Stunden. Reservation ist 6,5 Stunden. -> Dann wird der Tarif mit 4 Stunden und 2 
  Stunden genommen und dann der Tarif mit 1 Stunde am Schluss als kleinster _Ueberschuss_ dazugezaehlt.

1. **Zeitabhängig**:

<p style="text-align: justify">
Beim zeitabhängigen Modell liegt ebenfalls die kumulative Berechnung zu Grunde. Bei diesem Modell darf für eine Firma immer nur ein Tarif zum entsprechenden Zeitpunkt gültig sein. d.h: </p>

<p style="text-align: justify">
Morgentarif 8.00 – 12.00Uhr, Nachmittagstarif 12.00 – 18.00Uhr für Firma A à funktioniert </br>
Morgentarif 8.00 – 12.30Uhr, Nachmittagstarif 12.00 – 18.00Uhr für Firma B à funktioniert NICHT. </br>
Angebrochene Minuten werden IMMER voll verrechnet, nicht definierte Zeiten gelten als gratis und der Zeitintervall (55min) wird immer ab dem nächst gültigen Tarif gerechnet. Ausgangslage: Morgentarif 8.00 – 12.00Uhr (pro 55Minuten – CHF 30.-), Nachmittagstarif 12.00 – 18.00Uhr (pro 55Minuten – CHF 44.-) </p>

<p style="text-align: justify">
Beispiel: </br> Firma bucht um 11.55Uhr für insgesamt zwei Intervalle (2x 55min) à Die Kosten betragen: CHF 74.---
Tagespauschalen werden mit den Minimal/Maximalwerten pro Tarif gesetzt. Ausgangslage: Tagestarif 8.00 – 18.00Uhr für Firma A (Kosten minimal/maximal CHF 200.-) </p>

<p style="text-align: justify">
Beispiel: </br> Firma bucht um 9.00Uhr für zwei Intervalle à Die Kosten betragen CHF 200.00 </p>

### Tarife Berechnung im Buchungsprozess

* Ist für eine Firma/OE ein Spezialtarif definiert, wird auf dieser Tarif Basis berechnet
* Sind zu einem Zeitpunkt der Reservation mehrere aktive Tarife vorhanden, wird der neuste (Tarif mit dem aktuellsten Gültigkeitsdatum) verwendet.
* Ist bei einer Ressource keine Tarifkategorie hinterlegt, wird kein Preis berechnet.
* Ist zum Zeitpunkt der Reservation kein aktiver Tarif vorhanden, werden keine Kosten verrechnet werden

### Stornierungsregeln und Beispiele

1. **Pauschalen** 

<p style="text-align: justify">
Wird eine Buchung mit pauschalen Stornierungskosten annulliert, werden alle Pauschalen (Raum, Equipment, Dienstleistungen) zusammengezählt und als Stornierungskosten gespeichert. </p>

Beispiel (hinterlegte Stornierungskosten in CHF): </br>
Raum: 50 CH </br>
Beamer: 5 CHF </br>
Flipchart: 5 CHF </br>
Pinwand: 5 CHF </br>

Umstuhlung: 7 CHF </br>

Angebotszone: </br>
5 CHF (Sind Angebot aus verschiedenen Angebotszonen gebucht worden, werden die Angebotszonen Stornierungspauschalen zusammengezählt – aber immer nur 1x kalkuliert – egal wieviele Angebote einer Zone effektiv gebucht worden sind) </br>
4x Kaffee zu 2 CHF: 8 CHF </br>
4x Mineral zu 0 CHF: 0 CHF </br>
8x Sandwiches zu 3 CHF: 24 CHF </br>
= 109 CHF Stornierungsgebühr bei Stornierung des Raumes (Hauptbuchung)

2. **Prozentualen**

<p style="text-align: justify">
Wird eine Buchung mit prozentualen Stornierungskosten (nur auf Ressourcen möglich) annulliert, werden die Prozentualen auf den jeweiligen Bruttokosten (hinterlegten Tarife) berechnet. Zuschläge und Rabatte werden ignoriert. </p>

Beispiel: </br>
Raum: Kosten= CHF100, Stornierung 50% </br>
Beamer: Kosten=CHF20, Stornierung 100% </br>
Flipchart: Kosten=CHF5, Stornierung 0% </br>
Pinwand: Kosten=CHF10, Stornierung Pauschal CHF5 </br>

Umstuhlung: 7 CHF </br>

Angebotszone: </br> 5 CHF (Sind Angebote aus verschiedenen Angebotszonen gebucht worden, werden die Angebotszonen Stornierungspauschalen zusammengezählt – aber immer nur 1x kallkuliert – egal wieviele Angebote einer Zone effektiv gebucht worden sind) </br>
4x Kaffee zu 2 CHF: 8 CHF </br>
4x Mineral zu 0 CHF: 0 CHF </br>
8x Sandwiches zu 3 CHF: 24 CHF </br>
= 119 CHF Stornierungsgebühr bei Stornierung des Raumes (Hauptbuchung)