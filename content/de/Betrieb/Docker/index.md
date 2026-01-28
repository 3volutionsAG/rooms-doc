---
title: "Docker"
linkTitle: "Docker"
weight: 100
description: 'Docker images für den Betrieb von ROOMS'
---
<p style="text-align: justify">
Nebst der klassischen Installation via msi Paket kann ROOMS ebenfalls durch Dockerimages, welche durch 3volutions zur Verfügung gestellt werden, betrieben werden. Dabei werden drei Images in privaten registries angeboten. Der Zugang muss explizit angefordert werden. </p>

## Web
`registry.gitlab.com/3volutions/3v-rooms/rooms/rooms-web`

<p style="text-align: justify">
Das <i>rooms-web</i> image beinhaltet zusätzlich den DbUpdateManager. Dadurch ist es möglich, jeweils die korrespondierenden Migrationen zu der Softwareversion innerhalb des Images auszuführen. </p>

### Beispiele

- Alle möglichen Optionen, welche der DbUpdateManager zur Verfügung stellt, auflisten
  
  `docker run --rm -it --entrypoint "C:\Program Files (x86)\3volutions\DBUpdateManager\Library.DBUpdateManager.Console.exe" registry.gitlab.com/3volutions/3v-rooms/rooms/rooms-web:4.7.2202.3991-1809`

- Die Datenbank _rooms_ wird aktualisiert. Das Flag _-o_ löst automatisch Konflikte. 

  `docker run --rm -it --entrypoint "C:\Program Files (x86)\3volutions\DBUpdateManager\Library.DBUpdateManager.Console.exe" registry.gitlab.com/3volutions/3v-rooms/rooms/rooms-web:4.7.2202.3991-1809 -o -c "Data Source=localhost;Initial Catalog=rooms;User Id=sa;Password=secretpassword;Persist Security Info=true;MultipleActiveResultSets=True" -p c:\rooms\bin`

## Service

`registry.gitlab.com/3volutions/3v-rooms/rooms/rooms-service`

## Idp

`registry.gitlab.com/3volutions/3v-rooms/rooms/rooms-idp`