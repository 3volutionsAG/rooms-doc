---
title: "Angebotszonen bearbeiten"
linkTitle: "Angebotszonen bearbeiten"
weight: 10
description: ''
---

Sie bearbeiten ein bestehendes Angebot, indem Sie auf das Stift Icon _Bearbeiten_ neben dem Namen des Dienstleisters klicken. Dort können Sie bestehende Daten bearbeiten. Ein neues Angebot legen Sie über den Button _Erstellen_ an. In dem Feld, welches sich öffnet, legen Sie folgende Daten fest:

* Angebotszone (Stammdaten)
* Angebote
* Ressourcen
* Gruppen


Die neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.

### Angebotszone (Stammdaten) bearbeiten


Die folgenden Daten können Sie ändern und bearbeiten:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
|  Dienstleister        | Nicht editierbar und wird in der Vorauswahl festgelegt. |
| Bezeichnung          | Die Bezeichnung des Angebots festlegen. Muss mehrsprachig erfasst werden. |
| Mitteilung vom Dienstleister |Eine Mitteilung oder Anmerkung des Dienstleisters hinterlegen. Kann mehrsprachig erfasst werden. Diese Informationen werden im Buchungsprozess Tab [Dienstleistungen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/) visualisiert. |
| Gültigkeitsdauer         |  Datum und Zeit festlegen. Standard = leer. leer = von wann, bis wann die Angebotszone zur Verfügung steht |
| Vorlaufdauer          |  Standardwert = 0. Angabe in Minuten. Wird im Buchungsprozess für die Berechnung der Vorlaufdauer verwendet. |
| Nachlaufdauer          | Standardwert = 0. Angabe in Minuten. Wird im Reservationsprozess für die Berechnung der Vorlaufdauer verwendet |
| Währung    | alle aktivierten Währungen. Standardwert = Währung der im Profil der angemeldeten gewählten Kultur.Die Anzahl der aktivierten Währungen ist abhängig von der Anzahl der zur Verfügung gestellten Kulturen. |
| **Kosten**    | Kosten eintragen und die Währung auswählen     |
| **Annulierungskosten**    | Annulierungskosten eintragen und Währung auswählen. Standardwert = leer (keine Annullationskosten). Wert > 0 entspricht dem Wert, welcher bei einer Annullation pauschal erhoben wird.  |
| **Annulierung vor Beginn (in Minuten)**  | Definiert ab wieviele Minuten vor Reservationsbegin Annullationskosten erhoben werden. 0 = Annullationskosten werden zur Laufzeit erhoben. Standardwert = leer (ausgeschalten). Beispiel: Bei einem Wert von 60 wird bis 60 Minuten vor Reservationsstart KEINE Annullationskosten erhoben. Zwischen 60 Minuten und der Endzeit der Reservation wird der Pauschalbetrag, welcher unter _Annullationskosten_ definiert berechnet.    |
| **Gruppe für Notifikationen** |  Mittels Intelibox kann eine Benutzergruppe ausgewählt werden, welche notifiziert werden soll auf dieser Angebotszone. Notifikation ist nur aktiviert, wenn Benutzergruppe ausgewählt UND die enstprechenden Notifikationstemplate der Benutzergruppe zugewiesen und konfiguriert worden sind  ([Notifikationen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Die Konfiguration eines Internen Dienstleister ergibt sich auch auf Grund des richtigen Notifikationstemplates - durch Hinzufügen des Notifikationstemplates _Bestuhlung ändern_ wird der Dienstleister als _interner Dienst_ definiert.  |
| **Versand Notifikation in Tagen vorher**    | Tage auswählen. Standardwert = 0. Regelwerk: beim Wert _0_ in _Versand Notifikation in Tagen vorher_ wird exakt bei Buchungsstart der Dienstleister informiert. Bei einer _Sammelnotifikation_ (Wert grösser 0) wird erst die Anzahl Tage vor Buchungsbeginn die Notifikation verschickt. Bestellungen welche in die Zeitspanne zwischen der Vorlaufzeit in Tagen und Buchungsbeginn fallen, werden auch umgehend verarbeitet, d.h. der Dienstleister informiert. Anmerkung: mit einer sehr hohen Eingabe (z.B. 999) kann provoziert werden, dass die Notifikation umgehend ausgelöst wird, da dann Regel 2 zur Anwendung kommt. |
|**Dienstleistungen sind für Hauptressource**|  Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wird bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).   |
| **Dienstleistungen sind für Zusatzressource**     |   Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wird bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen). |
| Dienstleistungen sind für Bestuhlung   | Auswählen, wenn zutreffend. Auswählen, wenn zutreffend. Kennzeichnung, für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Reservationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/3vrooms/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wir bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).    |
| Arbeitszeiten   |  Arbeitszeiten des Dienstleisters auswählen. Wochentag gibt es ein Von-Zeit-Feld und ein Bis-Zeit-Feld. Sind die Felder ausgefüllt, ist der Wochentag _aktiviert_. Standardmässig sind Montag bis Freitag aktiviert. Defaultwert der Startzeit muss global definiert werden (08:00). Defaultwert der Endzeit muss global definiert werden (17:00). Ist notwendig für die Berechnung der Angebotsverfügbarkeit - zusammen mit dem Angebotsvorlauf (siehe auch UC 106.001 Dienstleister verwalten) - Details im Reservationsprozess unter   |
{{< /bootstrap-table >}}

{{< imgproc Angebotszone_bearbeiten Resize "960x" >}}
Daten der Angebotszonen bearbeiten
{{< /imgproc >}}

Speichern Sie Ihre Änderungen über den Button _Speichern_.

### Angebote bearbeiten und hinzufügen


Sie sehen bereits hinzugefügte Angebote in der Liste. Indem Sie den Button "Hinzufügen" betätigen, öffnet sich das Angebotsfeld, welches Sie bearbeiten können.

{{< imgproc Angebotszone_Angebote Resize "960x" >}}
Angebote bestehender Angebotszonen bearbeiten
{{< /imgproc >}}

Wählen Sie ein bereits gespeichertes Angebot über die Aktivierung der Checkbox aus und fügen Sie es zur Liste hinzu.

{{< imgproc Angebotszone_Angebote_hinzufügen Resize "960x" >}}
Angebote zur Angebotszone hinzufügen
{{< /imgproc >}}

Sie können mehrere zusätzliche Funktionen zum Angebot hinzufügen:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Bezeichnung          | Die Bezeichnung des Angebots festlegen |
| Mitteilung vom Dienstleister          | Eine Mitteilung oder Anmerkung des Dienstleisters hinterlegen |
| Gültigkeitsdauer         | Datum und Zeit festlegen  |
|  Bezeichnung          | Die Bezeichnung des Angebots festlegen |
| Vorlaufdauer          | |
| Nachlaufdauer          |  |
{{< /bootstrap-table >}}

Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Angebote in der Liste.

{{< imgproc Angebotszone_Angebot_in_Liste Resize "960x" >}}
Hinzugefügte Angebote in der Liste
{{< /imgproc >}}


### Ressourcen hinzufügen


Im Tab Ressourcen sehen Sie bereits zugewiesene Ressourcen.

{{< imgproc Angebotszone_Ressourcen Resize "960x" >}}
Ressourcen der Angebotszone in der Liste
{{< /imgproc >}}


Möchten Sie weitere Ressourcen hinzufügen, betätigen Sie den Button _Hinzufügen_ und wählen Sie aus der Liste bestehender Ressourcen aus. Diese Ressource ordnen Sie der entsprechenden Angebotszone somit zu. Oder bestätigen Sie eine Ressource in der angezeigten Liste über die Aktivierung der Checkbox.

{{< imgproc Angebotszone_Ressourcen_hinzufügen Resize "960x" >}}
Ressourcen zur Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den Button _Hinzufügen_. Die Liste aktualisiert sich automatisch.

{{< imgproc Angebotszone_Ressourcen_in_Liste Resize "960x" >}}
Hinzugefügte Ressourcen in der Liste
{{< /imgproc >}}

### Gruppen hinzufügen


Sie sehen bereits zugewiesene Gruppen in der Liste.

{{< imgproc Angebotszone_Gruppen Resize "960x" >}}
Zugewiesene Gruppen einer Angebotszone
{{< /imgproc >}}


Möchten Sie weitere Gruppe hinzufügen, betätigen Sie den Button "Hinzufügen" und wählen Sie aus der Liste bestehender Gruppen aus. Aktivieren Sie die Checkbox neben der Gruppe, um diese auszuwählen.

{{< imgproc Angebotszone_Gruppen_hinzufügen Resize "960x" >}}
Gruppen zu einer Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den Button _Hinzufügen_. Die Liste aktualisiert sich automatisch.

{{< imgproc Angebotszone_Gruppen_in_Liste Resize "960x" >}}
Aktualisierte Gruppen in der Liste
{{< /imgproc >}}
