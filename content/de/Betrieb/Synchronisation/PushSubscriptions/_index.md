---
title: "Push Subscription"
linkTitle: "Push Subscription"
weight: 30
description: Push Subscriptions einrichten
---

{{< imgproc Push_Subscription_Overview Resize "1024x" >}}{{< /imgproc >}}

Eine erfolgreiche Synchronisation bedingt, dass Push Notifikationen vom Exchange Server and den WebService gesendet werden können.

Da sich bei Exchange Online der Exchange Server bei Microsoft in der Cloud befindet, benötigt es öffentlichen Zugang zu dem WebService. Mit Rooms 4.7.2010 ist es möglich, eine separate URL für den Service anzugeben:

```
<RoomsAppSettings>
...
	<add key="ExchangeServiceUrl" value="https://public.example.com/Webservices/SyncNotification.svc" />
...
</RoomsAppSettings>
```

Alternativ wird die Applikation Root-Url in den "Globale Parameter" von ROOMS verwendet, also in der Form http(s)://[ROOMS-URL]/[Mandant] --> http(s)://[ROOMS-URL]/Webservices/SyncNotification.svc

Wenn alles korrekt konfiguriert ist, muss folgende Seite erscheinen, wenn die URL im Browser geöffnet wird:

{{< imgproc Erfolgreicher_Push_Webservice Resize "512x" >}}{{< /imgproc >}}

Push-Subscriptions erfordern den geringsten Datenverkehr und die geringste Komplexität. Die Benachrichtigungen werden einfach an die von Rooms bereitgestellte URL gesendet. Diese Lösung wird derzeit von den meisten unserer Kunden mit OnPrem Exchange verwendet und hat sich bestens bewährt.


Dieser Webservice ist sehr einfach, er ändert nicht direkt eine Reservierung in ROOMS. Er schreibt Daten in eine einzige Tabelle in der Datenbank.

Dieser öffentliche Zugang kann durch folgende Einschränkungen des Datenverkehrs abgesichert werden:

- Erlauben Sie nur Datenverkehr von Exchange Online-Servern, indem Sie den Zugriff auf die von Microsoft veröffentlichten IP-Bereiche beschränken.
        https://docs.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide

- Veröffentlichen Sie nur die Website Webservices/SyncNotification.svc, veröffentlichen Sie nicht den Rest der ROOMS-Anwendung, z. B. Default/Calendar/Calendar/Find

- Die eingehenden Pakete können inspiziert und verworfen werden, wenn sie nicht den folgenden Bedingungen entsprechen

    - POST-Anfrage an Webservices/SyncNotification.svc

    - Soap-Aktion: http://schemas.microsoft.com/exchange/services/2006/messages/SendNotification
    
Inhalt: Siehe dieses Beispiel-Paket:

```
POST /Webservices/SyncNotification.svc?Default HTTP/1.1

Host: c2ab005e779a.ngrok.io

Content-Length: 2019

Accept: text/xml

Content-Type: text/xml; charset=utf-8

Soapaction: http://schemas.microsoft.com/exchange/services/2006/messages/SendNotification

X-Forwarded-For: 2603:1026:c02:3097::5

X-Forwarded-Proto: http

Accept-Encoding: gzip
```

```
<?xml version="1.0" encoding="utf-8"?><soap11:Envelope xmlns:soap11="http://schemas.xmlsoap.org/soap/envelope/"><soap11:Header><t:RequestServerVersion xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" Version="Exchange2010" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" /></soap11:Header><soap11:Body><m:SendNotification xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"><m:ResponseMessages><m:SendNotificationResponseMessage ResponseClass="Success"><m:ResponseCode>NoError</m:ResponseCode><m:Notification><t:SubscriptionId>LABkYjhwcjAxbWI2NDg1LmV1cnByZDAxLnByb2QuZXhjaGFuZ2VsYWJzLmNvbRAAAADELVfykPBZQp7Q8IIUrUfmCKn7JnqX2AgQAAAAWTlI8+A2EEqLQp01E8Pw2Q==<t:SubscriptionId><t:PreviousWatermark>AQAAAExY/dNdjDVKjtBVHKR5IOurFukhAAAAAAE=</t:PreviousWatermark><t:MoreEvents>false</t:MoreEvents><t:ModifiedEvent><t:Watermark>AQAAAExY/dNdjDVKjtBVHKR5IOsoIukhAAAAAAE=</t:Watermark><t:TimeStamp>2020-12-03T11:03:50Z</t:TimeStamp><t:ItemId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQBGAAADdiwJfgoT4UeFDoYZ5kbJFQcAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAAbsZeBEfd1Eyd3oyV64JNiAACUQqtogAAAA==" ChangeKey="DwAAAA==" /><t:ParentFolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAA" ChangeKey="AQAAAA==" /></t:ModifiedEvent><t:ModifiedEvent><t:Watermark>AQAAAExY/dNdjDVKjtBVHKR5IOstIukhAAAAAAE=</t:Watermark><t:TimeStamp>2020-12-03T11:03:50Z</t:TimeStamp><t:FolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAA" ChangeKey="AgAAAA==" /><t:ParentFolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgEIAAAA" ChangeKey="AQAAAA==" /></t:ModifiedEvent></m:Notification></m:SendNotificationResponseMessage></m:ResponseMessages></m:SendNotification></soap11:Body></soap11:Envelope>
```
