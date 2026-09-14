---
title: "Schaltflächen"
linkTitle: "Schaltflächen"
weight: 3
description: 'Am unteren Rand des Anzeigenbereichs befinden sich Schaltflächen zur Verwaltung der Ressourcen.'
---
{{< imgproc List_RES_Anz_Schalt Resize "960x" >}}
Schaltflächen zur Verwaltung von Ressourcen
{{< /imgproc >}}

## Entfernen

Mit **Entfernen** löschen Sie Ressourcen endgültig. Verwenden Sie diese Funktion nur, wenn die Ressource und ihre Buchungsdaten nicht mehr benötigt werden.

{{% alert title="Ressourcen nach Möglichkeit deaktivieren" color="warning" %}}
Beim endgültigen Löschen werden die Buchungen der ausgewählten Ressourcen, davon abhängige Buchungen und Ressourcenzuordnungen unwiderruflich gelöscht. Bei kalendersynchronisierten Ressourcen entfernt ROOMS auch die zugehörigen Outlook-Termine.

Soll eine Ressource nur nicht mehr buchbar sein, deaktivieren Sie stattdessen unter **Einstellungen → Ressourcen → Bearbeiten** in den [Stammdaten der Ressource]({{< relref "3VROOMS/Einstellungen/Ressourcen/_index.md#stammdaten-der-ressource-bearbeiten" >}}) den **Status** und speichern Sie die Änderung. Bestehende Buchungen und die Historie bleiben dabei erhalten. Inaktive Ressourcen zählen nicht zum Ressourcen-Lizenzlimit.
{{% /alert %}}

1. Markieren Sie eine oder mehrere Checkboxen am Zeilenanfang.
2. Klicken Sie auf **Entfernen**.
3. Prüfen Sie die Angaben im Bestätigungsdialog. Bestätigen Sie nur, wenn die genannten Daten endgültig gelöscht werden sollen.

{{< imgproc List_RES_Anz_del_b Resize "960x" >}}
Ressource auswählen und löschen
{{< /imgproc >}}

## Erstellen

Wählen Sie zunächst aus dem vorangestellten Drop-Down-Menü die Ressourcenart aus, die Sie hinzufügen wollen. Klicken Sie dann auf die Schaltfläche _Erstellen_, um eine zu definieren.

{{< imgproc List_RES_Anz_neu_b Resize "960x" >}}
Neue Ressource hinzufügen
{{< /imgproc >}}

Sie werden nun zur Eingabemaske zur Erstellung einer neuen Ressource weitergeleitet. Weitere Informationen hierzu finden Sie im Kapitel [Neue Ressource erstellen](/3vrooms/einstellungen/ressourcen/#ressource-neu-erstellen).
