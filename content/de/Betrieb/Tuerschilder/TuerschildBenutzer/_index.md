---
title: "Türschildbenutzer und API KEY"
linkTitle: "Türschildbenutzer und API KEY"
weight: 1

description: >
   <p style="text-align: justify">Erfassen eines Türschildbenutzers und eines API KEYs</p>
---

## Einleitung
Jede Person in Rooms kann als Türschildbenutzer verwendet werden (solange sie alle notwendigen Rechte besitzt).   
Für den Türschildbenutzer ist es jedoch sinnvoll je eine eigene Gruppe, Rolle und Benutzer anzulegen.   
Dieser Benutzer sollte möglichst nicht über einen allfälligen Benutzerdatenimport angelegt werden.

## Türschildbenutzer konfiguration
Folgende Konfiguration wird vorgeschlagen:

**Gruppe für Türschildbenutzer:** *On Site ROOMS*   

**Rollen für Türschildbenutzer:**   

- *On Site ROOMS (G)* mit folgenden Globalen Rechten
   - Darf Reservation mit automatischer Verlängerung editieren  
   - Darf Reservationen buchen (privat)  
   - Darf Reservationen für benutzerdefinierte Ressourcetypen buchen  
   - Darf Reservationen für Ressourcetyp Arbeitsplatz buchen  
   - Darf Reservationen für Ressourcetyp Equipment buchen  
   - Darf Reservationen für Ressourcetyp Fahrzeug buchen  
   - Darf Reservationen für Ressourcetyp Parkplatz buchen  
   - Darf Reservationen für Ressourcetyp Raum buchen
- *On Site ROOMS (S)* mit folgenden standortbezogenen Rechten
   - Darf def. Reservationen buchen  
   - Darf prov. Reservationen buchen  
   - Darf Reservationen freigeben (fremde)  
   - Darf Reservationen freigeben mit Zeitpunkt  
   - Darf Reservationen für Dritte buchen  
   - Darf Reservationen für Dritte sehen  
   - Darf Reservationen für Dritte sehen (privat)  
   - Darf Reservationen terminieren (fremde)  
   - Darf Reservationen terminieren mit Zeitpunkt   


**Benutzer:** *On Site ROOMS* (Ein einzelner Benutzer reicht aus)

## API KEY
Bei einem *API_KEY* handelt es sich um den PIN eines Rooms-Benutzers.   
Erstellen Sie ein PIN-Login auf dem oben erstellten *On Site ROOMS* Benutzer.   