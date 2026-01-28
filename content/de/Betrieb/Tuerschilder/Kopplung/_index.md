---
title: "Kopplung"
linkTitle: "Kopplung"
weight: 3
description: 'Türschild mit einer Ressource koppeln und entkoppeln'
---

## Voraussetzungen

Bevor Sie ein Türschild mit einer Ressource koppeln können, müssen folgende Voraussetzungen erfüllt sein:

1. **System Person konfiguriert**: Eine System Person mit den notwendigen Rechten muss in ROOMS hinterlegt sein.  
   Siehe [Konfiguration der System Person]({{< ref "betrieb/tuerschilder/tuerschildbenutzer" >}})

2. **Ressource vorbereitet**: Das Türschild muss für die entsprechende Ressource aktiviert sein.  
   Siehe [Konfiguration Ressource]({{< ref "betrieb/tuerschilder/konfiguratonressource" >}})

3. **Benutzer mit Berechtigung**: Die Person welche die Kopplung durchführt benötigt das Recht [Darf Ressource bearbeiten]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/#standortabhängige-ressourcen-rechte" >}}).

---

## Kopplung am Türschild

### Schritt 1: Zum Hauptmenü navigieren

Auf dem Home Screen des Türschildes klicken Sie auf **zum Hauptmenü**.

{{< imgproc pairing01 Resize "960x" >}}
Home Screen - Navigation zum Hauptmenü
{{< /imgproc >}}

### Schritt 2: Administration öffnen

Im Dashboard wählen Sie **Administration**.

{{< imgproc pairing02 Resize "960x" >}}
Dashboard - Administration auswählen
{{< /imgproc >}}

### Schritt 3: Authentifizierung

Es stehen zwei Authentifizierungsmethoden zur Verfügung:

- **Option 1**: Zutritt mit Pin-Code  
- **Option 2**: Zutritt mit scannen vom QR-Code

Geben Sie Ihren [persönlichen PIN]({{< relref "3VROOMS/Einstellungen/Persönlicheeinstellungen/Logons/#pin" >}}) ein.

{{< imgproc pairing03 Resize "960x" >}}
Authentifizierung mit PIN-Code oder QR-Code
{{< /imgproc >}}

### Schritt 4: Ressource koppeln oder entkoppeln

Nach erfolgreicher Authentifizierung sehen Sie eine Liste aller verfügbaren Ressourcen, gruppiert nach Standort:

- **(1) Pairen**: Klicken Sie auf diesen Button um eine neue Ressource mit dem Türschild zu koppeln
- **(2) Unpair**: Bei bereits gekoppelten Ressourcen erscheint dieser Button um die Kopplung aufzuheben

{{< imgproc pairing04 Resize "960x" >}}
Ressourcenliste mit Pairen und Unpair Buttons
{{< /imgproc >}}

### Schritt 5: Kopplung bestätigt

Nach erfolgreicher Kopplung erscheint eine Bestätigungsmeldung. Die Ressource ist nun mit dem Türschild verbunden.

{{< imgproc pairing05 Resize "960x" >}}
Erfolgreiche Kopplung bestätigt
{{< /imgproc >}}

---

## Reset via URL (Philips Türschilder)

{{% alert title="Hinweis" color="info" %}}
Diese Methode ist nur für Philips Türschilder geeignet und wird verwendet, wenn das Türschild im Read-Only Modus ist.
{{% /alert %}}

### Ausgangslage

Wenn ein Türschild readonly ist und neu gekoppelt werden muss, gibt es zwei Möglichkeiten:
- Via ROOMS auf der entsprechenden Ressource die Read Only Checkbox deaktivieren
- Direkt am Türschild gemäss nachfolgender Anleitung

### Anleitung

1. **In das Admin Menü wechseln**
   - Bei Philips: Ein-/Aus-Schalter an der Seite des Bildschirms drücken, und direkt danach die Leiser-Taste
   - Es erscheint eine PIN-Eingabe auf dem Bildschirm

2. **Via Admin Menü in den Browser wechseln**

{{< imgproc step1 Resize "960x" >}}
Browser öffnen
{{< /imgproc >}}

3. **Compose aufrufen**

{{< imgproc step2 Resize "960x" >}}
Compose aufrufen
{{< /imgproc >}}
 
4. **Reset URL eingeben**

   In einem freien Slot die onsiteROOMS URL mit dem Parameter `/#/reset` erfassen.  
   Dieser Parameter erzwingt die Entkopplung der aktuellen Ressource.
   
   `<kundenbezeichnung>.onsite.<rooms domain>/#/reset`
   
   Beispiel: `microfast.onsite.roomspro.ch/#/reset`

{{< imgproc step3 Resize "960x" >}}
Reset URL in einem freien Slot erfassen
{{< /imgproc >}}

5. **Reset durchführen**
   - Die Adresse aufrufen - nun ist kein Raum mehr gekoppelt

6. **Neu koppeln**
   - In das Compose Menü zurückkehren
   - Die onsiteROOMS URL aufrufen: `<kundenbezeichnung>.onsite.<rooms domain>`  
     Beispiel: `microfast.onsite.roomspro.ch`

7. **Zum Hauptmenü navigieren**

{{< imgproc step4 Resize "960x" >}}
Home Screen mit Button zum Hauptmenü
{{< /imgproc >}}

8. **Ressource koppeln**
   - Administration aufrufen
   - Mit dem persönlichen PIN anmelden
   - Die gewünschte Ressource koppeln (siehe oben)
