/*
  Zusatzdaten für die Szene listen-buchungen. Läuft einmal auf seed.sql.
  Die Szene wählt Spalten in der Buchungsliste. Das speichert ROOMS pro Person, deshalb bekommt sie mit laura.baumann ein eigenes Login.
  Die Buchungen liegen in 30 Tagen auf Berner Ressourcen, damit sie in den Kalender- und Planbildern anderer Bereiche nicht auftauchen.
*/
SET NOCOUNT ON;
GO
-- Eingabe ist Schweizer Lokalzeit, gespeichert wird UTC.
CREATE PROC #LbBook @id int OUTPUT, @res int, @org int, @verantw int, @tag int, @von varchar(5), @bis varchar(5), @titel nvarchar(200), @status int=4, @anz int=NULL, @anlass int=NULL, @parent int=NULL, @dauerTage int=0 AS
BEGIN
  DECLARE @d date=DATEADD(day,@tag,CAST(GETDATE() AS date)), @d2 date=DATEADD(day,@tag+@dauerTage,CAST(GETDATE() AS date));
  DECLARE @b datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d,120),' ',@von) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
  DECLARE @e datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d2,120),' ',@bis) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
  INSERT Reservation(ReservationId,RessourceId,RessourcetypId,StatusId,PersonOrganisatorId,PersonErstellerId,PersonVerantwortlicherId,AnlassId,Titel,Vorlaufbeginn,Beginn,Ende,Nachlaufende,AnzahlPersonen,IstPrivat,IstPersonRessourceReservation,Delay,IstCheckinBestaetigt,CreatedOn,ModifiedOn,MaskedIdentifier,FreeBusyStatus,IsTeamsMeeting,SyncDisabled,IsLocked,IsOutsideRoomBookingHorizon,CreationOrigin)
  SELECT @parent,@res,r.RessourcetypId,@status,@org,@org,@verantw,@anlass,@titel,@b,@b,@e,@e,@anz,0,0,0,0,GETUTCDATE(),GETUTCDATE(),NEWID(),CASE WHEN @status=5 THEN 'Free' ELSE 'Busy' END,0,0,0,0,'rooms' FROM Ressource r WHERE r.Id=@res;
  SET @id=SCOPE_IDENTITY();
END
GO
CREATE PROC #LbHistory @reservation int, @typ int, @user int, @stempel datetime, @rec bigint OUTPUT AS
BEGIN
  INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin)
  VALUES(@typ,'Reservation',CAST(@reservation AS varchar(20)),CAST(@user AS varchar(20)),@stempel,'rooms');
  SET @rec=SCOPE_IDENTITY();
END
GO
SET XACT_ABORT ON;
BEGIN TRAN;

INSERT Logon(LogontypId,PersonId,Name,Passwort,IstImportiert,MaskedIdentifier,FailedLogins,AllowBackendLogon)
SELECT 1,7,'laura.baumann',Passwort,0,NEWID(),0,1 FROM Logon WHERE Name='admin' AND NOT EXISTS (SELECT 1 FROM Logon WHERE Name='laura.baumann');

-- "Notifikation versenden" und die Verrechnung beim Annullieren brauchen Rechte, die sonst niemand hat. Sie gelten nur für laura.baumann.
DECLARE @rolle int,@gruppe int;
INSERT Rolle(Bezeichnung) VALUES(N'Mailversand (G)'); SET @rolle=SCOPE_IDENTITY();
INSERT RolleRecht(RolleId,RechtId,IstInTagen,IstAblaufend,IstImportiert) VALUES(@rolle,161,0,1,0),(@rolle,61,0,1,0);
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,MaxSerieWiederholungenMonatlich,MaxSerieWiederholungenWoechentlich,MaxSerieWiederholungenTaeglich,Benutzerkreis,UniqueKey,CheckinEinzelreservation,AbsSerienbegrenzung1,AbsSerienbegrenzung2,IstImportiert,MaxSerieWiederholungenYahrlich,MaxConcurrentBookings,Bezeichnung) SELECT Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,MaxSerieWiederholungenMonatlich,MaxSerieWiederholungenWoechentlich,MaxSerieWiederholungenTaeglich,Benutzerkreis,UniqueKey,CheckinEinzelreservation,AbsSerienbegrenzung1,AbsSerienbegrenzung2,IstImportiert,MaxSerieWiederholungenYahrlich,MaxConcurrentBookings,N'BG-Mailversand' FROM Gruppe WHERE Id=2; SET @gruppe=SCOPE_IDENTITY();
INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@gruppe,7,0);
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert) VALUES(@gruppe,@rolle,1,NULL,0,0,0);

DECLARE @rBantiger int=14,@rGurten int=13,@eBeamer int=17,@eWhiteboard int=21,@pParkplatz int=30,@fLieferwagen int=32,@apBern int=26;
DECLARE @sandra int=5,@thomas int=4,@anna int=1;

-- Fixes Equipment gibt es sonst nirgends: Der Raum Bantiger bekommt einen fest installierten Monitor.
DECLARE @eMonitor int,@bez uniqueidentifier=NEWID(),@besch uniqueidentifier=NEWID(),@feh uniqueidentifier=NEWID(),@mm uniqueidentifier=NEWID();
INSERT Ressource(RessourcetypId,StandortId,WorkflowId,PersonId,Name,BezeichnungOid,BeschreibungOid,IstAktiv,Vorlaufdauer,Nachlaufdauer,MinBuchdauer,MaxBuchdauer,Telefonnummer,IsPublic,Delay,KundeXml,FehlermeldungOid,CheckinAktiviert,NoShowDelay,SchnellbuchungDisabled,SettingsXml,MaskedIdentifier,FreeBusyStatus,FailedGetEventsAttempts,FailedSubscribeAttempts,AddTeamsMeetingByDefault,IsOnline,IsSyncMaster,MetadataOid,AddinVisibility)
SELECT RessourcetypId,StandortId,WorkflowId,PersonId,N'Monitor Bantiger',@bez,@besch,IstAktiv,Vorlaufdauer,Nachlaufdauer,MinBuchdauer,MaxBuchdauer,Telefonnummer,IsPublic,Delay,KundeXml,@feh,CheckinAktiviert,NoShowDelay,SchnellbuchungDisabled,SettingsXml,NEWID(),FreeBusyStatus,0,0,0,IsOnline,IsSyncMaster,@mm,AddinVisibility FROM Ressource WHERE Id=@eBeamer;
SET @eMonitor=SCOPE_IDENTITY();
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES
 ('Ressource',CAST(@eMonitor AS varchar(20)),@bez,'BezeichnungOid','de',N'Monitor Bantiger'),
 ('Ressource',CAST(@eMonitor AS varchar(20)),@besch,'BeschreibungOid','de',N'Fest installierter Monitor im Sitzungszimmer Bantiger');
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert)
SELECT GruppeId,RolleId,NULL,@eMonitor,IstGeerbt,IstRekursiv,0 FROM Berechtigung WHERE RessourceId=@eBeamer;
INSERT GliederungRessource(GliederungId,RessourceId) SELECT GliederungId,@eMonitor FROM GliederungRessource WHERE RessourceId=@eBeamer;
INSERT Ressourcemapping(RessourceParentId,RessourceChildId) VALUES(@rBantiger,@eMonitor);

-- Räume verlangen beim Kopieren eine Bestuhlung, deshalb bekommt Bantiger seine Standardbestuhlung.
INSERT RessourceBestuhlung(RessourceId,BestuhlungId,MwstId,IstStandard) VALUES(@rBantiger,1,1,1);

-- Anlass für den Tooltip in der Liste
DECLARE @anlass int,@d30 datetime=DATEADD(day,30,CAST(CAST(GETDATE() AS date) AS datetime));
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beschreibung,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(4,2,@sandra,@sandra,@anna,3,N'Projekt Intranet',N'Sitzungen des Projektteams Intranet',DATEADD(hour,8,@d30),DATEADD(hour,12,@d30),6,'<DefaultKunde/>');
SET @anlass=SCOPE_IDENTITY();

-- Die Hauptbuchung der Szene mit allem, was in den Symbolspalten und der Detailansicht vorkommt
DECLARE @b int,@sub int;
EXEC #LbBook @b OUTPUT,@rBantiger,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,6,@anlass;
UPDATE Reservation SET Kommentar=N'Bitte Sitzordnung U-Form',KommentarVertraulich=N'Budgetzahlen nur intern besprechen',KommentarTeilnehmer=N'Laptop mitnehmen',IstHauptreservation=1,BestuhlungId=1,KundeXml='<DefaultKunde />',IstBestellungGenehmigt=1 WHERE Id=@b; -- Die letzten beiden, damit Kopieren die Buchung nicht ändert und die Historik sauber bleibt.
EXEC #LbBook @sub OUTPUT,@eBeamer,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
EXEC #LbBook @sub OUTPUT,@eWhiteboard,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
EXEC #LbBook @sub OUTPUT,@eMonitor,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
EXEC #LbBook @sub OUTPUT,@pParkplatz,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
EXEC #LbBook @sub OUTPUT,@fLieferwagen,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
EXEC #LbBook @sub OUTPUT,@rGurten,@sandra,@anna,30,'09:00','11:00',N'Projektsitzung Intranet',4,NULL,@anlass,@b;
UPDATE Reservation SET BestuhlungId=1 WHERE Id=@sub;
INSERT Bestellung(AngebotId,AngebotszoneId,ReservationId,PersonId,BestellungNr,Beginn,Ende,Menge,Bezeichnung,Teilnehmer)
SELECT 1,1,@b,@sandra,'B-2001',DATEADD(minute,-15,Beginn),Beginn,6,N'Kaffee und Gipfeli',6 FROM Reservation WHERE Id=@b;
INSERT KostentraegerReservation(KostentraegerId,ReservationId,Anteil) SELECT TOP 1 Id,@b,100 FROM Kostentraeger ORDER BY Id;

-- Nachfolgende Buchung für den Hinweis im Sidepanel
EXEC #LbBook @sub OUTPUT,@rBantiger,@thomas,NULL,30,'11:15','12:00',N'Nachbesprechung Intranet',4,4;
UPDATE Reservation SET BestuhlungId=1 WHERE Id=@sub;

-- Annullierte Buchung mit Annullationsbemerkung
EXEC #LbBook @sub OUTPUT,@rBantiger,@sandra,NULL,31,'14:00','15:00',N'Abgesagte Projektsitzung',5,6;
UPDATE Reservation SET KommentarAnnullation=N'Projektleiterin verhindert' WHERE Id=@sub;

-- Laufende Buchung für die Symbole Terminieren und Freigeben. Sie läuft 90 Tage, damit die Szene auch später noch eine findet.
EXEC #LbBook @sub OUTPUT,@apBern,@thomas,NULL,-1,'00:00','23:00',N'Projektarbeitsplatz Intranet',4,NULL,NULL,NULL,90;

-- Historik der Hauptbuchung: Erstellung und zwei Änderungen
DECLARE @rec bigint,@t0 datetime=DATEADD(minute,-4320,GETUTCDATE()),@t1 datetime=DATEADD(minute,-2880,GETUTCDATE()),@t2 datetime=DATEADD(minute,-1440,GETUTCDATE());
EXEC #LbHistory @b,1,@sandra,@t0,@rec OUTPUT;
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES
 (@rec,'Titel',NULL,N'Projektsitzung'),(@rec,'AnzahlPersonen',NULL,'4'),(@rec,'Kommentar',NULL,N'Bitte Sitzordnung U-Form'),(@rec,'StatusId',NULL,'4');
EXEC #LbHistory @b,2,@sandra,@t1,@rec OUTPUT;
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES
 (@rec,'Titel',N'Projektsitzung',N'Projektsitzung Intranet'),(@rec,'AnzahlPersonen','4','6');
EXEC #LbHistory @b,2,@thomas,@t2,@rec OUTPUT;
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES
 (@rec,'KommentarVertraulich',NULL,N'Budgetzahlen nur intern besprechen'),(@rec,'KommentarTeilnehmer',NULL,N'Laptop mitnehmen');

-- Mailverlauf der Hauptbuchung
DECLARE @body nvarchar(max)=N'<div style="font-family:Arial,sans-serif;color:#222"><h2 style="color:#0a6ebd">Ihre Buchung ist bestätigt</h2><p>Guten Tag Sandra Frei</p><p>Ihre Buchung <b>Projektsitzung Intranet</b> im Raum Bantiger wurde erfasst.</p><p>Standort: Bern<br>Teilnehmende: 6<br>Catering: Kaffee und Gipfeli</p><p>Freundliche Grüsse<br>Facility Management Muster AG</p></div>';
DECLARE @xml xml=(SELECT @t0 AS DateTimeStamp,'true' AS IsBodyHtml,@body AS Body,N'Buchungsbestätigung: Projektsitzung Intranet' AS Subject,'rooms@muster-ag.example' AS MailFrom,'sandra.frei@muster-ag.example' AS [To],'anna.keller@muster-ag.example' AS CC,'true' AS ContentRendered FOR XML PATH('AktionSendMailSettings'),TYPE);
INSERT AktionHistory(AktiontypId,DateTimeStamp,PersonId,ReservationId,NotifikationtypId,AktionXml,CreatedById) VALUES(2,@t0,@sandra,@b,32,@xml,@sandra);

COMMIT;
SELECT @b AS Hauptbuchung;
