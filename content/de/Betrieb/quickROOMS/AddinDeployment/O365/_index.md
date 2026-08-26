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

## Schritt 2: Add-In-Icon optional anpassen

Das Icon für die Auswahl des Add-Ins in Outlook kann über die Icon-URLs im Manifest angepasst werden. Passen Sie dazu die folgenden drei Links an. Die Links kommen im Manifest mehrfach vor und müssen überall konsistent geändert werden.

```xml
<bt:Images>
  <bt:Image id="icon16" DefaultValue="https://<URL-zu-den-Icons>/favicon-16.png"/>
  <bt:Image id="icon32" DefaultValue="https://<URL-zu-den-Icons>/favicon-32.png"/>
  <bt:Image id="icon80" DefaultValue="https://<URL-zu-den-Icons>/favicon-80.png"/>
</bt:Images>
```

{{% alert title="Empfehlung" color="info" %}}
Laden Sie die Icons nach Möglichkeit über das ROOMS-Theming hoch und verwenden Sie die dadurch bereitgestellten URLs. So werden die Icons vom gleichen System ausgeliefert wie ROOMS und typische CORS-Probleme mit extern gehosteten Bilddateien werden vermieden.
{{% /alert %}}

Die Icons sollten gemäss der Microsoft-Dokumentation für Office Add-Ins erstellt werden:

https://learn.microsoft.com/en-us/office/dev/add-ins/design/add-in-icons

## Schritt 3: Deployment via Centralized Deployment

1. Melden Sie sich als Administrator im [Microsoft 365 Admin Center](https://admin.microsoft.com/Adminportal) an.
2. Navigieren Sie zu **Settings** → **Integrated apps**.
3. Klicken Sie auf **Upload custom apps**.
4. Wählen Sie die Manifest-URL oder die heruntergeladene Manifest-Datei aus.
5. Definieren Sie die Benutzer oder Gruppen, welche das Add-In erhalten sollen.
6. Akzeptieren Sie die **Permissions** und klicken Sie auf **Next**.
7. Klicken Sie auf **Finish Deployment**.

{{% alert title="Automatisch erstellte App-Registrierung nicht löschen oder deaktivieren" color="warning" %}}
Beim Abschluss des Deployments legt Microsoft 365 in Microsoft Entra ID automatisch eine separate App-Registrierung für das bereitgestellte Add-In an. Sie trägt normalerweise den Anzeigenamen des Add-Ins.

Diese Registrierung kann ungenutzt wirken, weil sie weder die SSO-Konfiguration von quickROOMS enthält noch als reguläre Anwendung verwendet wird. Sie gehört jedoch zum **Centralized Deployment**. Wird sie unter **Microsoft Entra ID → App-Registrierungen** gelöscht, wird auch das zugehörige Add-In aus der Organisation und aus **Integrated apps** entfernt.

Auch eine Deaktivierung ist für ein aktiv bereitgestelltes Add-In nicht vorgesehen: Die Verknüpfung bleibt dabei zwar bestehen, Microsoft Entra ID stellt für die Anwendung jedoch keine neuen Tokens mehr aus. Soll das Add-In vorübergehend ausgeschaltet werden, deaktivieren Sie es unter **Microsoft 365 Admin Center → Settings → Integrated apps**, nicht über die App-Registrierung.

Die automatisch erzeugte Deployment-Registrierung darf deshalb nicht bereinigt, deaktiviert oder mit der [separaten SSO-App-Registrierung](../../o365-sso/) verwechselt werden.
{{% /alert %}}

## App-Registrierungen unterscheiden

Bei einer O365-Bereitstellung mit SSO existieren zwei App-Registrierungen mit unterschiedlichen Aufgaben:

| App-Registrierung | Erstellung | Aufgabe | Darf gelöscht oder deaktiviert werden? |
|---|---|---|---|
| quickROOMS SSO | Manuell gemäss [O365 SSO Konfiguration](../../o365-sso/) | Authentisierung; ihre Client-ID steht im Manifest unter `WebApplicationInfo/Id` | Nein, solange SSO verwendet wird |
| Add-In-Deployment | Automatisch durch **Finish Deployment** im Microsoft 365 Admin Center | Repräsentiert das zentral bereitgestellte Add-In in Microsoft 365 | Nein, solange das Add-In bereitgestellt ist |

Die Deployment-Registrierung wird nicht für die quickROOMS-SSO-Konfiguration verwendet. Dass sie keine offensichtlichen Anmeldungen, Secrets oder manuell konfigurierten API-Berechtigungen besitzt, ist daher kein Löschkriterium.

## Versehentliche Löschung oder Deaktivierung untersuchen und beheben

1. Öffnen Sie **Microsoft Entra ID → Überwachung und Integrität → Überwachungsprotokolle**.
2. Filtern Sie nach der Kategorie **ApplicationManagement**. Eine Löschung erscheint als **Delete application** beziehungsweise **Delete application and service principal**; eine Deaktivierung als **Update application** mit der geänderten Eigenschaft `isDisabled`. Der Eintrag zeigt Zeitpunkt und ausführenden Benutzer.
3. Wurde die Registrierung lediglich deaktiviert, öffnen Sie sie unter **Deaktivierte Anwendungen** und wählen Sie **Aktivieren**.
4. Prüfen Sie nach einer Löschung unter **App-Registrierungen → Gelöschte Anwendungen**, ob die Registrierung noch wiederhergestellt werden kann. Gelöschte App-Registrierungen bleiben üblicherweise bis zu 30 Tage wiederherstellbar.
5. Falls das Add-In weiterhin nicht unter **Microsoft 365 Admin Center → Settings → Integrated apps** erscheint, stellen Sie es mit dem Manifest erneut bereit. Dabei wird eine neue Deployment-Registrierung angelegt.

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
- [Deaktivieren und Reaktivieren von Entra-App-Registrierungen (Microsoft)](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/deactivate-app-registration)
- [Löschen und Wiederherstellen von Entra-Anwendungen (Microsoft)](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/delete-recover-faq)
- [Outlook Add-In API Requirement Sets (Microsoft)](https://learn.microsoft.com/en-us/javascript/api/requirement-sets/outlook/outlook-api-requirement-sets)
- [Voraussetzungen für Office Add-Ins (Microsoft)](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/add-in-requirements)
