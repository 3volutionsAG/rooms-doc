---
title: "JobManager REST API – Usage Guide"
linkTitle: "JobManager Usage"
weight: 2
description: Fachliche Verwendung des JobManager-Imports (asynchroner Background-Job) via ROOMS REST API v2.
---

Diese Dokumentation beschreibt die **fachliche Verwendung** des JobManager-Imports für Lektionen (asynchroner Hintergrund-Job). Die technischen Details (Endpunkte, Schemas, Felder) sind im Swagger UI dokumentiert:

- Swagger UI: siehe [API v2]({{< relref "../v2" >}}) (und allgemeine Hinweise unter [API]({{< relref "../" >}}))

## Was ist neu / warum 202 Accepted?

Früher wurden die angelieferten Jobs/Lektionen im REST-Request direkt verarbeitet. Bei grossen Jobs (viel Payload) konnte das zu **doppelten Job-Einträgen** bzw. unerwünschten Nebenwirkungen führen.

Neu läuft das über einen **Background-Job Flow**:

- Das API nimmt die Daten an und queued die Verarbeitung.
- Das API antwortet mit **HTTP 202 (Accepted)**.
- Die eigentliche Erstellung/Aktualisierung/Löschung der Lektionen passiert **asynchron**.
- In der 202-Antwort ist eine **`batchId`** enthalten, mit der der Status später abgefragt werden kann.

{{% alert title="Wichtig" color="warning" %}}
**202 bedeutet nur „angenommen“ – nicht „fertig verarbeitet“.**

Für eine vollständige Verarbeitung musst du den Status via `batchId` pollen.
{{% /alert %}}

## Fachlicher Ablauf (Empfehlung)

1. **Job(s) senden** (Create/Update/Delete; Details im Swagger UI).
2. **`batchId` aus der 202-Antwort speichern** (z.B. in eurem Integrations-Log).
3. **Status pollen**, bis der Batch abgeschlossen ist (Success oder Failed).
4. **Ergebnis behandeln**:
   - Success: OK.
   - Failed: `ErrorMessages` auswerten, loggen und entsprechend reagieren (siehe unten).

### Statusmodell (Bedeutung)

Je nach Bearbeitungsstand liefert die Statusabfrage einen der folgenden Zustände:

- `AwaitingLessonCreation`
  - Die Anfrage wurde gespeichert/queued.
  - Die Lektionen sind noch nicht erstellt worden.
- `AwaitingLessonProcessing`
  - Lektionen wurden erstellt und warten auf / sind in automatischer Verarbeitung.
  - Optional ist `LessonCount` gesetzt (Anzahl Lektionen im Batch).
- `LessonsCreated`
  - Verarbeitung abgeschlossen **ohne Fehler**.
- `LessonsImportFailed`
  - Verarbeitung abgeschlossen **mit Fehlern**.
  - `ErrorMessages` enthält Details (für Analyse/Support).

## Polling: Intervalle und Timeout

Empfehlung (Richtwerte):

- Start mit **2–5 Sekunden** Polling-Intervall.
- Danach **Backoff** (z.B. auf 10s/20s/30s erhöhen), um unnötige Last zu vermeiden.
- Abbruch nach einem sinnvollen **Timeout** (z.B. 10–30 Minuten), abhängig von typischer Jobgrösse.

## Fehlerhandling (LessonsImportFailed)

Wenn der Status `LessonsImportFailed` ist:

- **`ErrorMessages` auslesen und persistieren**
  - In euren Logs/Monitoring/Tracing speichern (mindestens: `batchId`, Timestamp, `ErrorMessages`).
  - Bei Support-Fällen unbedingt mitschicken (damit der Import nachvollzogen werden kann).
- **Fehler klassifizieren (fachlich vs. technisch)**
  - **Daten-/Validierungsfehler**: Payload korrigieren (z.B. fehlende Pflichtfelder, ungültige Zeiten, nicht existierende Ressource, inkonsistente IDs, Duplikate wie „Duplicate JobId“) und **neu senden** (ergibt eine neue `batchId`).
  - **Technische/transiente Fehler**: Systemzustand prüfen (Service/Queue/DB), ggf. später erneut senden.
- **Nicht blind re-tryen**
  - Ein automatischer Retry ohne Ursachenanalyse führt meist nur zu wiederholten Fehlern und unnötiger Last.

Optional (wenn ihr automatisiert re-tryen wollt):

- Retry nur bei klar transienten Fehlern (z.B. kurzfristige technische Störung) und mit Rate-Limit/Backoff.
- Max. Anzahl Retries begrenzen und danach auf „manuell klären“ umschalten.

## Usage Guide

Die Beispiele sind bewusst „minimal“ gehalten. Für vollständige Requests/Schemas siehe Swagger UI unter [API v2]({{< relref "../v2" >}}).

Für Authentisierung/Token siehe [API → Authentisierung]({{< relref "3VROOMS/API/#authentisierung" >}}).

### Beispiel: Jobs senden (Create) und batchId erhalten

```bash
curl -X POST "https://<host>/<mandator>/api/v2.0/jobs/create" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '[
    {
      "JobID": "job-20251223-001",
      "LektionList": [
        {
          "LektionId": "L-0001",
          "Beginn": "2025-12-23T08:00:00Z",
          "Ende": "2025-12-23T10:00:00Z",
          "RessourceName": "Raum 1.01"
        }
      ]
    }
  ]'
```

Erwartete Antwort (Beispiel):

- HTTP **202 Accepted**
- Body enthält mindestens:
  - `BatchId` (als String)
  - `ImportStatus` = `AwaitingLessonCreation`

### Beispiel: Status pollen bis Success

```bash
curl -X GET "https://<host>/<mandator>/api/v2.0/jobs/batches/<batchId>" \
  -H "Authorization: Bearer <token>"
```

Pollen, bis `ImportStatus` entweder `LessonsCreated` oder `LessonsImportFailed` ist.

{{% alert color="info" title="Hinweis (404 bei Statusabfrage)" %}}
Die Statusabfrage kann je nach Zustand auch **404 Not Found** liefern (z.B. wenn die `batchId` (noch) nicht bekannt ist).

In diesem Fall kurz warten und nochmals versuchen; bleibt es dauerhaft bei 404, stimmt die `batchId` oder der Mandator vermutlich nicht.
{{% /alert %}}

### Beispiel: Fehlerfall auswerten (LessonsImportFailed)

Angenommen, die Statusabfrage liefert:

```json
{
  "BatchId": "12345",
  "ImportStatus": "LessonsImportFailed",
  "ErrorMessages": "Fehler: Duplicate JobId: job-20251223-001"
}
```

Empfohlenes Vorgehen:

1. **`batchId` und `ErrorMessages` loggen** (z.B. in eurem Integrations-Log/Monitoring) und den Batch als „failed“ markieren.
2. **Fehlertext interpretieren**:
   - Beispiel hier: „Duplicate JobId“ → ihr habt vermutlich dieselbe `JobID` erneut gesendet oder es gab bereits einen bestehenden Job mit dieser ID.
3. **Korrekturmassnahme**:
   - `JobID` so wählen, dass sie pro Import eindeutig ist (z.B. mit Datum/Sequenz/Guid), oder fachlich sicherstellen, dass derselbe Job nicht doppelt ausgelöst wird.
4. Job **neu senden** (neuer Request → neue `batchId`) und wieder pollen.

### Optional: Laufende/aktuelle Batches anzeigen

Für einen Überblick über laufende/queued Batches kann die Batch-Liste verwendet werden (Details im Swagger UI).

## Troubleshooting Quick-Check

- **Ich erhalte 202, aber es passiert „nichts“**
  - Status mit `batchId` prüfen (Polling).
  - Bei sehr grossen Jobs kann `AwaitingLessonCreation` länger dauern.
- **Ich erhalte `LessonsImportFailed`**
  - `ErrorMessages` auswerten und im Support-Fall mitgeben.
  - Nicht blind re-tryen; zuerst Ursache korrigieren.


