---
title: "Status"
linkTitle: "Status"
weight: 2
description: 'In diesem Bereich sehen Sie den Status der Basisdaten für die Ressourcen ein.'
---

## Allgemeine Informationen
Es gibt drei Arten von Status: Zustand einer Ressource, Systemstatus und frei definierbare Status auf Reservationen

Sie können den Status inklusive der Farbe und einem Symbol selber definieren. 
Die bereits bestehenden Status können Sie pro Ressource aktivieren und die Reihenfolge definieren. 

{{< imgproc Status_einsehen Resize "1280x" >}}
Abbildung s: Status der Basisdaten einsehen
{{< /imgproc >}}

## Ansicht der Status Information 
Im View Modus sehen Sie einen Baum mit den zur Verfügung stehenden Status Meldungen. 

Klicken Sie auf einen Status, sehen Sie neben der Bezeichnung mehrere Symbole. (Abbildung sa)

{{< imgproc Status_bearbeiten Resize "1280x" >}}
Abbildung sa: Status Ansicht der Informationen
{{< /imgproc >}}

Die Symbole haben folgende Bedeutung:  

* Auge: Informationen ansehen
* Stift: Status bearbeiten
* Plus: Individuellen Status hinzufügen 
* Papierkorb: Status löschen

Ein Systemstatus ist vom System vorgegeben und kann NIEMALS gelöscht werden. 

### Mögliche Zustände einer Ressource
Folgende Zustände einer Ressource gibt es:

* Frei 
* Gesperrt 
* Besetzt (Besetzt wird als Reservationsstatus behandelt)

#### Haupt Reservations-Status
Folgende Haupt Reservation-Status gibt es (System, bzw. Workflow Status)

* Besetzt (System)
* Besetzt Provisorisch
* Besetzt Temporär
* Besetzt Definitiv
* Annulliert
* Slot definiert
* Slot publiziert

### Status ansehen 
Klicken Sie auf das Icon "Auge": Sie können hier die gespeicherten Informationen zum Status ansehen und über den untenstehenden Button "bearbeiten" auch bearbeiten. 

{{< imgproc Status_ansehen Resize "1280x" >}}
Abbildung sb: Die Informationen eines Status einsehen und ggf. bearbeiten
{{< /imgproc >}}

### Status bearbeiten
Klicken Sie auf das Stift Icon, können Sie die bestehenden Informationen zum Status bearbeiten. Es öffnet sich dazu ein neues Feld. 

{{< imgproc Status_bearbeiten2 Resize "1280x" >}}
Abbildung sc: EInen bestehenden Status bearbeiten
{{< /imgproc >}}

Speichern Sie Ihre geänderten Angaben über den untenstehenden Button "speichern". 

### Individuellen Status hinzufügen
Sie können diese nur bei Besetzt (system, provisorisch, temporär, definitiv) anhängen. 
Klicken Sie auf das Plus Zeichen, um einen Status hinzuzufügen. Es öffnet sich ein neues Fenster. Hier geben Sie folgende Informationen ein: 
* Bezeichnung 
* Symbol 
* Farbe 
* Farbe (Vorlaufzeit)
* Farbe (Nachlaufzeit)
* Identifikationsnummer 
* Jobmanager Workflow 

{{< imgproc Status_hinzufügen Resize "1280x" >}}
Abbildung sd: Individuellen Status hinzufügen
{{< /imgproc >}}

Die Pflichtfelder z.B. Bezeichnung und Farbe müssen Sie auswählen, ansonsten können Sie den neuen Status nicht speichern. 

Beispiele von bekannte individuelle Status, welche an einem System Status angehängt werden können.
* Kunde im Raum
* Kundenberater avisiert
* Kundenberater im Raum
* Reinigung

Den hinzugefügten Status sehen Sie in der Übersicht. Über das kleine Plus Zeichen am System Status können Sie diesen aufklappen.

{{< imgproc Status_gespeichert_in_tree Resize "1280x" >}}
Abbildung se: Ansicht des hinzugefügten Status
{{< /imgproc >}}
