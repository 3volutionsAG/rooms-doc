---
title: "Ressourcensuche nach Kriterien"
linkTitle: "Ressourcensuche nach Kriterien"
weight: 1
description: Suchen Sie Ihre Ressource nach Kriterien wie z.B. Datum, Zeit oder Ort.
---
Das Startfenster unter der Kategorie _Buchen_ ist in zwei Bereiche eingeteilt. Im linken Bereich sehen Sie das Sidepanel. In diesem Panel stellen Sie die Kriterien für die Suche ein und erweitern oder schränken diese ein.
Im rechten Bereich sehen Sie die Suchresultate (meistens in Listenform).

Wenn Sie die Kriterien gemäß den eigenen Wünschen und Präferenzen eingestellt haben, können Sie die Suchresultate mit dem Button <i>Finden</i> im rechten Fensterbereich aktualisieren.

{{< imgproc Freie_Ressourcen_suchen_nach_Kriterien Resize "960x" >}}
Freie Ressourcen nach Kriterien durchsuchen
{{< /imgproc >}}

Folgende Tabelle erläutert die Suchfunktionen im Sidepanel

{{< bootstrap-table "table table-striped" >}}
| Kriterium                 | Funktion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gespeicherte Listen       | Eingetragene Suchkriterien können für eine Wiederverwendung gespeichert werden. Durch Klick des Diskettensymbols und Eingabe einer Bezeichnung wird die aktuelle Listenkonfiguration gespeichert. Zudem wird die Liste bei jedem Laden dieser Ansicht als Standard erscheinen, sofern die Checkbox <i>Favorit</i> unter dem Diskettensymbol selektiert ist. Diese Listen können in den persönlichen Einstellungen wieder entfernt werden. Die Funktion steht im Outlook ebenfalls zur Verfügung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Ressourcenart             | Die Ressourcenart bestimmt, welche Ressourcen angezeigt werden sollen. Standardmäßig wird in diesem Feld immer der Ressourcentyp Raum dargestellt. Mittels des Dropdown Buttons kann die Ressourcenart eingestellt werden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Datum / Zeit              | Die Box mit Datum und Zeit ist standardmäßig inaktiv und kann mittels der Checkbox aktiviert werden. Als Standard wird das aktuelle Datum sowie die aktuelle Zeit plus 1 Stunde gesetzt. Das Datum kann mittels Datumspicker einfach gewählt und die Zeit mittels den Up- / Down-Buttons eingestellt werden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Kapazität                 | Die vorausgefüllte Kapazität basiert auf der Einstellung im Benutzerprofil. Grundsätzlich wird immer die Standard-Bestuhlung berücksichtigt, es sei denn die Checkbox `Alle Bestuhlungen` ist aktiviert. Bei Räumen ohne Standard-Bestuhlung werden Kapazitäten aller Bestuhlungsoptionen berücksichtigt. Räumen welche `keine` Bestuhlung zugewiesen haben werden immer angezeigt, wenn der Benutzer das Recht `Darf Reservationen ohne Bestuhlung erstellen` hat. <br><br><p>**Beispiel:** Eine Ressource hat zwei Bestuhlungen - Eine für 1-5 Personen welche als Standart definiert ist und zweite für 6-10 Personen. Bei der Suche nach einem Raum für 8 Personen mit deaktivierter Checkbox `Alle Bestuhlungen` wird kein Suchresultat angezeigt. Mit aktivierter Checkbox werden erscheint der Raum.</p> |
| Standort                  | Mittels Standort kann eingeschränkt werden, wo sich die Ressource geografisch befinden soll. Standardmäßig wird hier der vom Benutzer eingestellte Standard-Standort angezeigt. Falls in diesem Feld nichts steht, wird global über alle Standorte gesucht. Mittels des Buttons <b>+</b> kann der Standortbaum angezeigt und der entsprechende Standort ausgewählt werden. Falls der Standort bekannt ist, beispielsweise <i>VZA1</i>, kann dies im Textfeld eingegeben werden. ROOMS schlägt dann direkt Standorte vor, welche auf diese Eingabe passen könnten. </p> |
{{< /bootstrap-table >}}

{{< imgproc FR_suchen_Ressourcen Resize "960x" >}}
Freie Ressourcen im Sidepanel suchen
{{< /imgproc >}}

### Erweiterte Kriterien

{{< bootstrap-table "table table-striped" >}}
| Kriterium                  | Funktion         | 
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| Ressourcen ID/Bezeichnung  | Durch Eingabe der Ressourcen ID (falls bekannt und vorhanden) oder der Bezeichnung der Ressource wie z.B. großes Auditorium kann die Suche weiter eingegrenzt werden. | 
| Dienstleistungen           | Mittels _Plus Symbol_ werden alle zur Verfügung stehenden Dienstleistungen für den eingetragenen Standort angezeigt. Diese können ausgewählt und mit Button _Hinzufügen_ in die Suche übernommen werden. Wird aus der im Suchresultat angezeigten Ressource eine Reservation erzeugt, werden die vorher selektierten Dienstleistungen direkt übernommen. Das Suchkriterium ist nur im Menü <i>Reservieren</i> sichtbar. | 
| Ist Öffentlich             | Über den _Pfeil_ wählen Sie aus, ob Sie alle Ressourcen, nur öffentliche oder nur interne suchen möchten. |
{{< /bootstrap-table >}}

{{< imgproc FR_suchen_erweiterte_Kriterien Resize "960x" >}}
Suche nach freien Ressourcen mittels erweiterte Kriterien weiter einschränken
{{< /imgproc >}}

Mit Hilfe von Klassifikationen (Attribute zur spezifischen Kennzeichnung von Reservationen wie z.B. internes Meeting, Beratungsgespräch etc.) kann eine Eingrenzung der Suche nach Ressourcen, denen die gewünschten Klassifikationen zu Grunde liegen, erfolgen. Die Auswahl wird mit Klick auf das <i>Plus Symbol</i> vorgenommen. Die Inhalte sind kundenspezifisch und können im Bereich der Klassifikation durch berechtigte Personen verändert werden. 
Sind keine Klassifikationen erfasst, werden keine Klassifikationen eingeblendet.

### Gliederung

{{< bootstrap-table "table table-striped" >}}
| Kriterium            | Funktion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| Raum: Raumtyp        | Mit Hilfe von Gliederungen (Zusammenfassung bestimmter Attribute einer Ressource wie z.B. Raumtypen Sitzungszimmer, Schulungsraum, Kundenraum etc.) kann eine Eingrenzung der Suche zum Beispiel nach gewünschtem Equipment erfolgen. Die Auswahl wird mit Klick auf das _Plus Symbol_ getätigt. Die Inhalte sind kundenspezifisch und können im Bereich der Gliederungen in der Webapplikation durch berechtigte Personen verändert werden. Sind keine Gliederungen erfasst, werden keine Gliederungen eingeblendet | 
| Raum: Equipmenttyp   | Mittels _Plus Symbol_ wählen Sie den zur Verfügung stehenden Equipmenttyp aus. | 
{{< /bootstrap-table >}}

{{< imgproc FR_suchen_Gliederung Resize "960x" >}}
Suche nach freien Ressourcen mittels Gliederung einschränken
{{< /imgproc >}}

## Anlass 

Sie erweitern das Sidepanel und finden darunter den Reiter _Anlass_. Wenn bestimmte Anlässe gespeichert sind, können Sie die zur Verfügung stehenden Ressourcen nach einem Anlass durchsuchen.

{{< imgproc FR_suche_Anlass Resize "960x" >}}
Freie Ressourcen nach einem Anlass durchsuchen oder einen Anlass erstellen
{{< /imgproc >}}

Möchten Sie selber einen Anlass erstellen, tun Sie dies, indem Sie auf den Button _erstellen_ klicken. Es öffnet sich ein neues Feld. Hier geben Sie alle Informationen zum Anlass ein. SIe speichern den Anlass über den untenstehenden Button `Speichern`.

{{< imgproc FR_Anlass_erstellen Resize "960x" >}}
Einen Anlass erstellen
{{< /imgproc >}}

## Buchungsanfrage

Erweitern Sie das Sidepanel weiterhin, finden Sie den Reiter Buchungsanfragen. 

Hier durchsuchen Sie die Ressourcen nach bestehenden Buchungsanfragen. 

{{< imgproc FR_suchen_Buchungsanfrage Resize "960x" >}}
Freie Ressourcen aufgrund von Buchungsanfragen suchen
{{< /imgproc >}}
