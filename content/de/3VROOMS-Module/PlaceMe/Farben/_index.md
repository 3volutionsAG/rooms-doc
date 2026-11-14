---
title: "Buchungs- und Ressourcenfarben verwalten"
linkTitle: "Farben"
weight: 10
description: 'In PlaceMe Farbregeln erstellen, ihre Reihenfolge festlegen und Speicherfehler behandeln'
---

Mit Farbregeln kennzeichnen Sie Buchungen und Ressourcen nach den für Ihre Organisation wichtigen Kriterien. Sie verwalten die Regeln zentral in PlaceMe. Die klassische ROOMS-Oberfläche verwendet dieselben Regeln.

## Voraussetzung

Sie sind in PlaceMe angemeldet und besitzen beide globalen Rechte:

- **Darf Sektion 'Einstellungen' nutzen** (105).
- **Darf Konfiguration System verwalten** (26).

Die Administration vergibt diese Rechte unter [Rollen und Rechte]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}}).

## Wo finde ich die Farbregeln?

Öffnen Sie in PlaceMe **Einstellungen → Farben** und wählen Sie einen der beiden Bereiche:

{{< bootstrap-table "table table-striped" >}}
| Bereich | Verwendung | Mögliche Bedingungen |
| --- | --- | --- |
| **Buchungsfarben** | Bestimmt die Farbe einer Buchung, beispielsweise im Scheduling-Kalender und im klassischen Kalender. | **Buchungsstatus**, **Buchungsherkunft**, **Buchungsklassifikation** und verfügbare Ressourcengliederungen. |
| **Ressourcenfarben** | Kennzeichnet die Ressource, beispielsweise neben ihrem Namen im klassischen Kalender oder als Fläche auf dem Plan. Die Farbe ist unabhängig von einer einzelnen Buchung. | **Ressource** und verfügbare Ressourcengliederungen. |
{{< /bootstrap-table >}}

Beide Bereiche haben eine eigene Regelliste. Eine Ressourcenfarbregel legt nicht die Farbe der Buchungsblöcke fest.

## Welche Regel bestimmt die Farbe?

ROOMS prüft die **aktiven Regeln von oben nach unten**. Die erste Regel, deren Geltungsbereich und Bedingungen zutreffen, bestimmt die Farbe. Weitere passende Regeln werden nicht hinzugefügt oder mit ihr gemischt.

- Mit **Alle Ressourcen** gilt die Regel unabhängig von Ressource und Standort.
- Mit **Ausgewählte Ressourcen und Standorte** begrenzen Sie den Geltungsbereich auf die ausgewählten Ressourcen oder Standortzweige. Ein ausgewählter Standort schliesst seine Unterstandorte ein.
- Bedingungen mit **und** müssen gemeinsam zutreffen. Mit **oder** beginnen Sie eine alternative Bedingungsgruppe. Eine vollständig erfüllte Gruppe genügt.
- Eine Regel ohne Bedingungen gilt immer innerhalb ihres Geltungsbereichs. Ordnen Sie spezifische Ausnahmen oberhalb einer solchen allgemeinen Regel an.
- Ohne passende aktive Regel verwendet die jeweilige Ansicht ihre Standarddarstellung. Diese kann sich zwischen Kalender, Plan und anderen Anzeigen unterscheiden.

**Beispiel:** Soll eine bestimmte Buchungsklassifikation die übliche Statusfarbe übersteuern, platzieren Sie deren Regel oberhalb der allgemeineren Regeln für den Buchungsstatus. Unterhalb einer bereits passenden Statusregel kommt sie nicht zum Zug.

## Eine Farbregel erstellen oder ändern

{{% alert title="Zentrale Änderung mit automatischer Speicherung" color="warning" %}}
Farbregeln gelten für die gesamte Installation, nicht nur für Ihre persönliche Ansicht. Vollständige Änderungen werden automatisch gespeichert und bei der Auswertung auch auf bestehende Buchungen angewendet. Ändern Sie Regeln deshalb abgestimmt mit den betroffenen Benutzenden. Eine Farbe ändert weder Buchungsstatus noch Verfügbarkeit oder Berechtigungen.
{{% /alert %}}

1. Öffnen Sie **Buchungsfarben** oder **Ressourcenfarben** und wählen Sie **Regel hinzufügen**. Für eine Änderung bearbeiten Sie die vorhandene Regel direkt.
2. Neue Regeln sind **Aktiv**. Schalten Sie die Regel auf **Inaktiv**, wenn sie während der Bearbeitung noch nicht angewendet werden soll.
3. Wählen Sie bei **Für** den Geltungsbereich und bei **verwende** die gewünschte Farbe.
4. Wählen Sie unter **Wenn** das Bedingungsfeld, den Vergleich und gegebenenfalls einen Vergleichswert. Ergänzen Sie bei Bedarf Bedingungen mit **und** oder **oder**.
5. Warten Sie auf **Gespeichert**. Unvollständige Bedingungen werden nicht gespeichert. Bereits gespeicherte Regeln können Sie am Griff **↕** ziehen oder mit den Pfeiltasten verschieben. Ordnen Sie Ausnahmen oberhalb allgemeiner Regeln an und prüfen Sie erneut den Speicherstatus.
6. Aktivieren Sie die Regel, sobald Geltungsbereich, Bedingungen, Farbe und Reihenfolge stimmen. Warten Sie auf **Gespeichert**.
7. Laden Sie die betroffene Kalender- oder Planansicht neu und prüfen Sie eine passende Buchung oder Ressource. Kontrollieren Sie bei einer Ausnahme auch einen Fall, auf den sie nicht zutreffen soll.

### Deaktivieren oder löschen

**Inaktiv** erhält die Regel, berücksichtigt sie aber nicht bei der Farbauswertung. So können Sie ihre Wirkung vorübergehend aussetzen.

Mit dem **×** einer Bedingung entfernen Sie diese Bedingung. Ist es die letzte Bedingung, dient das **×** zum Löschen der ganzen Regel. Bei einer Regel ohne Bedingungen steht dafür ein eigenes **×** in der Kopfzeile zur Verfügung. Das endgültige Löschen einer gespeicherten Regel bestätigen Sie mit **Regel löschen**. Dabei gehen auch ihre ungespeicherten Änderungen verloren. Anschliessend kann eine nachfolgende Regel oder die Standarddarstellung die Farbe bestimmen.

## Speicherstatus und Konflikte

{{< bootstrap-table "table table-striped" >}}
| Anzeige oder Aktion | Bedeutung und nächster Schritt |
| --- | --- |
| **Speichert …** | Die Änderung wird übertragen. Warten Sie auf das Ergebnis. |
| **Nicht gespeichert** | Es bestehen noch offene Änderungen. Vervollständigen Sie die Bedingungen und beachten Sie allfällige Fehlermeldungen. |
| **Gespeichert** | Es bestehen keine offenen Änderungen im Editor. |
| **Erneut versuchen** | Eine Änderung ist fehlgeschlagen. Prüfen Sie die Fehlermeldung und versuchen Sie das Speichern erneut. |
| **Reihenfolge erneut speichern** | Die geänderte Reihenfolge konnte nicht gespeichert werden. Wiederholen Sie diese Aktion und prüfen Sie das Ergebnis. |
| **Konflikt** / **Aktuellen Stand laden** | Die Regeln wurden zwischenzeitlich anderweitig geändert. Notieren Sie Ihre beabsichtigten Änderungen, laden Sie den aktuellen Stand und bestätigen Sie das Verwerfen der ungespeicherten Änderungen nur, wenn Sie diese entbehren können. Prüfen Sie danach den aktuellen Stand und erfassen Sie nötige Änderungen erneut. |
{{< /bootstrap-table >}}

Beim Wechsel innerhalb von PlaceMe versucht der Editor, offene gültige Änderungen zu speichern. Bleiben ungespeicherte Änderungen zurück, entscheiden Sie zwischen **Weiter bearbeiten** und **Änderungen verwerfen**. Das Verwerfen nimmt bereits erfolgreich gespeicherte Änderungen nicht zurück.

Warten Sie vor dem Neuladen oder Schliessen des Browser-Tabs auf **Gespeichert**. Bei offenen Änderungen kann eine Browserwarnung erscheinen. Das bestätigte Verlassen löst keinen abschliessenden Speichervorgang aus.

## Farben in anderen Ansichten verstehen

Die verfügbaren Buchungsinformationen und Ihre Berechtigungen beeinflussen die Auswertung. Regeln für Buchungsklassifikationen, Buchungsherkunft und Ressourcengliederungen können deshalb je nach betrachtender Person unterschiedlich wirken. Farbregeln erteilen keine zusätzlichen Leserechte.

Automatisch erzeugte Statussymbole werten nur den Buchungsstatus aus. Buchungsbenachrichtigungen können die regelbasierte Farbe verwenden, sofern ihre Vorlage diese einbindet. Dabei stehen Buchungsstatus, Ressource und Standort zur Verfügung, nicht aber Buchungsklassifikation, Buchungsherkunft oder Ressourcengliederungen. Erwarten Sie deshalb nicht für jede Regel dieselbe Farbe in Kalender, Statussymbol und E-Mail.

Die persönliche Organisatorfarbe im klassischen Kalender ist eine separate Kennzeichnung. Die Bedeutung von Buchungsfarbe, Vorlauf- und Nachlaufdarstellung sowie Planfarben ist unter [Farbdarstellung]({{< relref "3VROOMS/Kalender/Kalenderansicht/Kalenderbereich/Farbdarstellung/_index.md" >}}) und [Planstatus]({{< relref "3VROOMS/Plan/Planstatus/_index.md" >}}) beschrieben.
