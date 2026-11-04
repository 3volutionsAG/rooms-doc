/*
  Zusatzdaten für die Szene generell (Generell und Persönliche Einstellungen).
  Thomas Meier bekommt gespeicherte Listen und zwei zugewiesene Ressourcen.
  Läuft einmal nach seed.sql.
*/
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

DECLARE @thomas int=4;
DECLARE @filter xml=N'<ReservationLightWeightFilter><ActiveSubsidepanels/><GliederungtypSettingsCollection/><IstOrganisatorInaktiv>false</IstOrganisatorInaktiv><IstPersonRessourceReservationEquals>false</IstPersonRessourceReservationEquals><KlassifikationtypSettingsCollection/><LektionIds/><LektionLektionIds/><ReservationszeitpunktStundenBeruecksichtigen>2</ReservationszeitpunktStundenBeruecksichtigen><StandortList/><ZahlungKlassifikationtypSettingsCollection/></ReservationLightWeightFilter>';
DECLARE @info xml=N'<ListInfo><AutoRefresh>0</AutoRefresh><ColumnInfo><ColumnId>RessourceBezeichnung</ColumnId></ColumnInfo><ColumnInfo><ColumnId>Id</ColumnId></ColumnInfo><ColumnInfo><ColumnId>Titel</ColumnId></ColumnInfo><ColumnInfo><ColumnId>PersonOrganisatorName</ColumnId></ColumnInfo><ColumnInfo><ColumnId>Beginn</ColumnId></ColumnInfo><ColumnInfo><ColumnId>Ende</ColumnId></ColumnInfo><ColumnInfo><ColumnId>StatusBezeichnung</ColumnId></ColumnInfo><DefaultSortInstructionList><SortBy>Titel</SortBy><SortOrder>Ascending</SortOrder></DefaultSortInstructionList><DisplaySearch>false</DisplaySearch><PageIndex>0</PageIndex><PageSize>50</PageSize><Selection/></ListInfo>';

INSERT Filtersetting(PersonId,Suchbereich,IstPublic,BaseFilterType,BaseFilterXml,FiltersettingInfoType,FiltersettingInfoXml,Typ,Bezeichnung)
SELECT @thomas,'Reservationen',0,'Garaio.Products.Rooms.Core.LightWeightFilters.ReservationLightWeightFilter',@filter,'Garaio.Products.Rooms.Core.Helpers.FiltersettingInfo.ListInfo',@info,'Private',v.n
FROM (VALUES(N'Arbeitsplätze Zürich'),(N'Sitzungszimmer Bern'),(N'Workshops Marketing')) v(n);

-- Veröffentlichte Listen anderer Personen, damit "Hinzufügen oder Abonnieren" nicht leer ist.
INSERT Filtersetting(PersonId,Suchbereich,IstPublic,BaseFilterType,BaseFilterXml,FiltersettingInfoType,FiltersettingInfoXml,Typ,Bezeichnung)
SELECT p.Id,'Reservationen',0,'Garaio.Products.Rooms.Core.LightWeightFilters.ReservationLightWeightFilter',@filter,'Garaio.Products.Rooms.Core.Helpers.FiltersettingInfo.ListInfo',@info,'Published',v.n
FROM (VALUES(N'Sandra',N'Frei',N'Buchungen Facility Management'),(N'Nina',N'Schmid',N'Marketing Termine'),(N'David',N'Huber',N'Informatik Sitzungen')) v(vor,nach,n)
JOIN Person p ON p.Vorname=v.vor AND p.Nachname=v.nach;

-- Zugewiesene Ressourcen. Der Arbeitsplatz ist ab morgen gebucht, freitags freigegeben. So zeigt der Freigabe-Kalender beide Zustände.
DECLARE @arbeitsplatz int=(SELECT Id FROM Ressource WHERE Name=N'Arbeitsplatz Z-104');
DECLARE @parkplatz int=(SELECT Id FROM Ressource WHERE Name=N'Parkplatz P1');
INSERT PersonRessource(PersonId,RessourceId,Sortierung,AutomatischFreigeben) VALUES(@thomas,@arbeitsplatz,1,0),(@thomas,@parkplatz,2,0);

DECLARE @tag int=1, @d date, @b datetime, @e datetime;
WHILE @tag<=45
BEGIN
  SET @d=DATEADD(day,@tag,CAST(GETDATE() AS date));
  -- 0=Montag ... 4=Freitag, unabhängig von der Spracheinstellung des Servers
  IF (DATEDIFF(day,'19000101',@d)%7) IN (0,1,2,3)
  BEGIN
    SET @b=CAST(CAST(@d AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
    SET @e=CAST(CAST(DATEADD(day,1,@d) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
    INSERT Reservation(RessourceId,RessourcetypId,StatusId,PersonOrganisatorId,PersonErstellerId,Titel,Vorlaufbeginn,Beginn,Ende,Nachlaufende,IstPrivat,IstPersonRessourceReservation,Delay,IstCheckinBestaetigt,CreatedOn,ModifiedOn,MaskedIdentifier,FreeBusyStatus,IsTeamsMeeting,SyncDisabled,IsLocked,AllDayEvent)
    SELECT @arbeitsplatz,r.RessourcetypId,4,@thomas,@thomas,N'Arbeitsplatz Thomas Meier',@b,@b,@e,@e,0,1,0,0,GETUTCDATE(),GETUTCDATE(),NEWID(),'Busy',0,0,0,0 FROM Ressource r WHERE r.Id=@arbeitsplatz;
  END
  SET @tag+=1;
END

COMMIT;
