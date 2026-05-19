---
title: "Spaltenansicht Erweitert"
linkTitle: "Spaltenansicht Erweitert"
weight: 2
description: 'Neben den standardmässig angezeigten Spalten können Sie hier erläuterte, weitere Spalten mit Informationen zur Ressource einblenden.'
---
Folgende Tabelle erläutert die Spaltenkategorien:

{{< bootstrap-table "table table-striped" >}}
|Spalte|Anmerkungen|
|---|---|
|Info URL|Link zu externer Seite für weitere Informationen zur Ressource|
|Status|_Aktiv/Inaktiv_ ; Gibt an, ob die Ressource grundsätzlich, unabhängig von der zeitlichen Verfügbarkeit, nutzbar ist.|
|Verantwortliche Person| Person, welche für diese Ressource verantwortlich ist |
|Vorlaufdauer in Minuten| Für jede Ressource kann eine individuelle Vorlaufdauer, die zur Vorbereitung der Ressource benötigt wird, eingestellt werden. In dieser Zeit kann keine andere Buchung eingetragen werden. |
|Nachlaufdauer in Minuten| Für jede Ressource kann eine individuelle Nachlaufdauer, die z.B. zum Aufräumen oder Reinigen der Ressource benötigt wird, eingestellt werden. In dieser Zeit kann keine andere Buchung eingetragen werden. |
|Sync. Modus| Zeigt an, über welchen Modus der Raum mit dem System synchronisiert wird.  ; _z.B. Exchange 2016_|
{{< /bootstrap-table >}}
|External Identifier|Eindeutige Kennung der Ressource, um diese von ausserhalb zu identifizieren, z.B. eine E-Mail-Adresse, die zur Terminanfrage verwendet werden kann.
|
|Priorisierung|Rangfolge der Ressource innerhalb der Ressourcenart. [^1]|
|Ist fixes Equipment|  Gibt an, ob es sich um fixes oder mobiles Equipment handelt. ; _Wird beim Ressourcentyp "Equipment" angezeigt._ |
---

[^1]: Die Priorisierung wird in den Daten der Ressource hinterlegt. Bei einer automatischen Vergabe der Ressourcen zu einer Buchung, wird die Ressource mit der obersten Priorisierung, beginnend mit 1, vergeben.
