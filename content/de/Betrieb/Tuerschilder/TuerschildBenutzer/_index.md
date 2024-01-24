---
title: "Türschildbenutzer und API KEY"
linkTitle: "Türschildbenutzer und API KEY"
weight: 1
description: Erfassen eines Türschildbenutzers und eines API KEYs
---
Generell kann jede Person in Rooms kann als Türschildbenutzer verwendet werden (solange sie alle notwendigen Rechte besitzt).

Wir empfehlen jedoch einen dedizierten Benutzer sowie eine Rolle und Gruppen anzulegen.   

## Türschildbenutzer konfiguration
Folgende Konfiguration wird vorgeschlagen:

#### Benutzer

{{< bootstrap-table "table table-striped" >}}
| Feld             | Wert                                               |
| ---------------- | -------------------------------------------------- |
| Vorname          | onsiteROOMS                                        |
| Nachname         | onsiteROOMS                                        |
| Oe/Firma:        | Wir empfehlen die Default Firma zu verwenden       |
| Logins           | Es muss ein Login vom Typ `QR Code` erzeugt werden |
{{< /bootstrap-table >}}

#### Benutzergruppe

{{< bootstrap-table "table table-striped" >}}
| Feld                    | Wert                                               |
| ----------------------- | -------------------------------------------------- |
| Benutzergruppen ID      | onsiteROOMS                                        |
| Bezeichnung             | onsiteROOMS                                        |
| Berechtigungsgruppe     | `Ja` |
| Checkin Einzelbuchungen | `Ja` |
{{< /bootstrap-table >}}

#### Rolle

Es wird empfohlen zwei separate Rollen für globale und lokalisierte Rechte zu erstellen

- **onsiteROOMS (G)** mit folgenden Globalen Rechten
   - Darf Reservation mit automatischer Verlängerung editieren  
   - Darf Reservationen buchen (privat)  
   - Darf Reservationen für Ressourcetyp Equipment buchen  
   - Darf Reservationen für Ressourcetyp Raum buchen
- **onsiteROOMS (S)** mit folgenden standortbezogenen Rechten
   - Darf def. Reservationen buchen  
   - Darf prov. Reservationen buchen  
   - Darf Reservationen freigeben (fremde)  
   - Darf Reservationen freigeben mit Zeitpunkt  
   - Darf Reservationen für Dritte buchen  
   - Darf Reservationen für Dritte sehen  
   - Darf Reservationen für Dritte sehen (privat)  
   - Darf Reservationen terminieren (fremde)  
   - Darf Reservationen terminieren mit Zeitpunkt   

Danach kann wie gewohnt die Benutzergruppe und die Rolle über die Standorte zusammengeführt werden.

Nun kann auf einer Ressource das [Türschild aktiviert](/betrieb/tuerschilder/konfiguratonressource) werden.