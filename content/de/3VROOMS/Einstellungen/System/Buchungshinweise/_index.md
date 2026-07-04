---
title: "Buchungshinweise"
linkTitle: "Buchungshinweise"
weight: 55
description: "Buchungshinweise informieren Benutzer bei passenden Buchungen über wichtige organisatorische oder betriebliche Hinweise."
---

**Buchungshinweise** sind Meldungen, die ROOMS bei passenden Buchungen anzeigt. Sie eignen sich für Hinweise, die abhängig vom Standort, von der Ressource oder vom Zeitraum vor Reservationsbeginn erscheinen sollen.

Typische Beispiele:

- organisatorische Hinweise kurz vor einem Anlass
- betriebliche Hinweise für bestimmte Räume oder Standorte
- Erinnerungen, die bei der Buchung oder Bearbeitung sichtbar sein sollen

## Voraussetzung

Für die Verwaltung von Buchungshinweisen benötigt der Benutzer die entsprechenden Administrationsrechte für die Konfiguration. Die konkrete Sichtbarkeit hängt von der Rollen- und Navigationskonfiguration der Installation ab.

## Wo finde ich Buchungshinweise?

Sie finden die Verwaltung unter:

`Einstellungen` → `System` → `Buchungshinweise`

Je nach Installation kann der Menüpunkt anders gruppiert oder nur für bestimmte Rollen sichtbar sein.

## Wozu gibt es Buchungshinweise?

Buchungshinweise helfen, wichtige Informationen direkt dort anzuzeigen, wo Benutzer mit Buchungen arbeiten. Dadurch müssen solche Hinweise nicht separat per E-Mail oder über externe Prozesse kommuniziert werden.

Buchungshinweise können in folgenden Bereichen erscheinen:

- beim Erstellen oder Bearbeiten einer Buchung
- in Buchungsdetails
- in Kalender- und Reservationsansichten
- im Sidepanel, wenn für die betroffene Buchung passende Hinweise vorhanden sind

## Felder

{{< bootstrap-table "table table-striped" >}}
| Feld | Bedeutung |
|------|-----------|
| Bezeichnung | Interner Name des Buchungshinweises. |
| Text | Inhalt, der dem Benutzer angezeigt wird. Der Text darf nicht leer sein. |
| Stufe | Gewichtung des Hinweises, zum Beispiel Information, Warnung oder Fehler. Die Stufe beeinflusst die Darstellung. |
| Standorte | Standorte, für die der Hinweis gelten soll. |
| Ressourcen | Ressourcen, für die der Hinweis gelten soll. |
| Tage vor Reservationsbeginn | Optionaler Wert, ab wie vielen Tagen vor dem Reservationsbeginn der Hinweis angezeigt wird. Leer bedeutet: der Hinweis wird immer angezeigt, wenn Standort oder Ressource passen. |
{{< /bootstrap-table >}}

## Anzeige und Filterung

Ein Buchungshinweis wird angezeigt, wenn die Bedingungen zur Buchung passen.

Relevant sind insbesondere:

- Standort der Buchung
- gebuchte Ressource
- Zeitraum bis zum Reservationsbeginn
- aktive Sprache beziehungsweise erfasster Hinweistext

{{% alert title="Hinweis" color="info" %}}
Ein Buchungshinweis ersetzt keine automatische Notifikation. Er wird in ROOMS angezeigt, löst aber nicht automatisch E-Mails oder andere Benachrichtigungen aus.
{{% /alert %}}

## Löschen

Beim Löschen fragt ROOMS nach einer Bestätigung. Löschen Sie einen Buchungshinweis nur, wenn er nicht mehr benötigt wird. Bereits angezeigte Informationen werden dadurch nicht als Historieneintrag auf bestehenden Buchungen gespeichert.
