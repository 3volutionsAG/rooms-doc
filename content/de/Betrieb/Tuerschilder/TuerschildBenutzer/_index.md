---
title: "Konfiguration der System Person für die Türschilder"
linkTitle: "Konfiguration der System Person für die Türschilder"
weight: 1
description: Konfiguration der System Person für die Verwendung mit den Türschildern
---
Generell kann jede Person in ROOMS als System Person hinterlegt werden (solange sie alle notwendigen Rechte besitzt).

## System Person erstellen und konfigurieren
Zuerst muss eine Person in ROOMS erstellt werden, welche dann als System Person verwendet wird. Dazu gemäss Anleitung unter [Person neu hinzufügen](/einstellungen/personen/#person-neu-hinzuf%C3%BCgen) eine neue Peron anlegen.

Wir empfehlen folgende Angaben für diese System Person, damit der Betrieb mit den Türschildern einwandfrei funktioniert:

#### Benutzer

{{< bootstrap-table "table table-striped" >}}
| Feld             | Wert                                              |
| ---------------- | ------------------------------------------------- |
| Vorname          | System                                            |
| Nachname         | Person                                            |
| Oe/Firma:        | Wir empfehlen die Default Firma zu verwenden      |
| Logins           | Es muss ein Login vom Typ `APIKEY` erzeugt werden |
{{< /bootstrap-table >}}

#### Benutzergruppe

{{< bootstrap-table "table table-striped" >}}
| Feld                    | Wert                                          |
| ----------------------- | --------------------------------------------- |
| Benutzergruppen ID      | onsite                                        |
| Bezeichnung             | onsite                                        |
| Berechtigungsgruppe     | `Ja`                                          |
| Checkin Einzelbuchungen | `Ja`                                          |
{{< /bootstrap-table >}}

#### Rolle

Es wird empfohlen zwei separate Rollen für globale und lokalisierte Rechte zu erstellen

- **onsite (G)** mit folgenden Globalen Rechten
   - Darf Reservation mit automatischer Verlängerung editieren  
   - Darf Reservationen buchen (privat)  
   - Darf Reservationen für Ressourcetyp Equipment buchen  
   - Darf Reservationen für Ressourcetyp Raum buchen
- **onsite (S)** mit folgenden standortbezogenen Rechten
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

#### System Person in ROOMS hinterlegen

Falls noch nicht gemacht muss die oben erstellte Person noch in ROMMS als System Person hinterlegt werden. Dies erfolgt in den [Globalen Einstellungen](/3vrooms/einstellungen/system/globaleparameter)

#### Abschluss

Nachdem die System Person korrekt angelegt ist, kann auf einer Ressource das [Türschild aktiviert](/betrieb/tuerschilder/konfiguratonressource) werden.
