---
title: "Buchungshinweise"
linkTitle: "Buchungshinweise"
weight: 9
description: "Mit Buchungshinweisen steuern Sie zentrale Hinweise, die nur in der Reservation angezeigt werden."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für das Erstellen/Bearbeiten von Buchungshinweisen benötigen Sie:

- das Recht **„Darf Buchungshinweise verwalten“**

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

Unter **Buchungshinweise** verwalten Sie Meldungen, die Benutzern **in der Reservation** angezeigt werden. Eine Meldung kann nach **Stufe**, **Standorten**, **Ressourcen** und **Tagen vor Reservationsbeginn** gesteuert werden.


{{< imgproc messages_schnellbuchung Resize "700x" >}}
Beispiel für Buchungshinweise auf Schnellbuchung
{{< /imgproc >}}

{{< imgproc messages_edit Resize "960x" >}}
Beispiel für Buchungshinweise auf Bearbeitungs-Maske
{{< /imgproc >}}

{{< imgproc messages_addin Resize "300x" >}}
Beispiel für Buchungshinweise im Outlook Add-In
{{< /imgproc >}}
## Wo finde ich die Buchungshinweise?

Sie finden die Administration unter:

`Einstellungen` → `Erweiterte Basisdaten für Ressourcen` → `Buchungshinweise`

## Begriffe kurz erklärt

- **Text**: Der Text, der den Benutzern angezeigt wird.
- **Stufe**: Legt die Wichtigkeit/Anzeigeart fest:
  - **Error** (rot)
  - **Warning** (gelb)
  - **Info** (blau)
- **Standorte**: Liste der Standorte, für die die Meldung angezeigt wird.
- **Ressourcen**: Liste der Ressourcen, für die die Meldung angezeigt wird.
- **Tage vor Reservationsbeginn**: Die Meldung wird nur angezeigt, wenn der Reservationsbeginn in der angegebenen Anzahl Tage liegt. Wenn leer, wird die Meldung immer angezeigt.

## Buchungshinweis einrichten

### 1) Buchungshinweis anlegen

1. Öffnen Sie `Buchungshinweise`.
2. Erstellen Sie eine neue Meldung.
3. Pflegen Sie mindestens den **Text** und die **Stufe**.
4. Hinterlegen Sie optional **Standorte**, **Ressourcen** und **Tage vor Reservationsbeginn**.
5. Speichern Sie.

## Wichtige Regeln

### Erforderliche Felder

Für einen gültigen Meldungs-Eintrag müssen folgende Felder ausgefüllt sein:

- **Text**
- **Stufe**

### Anzeigezeitpunkt

- Ist **Tage vor Reservationsbeginn** gesetzt, wird die Meldung nur im entsprechenden Vorlauf angezeigt.
- Ist **Tage vor Reservationsbeginn** leer, wird die Meldung immer angezeigt.
- Meldungen werden ausschliesslich in der **Reservation** angezeigt.
- Eine Meldung wird in einer Reservation nur angezeigt, wenn die Ressource dieser Reservation entweder zu einem der konfigurierten **Standorte** gehört oder in den konfigurierten **Ressourcen** enthalten ist.
- Treffen mehrere Buchungshinweise gleichzeitig zu, werden diese untereinander aufgelistet.

## Hilfreiche Links

- [`Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/) – Wie Sie die Berechtigung „Darf Buchungshinweise verwalten“ vergeben.
