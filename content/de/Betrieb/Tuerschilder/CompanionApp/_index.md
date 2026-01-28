---
title: "Companion App"
linkTitle: "Companion App"
weight: 5
description: 'Konfiguration der Companion App für LED-Bars'
---

{{% alert title="Info" color="info" %}}
Aktuell sind folgende Türschilder mit LED-Bars unterstützt:
Philips 10BDL####T und Elo i-Series 4 für Android
{{% /alert %}}

Für die Verwendung der LED-Bar bieten wir eine Companion App an.
Diese App kann über das Service Portal heruntergeladen werden.
Die backendseitige Konfiguration erfolgt durch 3volutions.

## Konfiguration

Folgender Konfigurationswert muss in der `config.json` ergänzt werden:

```json
"ledControlUrl": "http://localhost:6969"
```

### Beispiel einer `config.json`

```json
{
  "rootConfig": {
    "roomsUrl": "https://abc.book.3vrooms.app/Default",
    "idpUrl": "https://abc.idp.3vrooms.app",
    "ledControlUrl": "http://localhost:6969"
  }
}
```

