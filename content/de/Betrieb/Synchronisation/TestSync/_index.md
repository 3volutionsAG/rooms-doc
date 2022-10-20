---
title: "Synchronisation testen"
linkTitle: "Synchronisation testen"
weight: 45
description: Testen ob Synchronisation funktioniert
---

Nachdem alles eingerichtet ist, kann die Synchronisation folgendermassen überprüft werden:

Personen --> Person --> Ansicht --> Synchronisationstest

Ein erfolgreicher Synchronisationstest sieht folgerndermassen aus:

{{< imgproc sync-test Resize "1024x" >}}{{< /imgproc >}}

Wird kein Test grün so besteht grundsätzlich ein Problem. Prüfen Sie in der Datenbank die Tabellen Synchronisation und Logging (alternativ Einstellungen --> System --> Ereignissanzeige) und prüfen Sie ob die Dienste laufen unter Einstellungen --> System --> About.

Werden nur die ersten zwei Tests grün, so funktioniert die Subscription nicht, siehe PullSubscription oder PushSubscription Kapitel.

Ein öfters auftauchendes Problem ist, dass die E-Mail Adresse nicht auf die primäre SMTP Adresse gesetzt ist.



