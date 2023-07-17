---
title: "On-Prem Exchange"
linkTitle: "On-Prem Exchange"
weight: 3 

description: >
   <p style="text-align: justify">Addin Deployment Exchange 2016/2019</p>
---

## Erstellen des Manifests. 

In einem ersten Schritt muss ein Manifest erstellt werden. 3V-Rooms unterstützt Sie dabei.

### Voraussetzungen

- Im IDP muss Rooms mit ClientId ```rooms``` konfiguriert sein. Bei AllowedCorsOrigins muss eine https:// Adresse stehen die auf Rooms zeigt z.B. https://rooms.example.com
- Im IDP muss der Wizard koniguriert sein.  Bei AllowedCorsOrigins muss eine https:// Adresse stehen die auf den Wizard zeigt z.B. https://wizard.example.com. Das Feld ```ManifestId``` muss einer GUID entsprechen.
- Der IDP muss eine https:// adresse als URL(```IdpUrl```) konfiguert haben: z.B. https://idp.example.com 

Im Addin config.json muss ```useExchangeOnPrem``` auf ```true``` gesetzt werden. O365 SSO Auth wird dann ignoriert. Login via Forms oder Windows Auth ist dann möglich.

### Anpassung der Texte

Folgendermassen können Texte im Manifest übersetzt / angepasst werden:

Über die Rooms Datenbank:

```sql
  INSERT INTO TRANSLATING (AssemblyName,ResourceName, ResourceKey, LanguageId, OriginalValue, Value)
  VALUES
  ('Addin','Addin','Addin_GroupLabel', 'de', '3volutions AG', 'Example AG'),
  ('Addin','Addin','Addin_GroupLabel', 'en', '3volutions AG', 'Example AG'),
  ('Addin','Addin','Addin_ButtonLabel', 'de', '3volutions AG', 'Raum buchen'),
  ('Addin','Addin','Addin_ButtonLabel', 'en', '3volutions AG', 'Book a resource'),
  ('Addin','Addin','Addin_SuperTitle', 'de', '3volutions AG', 'Buchen'),
  ('Addin','Addin','Addin_SuperTitle', 'en', '3volutions AG', 'Book me'),
  ('Addin','Addin','Addin_SuperTipTitle', 'de', '3volutions AG', 'Öffnet ein Fenster, das die verfügbaren Ressourcen von 3V-ROOMS anzeigt.'),
  ('Addin','Addin','Addin_SuperTipTitle', 'en', '3volutions AG', 'Opens a pane displaying available resources from 3V-ROOMS.')

```

### Manifest herunterladen

Das Manifest kann nun heruntergeladen werden unter:

https://idp.example.com/api/addin/manifest?clientName=rooms-addin&useOnPrem=true


## Globales deployment

Öffnen des Exchange admin centers (https://exchange.example.com/ecp/)

- organization --> add-ins

Add from File:

- Manifest auswählen

## Edge Web view

Als voraussetzung, dass das Addin gut läuft muss das Addin auf Edge laufen, falls doch ie11 verwendet wird, muss die compatability view deaktiviert werden:

Display intranet sites in compatablility view.

Für Edge muss eventuell muss zusätzlich noch Webview2 installiert werden, falls nicht bereits verfügbar.

https://developer.microsoft.com/en-us/microsoft-edge/webview2/

