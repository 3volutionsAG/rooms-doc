---
title: "Synchronisation testen"
linkTitle: "Synchronisation testen"
weight: 45
description: "Prüfen, ob die Synchronisation grundsätzlich funktioniert."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Der klassische Synchronisationstest ist besonders für **EWS-basierte** Modi (`EWS1`, `EWS2`, `O365`) hilfreich.

Bei `Microsoft365` prüfen Sie zusätzlich immer auch:

- Consent-Status (`Delegated`)
- Graph-Webhooks
- Hintergrundverarbeitung / `RoomsPro.Worker`
{{% /alert %}}

Nachdem alles eingerichtet ist, kann die Synchronisation wie folgt überprüft werden:

`Personen` → `Person` → `Ansicht` → `Synchronisationstest`

Ein erfolgreicher Synchronisationstest sieht wie folgt aus:

{{< imgproc sync-test Resize "1024x" >}}{{< /imgproc >}}

## Interpretation

- **Kein Test grün** → grundsätzliches Verbindungs- oder Konfigurationsproblem
- **Nur die ersten zwei Tests grün** → typischerweise Subscription-Problem im EWS-Pfad
- **Alle Tests grün** → Grundverbindung funktioniert

Typische weitere Prüfpunkte:

- Ereignisanzeige / Logging
- `RoomsPro.Worker` bzw. laufende Dienste
- Datenbanktabellen `CalendarSubscription` und Logging
- primäre SMTP-Adresse auf der Person

Wenn nur die ersten zwei Tests grün sind, prüfen Sie zusätzlich die Seite [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}).

Ein häufiges Problem ist, dass die **E-Mail-Adresse** der Person nicht auf die **primäre SMTP-Adresse** gesetzt ist.
