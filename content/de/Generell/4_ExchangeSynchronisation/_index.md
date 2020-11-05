---
title: "Exchange Synchronisation"
linkTitle: "Exchange Synchronisation"
weight: 40

description: >
   <p style="text-align: justify">Generelle Informationen zu der Exchange Synchronisation</p>
---
## Fehlerbehandlung

### Backsync

**Vorbereitung**

|<div style="width:200px">Möglicher Fehler</div>|Resultat|
|---|---|
|Keine Lizenzen|Abbruch|
|Person SyncMode auf None|Aktion wird gelöscht|
|Person wird nicht gefunden??|Exception??|
|Person Mailbox leer|Aktion wird gelöscht|
|Reservation ist in der Vergangenheit|Aktion wird gelöscht|
|Serie ist komplett in der Vergangenheit|Aktion wird gelöscht|
|Aktion keine Reservation zugeteilt|Aktion wird gelöscht|
|Reservation kann nicht gefunden werden|Exception!|





