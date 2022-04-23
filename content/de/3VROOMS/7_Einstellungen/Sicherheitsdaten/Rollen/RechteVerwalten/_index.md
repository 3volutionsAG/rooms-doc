---
title: "Rechte verwalten"
linkTitle: "Rechte verwalten"
weight: 1
description: >
  Hier verwalten Sie die Rechte von verschiedenen Rollen, welche dem Nutzungsverhalten der verschiedenen Zielgruppen entspricht.  
 


---
## Rechte verwalten
Möchten Sie Rechte einer Rolle hinzufügen oder entfernen, aktivieren Sie die Checkbox neben dem Listenelement. Klicken Sie anschließend auf den Button "Hinzufügen". Mit diesem Verfahren können Sie auch Rechte einer Rolle entfernen. 

{{< imgproc Rolle_Rechte_bearbeiten Resize "1280x" >}}
Abbildung lb: Rechte der Rollen bearbeiten
{{< /imgproc >}}

## Regeln zu den wichtigsten Standortabhängigen Rechten:

### Standortabhängie Reservations-Rechte
* Darf Standorthierarchie sehen (Buchen): wird benötigt, um durch den Standortbaum zu navigieren und eine entsprechende Ressource zu buchen   
* Darf div. Reservationen buchen
* Darf prov. Reservationen buchen
* Darf Reservationen lesen
* Darf Reservationen nicht sehen


### Standortabhängige Standort Rechte
* Darf Standort Hierarchie sehen (Standortverwaltung): wird benötigt, um durch den Standortbaum navigieren zu können
* Darf Standort bearbeiten: Benutzer, welche in einer Benutzergruppe sind, welche auf einem Standort dieses Datenrecht haben, können den aktuellen Standort editieren oder löschen, sowie neue Child-Nodes anlegen
* Darf Standort lesen: Benutzergruppen mit diesem Datenrecht auf einem Standort sehen den aktuellen Standort inkl. Stammdaten und Berechtigungen
* Darf Standort nicht sehen

### Standortabhängige Ressourcen Rechte
* Darf Standorthierarchie sehen (Ressourcenverwaltung): wird benötigt, um durch den Standortbaum und eine entsprechende Ressource zu sehen z.B. Ressourcenpicker
* Darf Ressource bearbeiten: Benutzer, welche in einer Benutzergruppe sind auf einem Layer und/oder Standort dieses Datenrecht haben, können auf der Ressource einen Standort hinzufügen oder editieren – oder auch Ressourcen löschen
* Darf Ressource nicht sehen

### Standortabhängige Rechte für Dritte
* Darf Reservationen freigeben (fremde)
* Darf Reservationen für Dritte buchen
* Darf Reservationen für Dritte buchen (privat)
* Darf Reservationen für Dritte sehen
* Darf Reservationen für Dritte sehen (privat)
* Darf Reservationen terminieren (fremde)

### Diverse Standortabhängige Rechte
* Darf Plan Lesen: nur mit diesem Recht ist der Zugriff auf den Plan überhaupt möglich. Achtung: um Buchungen durchzuführen, sind noch weitere Rechte, wie „darf def. Reservationen buchen“ notwendig
* Darf no-Show vergeben
* Darf Dienstleistungen "offene Menge" nachbearbeiten

#### Weitere Bedingungen zu Standortabhängigen Rechten
Es werden generell nur die Standort-Trees angezeigt, bei welchen man auch die entsprechenden Standortabhängige Rechte hat.
Wird kein standortabhängige Reservations-Rechte vergeben, so heißt dies, dass man bei der Reservationssuche auch keine Reservation findet.
Beim Verschieben eines Standortes, müssen standortabhängige Rechte auf dem Quell- und Ziel-Ort vorhanden sein – falls die entsprechenden standortabhängige Rechte nicht vorhanden sind, sieht man den Quell- und/oder Zielort gar nicht.
Beim Verschieben einer Ressource von einem Standort zum anderen erbt die Ressource vom Destination-Standort. Rechte vom Source Tree werden entfernt. Rechte, welche direkt auf der Ressource erstellt wurden, bleiben in jedem Fall bestehen.
Es ist nicht möglich bei einer Ressource, welche Rechte erbt, die Vererbung zu unterbrechen, ohne das jeweilige vererbte Recht komplett zu entfernen.

### Spezialfall „Reservation Eingrenzung“

Beim Hinzufügen des Reservationsrechts „Darf def. Reservation buchen oder „Darf prov. Reservation buchen“ werden drei Felder eingeblendet: 
1. Dropdown 1 hat folgende Werte
* NULL (leer) = Zeitfunktion deaktiviert
* ab=Recht gilt erst ab xxx (Tagen/Stunden)
* bis=Recht gilt nur bis xxx (Tagen/Stunden)

2. Textfeld (leer oder numerische Ganzzahl): gibt an wieviele Tage oder Stunden die Eingrenzung des Rechts Gültigkeit hat:
* Dropdown (Tage / Stunden)
* Tage= Recht gilt ab Anzahl Tage, wobei ein Tag um 00:00 startet. Beispiel: Aktuelles Datum/Zeit= 05.03.2010 14:00; Eingabe: ab 1 Tage, hat zur Folge, dass der Raum erst am 6.3.2010 ab 00:01 gebucht werden kann
* Stunden= Recht gilt ab sofort + Anzahl Stunden. Beispiel: Aktuelles Datum/Zeit= 05.03.2010 14:00, Eingabe: ab 24 Stunden, hat zur Folge das der Raum erst am 6.3.2010 ab 14:01 gebucht werden kann
* Standardmäßig sind alle Felder leer

Weitere Auswirkungen auf den Reservationsprozess:
Ist ein Benutzer in mehreren Gruppen, zählt kumulativ das grösstmögliche Recht