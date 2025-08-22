---
title: "Philips Türschild Reset"
linkTitle: "Philips Türschild Reset"
weight: 1
description: Philips Türschild Reset
---

## Ausgangslage
Wenn ein Türschild readonly ist und neu gekoppelt werden muss, dann sind folgende Schritte möglich:
- Via Rooms auf der entsprechenden Ressource die Read Only Checkboxe deaktivieren
- Direkt am Türschild gemäss nachfolgender Anleitung

## Anleitung
1. In das Admin Menü wechseln
   1. Bei Philips: Ein-/Aus-Schalter an der Seite des Bildschirms drücken, und direkt danach die Leiser-Taste. Dadurch sollte eine Pineingabe auf dem Bildschirm erscheinen
2. Via Admin Menü in den Browser wechseln

{{< imgproc step1 Resize "960x" >}}
Browser öffnen
{{< /imgproc >}}

3. Danach – Compose

{{< imgproc step2 Resize "960x" >}}
Compose aufrufen
{{< /imgproc >}}
 
4. Zuerst RESET der aktuellen zuweisung (Da readonly)
   1. In einem freien Slot folgende Adresse erfassen: `<kundenbezeichnung>`*.onsite.*`<rooms domain = roomspro.ch oder 3vrooms.app>`*/#/reset*
      1. Beispiel: *microfast.onsite.roomspro.ch/#/reset*

{{< imgproc step3 Resize "960x" >}}
Reset URL in einem freien Slot erfassen
{{< /imgproc >}}

5. die Adresse danach aufrufen - Nun ist kein Raum mehr gekoppelt
6. In das Compose Menü zurück kehren und die ROOMS url (`<kundenbezeichnung>`*.book.*`<rooms domain -> roomspro.ch oder 3vrooms.app>`) aufrufen
   1. Beispiel: *microfast.book.roomspro.ch*
7. Danach "zum Hauptmenü" navigieren

{{< imgproc step4 Resize "960x" >}}
Home Screen mit Button zum Hauptmenü
{{< /imgproc >}}

8. Administration aufrufen und mit dem persönlichen [Pin]({{< relref "3VROOMS/Einstellungen/Persönlicheeinstellungen/Logons/#pin" >}}) welcher auf der Person hinterlegt ist anmelden. Wichtig die Person muss in einere Rolle sein welche das Recht [Darf Ressource bearbeiten]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/#standortabhängige-ressourcen-rechte" >}}) hinterlegt hat.
9. Die gewünschte Ressource koppeln
