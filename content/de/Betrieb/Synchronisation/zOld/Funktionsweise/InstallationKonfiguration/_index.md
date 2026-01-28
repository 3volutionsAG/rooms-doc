---
title: "Installation und Konfiguration"
linkTitle: "Installation und Konfiguration"
weight: 40
description: ''
---
Eine Synchronisation mit einer MS Exchange Umgebung impliziert, dass aus der ROOMS Umgebung heraus Zugriffe auf MS Exchange Server und Mailboxen erfolgen. Da in den Mailboxen private und mitunter auch vertrauliche oder geschäftsrelevante Informationen vorhanden sind, ist dies ein heikler Vorgang.

ROOMS orientiert sich deshalb bei jeder MS Exchange Version an den verfügbaren Standards und optimiert die Synchronisation jeweils hinsichtlich Sicherheit und Performance. Auch bei sorgfältiger Berücksichtigung der genannten Punkte ist es unumgänglich, dass grundsätzlich Konzessionen in diesen Bereichen gemacht werden müssen. Eine dieser Konzessionen ist die Berechtigung eines Service Accounts auf die entsprechenden MS Exchange Server. Theoretisch ist es zwar möglich, die Synchronisation im Kontext des an der Web Applikation angemeldeten Benutzers durchzuführen und damit auf eine generelle Berechtigung eines Service Accounts zu verzichten. Dieses Konzept führt jedoch zu zahlreichen Schwierigkeiten:

- Der Konfigurationsaufwand erhöht sich massiv (Impersonierung, Service Principal Names, Delegation, MS Outlook Freigaben).
- Die Umsetzung einiger Funktionalitäten wird verunmöglicht (Reservationsänderungen, die nicht im Kontext des Benutzers erfolgen, dazu gehören beispielsweise alle Aktionen des ROOMS Windows Services, können nicht synchronisiert werden).
- Die Performance leidet spürbar (Benutzer müssen auf den Abschluss der Synchronisation warten, weil diese nicht asynchron erfolgen kann).

Unsere Erfahrungen im Enterprise-Umfeld haben gezeigt, dass dieses Konzept aufgrund der genannten Schwierigkeiten nicht praxistauglich ist und das Berechtigen eines Service Accounts als einzig brauchbare Lösung betrachtet werden muss.

Die damit verbundenen Sicherheitsrisiken müssen und können organisatorisch gelöst werden.
 Eine andere Konzession ist die erhöhte Auslastung der entsprechenden MS Exchange Server. Die Requests über Verbindung 2 und insbesondere die Requests über Verbindung 3 bzw. deren Aufbereitung können die Auslastung der MS Exchange wie auch der ROOMS Server u.U. markant erhöhen und evtl. zusätzliche Hardware erfordern. Auf jeden Fall müssen vor der Einführung entsprechende Berechnungen und Tests durchgeführt werden. Die Gefahr von Performance-Problemen muss und kann damit frühzeitig verhindert werden.
