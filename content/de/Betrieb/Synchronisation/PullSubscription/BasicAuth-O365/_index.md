---
title: "Basic Authentification / O365 einrichten"
linkTitle: "Basic Authentification / O365 einrichten"
weight: 300
description:
---
### Basic Auth
SyncMode: Exchange2016Pull

RoomsAppSettings.config

```
	<add key="Exchange2016ServiceUser" value="user@domain" />
	<add key="Exchange2016ServicePassword" value="xxx" />
```

### OAuth 2.0
SyncMode: O365Pull

RoomsAppSettings.config

```
	<add key="ExchangeTenantId" value="xxx" />
	<add key="ExchangeAppId" value="xxx" />
	<add key="ExchangeClientSecret" value="xxx" />
```