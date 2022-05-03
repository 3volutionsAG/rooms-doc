---
title: "Pull Subscription für eine Person einrichten"
linkTitle: "Pull Subscription für eine Person einrichten"
weight: 200
description:
---
Um die Subscription für eine Person zu aktivieren, muss in den Einstellungen der Person der SyncMode auf Exchange2016Pull (basic Auth) oder O365Pull (OAuth 2.0) gesetzt werden.

{{< imgproc pull_subscription_aktivieren Resize "1024x" >}}{{< /imgproc >}}

Folgende Scripts können helfen, Personen auf Pullsubscription zu migrieren:

```
			UPDATE Person
                SET SettingsXml.modify('replace value of (//PersonSettings/SyncMode/text())[1] with "Exchange2016Pull"')
            WHERE SettingsXml IS NOT NULL 
            AND person.id in (select id from person where IstImportiert = 1)

         UPDATE Person
                SET SettingsXml.modify('insert <SyncMode>Exchange2016Pull</SyncMode> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<SyncMode>'
		            AND person.id in (select id from person where IstImportiert = 1)  

		 UPDATE Person
                SET SettingsXml.modify('insert <Exchange2016PullSyncUrl>https://some-url/EWS/Exchange.asmx</Exchange2016PullSyncUrl> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<Exchange2016PullSyncUrl>'
		            AND person.id in (select id from person where IstImportiert = 1)

```

```
			UPDATE Person
                SET SettingsXml.modify('replace value of (//PersonSettings/SyncMode/text())[1] with "O365Pull"')
            WHERE SettingsXml IS NOT NULL 
            AND person.id in (select id from person where IstImportiert = 1)

         UPDATE Person
                SET SettingsXml.modify('insert <SyncMode>O365Pull</SyncMode> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<SyncMode>'
		            AND person.id in (select id from person where IstImportiert = 1)   

		 UPDATE Person
                SET SettingsXml.modify('insert <O365PullSyncUrl>https://outlook.office365.com/EWS/Exchange.asmx</O365PullSyncUrl> into /PersonSettings[1]')
            WHERE SettingsXml IS NOT NULL
            AND CAST(SettingsXml as nvarchar(max)) NOT LIKE '<O365PullSyncUrl>'
		            AND person.id in (select id from person where IstImportiert = 1)
```
