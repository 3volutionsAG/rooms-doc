---
title: "Konfiguration Ressource"
linkTitle: "Konfiguration Ressource"
weight: 2

description: 'Konfiguration der Ressource für das Türschild'
---

## Aktivierung des Türschildes

{{% alert title="Info" color="info" %}}
Die Aktivierung eines Türschildes erfordert eine gültige Türschild-Lizenz.
{{% /alert %}}

Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Durch Klick auf *Türschild aktivieren* gelangen Sie in die Konfiguration des Türschildes.

## Deaktivierung des Türschildes

Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Durch Klick auf *Türschild deaktivieren* erfolgt die Deaktivierung und die Lizenz wird freigegeben.

---

## Konfigurationsparameter

Die Türschild-Konfiguration finden Sie unter *Einstellungen* &rarr; *Ressourcen* &rarr; Tab *Türschild*.

{{< bootstrap-table "table-striped" >}}
| Einstellung | Beschreibung |
|-------------|--------------|
| Titel anzeigen | Steuert die Ausgabe des Titels am Türschild |
| Organisator anzeigen | Steuert die Ausgabe des Organisators am Türschild |
| Ressource Beschreibung anzeigen | Steuert die Ausgabe der Ressourcen-Beschreibung am Türschild |
| Read only | Türschild nur zur Anzeige, keine Interaktion möglich |
| Unauthorisierte Aktionen erlauben | Aktionen werden im Namen des konfigurierten Users ausgeführt. Ermöglicht anonymes Check-in/Check-out sowie anonymes Ad-hoc-Buchen (onsiteROOMS ab v1.1.0) |
| Nur Checkin | Nur Check-in Funktion erlauben |
| Debug-Seite aktivieren | Debug-Informationen anzeigen |
| Checkout Modus | *Terminieren*: Buchung wird auf jetzt gekürzt, Nachlaufzeit bleibt. *Freigeben*: Buchung wird auf jetzt gekürzt, Raum ist sofort frei |
| Url des Logos | URL zu einem kundenspezifischen Logo für das Türschild |
| Sprache | Sprache der Türschild-Oberfläche |
| Anfrage Intervall (in Minuten) | Intervall, bei welchem das Türschild neue Buchungsdaten abruft (min. 1, max. 1440, Standard 5) |
| Konfiguration Aktualisierung Intervall (in Minuten) | Intervall, bei welchem das Türschild die Konfiguration prüft (min. 1, max. 1440, Standard 15) |
| Bildschirmaktualisierung Intervall (in Minuten) | Intervall, bei welchem das Türschild den Bildschirm aktualisiert (min. 1, max. 1440, Standard 60) |
| Maximale Anzahl angezeigte Buchungen | Maximale Anzahl bevorstehende Buchungen auf dem Türschild (min. 0, max. 10, Standard 1) |
| Kalender Zeitstrahl | Definiert die sichtbare Zeitspanne (von/bis) des interaktiven Kalenders |
{{< /bootstrap-table >}}
