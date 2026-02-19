---
title: "O365"
linkTitle: "O365"
weight: 3 

description: 'Bereitstellen vom Outlook Addin'
---

## Erstellen des Manifests. 

In einem ersten Schritt muss ein Manifest erstellt werden. 3V-Rooms unterstützt Sie dabei.

### Voraussetzungen

- Im IDP muss ein ```ExternalOpenIdConnectProvider``` konfiguriert sein mit dem Namen ```microsoft```.
- Im IDP muss Rooms mit ClientId ```rooms``` konfiguriert sein. Bei AllowedCorsOrigins muss eine https:// Adresse stehen die auf Rooms zeigt z.B. https://rooms.example.com
- Im IDP muss der Wizard koniguriert sein.  Bei AllowedCorsOrigins muss eine https:// Adresse stehen die auf den Wizard zeigt z.B. https://wizard.example.com. Das Feld ```ManifestId``` muss einer GUID entsprechen.
- Der IDP muss eine https:// adresse als URL(```IdpUrl```) konfiguert haben: z.B. https://idp.example.com 

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

https://idp.example.com/api/addin/manifest?clientName=rooms-addin

### Icon anpassen

Das Icon welches für die Auswahl des Addins in Outlook angezeigt wird kann im Manifest angepasst werden. Dazu die folgenden 3 Links anpassen (<strong>Achtung: die Links kommen mehrfach vor</strong>):

```xml
<bt:Images>
  <bt:Image id="icon16" DefaultValue="https://[UrlAufIcons]/favicon-16.png"/>
  <bt:Image id="icon32" DefaultValue="https://[UrlAufIcons]/favicon-32.png"/>
  <bt:Image id="icon80" DefaultValue="https://[UrlAufIcons]/favicon-80.png"/>
</bt:Images>
```

Die Icons sollten gemäss der folgenden Dokumentation von Microsoft erstellt werden:

https://learn.microsoft.com/en-us/office/dev/add-ins/design/add-in-icons

## Deployment via Centralized Deployment

1. Loggen sie sich in ihre M365 Umgebung als Administrator ein (https://myaccount.microsoft.com/) oder gehen sie direkt zu https://admin.microsoft.com/Adminportal 
1. Navigieren sie über die "Settings" zu “Integrated apps”
1. Erstellen sie eine “custom app”
   <br>klicken sie auf “Upload custom apps”
1. Manifest auswählen
1. Definieren sie die User oder Gruppen, welche das Addin erhalten sollen
1. Akzepterien sie die “Permissions” und klicken sie auf “Next
1. Abschluss, klicken sie auf “Finish Deployment”

