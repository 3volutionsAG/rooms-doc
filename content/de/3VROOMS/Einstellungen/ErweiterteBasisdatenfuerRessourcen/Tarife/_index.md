---
title: "Tarife"
linkTitle: "Tarife"
weight: 3
description: 'Im Bereich Tarife verwalten Sie Tarifkategorien und Tarife. Jeder Tarifkategorie wird ein Tarifmodell sowie eine beliebige Anzahl an Tarifen zugeordnet. Die Tarife können als Buchungskosten oder Annulationskosten erfasst werden.'
---

## Tarif neu erstellen
Im linken Sidepanel finden Sie die Filterkriterien. Hier können Sie nach der Bezeichnung eines Tarifs suchen. Klicken Sie anschliessend auf den Button `Anzeigen`.

Im rechten Feld sehen Sie die Tarifkategorie-Liste. Sollten keine Tarifkategorien eingetragen sein, ist diese leer. Tragen Sie neue ein, löschen oder bearbeiten Sie bestehende.

{{< imgproc Tarife_Ansicht Resize "960x" >}}
Erstellen von Tarifkategorien
{{< /imgproc >}}

Generell können Sie zwischen den folgenden Tarifmodellen gewählt werden.

1. [Pauschales Modell](#pauschales-modell)
2. [Kumultatives Modell](#kumulatives-modell)
3. [Zeitabhängiges Modell](#zeitabh%C3%A4ngig)

Tarifkategorien erstellen Sie über den untenstehenden Button `Neu`. In dem Feld, welches sich öffnet, legen Sie die Stammdaten sowie die Tarifoption für die jeweilige Tarifkategorie fest.

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button `Speichern`.

Neu eingetragene Tarife sehen Sie anschliessend in der Liste. Sie können von hier aus über das Stift Icon den Tarif bearbeiten. Mit Aktivierung der Checkbox können Sie den Tarif löschen.

{{< imgproc Tarife_hinzugefügt_in_Liste Resize "960x" >}}
Erstellen von Tarifkategorien
{{< /imgproc >}}

### Stammdaten der Tarifkategorie bearbeiten

Die folgenden Daten legen Sie bei den Stammdaten der Tarife fest:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung        |<p style="text-align: justify"> Die Bezeichnung der Tarifkategorie festlegen </p>| 
| Tarifmodell   |<p style="text-align: justify"> Über das _drop-down_ Menü aus kumultativem, pauschalem oder zeitabhängigem Tarif auswählen </p> |  
| Mehrwertsteuer  |<p style="text-align: justify"> Angeben, ob die Mehrwertsteuer berücksichtigt werden soll oder nicht   </p> |  
| Tarife von Firma bevorzugen  |<p style="text-align: justify">  Ankreuzen, wenn zutreffend  </p> |  
{{< /bootstrap-table >}}

{{< imgproc Tarife_neu_erstellen Resize "960x" >}}
Stammdaten des Tarifkategorien bearbeiten
{{< /imgproc >}}

### Tarif der Tarifkategorie bearbeiten

Wenn Sie eine neue Tarifkategorie erstellen, sehen Sie in der Liste noch keine Tarife. Fügen Sie neue Tarifkategorien über den Button `Neu` hinzu.

{{< imgproc Tarife_neue_Tarife_hinzufügen Resize "960x" >}}
Eine neue Tarifkategorie hinzufügen
{{< /imgproc >}}

Es öffnet sich ein Fenster, in welchem Sie die Daten der Tarife festlegen.

Die folgenden Daten legen Sie bei den Tarifen der Tarifkategorie fest:

{{< bootstrap-table "table table-striped" >}}
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
{{< /bootstrap-table >}}

{{< imgproc Tarife_anlegen Resize "960x" >}}
Tarifeinzelheiten und Gültigkeit festlegen
{{< /imgproc >}}

Speichern Sie die Tarifkategorie über den Button <i>Speichern</i>. Die Liste aktualisiert sich automatisch und Sie sehen die neue Tarifkategorie.

{{< imgproc Tarife_neu_angelegt_in_Liste Resize "960x" >}}
Neu angelegte Tarifkategorie in der Liste
{{< /imgproc >}}

## Tarifberechnung bei Buchungen

Bei der Preisberechnung im Buchungsprozess gelten folgende Regeln:

* Generell gilt die auf der Ressource hinterlegte Tarifkategorie.
** Falls auf der Firma eine Tarifkategorie hinterlegt ist, so wird **immer** diese verwenden und somit die Tarifkategorie auf der Ressource ignoriert.
* Falls es zum Zeitpunkt der Reservierung mehrere aktive Tarife gibt, wird der neueste Tarif (der mit dem aktuellsten Gültigkeitsdatum) verwendet.
* Wenn für eine Ressource keine Tarifkategorie festgelegt ist, wird kein Preis berechnet.
* Wenn zum Zeitpunkt der Reservierung kein aktiver Tarif vorhanden ist, fallen keine Kosten an.

## Tarifmodelle
Die Tarifmodelle bieten flexible Möglichkeiten zur Preisgestaltung basierend auf unterschiedlichen Parametern. Es stehen verschiedene Ansätze zur Auswahl, darunter das pauschale Modell, das kumulative Modell und das zeitabhängige Modell. Im pauschalen Modell wird immer der nächstgrössere Minuten-Tarif verwendet, während im kumulativen Modell Tarife addiert werden und dabei minimale und maximale Werte berücksichtigt werden können. Das zeitabhängige Modell ermöglicht es, für jeden Zeitpunkt genau einen Tarif festzulegen. Die Wahl des geeigneten Tarifmodells hängt von den spezifischen Anforderungen und Szenarien ab.

### Pauschales Modell

Im pauschalen Modell wird immer der `kleinst grössere` Minuten-Tarif verwendet.

Beispiel: Tarife mit der Dauer von 1, 2, 4, und 8 Stunden wurden in den Stammdaten erfasst.
{{< bootstrap-table "table table-striped" >}}
| Buchungsdauer | Tarife | 
| ------------- | ------ | 
| 30min         | 1      | 
| 3h            | 4      | 
| 10h           | 8      | 
{{< /bootstrap-table >}}

### Kumulatives Modell
Es wird der kleinst grössere Minuten-Tarif addiert. Es werden dabei, falls gesetzt, minimale und maximale Werte berücksichtigt. So können Scenariewn wie `Pro Stunde 10 Franken, aber mindestens 50 und maximal 100 Franken` erfasst werden.

Beispiel: Tarife mit der Dauer von 1, 2, 4, und 8 Stunden wurden in den Stammdaten erfasst.
{{< bootstrap-table "table table-striped" >}}
| Buchungsdauer | Tarife | Beschreibung |
| ------------- | ------ | ------------ | 
| 1h            | 1     |              |
| 2h            | 2     |              |
| 6.5h          | 4,2,1 | <p>Zuerst wird der Tarif mit der längsten Dauer, welcher noch innerhalb der Buchungsdauer liegt gewählt. In diesem Fall ist es der Tarif für 4 Stunden. Jetzt bleiben noch 2,5 Stunden übrig (`6,5 Stunden - 4 Stunden = 2,5 Stunden`).</p><p>Als nächstes wird der Tarif mit der nächstkleineren Dauer, der noch in die verbleibende Zeit passt gesucht. Das ist der Tarif für 2 Stunden. Damit sind insgesamt 6 Stunden abgedeckt (`4 Stunden + 2 Stunden = 6 Stunden`).</p><p>Es bleibt noch eine halbe Stunde übrig (`6,5 Stunden - 6 Stunden = 0,5 Stunden`). Da der 1h Tarif der kleinste Tarif ist in dem die restliche Dauer platz hat, wird für diese halbe Stunde der 1h Tarif verwendet. |
{{< /bootstrap-table >}}

### Zeitabhängig
Beim zeitabhängigen Modell liegt ebenfalls die kumulative Berechnung zu Grunde. Bei diesem Modell darf für eine Firma immer nur ein Tarif zum entsprechenden Zeitpunkt gültig sein.

- Morgentarif 8.00 – 12.00Uhr, Nachmittagstarif 12.00 – 18.00Uhr für Firma A à funktioniert
- Morgentarif 8.00 – 12.30Uhr, Nachmittagstarif 12.00 – 18.00Uhr für Firma B à funktioniert NICHT.

Angebrochene Minuten werden **IMMER** komplett verrechnet. Nicht definierte Zeiten gelten als gratis und der Zeitintervall (55min) wird immer ab dem nächst gültigen Tarif gerechnet. Ausgangslage: Morgentarif 8.00 – 12.00Uhr (pro 55Minuten – CHF 30.-), Nachmittagstarif 12.00 – 18.00Uhr (pro 55Minuten – CHF 44.-)

Beispiel:

Firma bucht um 11.55Uhr für insgesamt zwei Intervalle (2x 55min) à Die Kosten betragen: CHF 74.---
Tagespauschalen werden mit den Minimal/Maximalwerten pro Tarif gesetzt. Ausgangslage: Tagestarif 8.00 – 18.00Uhr für Firma A (Kosten minimal/maximal CHF 200.-)

Beispiel:

Firma bucht um 9.00Uhr für zwei Intervalle à Die Kosten betragen CHF 200.00

### Manuelle Tarifüberschreibung
{{% alert title="Berechtigung" %}}
Damit diese Funtionalität genutzt werden kann muss das Recht `Darf Tarif überschreiben` vorhanden sein.
{{% /alert %}}

Ab `v4.11.0` besteht die Möglichkeit, den Tarif einer Buchung manuell zu überschreiben, anstatt den standardmässigen Tarif gemäss dem Tarifmodell zu verwenden. Dadurch können individuelle Tarifanpassungen vorgenommen werden.

Die Auswahl des Tarifs erfolgt einfach und intuitiv über das Dropdown-Menü, das die verfügbaren Tarife für die gewählte Ressource anzeigt. Dadurch können Benutzer flexibel den gewünschten Tarif für ihre Buchung auswählen und anpassen.

Folgende Regeln werden dabei beachtet:
- Wenn Änderungen an einer bestehenden Buchung vorgenommen werden, wie beispielsweise die Änderung der Ressource, der Start- oder Endzeit, wird der zuvor manuell gesetzte Tarif verworfen und die Standardberechnung gemäss dem Tarifmodell durchgeführt.
- Wenn ein Tarif nicht mehr gültig ist, beispielsweise aufgrund des Ablaufdatums, kann die Reservierung nicht mehr gespeichert werden. Bitte beachten Sie, dass der Wochentags-/Wochenendzeitraum beim manuellen Überschreiben nicht berücksichtigt wird.
- Beim Löschen von Tarifen, die direkt von Buchungen referenziert werden, werden die Tarif-Referenzen in den betroffenen Reservierungen entfernt. Es erfolgt keine automatische Neuberechnung der Preise.

## Stornierungsregeln

### Pauschal
Wird eine Buchung mit pauschalen Stornierungskosten annulliert, werden alle Pauschalen (Raum, Equipment, Dienstleistungen) zusammengezählt und als Stornierungskosten gespeichert.

**hinterlegte Stornierungskosten**:

Raum: 50 CH </br>
Beamer: 5 CHF </br>
Flipchart: 5 CHF </br>
Pinwand: 5 CHF </br>
Umstuhlung: 7 CHF </br>

**Angebotszone**:

Sind Angebot aus verschiedenen Angebotszonen gebucht worden, werden die Angebotszonen Stornierungspauschalen zusammengezählt – aber immer nur 1x kalkuliert – egal wieviele Angebote einer Zone effektiv gebucht worden sind

5 CHF</br>
4x Kaffee zu 2 CHF: 8 CHF </br>
4x Mineral zu 0 CHF: 0 CHF </br>
8x Sandwiches zu 3 CHF: 24 CHF

**109 CHF Stornierungsgebühr** bei Stornierung des Raumes (Hauptbuchung)

### Prozentual
Wird eine Buchung mit prozentualen Stornierungskosten (nur auf Ressourcen möglich) annulliert, werden die Prozentualen auf den jeweiligen Bruttokosten (hinterlegten Tarife) berechnet. Zuschläge und Rabatte werden ignoriert.

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