---
title: "Gruppenmailboxen und freigegebene Postfächer"
linkTitle: "Gruppenmailboxen und Freigaben"
weight: 30
description: "Verhalten des quickROOMS Add-Ins bei Gruppenmailboxen, freigegebenen Postfächern und delegiertem Zugriff in Outlook"
---

## Übersicht

Das quickROOMS Add-In liest den Organisator und den Mailbox-Kontext des geöffneten Outlook-Termins aus.
**Outlook bestimmt, wer als Ersteller und Organisator eines Termins gilt.** quickROOMS verwendet den ermittelten Outlook-Organisator für die ROOMS-Buchung.

### Begriffe

{{< bootstrap-table "table table-striped" >}}
| Begriff     | Beschreibung                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------|
| **Ersteller (Creator)** | Die Person, die den Termin technisch erstellt. Wird von Outlook anhand des angemeldeten Benutzers gesetzt. |
| **Organisator**         | Der Besitzer des Kalenders, in dem der Termin erstellt wird.                                     |
{{< /bootstrap-table >}}

## Szenarien

### 1. Eigener Kalender

Der Benutzer erstellt einen Termin in seinem eigenen Kalender.

- **Ersteller** = angemeldeter Benutzer
- **Organisator** = angemeldeter Benutzer (identisch)
- **Add-In-Verhalten**: Normal, keine Einschränkungen

### 2. Freigegebener Kalender (Delegated Access)

Der Benutzer hat delegierten Zugriff auf den Kalender einer anderen Person oder Gruppenmailbox.
Das Postfach erscheint **unter dem persönlichen Konto** des Benutzers.

- **Ersteller** = angemeldeter Benutzer
- **Organisator** = Besitzer des freigegebenen Kalenders (z.B. die Gruppenmailbox)
- **Add-In-Verhalten**: Das Add-In erkennt den freigegebenen Kontext über die
  [Outlook Shared Folders API](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/delegate-access)
  und setzt den Organisator korrekt.

**Voraussetzungen:**
- Outlook API Version 1.8 oder höher (Requirement Set `Mailbox 1.8`)
- Der Benutzer benötigt mindestens **Schreibberechtigung** auf dem freigegebenen Kalender

### 3. Als separates Konto hinzugefügte Gruppenmailbox

Die Gruppenmailbox ist in Outlook als **eigenständiges Konto mit eigenen Anmeldedaten** eingerichtet.

- **Ersteller** = das Konto, in dessen Kalender der Termin erstellt wird
- **Organisator** = die Gruppenmailbox
- **Add-In-Verhalten**: Das Add-In liest den Organisator aus dem geöffneten Outlook-Termin und verwendet die dazugehörige ROOMS-Person als Organisator der Buchung.

**Voraussetzungen:**
- Bei Office.js: Outlook API Version 1.8 oder höher (Requirement Set `Mailbox 1.8`)
- Die Gruppenmailbox ist mit derselben E-Mail-Adresse als Person in ROOMS hinterlegt

{{% alert title="Organisator nicht gefunden" color="warning" %}}
Kann die E-Mail-Adresse des Outlook-Organisators keiner Person in ROOMS zugeordnet werden, wird die Buchung nicht fortgesetzt. Prüfen Sie die E-Mail-Adresse der Gruppenmailbox in ROOMS.
{{% /alert %}}

## Voraussetzungen für Gruppenmailboxen prüfen

Beide Outlook-Varianten werden unterstützt:

- **Delegierter Zugriff:** Der Benutzer benötigt mindestens Schreibberechtigung auf dem freigegebenen Kalender. Die Gruppenmailbox muss als Person in ROOMS hinterlegt sein.
- **Separates Konto:** Die Gruppenmailbox muss mit ihrer Outlook-E-Mail-Adresse als Person in ROOMS hinterlegt sein. Bei Office.js ist mindestens Requirement Set `Mailbox 1.8` erforderlich.

Das Add-In setzt den Outlook-Organisator als Organisator der ROOMS-Buchung. Dadurch kann ROOMS die Buchung bei einer späteren Synchronisation dem richtigen Kalender zuordnen.

## Technischer Hintergrund

Für die Zuordnung verwendet das Add-In folgende Informationen:

{{< bootstrap-table "table table-striped" >}}
| Information | Zweck |
|-------------|-------|
| Angemeldetes ROOMS-Benutzerprofil | Persönlichen Kalender erkennen |
| `item.organizer.getAsync()` | Organisator des Outlook-Termins auslesen ([Dokumentation](https://learn.microsoft.com/en-us/javascript/api/outlook/office.organizer)) |
| `item.getSharedPropertiesAsync()` | Delegierungskontext und Berechtigungen auslesen ([Dokumentation](https://learn.microsoft.com/en-us/javascript/api/outlook/office.sharedproperties)) |
{{< /bootstrap-table >}}

Bei einem persönlichen Kalender stimmen Outlook-Organisator und angemeldeter ROOMS-Benutzer überein. Bei freigegebenen Kalendern und separat hinzugefügten Gruppenmailboxen löst das Add-In stattdessen den Outlook-Organisator über dessen E-Mail-Adresse in ROOMS auf. Bei delegiertem Zugriff prüft das Add-In zusätzlich die von Outlook gemeldete Schreibberechtigung.
