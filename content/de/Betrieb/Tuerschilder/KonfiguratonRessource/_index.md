---
title: "Konfiguration Ressource"
linkTitle: "Konfiguration Ressource"
weight: 2

description: >
   <p style="text-align: justify">Konfiguration der Ressource für das Türschild</p>
---

## Basis
### Aktivierung des Türschildes für eine Ressource
{{% alert title="Info" color="info" %}}
Die aktivierung eines Türschildes erfordert eine gültige Türschild Lizenz.
{{% /alert %}}
Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Selektieren Sie den Konfigurationsbenutzer / (Türschildbenutzer siehe [Türschildbenutzer und API KEY]({{< ref "betrieb/tuerschilder/tuerschildbenutzer" >}})). Durch Klick auf *Türschild aktivieren* gelangen sie in die Konfiguration des Türschildes.

### Deaktivierung des Türschildes für eine Ressource
Wechseln Sie im Bearbeitungsmodus der Ressource (*Einstellungen* &rarr; *Ressource* &rarr; *Bearbeiten*) in den Tab *Türschild*.
Durch klick auf *Türschild deaktivieren* erfolgt die Deaktivierung und die Lizenz wird freigegeben.

## Konfiguration

Damit ein Türschild für eine Ressource eingesetzt werden kann, muss die entsprechende Ressource in ROOMS konfiguriert werden (*Einstellungen* &rarr; *Ressourcen* &rarr; *Türschild*).   
Diese Konfiguration kann gewisse Verhalten des onsiteROOMS beinflussen, wobei ein Unterschied besteht zwischen dem neuen onsiteROOMS (Web basiert) und dem alten onsiteROOMS (Android App).   

{{< bootstrap-table "table-striped" >}}
|<div style="width:270px">Einstellung</div>|<div style="width:150px">onsite Web</div>|<div style="width:150px">onsite Android</div>|Beschreibung|
|---------|:---:|:---:|---|
|Thema|&#10007;|&#10003;||
|Sprache|&#10003;|&#10003;||
|Wartezeit|&#10003;|&#10003;|Beschreibt die Zeit, die das Türschild ohne Interaktion wartet, bevor es wieder in den "View Mode" wechselt</br>(min. 5, max. 30, standard 10)|
|Anfrage Intervall|&#10003;|&#10003;|Intervall in Minuten, bei welchem das Türschild die Konfiguration prüft und neue Buchungsdaten abruft</br>(min. 1, max. 1440, standard 5)|
|Titel anzeigen|&#10007;|&#10003;|Steuert die Ausgabe des Titel (ja/nein) am Türschild|
|Ressource Beschreibung anzeigen|&#10007;|&#10003;|Bei onsite Web kann diese Option via Theming gelöst werden|
|Read only|&#10003;|&#10003;||
|Nur checkin|&#10003;|&#10003;||
|Unauthorisierte Aktionen erlauben|&#10003;|&#10003;|onsite Web möglich ab v1.1.0: Aktionen werden im Namen des Users, mit dem das Türschild konfiguriert wurde, ausgeführt.  Mit der Option, ist es möglich anonymes checkin/checkout sowie anonymes ad-hoc buchen und buchen verlängern zu tätigen. Wenn nur Anonymes Checkin gemacht werden soll, kann zusätzlich “Nur Checkin” ausgewählt werden. |
|Organisator anzeigen|&#10003;|&#10003;|Steuert die Ausgabe des Organisators (ja/nein) am Türschild|
|Anonym-Login|&#10007;|&#10003;|Steuert die Funktion eine Buchung ohne Authentisierung zu bestätigen. </br> Gilt nur für Buchungen auf Ressourcen für die Checkin in den Stammdaten der Ressource aktiviert haben. </br> Die Zeitspanne in der eine Bestätigung der Buchung erfolgen kann, bezieht sich auf die beiden Konfigurationswerte in den Stammdaten der Ressource: "Checkin in Min vorher erlaubt", "NoShow Delay"|
|Checkout Modus|&#10003;|&#10003;|Terminieren = Buchung wird auf jetzt gekürzt, Nachlaufzeit bleibt, Freigeben = Buchung wird auf jetzt gekürzt, Raum ist frei| 
|Authorisierungsmodus|&#10003;|&#10003;|Bei onsite Web muss zwingend *Beide* eingestellt sein|
|Kalender Zeitstrahl|&#10003;|&#10007;|Definiert die sichtbare Zeitspanne des interaktiven Kalenders|
|QR Code Format|&#10003;|&#10003;|Bei onsite Web muss zwingend *json* eingestellt sein|
|Konfigurationsbenutzer wählen|&#10003;|&#10003;||
{{< /bootstrap-table >}}
