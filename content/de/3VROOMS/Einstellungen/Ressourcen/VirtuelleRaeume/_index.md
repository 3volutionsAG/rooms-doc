---
title: "Virtuelle Räume"
linkTitle: "Virtuelle Räume"
weight: 1
date: 2020-06-30
description: 'Die virtuellen Räume (Teile eines teilbaren Raumes) werden im Sidepanel in der Raumbeschreibung visualisiert.'
---

## Virtuelle Räume

Nur die Ressource _Raum_ kann als teilbarer Raum konfiguriert werden.

### Voraussetzungen

Der Tab _virtuelle Räume_ ist verfügbar, wenn alle folgenden Voraussetzungen erfüllt sind:

- Die Ressource ist vom Typ _Raum_.
- Der Raum ist nicht selbst als Teilraum eines virtuellen Raums zugeordnet.
- Als Benutzer:in verfügen Sie über beide globalen Rechte _Darf Ressourcetyp Raum verwalten_ und _Darf virtuelle Räume editieren_.

{{% alert color="warning" title="Standort und Aktiv-Status zuerst speichern" %}}
Legen Sie den _Standort_ und den Aktiv-Status über _Ist aktiv_ fest und wählen Sie _Speichern_, bevor Sie Teilräume hinzufügen. Die Auswahlliste verwendet die gespeicherten Werte, nicht die noch ungespeicherten Änderungen im Formular.

Ein neuer Raum ist standardmässig inaktiv. Ohne vorheriges Speichern werden deshalb nur inaktive Räume angeboten, auch wenn Sie _Ist aktiv_ im Formular bereits aktiviert haben.
{{% /alert %}}

### Empfohlene Reihenfolge

1. Erfassen Sie die Ressource vom Typ _Raum_.
2. Wählen Sie den _Standort_.
3. Setzen Sie _Ist aktiv_ auf den gewünschten Aktiv-Status.
4. Wählen Sie _Speichern_.
5. Öffnen Sie den Tab _virtuelle Räume_.
6. Wählen Sie _Hinzufügen_, um Teilräume auszuwählen.

### Teilräume verwalten

Im Tab _virtuelle Räume_ sehen Sie die zugeordneten Teilräume. Über _Hinzufügen_ können Sie einen oder mehrere Teilräume hinzufügen. Die Auswahlliste enthält nur Räume, die:

- am selben gespeicherten _Standort_ liegen,
- denselben gespeicherten Aktiv-Status bei _Ist aktiv_ haben,
- selbst keine virtuellen Räume sind, also keine eigenen Teilräume haben,
- diesem virtuellen Raum noch nicht zugeordnet sind.

Bei einem aktiven virtuellen Raum werden nur aktive Räume angeboten, bei einem inaktiven nur inaktive.

Um Teilräume zu entfernen, aktivieren Sie deren Checkboxen und wählen Sie _Entfernen_.

Wenn Sie später den _Standort_ oder _Ist aktiv_ des virtuellen Raums ändern und speichern, übernehmen alle zugeordneten Teilräume automatisch die geänderten Werte.

### Liste beim Hinzufügen leer?

Prüfen Sie folgende Punkte:

- Haben Sie den _Standort_ und _Ist aktiv_ des virtuellen Raums gespeichert?
- Liegen die gewünschten Teilräume am selben gespeicherten _Standort_?
- Haben die gewünschten Teilräume denselben gespeicherten Aktiv-Status bei _Ist aktiv_?
- Sind die gewünschten Räume bereits selbst virtuelle Räume mit eigenen Teilräumen?
- Sind die gewünschten Teilräume diesem virtuellen Raum bereits zugeordnet?

{{< imgproc Virtuelle_Räume Resize "960x" >}}
Virtuelle Räume
{{< /imgproc >}}
