---
title: "On-Prem Exchange"
linkTitle: "On-Prem Exchange"
weight: 3

description: 'Addin Deployment auf Exchange 2016/2019/SE (on-premises)'
---

Diese Anleitung beschreibt, wie das ROOMS Outlook Add-In auf einem on-premises Exchange Server (2016, 2019 oder Subscription Edition) bereitgestellt wird.

{{% alert title="Wichtig: Einschränkung OWA / Webmail" color="warning" %}}
Das Add-In funktioniert auf on-premises Exchange (2016/2019/SE) ausschliesslich mit dem **Desktop Outlook Client**. **OWA (Webmail) wird nicht unterstützt**, da OWA auf on-premises Exchange nur Outlook Add-In API Requirement Sets bis 1.6 bereitstellt. Das ROOMS Add-In benötigt jedoch mindestens Requirement Set 1.7.

Weitere Details zu den unterstützten Requirement Sets finden Sie in der [Microsoft Dokumentation](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets).
{{% /alert %}}

## Voraussetzungen

- Die [Installation und Konfiguration](../../installation) des Wizards und IDP muss abgeschlossen sein. Die benötigten IDP-Clients (`rooms` und `rooms-addin`) werden dabei automatisch erstellt.
- Der IDP muss über eine HTTPS-Adresse erreichbar sein (z.B. `https://idp.example.com`).

## Schritt 1: Manifest herunterladen

Das Manifest wird über die IDP-URL bezogen. Ersetzen Sie `<IDPURL>` mit der Adresse Ihres IDP-Servers:

```
https://<IDPURL>/api/addin/manifest?useSso=false
```

{{% alert title="Hinweis" color="info" %}}
Die URL zeigt auf den **IDP-Server** (z.B. `idp.example.com`), **nicht** auf den Rooms-Server.

- `useSso=false` — generiert ein Manifest **ohne** M365 SSO (Login via Forms/Windows Auth). Der veraltete Parameter `useOnPrem=true` wird weiterhin unterstützt.
- `clientName` — optional, Standard ist `rooms-addin`. Nur angeben, falls ein anderer IDP-Client verwendet wird.

Falls Ihre Umgebung Entra ID / Azure AD nutzt (Hybrid-Setup), können Sie `useSso` weglassen und stattdessen die [O365-Anleitung](../o365/) verwenden — auch wenn Exchange on-premises läuft. Der Parameter steuert die **Authentisierungsmethode**, nicht den Standort des Exchange Servers.
{{% /alert %}}

## Schritt 2: Deployment über Exchange Admin Center

1. Öffnen Sie das [Exchange Admin Center (ECP)](https://learn.microsoft.com/en-us/exchange/architecture/client-access/exchange-admin-center) Ihres Exchange Servers (z.B. `https://exchange.example.com/ecp/`).
2. Navigieren Sie zu **Organization** → **Add-ins**.
3. Wählen Sie eine der folgenden Optionen:

   **Option A — Add from URL** (empfohlen):
   - Geben Sie die Manifest-URL aus Schritt 1 ein und validieren Sie diese.

   **Option B — Add from File:**
   - Laden Sie das Manifest zuerst herunter und wählen Sie die XML-Datei aus.

Weitere Informationen zum Verwalten von Add-Ins auf Exchange on-premises finden Sie in der [Microsoft Dokumentation](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/add-ins-for-outlook/add-ins-for-outlook).

## Schritt 3: WebView-Voraussetzungen prüfen

Das Add-In benötigt die **WebView2 Runtime** auf den Clients. Diese muss installiert sein, falls sie nicht bereits mit dem Betriebssystem oder Office ausgeliefert wurde.

- Download: [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

Eine Übersicht der verwendeten WebView-Engines für verschiedene Windows- und Office-Kombinationen finden Sie in der [Microsoft Dokumentation](https://learn.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-web-add-ins).

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

- [Outlook Add-In API Requirement Sets (Microsoft)](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets)
- [Voraussetzungen für Office Add-Ins (Microsoft)](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/add-in-requirements)
- [Von Office Add-Ins verwendete Browser / WebViews (Microsoft)](https://learn.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-web-add-ins)
- [WebView2 Runtime herunterladen (Microsoft)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
- [Exchange Admin Center (Microsoft)](https://learn.microsoft.com/en-us/exchange/architecture/client-access/exchange-admin-center)
