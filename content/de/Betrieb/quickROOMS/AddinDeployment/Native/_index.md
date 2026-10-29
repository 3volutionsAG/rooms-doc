---
title: "Natives Add-In für klassisches Outlook"
linkTitle: "Klassisches Outlook (nativ)"
weight: 4
description: 'Das native quickROOMS Add-In unter Windows installieren, konfigurieren und bei Ladeproblemen prüfen.'
---

Das native quickROOMS Add-In öffnet den Buchungsassistenten im Terminfenster des **klassischen Outlook unter Windows**. Die Bereitstellung erfolgt mit einem MSI-Paket auf dem Arbeitsplatz oder Terminalserver, nicht mit einem Office-Web-Add-In-Manifest.

Diese Anleitung gilt nicht für das neue Outlook, Outlook im Browser oder Outlook für Mac. Für die manifestbasierte Bereitstellung verwenden Sie die Anleitung für [O365 / Exchange Online]({{< relref "Betrieb/quickROOMS/AddinDeployment/O365/_index.md" >}}) oder [On-Prem Exchange]({{< relref "Betrieb/quickROOMS/AddinDeployment/OnPrem/_index.md" >}}).

## Voraussetzungen

- Klassisches Outlook unter Windows. Wählen Sie das MSI passend zu **32-Bit- oder 64-Bit-Outlook**, nicht allein zur Windows-Architektur.
- Die [Installation und Konfiguration von quickROOMS]({{< relref "Betrieb/quickROOMS/Installation/_index.md" >}}) ist abgeschlossen. Die Adresse des Buchungsassistenten muss vom Client erreichbar sein.
- Die [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) ist installiert und für die Outlook-Benutzer verfügbar. Das native Add-In benötigt keine .NET-Laufzeit.
- Für die Installation pro Computer sind lokale Administratorrechte oder eine entsprechend berechtigte Softwareverteilung erforderlich.
- Verwenden Sie ein für Ihre Umgebung freigegebenes Installationspaket.

{{% alert title="Signatur und Freigabe prüfen" color="warning" %}}
Die native Add-In-DLL und das MSI sind nicht codesigniert. Klären Sie vor der Verteilung, ob das Paket mit den Sicherheitsrichtlinien Ihrer Organisation vereinbar ist. Deaktivieren Sie keine Schutzrichtlinien, um die Installation zu erzwingen.
{{% /alert %}}

## Installation

1. Wählen Sie das freigegebene Paket mit der Endung `_x64.msi` für 64-Bit-Outlook oder `_x86.msi` für 32-Bit-Outlook. Die Pakete heissen `QuickROOMS.Native.Setup_vVERSION_x64.msi` bzw. `QuickROOMS.Native.Setup_vVERSION_x86.msi`, wobei `VERSION` für die Paketversion steht. Schliessen Sie Outlook vor der Installation.
2. Starten Sie das MSI mit den erforderlichen Rechten. Das Setup installiert das Add-In pro Computer, standardmässig unter `Program Files\microfast\QuickROOMS Native`.
3. Geben Sie auf der Adressseite nach der Auswahl des Installationsordners die **Adresse des quickROOMS-Buchungsassistenten** ein, beispielsweise `https://quickrooms.example.com`. Die Adresse beginnt mit `https://` oder `http://`. Wenn Sie die Adresse zentral über eine Richtlinie verwalten, können Sie das Feld leer lassen.
4. Schliessen Sie das Setup ab und starten Sie Outlook.
5. Öffnen oder erstellen Sie einen Termin. Wählen Sie im Menüband in der Gruppe **quickROOMS** die Schaltfläche **Raum buchen**. Prüfen Sie, ob der Buchungsassistent mit der vorgesehenen Umgebung lädt.

Das native Add-In kann neben dem VSTO-Add-In installiert sein. In diesem Fall können beide eine Schaltfläche **Raum buchen** anzeigen; die native Schaltfläche trägt das quickROOMS-Logo. Legen Sie bei einer parallelen Bereitstellung fest, welches Add-In die Benutzer verwenden sollen. Die Installation des nativen Add-Ins entfernt das VSTO-Add-In nicht.

### Unbeaufsichtigte Installation

Beispiel für 64-Bit-Outlook in einer administrativen Eingabeaufforderung; ersetzen Sie `VERSION`, Paketpfad und Adresse durch Ihre freigegebenen Werte:

```bat
msiexec /i "C:\Pakete\QuickROOMS.Native.Setup_vVERSION_x64.msi" /qn URL="https://quickrooms.example.com"
```

Das Setup prüft, ob die WebView2 Runtime installiert ist. Fehlt sie, bricht die Installation ab. Nur wenn Ihre Softwareverteilung die Runtime separat vor der ersten Nutzung bereitstellt, können Sie die Prüfung mit `SKIPWEBVIEW2CHECK=1` übergehen. Diese Option installiert die Runtime nicht und ersetzt sie nicht.

### Aktualisierung und Deinstallation

- Eine Aktualisierung ohne Angabe von `URL` übernimmt die gespeicherte Adresse. Das interaktive Setup zeigt diese Adresse an; Sie können sie ändern oder leeren. Eine ausdrücklich angegebene `URL` ersetzt die gespeicherte Adresse.
- Die x86- und x64-Pakete ersetzen sich gegenseitig. Installieren Sie nur das Paket, das zur Outlook-Architektur passt.
- Die Deinstallation entfernt das native Add-In und die vom MSI gespeicherte Adresse. Das VSTO-Add-In bleibt installiert. Prüfen Sie vor einer erneuten Installation, wie die Adresse bereitgestellt wird.

## Adresse zentral konfigurieren

Das native Add-In liest den Zeichenfolgenwert **`Url` (`REG_SZ`)** in dieser Reihenfolge. Die erste vorhandene, nicht leere Adresse gilt:

| Priorität | Registrierungsschlüssel | Verwendung |
| --- | --- | --- |
| 1 | `HKLM\SOFTWARE\Policies\microfast\QuickROOMS` | Zentral verwaltete Richtlinie |
| 2 | `HKCU\Software\microfast\QuickROOMS` | Benutzerbezogene Einstellung |
| 3 | `HKLM\Software\microfast\QuickROOMS` | Computereinstellung des MSI |

Beachten Sie die zur Outlook-Architektur passende Registrierungsansicht. Eine übergeordnete Richtlinie oder Benutzereinstellung hat Vorrang vor der Adresse aus dem Setup. Prüfen Sie diese Reihenfolge, wenn das Add-In trotz geänderter Setup-Adresse eine andere Umgebung öffnet.

Fehlt eine Adresse in allen drei Schlüsseln, zeigt das Add-In **quickROOMS isn't set up** an. Hinterlegen Sie die Adresse über das Setup oder die vorgesehene zentrale Konfiguration und starten Sie Outlook erneut.

## WebView2 auf Terminalservern

Standardmässig bereitet das native Add-In WebView2 bereits beim Öffnen eines Terminfensters vor. Dadurch kann der Buchungsassistent schneller öffnen; WebView2-Prozesse belegen aber auch dann Arbeitsspeicher, wenn die Seitenleiste noch nicht sichtbar ist. Die Vorbereitung endet mit dem Schliessen des letzten Terminfensters.

Um diese Vorbereitung abzuschalten, setzen Sie **`Preload` (`REG_DWORD`) auf `0`**. Für diesen Wert gilt dieselbe Schlüsselreihenfolge wie für `Url`. Ohne Einstellung ist die Vorbereitung aktiv. Starten Sie Outlook nach der Änderung neu. Das Abschalten verhindert nur das Vorladen; beim Öffnen der Seitenleiste wird WebView2 weiterhin benötigt.

## Ladeprobleme prüfen

### «quickROOMS ist nicht erreichbar»

Diese Fehlerseite erscheint im nativen Add-In und im VSTO-Add-In, wenn der Server nicht erreichbar ist oder beim Laden einen HTTP-Fehler zurückgibt. Sie nennt den betroffenen Server und gegebenenfalls den Fehlercode.

- Prüfen Sie die konfigurierte Adresse und die Erreichbarkeit des angezeigten Servers vom betroffenen Client aus, einschliesslich einer erforderlichen VPN-Verbindung.
- Mit **Erneut versuchen** laden Sie die Adresse erneut. Die Seite versucht es auch automatisch: bei einem HTTP-Fehler nach 30 Sekunden, bei einer fehlenden Verbindung nach erneuter Erreichbarkeit des Servers.
- Bleibt der Fehler bestehen, geben Sie Ihrer IT den Servernamen und den angezeigten Fehler weiter. Wiederholtes Neuinstallieren des Add-Ins behebt keine fehlende Serververbindung.

Die Fehlerseite verwendet die Windows-Anzeigesprache Deutsch, Französisch, Italienisch oder Englisch; andere Sprachen verwenden Deutsch.

### «quickROOMS kann nicht angezeigt werden.»

Kann WebView2 nicht starten, zeigt die Seitenleiste diese Meldung mit einem technischen Fehler an. Lassen Sie Ihre IT die WebView2 Runtime und den angezeigten Fehler prüfen. Die Meldung allein beweist nicht, dass die Runtime fehlt. Schliessen und öffnen Sie nach der Behebung das **Terminfenster** und rufen Sie die Seitenleiste erneut auf; alternativ starten Sie Outlook neu. Nur die Seitenleiste zu schliessen und wieder zu öffnen, startet WebView2 im nativen Add-In nicht erneut.

### Protokoll des nativen Add-Ins

Das native Add-In schreibt sein benutzerbezogenes Protokoll nach:

```text
%LOCALAPPDATA%\microfast\QuickROOMS.Native\addin.log
```

Die vorherige Protokolldatei heisst `addin.old.log`. Geben Sie bei einer Supportanfrage den Zeitpunkt des Fehlers, die Outlook-Architektur und die angezeigte Meldung an. Übermitteln Sie Protokolle nur über den vorgesehenen Supportkanal.
