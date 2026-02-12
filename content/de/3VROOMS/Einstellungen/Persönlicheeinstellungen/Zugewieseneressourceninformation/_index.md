---
title: "Zugewiesene Ressourcen"
linkTitle: "Zugewiesene Ressourcen"
weight: 6
description: 'Im Bereich *Zugewiesene Ressourcen* weisen Sie einer Person im Profil Ressourcen fix zu (Langzeitbuchungen). Bereits zugewiesene Ressourcen können einzeln oder via Mehrfachselektion auch wieder entfernt werden.'
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für die Zuweisung von Ressourcen benötigen Sie:

- das Recht **„Darf zugewiesene Ressourcen verwalten"**

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).

Zusätzlich müssen folgende Bedingungen erfüllt sein:

- Sie besitzen definitive Buchungsrechte für die entsprechende Ressource.
- Die Ressource ist noch keiner (anderen) Person zugewiesen.
- Die Ressource verfügt über keine Reservationen in der Zukunft.

{{% /alert %}}

{{% alert title="Hinweis: Spezielle Buchungsrechte" color="note" %}}
**Auswirkung auf Öffnungszeiten und Feiertage:**

Das Erstellungs-Verhalten der Buchungen hängt von den Rechten der zugewiesenen Person ab:

- Hat die Person das Recht **„Kann ausserhalb von Öffnungszeiten buchen"**, werden Öffnungszeiten nicht berücksichtigt.
- Hat die Person das Recht **„Darf Reservationen an Feiertagen buchen"**, werden Feiertage nicht berücksichtigt.
{{% /alert %}}

Im Bereich **Zugewiesene Ressourcen** weisen Sie einer Person im Profil Ressourcen fix zu (Langzeitbuchungen). Bereits zugewiesene Ressourcen können einzeln oder via Mehrfachselektion auch wieder entfernt werden.


## Ressourcen verwalten

### 1) Ressourcen aus der Listenansicht zuweisen

Wählen Sie eine Ressource aus der Liste aus und betätigen Sie die Checkbox am Anfang der Ressource, um diese zuzuweisen.

{{< imgproc Zugewiesene_Ressourcen_Listenansicht_speichern Resize "960x" >}}
Geänderte Ressourcen speichern
{{< /imgproc >}}

### 2) Ressource hinzufügen

Klicken Sie auf den Button **Ressourcen hinzufügen**, um eine neue Ressource einer Mitarbeiter:in zuzuordnen.

{{< imgproc Zugewiesene_Ressourcen_speichern Resize "960x" >}}
Eine Ressource hinzufügen über den Button "Ressource hinzufügen"
{{< /imgproc >}}

Es öffnet sich ein neues Feld. In diesem wählen Sie die entsprechende Ressource aus, indem Sie die Checkbox am Anfang der Liste betätigen. Über das Stift-Icon können Sie die Ressource ebenfalls bearbeiten.

{{< imgproc Zugewiesene_Ressource_hinzufügen Resize "960x" >}}
Ressource neu hinzufügen
{{< /imgproc >}}

### 3) Zugewiesene Ressourcen Information einsehen

Im View-Modus unter dem Menüpunkt **Einstellungen → Persönliche Einstellungen** sehen Sie eine Zusammenfassung der Informationen zur Person und den zugewiesenen Ressourcen.

{{< imgproc Zugewiesene_Ressourcen_Information Resize "960x" >}}
Informationen zur Person und zugewiesenen Ressourcen einsehen
{{< /imgproc >}}

## Ressourcen freigeben

### Freigabe in einem Kalender bearbeiten

Im View-Modus der Person können Sie die fixen Ressourcen für selbst definierte Zeiträume freigeben. Klicken Sie auf das Icon **Freigabe bearbeiten**, um ein modales Popup zu öffnen.

{{< imgproc Zugewiesene_Ressourcen_Info_bearbeiten Resize "960x" >}}
Ressourcen "Freigabe bearbeiten" Button
{{< /imgproc >}}

Weisse Felder im Kalender sind Tage, an denen die Ressource freigegeben ist, und blaue sind gebuchte Tage. Klicken Sie auf ein Datum, ermöglicht dies das Buchen oder Freigeben der Ressource für diesen Tag. Tage in der Vergangenheit werden ausgegraut und können nicht mehr verändert werden.

{{< imgproc Zugewiesene_Ressource_bearbeiten_freigeben Resize "960x" >}}
Ressourcen Freigabe bearbeiten
{{< /imgproc >}}

### Serienfunktionalität nutzen

Mittels Serienfunktionalität können Sie Ressourcen individuell in einem selbst definierten Intervall freigeben oder buchen (z.B. jeden Freitag oder immer den ersten Montag im Monat). Wählen Sie die gewünschte Aktion:

- **Freigeben** = Ressource wird freigegeben
- **Buchen** = Ressource wird reserviert
- **Zukünftig freigeben** = Ressource wird bei der fortlaufenden Buchung durch das System an den gewünschten Tagen zukünftig auch immer freigegeben
