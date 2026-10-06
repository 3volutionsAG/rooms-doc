---
title: "3V ROOMS Wizard"
linkTitle: "3V ROOMS Wizard"
weight: 20
description: '3V ROOMS Wizard ist ein Buchungsassistent, der eine vereinfachte Buchung von Ressourcen über den Webbrowser ermöglicht. Er ist auch für mobile Endgeräte (Tablet, Smartphone, ...) geeignet.'
---
### 3V ROOMS Wizard öffnen

1. Öffnen Sie den Webbrowser.
2. Geben Sie die URL des 3V ROOMS Wizards ein:
   <!-- Wie lautet die URL? -->
    {{< imgproc Buchungsassistent Resize "960x" >}} Buchungsassistent im Webbrowser {{< /imgproc >}}

Das weitere Vorgehen entspricht dem Vorgehen im [3V ROOMS Add-In für Office 365 Outlook](/3vrooms-module/3vrooms_addin_o365outlook/).

Mit den entsprechenden Einstellungen werden Buchungen, die mit dem 3V ROOMS Wizard erstellt wurden mit Office 365 Outlook synchronisiert, siehe dazu [Empfohlene Konfigurationen](/3vrooms-module/addin-wizard_konfigurieren/).

## Meine Buchungen schrittweise laden

{{% alert title="Kommende Funktion" color="info" %}}
Das nachfolgend beschriebene schrittweise Laden ist für eine kommende quickROOMS-Version vorgesehen. In quickROOMS 1.29.4 ist es noch nicht enthalten. Diese Anleitung gilt erst, wenn die entsprechende Version in Ihrer Installation bereitgestellt ist.
{{% /alert %}}

### Wo finde ich meine Buchungen?

Öffnen Sie im Webbrowser den 3V ROOMS Wizard und melden Sie sich an. Klicken Sie oben rechts auf die Buchungszahl oder öffnen Sie über Ihr Profilbild den Eintrag **Meine Buchungen**. Diese persönliche Liste gehört zum Wizard im Webbrowser, nicht zum Outlook Add-In.

### Weitere Buchungen anzeigen

Die Liste lädt zunächst bis zu 50 Buchungen. Bevorstehende Buchungen erscheinen mit dem frühesten Beginn zuerst, vergangene Buchungen mit dem neuesten Beginn zuerst. Die Einträge sind nach Monaten gruppiert.

1. Blättern Sie zum Ende der geladenen Liste.
2. Klicken Sie auf **Weitere Buchungen laden**, um die nächsten bis zu 50 Buchungen anzuzeigen. Währenddessen zeigt die Schaltfläche **Buchungen werden geladen…** und ist nicht erneut anklickbar. Bereits geladene Einträge bleiben sichtbar.
3. Wiederholen Sie das Nachladen bei Bedarf. Sobald **Alle … Buchungen geladen** erscheint, ist die Liste für den gewählten Zeitraum und die aktiven Filter vollständig geladen.

**… Buchungen geladen** bezeichnet nur die bereits geladenen Einträge, nicht die Gesamtzahl aller Treffer. Die Buchungszahl oben rechts zählt unabhängig davon Ihre bevorstehenden Buchungen im konfigurierten Zeitraum. Sie kann deshalb von der geladenen Anzahl abweichen, insbesondere bei Statusfiltern oder vergangenen Buchungen.

### Liste filtern

Öffnen Sie das Filtersymbol neben **Filtern nach:**. Wählen Sie **Bevorstehende Buchungen** oder **Vergangene Buchungen** und bei Bedarf Status sowie die Optionen **Buchungen als Ersteller anzeigen** und **Buchungen als Verantwortlicher anzeigen**. Mit **Filter anwenden** kehren Sie zur Liste zurück.

Wenn Sie diese Auswahl ändern, beginnt das Laden für die neue Auswahl wieder mit den ersten bis zu 50 Buchungen. Der Statusfilter berücksichtigt auch passende Buchungen, die vorher noch nicht geladen waren. Sie müssen nicht zuerst die ungefilterte Liste vollständig laden.

Die verfügbaren Status werden unabhängig von den ersten geladenen Buchungen angeboten. Der betrachtete Zeitraum für bevorstehende und vergangene Buchungen hängt von der Konfiguration Ihrer Installation ab. Auch **Alle … Buchungen geladen** bezieht sich nur auf diesen Zeitraum und die aktuelle Auswahl, nicht auf die gesamte Buchungshistorie.

### Nach einem Ladefehler fortfahren

Erscheint **Buchungen konnten nicht geladen werden. Bitte versuchen Sie es erneut.**, klicken Sie auf **Erneut versuchen**. Schlägt das Nachladen fehl, bleiben die zuvor geladenen Einträge sichtbar. Der erneute Versuch lädt den fehlenden Abschnitt nach. Falls schon das erste Laden fehlgeschlagen ist, wird es erneut gestartet.
