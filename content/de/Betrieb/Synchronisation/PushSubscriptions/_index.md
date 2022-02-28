---
title: "Push Subscription O365"
linkTitle: "Push Subscription O365"
weight: 30
description: Push Synchronisation O365
---

Push notifications require the least traffic and complexity, Notifications are simply sent to the URL provided by Rooms. This solution is currently in use by most of our customers with OnPrem Exchange and is tried and tested.

With Exchange Online, Push Notifications require public access of a URL published by ROOMS.

EXAMPLE: 
https://public-rooms.customer.com/Webservices/SyncNotification.svc

Here’s how this could be setup in an enterprise environment:

{{< imgproc Push_Subscription_Overview Resize "1024x" >}}{{< /imgproc >}}


This webservice is very simple, it does not directly change any reservation in ROOMS(MMS). It writes data to a single table in the database.

This public access can be hardened by restricting traffic in the following ways:

- Only allow traffic from Exchange Online Servers by restricting access to Microsoft published IP Ranges

    - https://docs.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide

- Only publish the Webservices/SyncNotification.svc site, do not publish the rest of the ROOMS application e.g. Default/Calendar/Calendar/Find

- The incoming packets can be inspected and discarded if they do not conform to the following

    - POST Request to Webservices/SyncNotification.svc

    - Soapaction: http://schemas.microsoft.com/exchange/services/2006/messages/SendNotification

    - Content: See this example packet:

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

```<?xml version="1.0" encoding="utf-8"?><soap11:Envelope xmlns:soap11="http://schemas.xmlsoap.org/soap/envelope/"><soap11:Header><t:RequestServerVersion xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" Version="Exchange2010" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" /></soap11:Header><soap11:Body><m:SendNotification xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"><m:ResponseMessages><m:SendNotificationResponseMessage ResponseClass="Success"><m:ResponseCode>NoError</m:ResponseCode><m:Notification><t:SubscriptionId>LABkYjhwcjAxbWI2NDg1LmV1cnByZDAxLnByb2QuZXhjaGFuZ2VsYWJzLmNvbRAAAADELVfykPBZQp7Q8IIUrUfmCKn7JnqX2AgQAAAAWTlI8+A2EEqLQp01E8Pw2Q==<t:SubscriptionId><t:PreviousWatermark>AQAAAExY/dNdjDVKjtBVHKR5IOurFukhAAAAAAE=</t:PreviousWatermark><t:MoreEvents>false</t:MoreEvents><t:ModifiedEvent><t:Watermark>AQAAAExY/dNdjDVKjtBVHKR5IOsoIukhAAAAAAE=</t:Watermark><t:TimeStamp>2020-12-03T11:03:50Z</t:TimeStamp><t:ItemId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQBGAAADdiwJfgoT4UeFDoYZ5kbJFQcAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAAbsZeBEfd1Eyd3oyV64JNiAACUQqtogAAAA==" ChangeKey="DwAAAA==" /><t:ParentFolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAA" ChangeKey="AQAAAA==" /></t:ModifiedEvent><t:ModifiedEvent><t:Watermark>AQAAAExY/dNdjDVKjtBVHKR5IOstIukhAAAAAAE=</t:Watermark><t:TimeStamp>2020-12-03T11:03:50Z</t:TimeStamp><t:FolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgENAAAA" ChangeKey="AgAAAA==" /><t:ParentFolderId Id="AQMkAGYzNDgzOTU5LTM2ZTAtNGExMC04YjQyLTlkMzUxM2MzZjBkOQAuAAADdiwJfgoT4UeFDoYZ5kbJFQEAbsZeBEfd1Eyd3oyV64JNiAAAAgEIAAAA" ChangeKey="AQAAAA==" /></t:ModifiedEvent></m:Notification></m:SendNotificationResponseMessage></m:ResponseMessages></m:SendNotification></soap11:Body></soap11:Envelope>```
