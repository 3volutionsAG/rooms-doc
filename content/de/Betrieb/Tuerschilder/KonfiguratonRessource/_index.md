---
title: "Konfiguration Ressource"
linkTitle: "Konfiguration Ressource"
weight: 2

description: >
   <p style="text-align: justify">Konfiguration der Ressource für das Türschild</p>
---

## Basis

### Konfiguration Companion App für die Verwendung der LED-Bars

{{% alert title="Info" color="info" %}}
Aktuell sind folgende Türschilder mit LED-Bars unterstützt:
Philips 10BDL####T und Elo i-Series 4 für Android
{{% /alert %}}


Für die Verwendung der LED-Bar bieten wir eine Companion App an.
Diese App kann über das Service Portal heruntergeladen werden.
Die backendseitige Konfiguration erfolgt durch 3volutions.

Folgender Konfigurationswert muss in der `config.json` ergänzt werden. 

```json
"ledControlUrl": "http://localhost:6969"
```

#### Beispiel einer `config.json`

```json
{
	"rootConfig": {
		"roomsUrl": "https://abc.book.3vrooms.app/Default",
		"idpUrl": "https://abc.idp.3vrooms.app",
		"ledControlUrl": "http://localhost:6969"
	}
}
```

### Aktivierung des Türschildes für eine Ressource
{{% alert title="Info" color="info" %}}
Die aktivierung eines Türschildes erfordert eine gültige Türschild Lizenz.
{{% /alert %}}
Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Durch Klick auf *Türschild aktivieren* gelangen sie in die Konfiguration des Türschildes.

### Deaktivierung des Türschildes für eine Ressource
Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Durch klick auf *Türschild deaktivieren* erfolgt die Deaktivierung und die Lizenz wird freigegeben.

## Konfiguration

Damit ein Türschild für eine Ressource eingesetzt werden kann, muss die entsprechende Ressource in ROOMS konfiguriert werden (*Einstellungen* &rarr; *Ressourcen* &rarr; *Türschild*).   

{{< bootstrap-table "table-striped" >}}
|<div style="width:270px">Einstellung</div>|<div style="width:150px">Unterstützung</div>|Beschreibung|
|---------|:---:|:---:|---|
|Sprache|&#10003;|
|Anfrage Intervall|&#10003;|Intervall in Minuten, bei welchem das Türschild neue Buchungsdaten abruft</br>(min. 1, max. 1440, standard 5)|
|Konfiguration Aktualisierung Intervall|&#10003;|Intervall in Minuten, bei welchem das Türschild die Konfiguration prüft</br>(min. 1, max. 1440, standard 5)|
|Bildschirmaktualisierung Intervall|&#10003;|Intervall in Minuten, bei welchem das Türschild den Bildschirm aktualisiert</br>(min. 1, max. 1440, standard 60)|
|Maximale Anzahl angezeigte Buchungen|&#10003;|Maximale Anzahl bevorstehende Buchungungen, welche auf dem Türschild ersichtlich sind</br>(min. 0, max. 10, standard 1)|
|Titel anzeigen|&#10003;|Steuert die Ausgabe des Titel (ja/nein) am Türschild|
|Ressource Beschreibung anzeigen|&#10003;|Steuert die Ausgabe der Ressourcen Beschreibung (ja/nein) am Türschild|
|Read only|&#10003;||
|Nur checkin|&#10003;||
|Debug-Seite aktivieren|&#10003;||
|Unauthorisierte Aktionen erlauben|&#10003;|onsite Web möglich ab v1.1.0: Aktionen werden im Namen des Users, mit dem das Türschild konfiguriert wurde, ausgeführt.  Mit der Option, ist es möglich anonymes checkin/checkout sowie anonymes ad-hoc buchen und buchen verlängern zu tätigen. Wenn nur Anonymes Checkin gemacht werden soll, kann zusätzlich “Nur Checkin” ausgewählt werden. |
|Organisator anzeigen|&#10003;|Steuert die Ausgabe des Organisators (ja/nein) am Türschild|
|Anonym-Login|&#10003;|Steuert die Funktion eine Buchung ohne Authentisierung zu bestätigen. </br> Gilt nur für Buchungen auf Ressourcen für die Checkin in den Stammdaten der Ressource aktiviert haben. </br> Die Zeitspanne in der eine Bestätigung der Buchung erfolgen kann, bezieht sich auf die beiden Konfigurationswerte in den Stammdaten der Ressource: "Checkin in Min vorher erlaubt", "NoShow Delay"|
|Checkout Modus|&#10003;||Terminieren = Buchung wird auf jetzt gekürzt, Nachlaufzeit bleibt, Freigeben = Buchung wird auf jetzt gekürzt, Raum ist frei| 
|Kalender Zeitstrahl|&#10003;|Definiert die sichtbare Zeitspanne des interaktiven Kalenders|
{{< /bootstrap-table >}}
