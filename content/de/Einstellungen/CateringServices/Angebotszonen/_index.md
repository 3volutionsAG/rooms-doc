---
title: "Angebotszonen"
linkTitle: "Angebotszonen"
weight: 2
description: >
  Im Bereich Angebotszonen sehen Sie die verschiedenen Dienstleister und ihre Angebote. Sie erstellen neue Angebotszonen oder bearbeiten bestehende. 
 


---
## Ansicht Angebotszone 
Im linken Sidepanel sehen Sie die Filterfunktionen, mit deren Hilfe Sie nach Angebotszonen suchen können. 

Im rechten Feld sehen Sie die Angebotszonenliste. Hier können Sie Elemente bearbeiten, löschen, neu hinzufügen oder die Daten einsehen. (Abbildung o)

{{< imgproc Angebotszonen_erstellen_suchen Resize "1280x" >}}
Abbildung o: Angebotszonen bearbeiten und durchsuchen
{{< /imgproc >}}

Zum Löschen aktivieren Sie die Checkbox neben einem Listenelement und wählen den untenstehenden Button "Entfernen" aus. Die Liste auktualisiert sich automatisch. 

**Hinweis zum Löschen** : 
* eine oder mehrere Angebotszonen können selektiert werden
* Klick auf den Löschen-Button
* Sicherheitsmeldung „Sollen Angebotszonen wirklich entfernt werden?“
* Bestätigungsmeldung im Actionpanel

### Angebotszone durchsuchen 
Im linken Sidepanel suchen Sie nach einer Angebotszone. Hierbei können Sie nach der Bezeichnung und einem Dienstleister suchen (Abbildung o).

### Angebotszonen: Daten einsehen
Die Daten einer bestehenden Angebotszone sehen Sie ein, indem Sie mit dem Mauszeiger auf den Namen der Angebotszone in der Liste klicken (Abbildung ox). Dort sehen Sie folgende Dtaen ein und können diese ebenfalls wieder bearbeiten: 
* die Stammdaten 
* Angebote
* Arbeitszeiten
* Ressourcen 
* Gruppen
* Historie 
 
{{< imgproc Angebotszonen_Daten_einsehen Resize "1280x" >}}
Abbildung ox: Einsehen der Daten einer Angebotszone
{{< /imgproc >}}

## Angebotszonen bearbeiten 
Sie bearbeiten einen bestehendes Angebot, indem Sie auf das Stift Icon "Bearbeiten" neben dem Namen des Dienstleister klicken (Abbildung o). Dort können Sie bestehende Daten bearbeiten. Ein neues Angebot legen Sie über den Button "Erstellen" an. In dem Feld, welches sich öffnet, legen Sie folgende Daten fest (Abbildung oi):
* Angebootszone (Stammdaten)
* Angebote
* Ressourcen
* Gruppen

Die neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung oi).

### Angebotszone (Stammdaten) bearbeiten
Die folgenden Daten können Sie ändern und bearbeiten:

| Feld         | Funktion         | 
| ------------- |-------------  | 
|  Dienstleister        | Nicht editierbar und wird in der Vorauswahl festgelegt. (Abbildung o) |
| Bezeichnung          | Die Bezeichnung des Angebots festlegen. Muss mehrsprachig erfasst werden. | 
| Mitteilung vom Dienstleister| Eine Mitteilung oder Anmerkung des Dienstleister hinterlegen. Kann mehrsprachig erfasst werden. Diese Informationen wird im Buchungsprozess Tab [Dienstleistungen](/einstellungen/basisdatenfuerressourcen/bestuhlung/) visualisiert. | 
| Gültigkeitsdauer         | Datum und Zeit festlegen. Standard = leer. leer = von wann, bis wann die Angebotszone zur Verfügung steht| 
| Vorlaufdauer          | Standardwert = 0. Angabe in Minuten. Wird im Buchungsprozess für die Berechnung der Vorlaufdauer verwendet.| 
| Nachlaufdauer          | Standardwert = 0. Angabe in Minuten. Wird im Reservationsprozess für die Berechnung der Vorlaufdauer verwendet | 
| Währung    | alle aktivierten Währungen. Standardwert = Währung der im Profil des angemeldeten gewählten Kultur.Die Anzahl der aktiviert Währungen ist abhängig von der Anzahl der zur Verfügung gestellten Kulturen.| 
| **Kosten**    | Kosten eintragen und die Währung auswählen     |  
| **Annulierungskosten**    | Annulierungskosten eintragen und Währung auswählen. Standardwert = leer (keine Annullationskosten). Wert > 0 entspricht dem Wert, welcher bei einer Annullation Pauschal erhoben wird.  |  
| **Annulierung vor Beginn (in Minuten)**  | Definiert ab wieviele Minuten vor Reservationsbegin Annullationskosten erhoben werden. 0 = Annullationskosten werden zur Laufzeit erhoben. Standardwert = leer (ausgeschalten). Beispiel: Bei einem Wert von 60, wird bis 60 Minuten vor Reservationsstart KEINE Annullationskosten erhoben. Zwischen 60 Minuten und der Endzeit der Reservation wird der Pauschalbetrag, welcher unter "Annullationskosten" definiert berechnet.    |  
| **Gruppe für Notifikationen** |  Mittels Intelibox kann eine Benutzergruppe ausgewählt werden, welche notifiziert werden soll auf dieser Angebotszone. Notifikation ist nur aktiviert, wenn Benutzergruppe ausgewählt UND die enstprechenden Notifikationstemplate der Benutzergruppe zugeweisen und konfiguriert worden sind  ([Notifikationen](/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Die Konfiguration eines Internen Dienstleister ergibt sich auch auf Grund des richtigen Notifikationstemplates - durch Hinzufügen des Notifikationstemplates „Bestuhlung" ändern“ wird der Dienstleister als „interner Dienst“ definiert.  |  
| **Versand Notifikation in Tagen vorher**    | Tage auswählen. Standardwert = 0. Regelwerk: beim Wert „0“ in „Versand Notifikation in Tagen vorher“ wird exakt bei Buchungsstart der Dienstleister informiert. Bei einer „Sammelnotifikation“ (Wert grösser 0) wird erst die Anzahl Tage vor Buchungsbeginn die Notifikation verschickt. Bestellungen welche in die Zeitspanne zwischen der Vorlaufzeit in Tagen und Buchungsbeginn fallen, werden auch umgehend verarbeitet, d.h. der Dienstleister informiert. Anmerkung: mit einer sehr hohen Eingabe (z.B. 999) kann provoziert werden dass die Notifikation umgehend ausgelöst wird, da dann Regel 2 zur Anwendung kommt. |  
| **Dienstleistungen sind für Hauptressource**  |  Auswählen, wenn zutreffend. Kennzeichnung für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Resevationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wir bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).   |  
| **Dienstleistungen sind für Zusatzressource**     |   Auswählen, wenn zutreffend. Kennzeichnung für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Resevationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wir bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen). |  
| Dienstleistungen sind für Bestuhlung   | Auswählen, wenn zutreffend. Auswählen, wenn zutreffend. Kennzeichnung für was die Dienstleistung der Angebotszone verwendet werden. Wird genutzt, um Zuschläge und Rabatte im Resevationsprozess den richtigen Dienstleister zuweisen zu können ([Ressourcen](/einstellungen/basisdatenfuerressourcen/bestuhlung/)). Standardwert = nicht selektiert. Bei Selektion der Checkbox wird überprüft, ob ein anderer Dienstleister bereits dieselbe Dienstleistung (z.B. Bestuhlung) für einen oder mehrere Ressourcen anbietet (ist die Bestuhlung bereits in einer anderen Angebotszone selektiert). Wenn ja, wird ein Warnung Actionmessage ausgegeben (Achtung: diese Dienstleistung wir bei einem oder allen Ressourcen bereits von einem anderen Dienstleister vorgenommen).    |  
| Arbeitszeiten   | Arbeitszeiten des Dienstleisters auswählen. Wochentag gibt es ein Von-Zeit-Feld und ein Bis-Zeit-Feld. Sind die Felder ausgefüllt, ist der Wochentag „aktiviert“. Standardmässig sind Montag bis Freitag aktiviert. Defaultwert der Startzeit muss global definiert werden (08:00). Defaultwert der Endzeit muss global definiert werden (17:00). Ist notwendig für die Berechnung der Angebotsverfügbarkeit - zusammen mit dem Angebotsvorlauf (siehe auch UC 106.001 Dienstleister verwalten) - Details im Reservationsprozes unter   |

{{< imgproc Angebotszone_bearbeiten Resize "1280x" >}}
Abbildung oi: Daten der Angebotszonen bearbeiten
{{< /imgproc >}}

Speichern Sie Ihre Änderungen über den Button "Speichern". 

### Angebote bearbeiten und hinzufügen
Sie sehen bereits hinzugefügte Angebote in der Liste. Indem Sie den Button "Hinzufügen" betätigen, öffnet sich das Angebotsfeld, welches Sie bearbeiten können (Abbildung oy). 

{{< imgproc Angebotszone_Angebote Resize "1280x" >}}
Abbildung oy: Angebote bestehender Angebotszonen bearbeiten
{{< /imgproc >}}

Wählen Sie ein bereits gespeichertes Angebot über die Aktivierung der Checkbox aus und fügen Sie es zur Liste hinzu. (Abbildung oz)

{{< imgproc Angebotszone_Angebote_hinzufügen Resize "1280x" >}}
Abbildung oz: Angebote zur Angebotszone hinzufügen
{{< /imgproc >}}

Sie können mehrere zusätzliche Funktionen zum Angebot hinzufügen: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung          | Die Bezeichnung des Angebots festlegen | 
| Mitteilung vom Dienstleister          | Eine Mitteilung oder Anmerkung des Dienstleister hinterlegen | 
| Gültigkeitsdauer         | Datum und Zeit festlegen  | 
|  Bezeichnung          | Die Bezeichnung des Angebots festlegen |
| Vorlaufdauer          | | 
| Nachlaufdauer          |  | 

Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Angebote in der Liste (Abbildung ow).

{{< imgproc Angebotszone_Angebot_in_Liste Resize "1280x" >}}
Abbildung ow: Hinzugefügte Angebote in der Liste
{{< /imgproc >}}


### Ressourcen hinzufügen 
Im Tab Ressourcen sehen Sie bereits zugewiesene Ressourcen. (Abbildung oa) 

{{< imgproc Angebotszone_Ressourcen Resize "1280x" >}}
Abbildung oa: Ressourcen der Angebotszone in der Liste
{{< /imgproc >}}

Möchten Sie weitere Ressourcen hinzufügen betätigen Sie den Button "Hinzufügen" und wählen Sie aus der Liste bestehender Ressourcen aus. Diese Ressource ordnen Sie der entsprechenden Angebotszone somit zu (Abbildung oc). Oder bestätigen Sie eine Ressource in der angezeigten Liste über die Aktivierung der Checkbox. 

{{< imgproc Angebotszone_Ressourcen_hinzufügen Resize "1280x" >}}
Abbildung oc: Ressourcen zur Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahö über den Button "Hinzufügen". Die Liste aktualisiert sich automatisch. (ABbildung od)

{{< imgproc Angebotszone_Ressourcen_in_Liste Resize "1280x" >}}
Abbildung od: Hinzugefügte Ressourcen in der Liste
{{< /imgproc >}}

### Gruppen hinzufügen 
Sie sehen bereits zugewiesene Gruppen in der Liste. (Abbildung of)

{{< imgproc Angebotszone_Gruppen Resize "1280x" >}}
Abbildung of: Zugewiesene Gruppen einer Angebotszone
{{< /imgproc >}}

Möchten Sie weitere Gruppe hinzufügen betätigen Sie den Button "Hinzufügen" und wählen Sie aus der Liste bestehender Gruppen aus. Aktivieren Sie die Checkbox nebem der Gruppe, um diese auszuwählen. (Abbildung ob)

{{< imgproc Angebotszone_Gruppen_hinzufügen Resize "1280x" >}}
Abbildung ob: Gruppen zu einer Angebotszone hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Auswahö über den Button "Hinzufügen". Die Liste aktualisiert sich automatisch. (Abbildung ok)

{{< imgproc Angebotszone_Gruppen_in_Liste Resize "1280x" >}}
Abbildung ok: Aktualisierte Gruppen in der Liste
{{< /imgproc >}}

## Angebotszone neu hinzufügen
Sie haben mehrere Typen von Angebotszonen zur Auswahl, die Sie neu erstellen können. Dazu wählen Sie wie in Abbildung o gezeigt mittels Drop Down aus den gespeicherten Dienstleistern aus z.B.: 

* Bestuhlungsdienst
* Dienstleister 
* Getränkehändler 

{{< imgproc Angebotszone_erstellen Resize "1280x" >}}
Abbildung ol: Neue Angebotszone erstellen
{{< /imgproc >}}

