---
title: "Angebotszonen bearbeiten"
linkTitle: "Angebotszonen bearbeiten"
weight: 10
description: ''
---
<p style="text-align: justify">
Sie bearbeiten ein bestehendes Angebot, indem Sie auf das Stift Icon <i>Bearbeiten</i> neben dem Namen des Dienstleisters klicken. Dort können Sie bestehende Daten bearbeiten. Ein neues Angebot legen Sie über den Button <i>Erstellen</i> an. In dem Feld, welches sich öffnet, legen Sie folgende Daten fest: </p>

* Angebotszone (Stammdaten)
* Angebote
* Ressourcen
* Gruppen

<p style="text-align: justify">
Die neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i>. </p>

### Angebotszone (Stammdaten) bearbeiten

<p style="text-align: justify">
Die folgenden Daten können Sie ändern und bearbeiten: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
|  Dienstleister        |<p style="text-align: justify"> Nicht editierbar und wird in der Vorauswahl festgelegt. </p>|
| Bezeichnung          | <p style="text-align: justify">Die Bezeichnung des Angebots festlegen. Muss mehrsprachig erfasst werden.</p> | 
|<p style="text-align: justify"> Mitteilung vom Dienstleister </p>|Eine Mitteilung oder Anmerkung des Dienstleisters hinterlegen. Kann mehrsprachig erfasst werden. Diese Informationen werden im Buchungsprozess Tab [Dienstleistungen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/) visualisiert. | 
| Gültigkeitsdauer         | <p style="text-align: justify"> Datum und Zeit festlegen. Standard = leer. leer = von wann, bis wann die Angebotszone zur Verfügung steht </p>| 
| Vorlaufdauer          | <p style="text-align: justify"> Standardwert = 0. Angabe in Minuten. Wird im Buchungsprozess für die Berechnung der Vorlaufdauer verwendet. </p>| 
| Nachlaufdauer          |<p style="text-align: justify"> Standardwert = 0. Angabe in Minuten. Wird im Reservationsprozess für die Berechnung der Vorlaufdauer verwendet </p>| 
| Währung    |<p style="text-align: justify"> alle aktivierten Währungen. Standardwert = Währung der im Profil der angemeldeten gewählten Kultur.Die Anzahl der aktivierten Währungen ist abhängig von der Anzahl der zur Verfügung gestellten Kulturen. </p>| 
| **Kosten**    |<p style="text-align: justify"> Kosten eintragen und die Währung auswählen  </p>   |  
| **Annulierungskosten**    |<p style="text-align: justify"> Annulierungskosten eintragen und Währung auswählen. Standardwert = leer (keine Annullationskosten). Wert > 0 entspricht dem Wert, welcher bei einer Annullation pauschal erhoben wird. </p> |  
| **Annulierung vor Beginn (in Minuten)**  |<p style="text-align: justify"> Definiert ab wieviele Minuten vor Reservationsbegin Annullationskosten erhoben werden. 0 = Annullationskosten werden zur Laufzeit erhoben. Standardwert = leer (ausgeschalten). Beispiel: Bei einem Wert von 60 wird bis 60 Minuten vor Reservationsstart KEINE Annullationskosten erhoben. Zwischen 60 Minuten und der Endzeit der Reservation wird der Pauschalbetrag, welcher unter <i>Annullationskosten</i> definiert berechnet.  </p>  |  
|<p style="text-align: justify"> **Gruppe für Notifikationen** </p>|  Mittels Intelibox kann eine Benutzergruppe ausgewählt werden, welche notifiziert werden soll auf dieser Angebotszone. Notifikation ist nur aktiviert, wenn Benutzergruppe ausgewählt UND die enstprechenden Notifikationstemplate der Benutzergruppe zugewiesen und konfiguriert worden sind  ([Notifikationen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Die Konfiguration eines Internen Dienstleister ergibt sich auch auf Grund des richtigen Notifikationstemplates - durch Hinzufügen des Notifikationstemplates _Bestuhlung ändern_ wird der Dienstleister als _interner Dienst_ definiert.  |  
| **Versand Notifikation in Tagen vorher**    |<p style="text-align: justify"> Tage auswählen. Standardwert = 0. Regelwerk: beim Wert <i>0</i> in <i>Versand Notifikation in Tagen vorher</i> wird exakt bei Buchungsstart der Dienstleister informiert. Bei einer <i>Sammelnotifikation</i> (Wert grösser 0) wird erst die Anzahl Tage vor Buchungsbeginn die Notifikation verschickt. Bestellungen welche in die Zeitspanne zwischen der Vorlaufzeit in Tagen und Buchungsbeginn fallen, werden auch umgehend verarbeitet, d.h. der Dienstleister informiert. Anmerkung: mit einer sehr hohen Eingabe (z.B. 999) kann provoziert werden, dass die Notifikation umgehend ausgelöst wird, da dann Regel 2 zur Anwendung kommt. </p>|  
|**Dienstleistungen sind für Hauptressource**| <p style="text-align: justify"> Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wird bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).   </p>|  
| **Dienstleistungen sind für Zusatzressource**     |<p style="text-align: justify">   Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wird bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).</p> |  
| Dienstleistungen sind für Bestuhlung   |<p style="text-align: justify"> Auswählen, wenn zutreffend. Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wir bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).  </p>  |  
| Arbeitszeiten   | <p style="text-align: justify"> Arbeitszeiten des Dienstleisters auswählen. Wochentag gibt es ein Von-Zeit-Feld und ein Bis-Zeit-Feld. Sind die Felder ausgefüllt, ist der Wochentag _aktiviert_. Standardmäßig sind Montag bis Freitag aktiviert. Defaultwert der Startzeit muss global definiert werden (08:00). Defaultwert der Endzeit muss global definiert werden (17:00). Ist notwendig für die Berechnung der Angebotsverfügbarkeit - zusammen mit dem Angebotsvorlauf (siehe auch UC 106.001 Dienstleister verwalten) - Details im Reservationsprozess unter  </p> |

{{< imgproc Angebotszone_bearbeiten Resize "960x" >}}
Daten der Angebotszonen bearbeiten
{{< /imgproc >}}

Speichern Sie Ihre Änderungen über den Button _Speichern_. 

### Angebote bearbeiten und hinzufügen

<p style="text-align: justify">
Sie sehen bereits hinzugefügte Angebote in der Liste. Indem Sie den Button "Hinzufügen" betätigen, öffnet sich das Angebotsfeld, welches Sie bearbeiten können. </p>

{{< imgproc Angebotszone_Angebote Resize "960x" >}}
Angebote bestehender Angebotszonen bearbeiten
{{< /imgproc >}}

<p style="text-align: justify"> Wählen Sie ein bereits gespeichertes Angebot über die Aktivierung der Checkbox aus und fügen Sie es zur Liste hinzu. </p>

{{< imgproc Angebotszone_Angebote_hinzufügen Resize "960x" >}}
Angebote zur Angebotszone hinzufügen
{{< /imgproc >}}

Sie können mehrere zusätzliche Funktionen zum Angebot hinzufügen: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung          | Die Bezeichnung des Angebots festlegen | 
| Mitteilung vom Dienstleister          | Eine Mitteilung oder Anmerkung des Dienstleisters hinterlegen | 
| Gültigkeitsdauer         | Datum und Zeit festlegen  | 
|  Bezeichnung          | Die Bezeichnung des Angebots festlegen |
| Vorlaufdauer          | | 
| Nachlaufdauer          |  | 

<p style="text-align: justify"> Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Angebote in der Liste. </p>

{{< imgproc Angebotszone_Angebot_in_Liste Resize "960x" >}}
Hinzugefügte Angebote in der Liste
{{< /imgproc >}}


### Ressourcen hinzufügen 

<p style="text-align: justify">
Im Tab Ressourcen sehen Sie bereits zugewiesene Ressourcen.

{{< imgproc Angebotszone_Ressourcen Resize "960x" >}}
Ressourcen der Angebotszone in der Liste
{{< /imgproc >}}

<p style="text-align: justify">
Möchten Sie weitere Ressourcen hinzufügen, betätigen Sie den Button <i>Hinzufügen</i> und wählen Sie aus der Liste bestehender Ressourcen aus. Diese Ressource ordnen Sie der entsprechenden Angebotszone somit zu. Oder bestätigen Sie eine Ressource in der angezeigten Liste über die Aktivierung der Checkbox. </p>

{{< imgproc Angebotszone_Ressourcen_hinzufügen Resize "960x" >}}
Ressourcen zur Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den Button _Hinzufügen_. Die Liste aktualisiert sich automatisch.

{{< imgproc Angebotszone_Ressourcen_in_Liste Resize "960x" >}}
Hinzugefügte Ressourcen in der Liste
{{< /imgproc >}}

### Gruppen hinzufügen 

<p style="text-align: justify">
Sie sehen bereits zugewiesene Gruppen in der Liste. </p>

{{< imgproc Angebotszone_Gruppen Resize "960x" >}}
Zugewiesene Gruppen einer Angebotszone
{{< /imgproc >}}

<p style="text-align: justify">
Möchten Sie weitere Gruppe hinzufügen, betätigen Sie den Button "Hinzufügen" und wählen Sie aus der Liste bestehender Gruppen aus. Aktivieren Sie die Checkbox neben der Gruppe, um diese auszuwählen.</p>

{{< imgproc Angebotszone_Gruppen_hinzufügen Resize "960x" >}}
Gruppen zu einer Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den Button _Hinzufügen_. Die Liste aktualisiert sich automatisch. 

{{< imgproc Angebotszone_Gruppen_in_Liste Resize "960x" >}}
Aktualisierte Gruppen in der Liste
{{< /imgproc >}}
