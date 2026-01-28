---
title: "Push Subscription"
linkTitle: "Push Subscription"
weight: 30
description: 'Funktionsweise der Push-Synchronisation'
---

### Was ist Push-Synchronisation?

Bei Push-Synchronisation informiert Exchange ROOMS aktiv über Änderungen (neue/aktualisierte Elemente). ROOMS hält dafür eine Subscription auf Postfächer/Folders und stellt einen öffentlichen Webservice bereit, an den Exchange Benachrichtigungen sendet. ROOMS verarbeitet die Meldung und synchronisiert die betroffenen Elemente nach.

Vorteile:
- Sehr wenig Datenverkehr (nur Ereignisse, kein Polling)
- Niedrige Latenz
- Bewährtes Setup für On-Prem und Online

### Architekturüberblick

```mermaid
%%{init: {
  'theme': 'neutral',
  'themeVariables': {
    'primaryColor': '#EEF2FF',
    'primaryBorderColor': '#4F46E5',
    'primaryTextColor': '#111827',
    'secondaryColor': '#F8FAFC',
    'tertiaryColor': '#FFFFFF',
    'lineColor': '#6B7280',
    'fontFamily': 'Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial'
  }
}}%%
flowchart LR

  classDef node fill:#FFFFFF,stroke:#CBD5E1,stroke-width:1.5,rx:8,ry:8,color:#111827;
  classDef accent fill:#EEF2FF,stroke:#4F46E5,stroke-width:1.5,rx:8,ry:8,color:#111827;
  classDef cluster fill:#F8FAFC,stroke:#E5E7EB,rx:10,ry:10,color:#111827;

  subgraph Intranet
    direction LR
    DB[(ROOMS DB)]
    APP[ROOMS Service]
    DB <--> APP
  end
  class Intranet cluster

  subgraph DMZ
    RP[Reverse Proxy]
  end
  class DMZ cluster

  subgraph Internet
    EXO[(Exchange / Exchange Online)]
  end
  class Internet cluster

  APP -- "HTTPS: /Webservices/SyncNotification.svc" --> RP
  RP  -- HTTPS --> EXO
  EXO -- "SendNotification (SOAP)" --> RP
  RP  -- HTTPS --> APP

  class DB,APP,RP node
  class EXO accent
```

Hinweis: Für Exchange Online muss die veröffentlichte URL aus dem Internet erreichbar sein – direkt oder via Reverse Proxy. Der interne ROOMS Service bleibt dabei privat. Veröffentlichen Sie nur den Pfad `Webservices/SyncNotification.svc`, ohne Pre‑Authentication (anonyme Anfragen zulassen) und mit gültigem, öffentlich vertrauenswürdigem TLS‑Zertifikat. Idealerweise IP‑Allowlisting auf Microsoft‑Ranges.

DMZ/Reverse Proxy ist optional:
- Wenn Sicherheitsrichtlinien es erlauben, kann der ROOMS Webservice direkt veröffentlicht werden.
- Ein Reverse Proxy wird empfohlen (TLS-Offload, IP-Filter, WAF/Rate-Limiting, Logging).

Service-URL in ROOMS:
- [Applikation Root-Url Anonymous]({{< relref "3vrooms/einstellungen/system/globaleparameter/#liste-der-konfigurationen" >}})
- Format: `http(s)://<rooms-host>/Webservices/SyncNotification.svc`

### Funktionsablauf

1. ROOMS registriert bei Exchange eine Push-Subscription auf relevante Ordner.
2. Bei Änderungen sendet Exchange eine `SendNotification`-SOAP-Nachricht an `SyncNotification.svc`.
3. ROOMS bestätigt den Empfang und schreibt ein Ereignis in die Datenbank.
4. Der ROOMS-Synchronisationsdienst liest die Ereignisse und aktualisiert betroffene Reservierungen.

Wenn alles korrekt konfiguriert ist und Sie die URL im Browser öffnen, erscheint eine Bestätigungsseite:

{{< imgproc Erfolgreicher_Push_Webservice Resize "512x" >}}{{< /imgproc >}}

### Sicherheitsempfehlungen

- Nur den Webservice `Webservices/SyncNotification.svc` veröffentlichen, nicht die gesamte ROOMS-Anwendung
- Zugriff auf bekannte Exchange-IP-Bereiche beschränken: https://docs.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide
- Eingehende Requests prüfen und verwerfen, wenn sie nicht passen:
  - Methode: `POST`
  - Pfad: `/Webservices/SyncNotification.svc`
  - SOAPAction: `http://schemas.microsoft.com/exchange/services/2006/messages/SendNotification`
