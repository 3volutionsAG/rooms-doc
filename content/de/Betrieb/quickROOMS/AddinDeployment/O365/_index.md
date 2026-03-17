---
title: "O365 / Exchange Online"
linkTitle: "O365"
weight: 2

description: 'Addin Deployment über Microsoft 365 (Exchange Online)'
---

Diese Anleitung beschreibt, wie das ROOMS Outlook Add-In über Microsoft 365 / Exchange Online bereitgestellt wird. Das Add-In funktioniert sowohl im **Desktop Outlook Client** als auch in **Outlook on the Web (OWA)**.

## Voraussetzungen

- Die [Installation und Konfiguration](../../installation) des Wizards und IDP muss abgeschlossen sein. Die benötigten IDP-Clients (`rooms` und `rooms-addin`) werden dabei automatisch erstellt.
- Der IDP muss über eine HTTPS-Adresse erreichbar sein (z.B. `https://idp.example.com`).
- Im IDP muss ein `ExternalOpenIdConnectProvider` mit dem Namen `microsoft` konfiguriert sein (für O365 SSO). Siehe [O365 SSO Konfiguration](../../o365-sso/).

## Schritt 1: Manifest herunterladen

Das Manifest wird über die IDP-URL bezogen. Ersetzen Sie `<IDPURL>` mit der Adresse Ihres IDP-Servers:

```
https://<IDPURL>/api/addin/manifest
```

{{% alert title="Hinweis" color="info" %}}
Die URL zeigt auf den **IDP-Server** (z.B. `idp.example.com`), **nicht** auf den Rooms-Server.

Der Query-Parameter `clientName` ist optional (Standard: `rooms-addin`). Nur angeben, falls ein anderer IDP-Client verwendet wird.
{{% /alert %}}

## Schritt 2: Deployment via Centralized Deployment

1. Melden Sie sich als Administrator im [Microsoft 365 Admin Center](https://admin.microsoft.com/Adminportal) an.
2. Navigieren Sie zu **Settings** → **Integrated apps**.
3. Klicken Sie auf **Upload custom apps**.
4. Wählen Sie die Manifest-URL oder die heruntergeladene Manifest-Datei aus.
5. Definieren Sie die Benutzer oder Gruppen, welche das Add-In erhalten sollen.
6. Akzeptieren Sie die **Permissions** und klicken Sie auf **Next**.
7. Klicken Sie auf **Finish Deployment**.

Weitere Informationen zum Centralized Deployment finden Sie in der [Microsoft Dokumentation](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/centralized-deployment-of-add-ins).

## Optional: Anpassung der Texte im Manifest

Die im Manifest angezeigten Texte (Button-Beschriftung, Tooltip etc.) können über die ROOMS-Datenbank angepasst werden:

```sql
INSERT INTO TRANSLATING (AssemblyName, ResourceName, ResourceKey, LanguageId, OriginalValue, Value)
VALUES
  ('Addin', 'Addin', 'Addin_GroupLabel',    'de', '3volutions AG', 'Example AG'),
  ('Addin', 'Addin', 'Addin_GroupLabel',    'en', '3volutions AG', 'Example AG'),
  ('Addin', 'Addin', 'Addin_ButtonLabel',   'de', '3volutions AG', 'Raum buchen'),
  ('Addin', 'Addin', 'Addin_ButtonLabel',   'en', '3volutions AG', 'Book a resource'),
  ('Addin', 'Addin', 'Addin_SuperTitle',    'de', '3volutions AG', 'Buchen'),
  ('Addin', 'Addin', 'Addin_SuperTitle',    'en', '3volutions AG', 'Book me'),
  ('Addin', 'Addin', 'Addin_SuperTipTitle', 'de', '3volutions AG', 'Öffnet ein Fenster, das die verfügbaren Ressourcen von 3V-ROOMS anzeigt.'),
  ('Addin', 'Addin', 'Addin_SuperTipTitle', 'en', '3volutions AG', 'Opens a pane displaying available resources from 3V-ROOMS.');
```

{{% alert title="Hinweis" color="info" %}}
Die Textanpassungen müssen **vor** dem Herunterladen des Manifests vorgenommen werden, da die Texte beim Generieren des Manifests eingebettet werden.
{{% /alert %}}

## Referenzen

- [Centralized Deployment von Add-Ins (Microsoft)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/centralized-deployment-of-add-ins)
- [Outlook Add-In API Requirement Sets (Microsoft)](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets)
- [Voraussetzungen für Office Add-Ins (Microsoft)](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/add-in-requirements)
