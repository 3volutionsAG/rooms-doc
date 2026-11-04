/*
  Fiktiver Datenbestand für die Doku-Screenshots ("Muster AG").
  Läuft einmal auf einer frischen, migrierten Kopie von rooms_init. Siehe README.md.
  Alle Buchungen liegen relativ zum Ausführungsdatum, damit Kalender und Listen gefüllt sind.
*/
SET NOCOUNT ON;
GO
-- Setzt einen übersetzten Text und legt ihn an, falls er fehlt.
CREATE PROC #Txt @t varchar(100), @r int, @f varchar(100), @oid uniqueidentifier, @v nvarchar(max) AS
BEGIN
  IF EXISTS (SELECT 1 FROM Text WHERE TableName=@t AND RecordId=CAST(@r AS varchar(20)) AND FieldName=@f)
    UPDATE Text SET Value=@v WHERE TableName=@t AND RecordId=CAST(@r AS varchar(20)) AND FieldName=@f;
  ELSE
    INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES(@t,CAST(@r AS varchar(20)),@oid,@f,'de',@v);
END
GO
-- Benennt einen bestehenden Text in allen Sprachvarianten um, damit keine Altwerte durchscheinen.
CREATE PROC #Ren @t varchar(100), @r int, @v nvarchar(max), @f varchar(100)='BezeichnungOid' AS
  UPDATE Text SET Value=@v WHERE TableName=@t AND RecordId=CAST(@r AS varchar(20)) AND FieldName=@f;
GO
CREATE PROC #Person @id int OUTPUT, @vor nvarchar(100), @nach nvarchar(100), @nr nvarchar(50), @funktion nvarchar(100), @mobile nvarchar(30), @firma int, @gruppe int, @telefon nvarchar(30) AS
BEGIN
  DECLARE @a uniqueidentifier=NEWID(), @fu uniqueidentifier=NEWID();
  DECLARE @n nvarchar(200)=@vor+'.'+@nach;
  DECLARE @mail nvarchar(200)=LOWER(REPLACE(REPLACE(REPLACE(@n COLLATE Latin1_General_CI_AS,N'ü' COLLATE Latin1_General_CI_AS,'ue'),N'ö' COLLATE Latin1_General_CI_AS,'oe'),N'ä' COLLATE Latin1_General_CI_AS,'ae'))+'@muster-ag.example';
  INSERT Person(KulturId,ZeitzoneId,FormatId,GeschlechtId,PersonalNummer,Nachname,Vorname,Mobile,Mail,Initialen,IstFormularErstellt,IstImportiert,SettingsXml,KundeXml,AnredeOid,FunktionOid,MaskedIdentifier,MailConfirmed,Active,CreatedOn,ModifiedOn)
  SELECT p.KulturId,p.ZeitzoneId,p.FormatId,p.GeschlechtId,@nr,@nach,@vor,@mobile,@mail,LEFT(@vor,1)+LEFT(@nach,1),0,0,p.SettingsXml,p.KundeXml,@a,@fu,NEWID(),1,1,GETUTCDATE(),GETUTCDATE() FROM Person p WHERE p.Id=5;
  SET @id=SCOPE_IDENTITY();
  EXEC #Txt 'Person',@id,'FunktionOid',@fu,@funktion;
  INSERT FirmaPerson(FirmaId,PersonId,TelefonIntern,IstImportiert) VALUES(@firma,@id,@telefon,0);
  INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@gruppe,@id,0);
END
GO
CREATE PROC #Res @id int OUTPUT, @typ int, @st int, @wf int, @name nvarchar(100), @beschr nvarchar(400), @verantw int=NULL, @tel nvarchar(30)=NULL AS
BEGIN
  DECLARE @b uniqueidentifier=NEWID(), @d uniqueidentifier=NEWID(), @e uniqueidentifier=NEWID(), @m uniqueidentifier=NEWID();
  INSERT Ressource(RessourcetypId,StandortId,WorkflowId,PersonId,Name,BezeichnungOid,BeschreibungOid,IstAktiv,Vorlaufdauer,Nachlaufdauer,MinBuchdauer,MaxBuchdauer,Telefonnummer,IsPublic,Delay,KundeXml,FehlermeldungOid,CheckinAktiviert,NoShowDelay,SchnellbuchungDisabled,SettingsXml,MaskedIdentifier,FreeBusyStatus,FailedGetEventsAttempts,FailedSubscribeAttempts,AddTeamsMeetingByDefault,IsOnline,IsSyncMaster,MetadataOid,AddinVisibility)
  VALUES(@typ,@st,@wf,@verantw,@name,@b,@d,1,0,0,0,0,@tel,0,0,'<DefaultKunde/>',@e,0,15,0,'<RessourceSettings/>',NEWID(),'Busy',0,0,0,0,0,@m,'Bookable');
  SET @id=SCOPE_IDENTITY();
  EXEC #Txt 'Ressource',@id,'BezeichnungOid',@b,@name;
  EXEC #Txt 'Ressource',@id,'BeschreibungOid',@d,@beschr;
  -- Vererbte Berechtigungen wie bei den bestehenden Ressourcen
  INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert)
  SELECT GruppeId,RolleId,NULL,@id,IstGeerbt,IstRekursiv,0 FROM Berechtigung WHERE RessourceId=1;
END
GO
CREATE PROC #Book @id int OUTPUT, @res int, @org int, @tag int, @von varchar(5), @bis varchar(5), @titel nvarchar(200), @status int=4, @anz int=NULL, @kommentar nvarchar(400)=NULL, @anlass int=NULL, @serie int=NULL, @privat bit=0 AS
BEGIN
  -- Eingabe ist Schweizer Lokalzeit, gespeichert wird UTC.
  DECLARE @d date=DATEADD(day,@tag,CAST(GETDATE() AS date));
  DECLARE @b datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d,120),' ',@von) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
  DECLARE @e datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d,120),' ',@bis) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
  INSERT Reservation(RessourceId,RessourcetypId,StatusId,PersonOrganisatorId,PersonErstellerId,AnlassId,SerieId,Titel,Vorlaufbeginn,Beginn,Ende,Nachlaufende,AnzahlPersonen,Kommentar,IstPrivat,IstPersonRessourceReservation,Delay,IstCheckinBestaetigt,CreatedOn,ModifiedOn,MaskedIdentifier,FreeBusyStatus,IsTeamsMeeting,SyncDisabled,IsLocked,AllDayEvent)
  SELECT @res,r.RessourcetypId,@status,@org,@org,@anlass,@serie,@titel,@b,@b,@e,@e,@anz,@kommentar,@privat,0,0,0,GETUTCDATE(),GETUTCDATE(),NEWID(),CASE WHEN @status=5 THEN 'Free' ELSE 'Busy' END,0,0,0,0 FROM Ressource r WHERE r.Id=@res;
  SET @id=SCOPE_IDENTITY();
END
GO
SET XACT_ABORT ON;
BEGIN TRAN;

-- rooms_init hat diese Tabellen auf 0 zurückgesetzt und nie benutzt. Die erste Zeile bekäme sonst die Id 0, und mit einer Bestellung mit Id 0 scheitert die Buchungsliste beim Laden.
DBCC CHECKIDENT (KostentraegerReservation, RESEED, 1) WITH NO_INFOMSGS;
DBCC CHECKIDENT (Teilnehmer, RESEED, 1) WITH NO_INFOMSGS;
DBCC CHECKIDENT (Bestellung, RESEED, 1) WITH NO_INFOMSGS;

-----------------------------------------------------------------------------------------------------
-- Logons. Das Passwort "Docs-Demo-2026!" gilt nur in dieser lokalen Demo-Datenbank.
-----------------------------------------------------------------------------------------------------
DECLARE @hash nvarchar(100)='A+gUjDguCYZ3HuqCGuDil+YLGXyL8PaX9kdAJxAoaVM=';
DELETE Logon WHERE LogontypId=6;
UPDATE Logon SET Name=N'admin', Passwort=@hash, FailedLogins=0, LockedUntil=NULL WHERE LogontypId=1 AND PersonId=1;
INSERT Logon(LogontypId,PersonId,Name,Passwort,IstImportiert,MaskedIdentifier,FailedLogins,AllowBackendLogon) VALUES
 (1,4,'thomas.meier',@hash,0,NEWID(),0,1),(1,5,'sandra.frei',@hash,0,NEWID(),0,1),(1,6,'reto.brunner',@hash,0,NEWID(),0,1);

-----------------------------------------------------------------------------------------------------
-- Firmen und Abteilungen
-----------------------------------------------------------------------------------------------------
UPDATE Firma SET Bezeichnung=N'Muster AG', KostenstellenName=N'Muster AG', KostenstellenCode='1000', FirmaNummer='1000', Abteilung=N'Geschäftsleitung', Mail='info@muster-ag.example', ExternalId=NULL WHERE Id=1;
UPDATE Firma SET Bezeichnung=N'Muster AG Informatik', KostenstellenName=N'Informatik', KostenstellenCode='2000', FirmaNummer='2000', Abteilung=N'Informatik', Mail='it@muster-ag.example' WHERE Id=3;
DECLARE @fMkt int,@fHr int,@fFin int,@fFac int,@fExt int;
INSERT Firma(FirmaNummer,KostenstellenName,KostenstellenCode,IstExtern,IstImportiert,KundeXml,Abteilung,Bezeichnung,Mail,Verified,CreatedOn,ModifiedOn) VALUES('3000',N'Marketing','3000',0,0,'<DefaultKunde/>',N'Marketing',N'Muster AG Marketing','marketing@muster-ag.example',1,GETUTCDATE(),GETUTCDATE()); SET @fMkt=SCOPE_IDENTITY();
INSERT Firma(FirmaNummer,KostenstellenName,KostenstellenCode,IstExtern,IstImportiert,KundeXml,Abteilung,Bezeichnung,Mail,Verified,CreatedOn,ModifiedOn) VALUES('4000',N'Personal','4000',0,0,'<DefaultKunde/>',N'Personal',N'Muster AG Personal','hr@muster-ag.example',1,GETUTCDATE(),GETUTCDATE()); SET @fHr=SCOPE_IDENTITY();
INSERT Firma(FirmaNummer,KostenstellenName,KostenstellenCode,IstExtern,IstImportiert,KundeXml,Abteilung,Bezeichnung,Mail,Verified,CreatedOn,ModifiedOn) VALUES('5000',N'Finanzen','5000',0,0,'<DefaultKunde/>',N'Finanzen',N'Muster AG Finanzen','finanzen@muster-ag.example',1,GETUTCDATE(),GETUTCDATE()); SET @fFin=SCOPE_IDENTITY();
INSERT Firma(FirmaNummer,KostenstellenName,KostenstellenCode,IstExtern,IstImportiert,KundeXml,Abteilung,Bezeichnung,Mail,Verified,CreatedOn,ModifiedOn) VALUES('6000',N'Facility Management','6000',0,0,'<DefaultKunde/>',N'Facility Management',N'Muster AG Facility Management','facility@muster-ag.example',1,GETUTCDATE(),GETUTCDATE()); SET @fFac=SCOPE_IDENTITY();
INSERT Firma(FirmaNummer,IstExtern,IstImportiert,KundeXml,Bezeichnung,Mail,Verified,CreatedOn,ModifiedOn) VALUES('9000',1,0,'<DefaultKunde/>',N'Alpina Consulting GmbH','kontakt@alpina-consulting.example',1,GETUTCDATE(),GETUTCDATE()); SET @fExt=SCOPE_IDENTITY();

-----------------------------------------------------------------------------------------------------
-- Gruppen
-----------------------------------------------------------------------------------------------------
DECLARE @gFacility int,@gEmpfang int,@gTeam int;
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(0,1,0,0,0,N'Facility Management'); SET @gFacility=SCOPE_IDENTITY();
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(0,1,0,0,0,N'Empfang'); SET @gEmpfang=SCOPE_IDENTITY();
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(0,0,1,0,0,N'Projektteam Umzug'); SET @gTeam=SCOPE_IDENTITY();

-----------------------------------------------------------------------------------------------------
-- Personen. Die Personen aus rooms_init werden umbenannt, damit Rollen und Logons erhalten bleiben.
-----------------------------------------------------------------------------------------------------
UPDATE Person SET Vorname=N'Anna',    Nachname=N'Keller',  Mail='anna.keller@muster-ag.example',   Initialen='AK', PersonalNummer='10001', Mobile='+41 79 555 01 01', ExternalId=NULL, AzureObjectId=NULL WHERE Id=1;
UPDATE Person SET Vorname=N'Marco',   Nachname=N'Steiner', Mail='marco.steiner@muster-ag.example', Initialen='MS', PersonalNummer='10002', Mobile='+41 79 555 01 02', ExternalId=NULL, AzureObjectId=NULL WHERE Id=3;
UPDATE Person SET Vorname=N'Thomas',  Nachname=N'Meier',   Mail='thomas.meier@muster-ag.example',  Initialen='TM', PersonalNummer='10003', Mobile='+41 79 555 01 03' WHERE Id=4;
UPDATE Person SET Vorname=N'Sandra',  Nachname=N'Frei',    Mail='sandra.frei@muster-ag.example',   Initialen='SF', PersonalNummer='10004', Mobile='+41 79 555 01 04' WHERE Id=5;
UPDATE Person SET Vorname=N'Reto',    Nachname=N'Brunner', Mail='reto.brunner@muster-ag.example',  Initialen='RB', PersonalNummer='10005', Mobile='+41 79 555 01 05' WHERE Id=6;
UPDATE Person SET Vorname=N'Laura',   Nachname=N'Baumann', Mail='laura.baumann@muster-ag.example', Initialen='LB', PersonalNummer='10006', Mobile='+41 79 555 01 06', ExternalId=NULL, AzureObjectId=NULL WHERE Id=7;
UPDATE Person SET Vorname=N'Extern',  Nachname=N'Platzhalter', Mail='extern@muster-ag.example',    Initialen='EP', PersonalNummer='10007' WHERE Id=8;
EXEC #Ren 'Person',1,N'Leiterin Facility Management','FunktionOid';
EXEC #Ren 'Person',3,N'Systemadministrator','FunktionOid';
EXEC #Ren 'Person',4,N'Teamleiter Empfang','FunktionOid';
EXEC #Ren 'Person',5,N'Projektleiterin','FunktionOid';
EXEC #Ren 'Person',6,N'Sachbearbeiter Finanzen','FunktionOid';
EXEC #Ren 'Person',7,N'Applikationsverantwortliche','FunktionOid';
EXEC #Ren 'Person',8,N'Platzhalter für externe Buchungen','FunktionOid';
UPDATE FirmaPerson SET TelefonIntern='+41 44 555 10 01' WHERE PersonId=1;
UPDATE FirmaPerson SET FirmaId=3, TelefonIntern='+41 44 555 10 02' WHERE PersonId=3;
UPDATE FirmaPerson SET TelefonIntern='+41 44 555 10 03' WHERE PersonId=4;
UPDATE FirmaPerson SET FirmaId=@fMkt, TelefonIntern='+41 44 555 10 04' WHERE PersonId=5;
UPDATE FirmaPerson SET FirmaId=@fFin, TelefonIntern='+41 44 555 10 05' WHERE PersonId=6;
UPDATE FirmaPerson SET TelefonIntern='+41 44 555 10 06' WHERE PersonId=7;
DELETE PersonImage;

DECLARE @pNina int,@pDavid int,@pClaudia int,@pPatrick int,@pMelanie int,@pSimon int,@pJulia int,@pDaniel int,@pPetra int,@pLena int,@pLuca int,@pEva int,@pBeat int,@pSarah int,@pFabian int;
EXEC #Person @pNina OUTPUT,   N'Nina',   N'Schmid',  '10010',N'Marketing Managerin','+41 79 555 02 10',@fMkt,3,'+41 44 555 11 10';
EXEC #Person @pDavid OUTPUT,  N'David',  N'Huber',   '10011',N'Software Engineer','+41 79 555 02 11',3,3,'+41 44 555 11 11';
EXEC #Person @pClaudia OUTPUT,N'Claudia',N'Weber',   '10012',N'HR Business Partnerin','+41 79 555 02 12',@fHr,3,'+41 44 555 11 12';
EXEC #Person @pPatrick OUTPUT,N'Patrick',N'Graf',    '10013',N'Hauswart','+41 79 555 02 13',@fFac,5,'+41 44 555 11 13';
EXEC #Person @pMelanie OUTPUT,N'Melanie',N'Roth',    '10014',N'Empfangsmitarbeiterin','+41 79 555 02 14',1,5,'+41 44 555 11 14';
EXEC #Person @pSimon OUTPUT,  N'Simon',  N'Fischer', '10015',N'Controller','+41 79 555 02 15',@fFin,3,'+41 44 555 11 15';
EXEC #Person @pJulia OUTPUT,  N'Julia',  N'Moser',   '10016',N'Assistentin der Geschäftsleitung','+41 79 555 02 16',1,3,'+41 44 555 11 16';
EXEC #Person @pDaniel OUTPUT, N'Daniel', N'Wyss',    '10017',N'CEO','+41 79 555 02 17',1,3,'+41 44 555 11 17';
EXEC #Person @pPetra OUTPUT,  N'Petra',  N'Zbinden', '10018',N'Leiterin Personal','+41 79 555 02 18',@fHr,3,'+41 44 555 11 18';
EXEC #Person @pLena OUTPUT,   N'Lena',   N'Gerber',  '10019',N'Lernende','+41 79 555 02 19',@fHr,4,'+41 44 555 11 19';
EXEC #Person @pLuca OUTPUT,   N'Luca',   N'Ammann',  '10020',N'Systemtechniker','+41 79 555 02 20',3,3,'+41 44 555 11 20';
EXEC #Person @pEva OUTPUT,    N'Eva',    N'Lüthi',   '10021',N'Marketing Spezialistin','+41 79 555 02 21',@fMkt,3,'+41 44 555 11 21';
EXEC #Person @pBeat OUTPUT,   N'Beat',   N'Kunz',    '10022',N'Facility Manager','+41 79 555 02 22',@fFac,5,'+41 44 555 11 22';
EXEC #Person @pSarah OUTPUT,  N'Sarah',  N'Vogel',   '20001',N'Senior Consultant','+41 79 555 03 01',@fExt,4,NULL;
EXEC #Person @pFabian OUTPUT, N'Fabian', N'Egli',    '20002',N'Consultant','+41 79 555 03 02',@fExt,4,NULL;

INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@gFacility,1,0),(@gFacility,@pPatrick,0),(@gFacility,@pBeat,0),(@gEmpfang,4,0),(@gEmpfang,@pMelanie,0),(@gTeam,5,0),(@gTeam,@pDavid,0),(@gTeam,@pBeat,0),(@gTeam,@pJulia,0);

-----------------------------------------------------------------------------------------------------
-- Kostenträger
-----------------------------------------------------------------------------------------------------
DECLARE @k1 int,@k2 int,@k3 int,@k4 int,@k5 int,@k6 int;
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','1000',N'Geschäftsleitung',N'Unternehmensführung',0,1); SET @k1=SCOPE_IDENTITY();
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','2000',N'Informatik',N'Support',0,1); SET @k2=SCOPE_IDENTITY();
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','3000',N'Marketing',N'Verkauf',0,1); SET @k3=SCOPE_IDENTITY();
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','4000',N'Personal',N'Support',0,1); SET @k4=SCOPE_IDENTITY();
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','5000',N'Finanzen',N'Support',0,1); SET @k5=SCOPE_IDENTITY();
INSERT Kostentraeger(TypCode,Nummer,Beschreibung,Geschaeftsbereich,IstImportiert,IstVerrechenbar) VALUES('0','8100',N'Projekt Umzug Zürich',N'Projekte',0,1); SET @k6=SCOPE_IDENTITY();
INSERT FirmaKostentraeger(FirmaId,KostentraegerId,IstImportiert) VALUES(1,@k1,0),(3,@k2,0),(@fMkt,@k3,0),(@fHr,@k4,0),(@fFin,@k5,0);
INSERT KostentraegerPerson(KostentraegerId,PersonId,Anteil,IstImportiert) VALUES(@k1,1,100,0),(@k2,3,100,0),(@k3,5,100,0),(@k5,6,100,0),(@k3,@pNina,100,0),(@k2,@pDavid,100,0);

-----------------------------------------------------------------------------------------------------
-- Stammdaten umbenennen
-----------------------------------------------------------------------------------------------------
-- rooms_init enthält Teilrollen "- Migrated" mit je einem früher globalen, heute lokalen Recht. Empfohlen sind getrennte
-- Rollen für globale Rechte (G) und lokale Rechte (S). Die Demo führt die Rechte deshalb in die passende (S)-Rolle über.
INSERT RolleRecht(RolleId,RechtId,GueltigkeitDauer,IstInTagen,IstAblaufend,IstImportiert)
SELECT DISTINCT z.ziel,rr.RechtId,rr.GueltigkeitDauer,rr.IstInTagen,rr.IstAblaufend,0
FROM RolleRecht rr JOIN (VALUES (33,29),(35,29),(38,29),(41,29),(34,31),(36,31),(39,31),(42,31),(37,23),(40,23)) z(alt,ziel) ON z.alt=rr.RolleId
WHERE NOT EXISTS (SELECT 1 FROM RolleRecht x WHERE x.RolleId=z.ziel AND x.RechtId=rr.RechtId);
DELETE Berechtigung WHERE RolleId BETWEEN 33 AND 42;
DELETE RolleRecht WHERE RolleId BETWEEN 33 AND 42;
DELETE Rolle WHERE Id BETWEEN 33 AND 42;
EXEC #Ren 'Gliederung',17,N'Cafeteria';
EXEC #Ren 'Bestuhlung',3,N'Theater'; EXEC #Ren 'Bestuhlung',4,N'Klassenzimmer'; EXEC #Ren 'Bestuhlung',5,N'Bankett'; EXEC #Ren 'Bestuhlung',6,N'Parlamentarisch';
EXEC #Ren 'Beilage',1,N'Bedienungsanleitung Beamer'; EXEC #Ren 'Beilage',2,N'Kabelrolle 10 m'; EXEC #Ren 'Beilage',3,N'Raumausstattung';
EXEC #Ren 'Dienstleister',1,N'Catering Muster AG'; EXEC #Ren 'Dienstleister',1,N'Interner Cateringdienst','BeschreibungOid';
EXEC #Ren 'Angebotszone',1,N'Catering Zürich'; EXEC #Ren 'Angebotszone',1,N'Lieferungen in die Räume am Standort Zürich','BeschreibungOid';
EXEC #Ren 'Angebotkategorie',1,N'Kaffee & Tee';
EXEC #Ren 'Angebot',1,N'Kaffee und Gipfeli'; EXEC #Ren 'Angebot',2,N'Mineralwasser 0.5 l'; EXEC #Ren 'Angebot',2,N'Mineralwasser mit oder ohne Kohlensäure','BeschreibungOid'; EXEC #Ren 'Angebot',3,N'Apfelschorle 0.5 l'; EXEC #Ren 'Angebot',3,N'Apfelschorle aus der Region','BeschreibungOid';
EXEC #Ren 'Angebot',6,N'Apéro riche pro Person'; EXEC #Ren 'Angebot',6,N'Apéro riche pro Person','BeschreibungOid';
EXEC #Ren 'Anlassstatus',2,N'Neu';
EXEC #Ren 'Anlasstyp',2,N'Interne Veranstaltung'; EXEC #Ren 'Anlasstyp',3,N'Kundenanlass';
EXEC #Ren 'Anlasstyp',2,N'Ohne Jobmanager-Funktion','ZusatzOid'; EXEC #Ren 'Anlasstyp',3,N'Mit Jobmanager-Funktion','ZusatzOid';
EXEC #Ren 'Requestworkflow',1,N'Standard-Anfrageprozess';
EXEC #Ren 'Workflow',1,N'Provisorisch mit Freigabe'; EXEC #Ren 'Workflow',2,N'Direkt definitiv';
EXEC #Ren 'Standort',1,N'Die Standorte der Muster AG in der Schweiz','BeschreibungOid';
EXEC #Ren 'Standort',3,N'Geschäftsstelle Bern','BeschreibungOid';
EXEC #Ren 'Standort',9,N'Hauptsitz Zürich','BeschreibungOid';
UPDATE Standort SET PersonId=1 WHERE Id IN (1,6,9);

-----------------------------------------------------------------------------------------------------
-- Ressourcen. Standorte: 9 Zürich, 8 Wallisellen, 3 Bern, 11 Thun.
-----------------------------------------------------------------------------------------------------
UPDATE Ressource SET Name=N'Eiger', StandortId=9, RessourcetypId=1, WorkflowId=2, PersonId=1, Telefonnummer='+41 44 555 20 01', TarifkategorieId=NULL WHERE Id=1;
EXEC #Ren 'Ressource',1,N'Eiger'; EXEC #Ren 'Ressource',1,N'Sitzungszimmer für zwölf Personen mit Videokonferenz','BeschreibungOid';
UPDATE Ressource SET Name=N'Beamer Epson 1', StandortId=9, WorkflowId=2 WHERE Id=2;
EXEC #Ren 'Ressource',2,N'Beamer Epson 1'; EXEC #Ren 'Ressource',2,N'Mobiler Full-HD-Beamer mit HDMI-Anschluss','BeschreibungOid';
UPDATE Ressource SET Name=N'Kabelrolle Zürich', StandortId=9 WHERE Id=3; EXEC #Ren 'Ressource',3,N'Kabelrolle Zürich'; EXEC #Ren 'Ressource',3,N'Kabelrolle 10 m','BeschreibungOid';
UPDATE Ressource SET Name=N'Kabelrolle Bern', StandortId=3 WHERE Id=4;   EXEC #Ren 'Ressource',4,N'Kabelrolle Bern';   EXEC #Ren 'Ressource',4,N'Kabelrolle 10 m','BeschreibungOid';
UPDATE Ressource SET Name=N'Kabelrolle Thun', StandortId=11 WHERE Id=5;  EXEC #Ren 'Ressource',5,N'Kabelrolle Thun';   EXEC #Ren 'Ressource',5,N'Kabelrolle 10 m','BeschreibungOid';
-- Die alte Zuordnung aus rooms_init (Raum -> Beamer) passt nicht mehr
DELETE Ressourcemapping;

DECLARE @rEiger int=1,@rMoench int,@rJungfrau int,@rPilatus int,@rSaentis int,@rRigi int,@rGlatt int,@rToess int,@rGurten int,@rBantiger int,@rNiesen int,@rStockhorn int;
DECLARE @eBeamer2 int,@eFlip1 int,@eFlip2 int,@eVc int,@eWb int,@ap1 int,@ap2 int,@ap3 int,@ap4 int,@ap5 int,@pp1 int,@pp2 int,@pp3 int,@pp4 int,@f1 int,@f2 int;
EXEC #Res @rMoench OUTPUT,1,9,2,N'Mönch',N'Sitzungszimmer für acht Personen',1,'+41 44 555 20 02';
EXEC #Res @rJungfrau OUTPUT,1,9,2,N'Jungfrau',N'Grosses Sitzungszimmer für zwanzig Personen',1,'+41 44 555 20 03';
EXEC #Res @rPilatus OUTPUT,1,9,2,N'Pilatus',N'Kleines Besprechungszimmer für sechs Personen',1,'+41 44 555 20 04';
EXEC #Res @rSaentis OUTPUT,1,9,1,N'Säntis',N'Aula für Veranstaltungen bis 120 Personen. Buchungen werden geprüft.',1,'+41 44 555 20 05';
EXEC #Res @rRigi OUTPUT,1,9,2,N'Rigi',N'Fokusraum für zwei bis vier Personen',1,NULL;
EXEC #Res @rGlatt OUTPUT,1,8,2,N'Glatt',N'Sitzungszimmer für acht Personen',1,'+41 44 555 21 01';
EXEC #Res @rToess OUTPUT,1,8,2,N'Töss',N'Sitzungszimmer für zwölf Personen',1,'+41 44 555 21 02';
EXEC #Res @rGurten OUTPUT,1,3,2,N'Gurten',N'Sitzungszimmer für zehn Personen',4,'+41 31 555 30 01';
EXEC #Res @rBantiger OUTPUT,1,3,2,N'Bantiger',N'Besprechungszimmer für sechs Personen',4,'+41 31 555 30 02';
EXEC #Res @rNiesen OUTPUT,1,11,2,N'Niesen',N'Schulungsraum für sechzehn Personen',4,'+41 33 555 40 01';
EXEC #Res @rStockhorn OUTPUT,1,11,1,N'Stockhorn',N'Schulungsraum für vierzig Personen',4,'+41 33 555 40 02';
EXEC #Res @eBeamer2 OUTPUT,2,3,2,N'Beamer Epson 2',N'Mobiler Full-HD-Beamer mit HDMI-Anschluss';
EXEC #Res @eFlip1 OUTPUT,2,9,2,N'Flipchart 1',N'Flipchart mit Papier und Stiften';
EXEC #Res @eFlip2 OUTPUT,2,9,2,N'Flipchart 2',N'Flipchart mit Papier und Stiften';
EXEC #Res @eVc OUTPUT,2,9,2,N'Videokonferenz-Set',N'Kamera und Konferenzmikrofon auf Rollwagen';
EXEC #Res @eWb OUTPUT,2,3,2,N'Whiteboard mobil',N'Beidseitig beschreibbares Whiteboard';
EXEC #Res @ap1 OUTPUT,3,9,2,N'Arbeitsplatz Z-101',N'Arbeitsplatz mit Dockingstation und zwei Bildschirmen';
EXEC #Res @ap2 OUTPUT,3,9,2,N'Arbeitsplatz Z-102',N'Arbeitsplatz mit Dockingstation und zwei Bildschirmen';
EXEC #Res @ap3 OUTPUT,3,9,2,N'Arbeitsplatz Z-103',N'Arbeitsplatz mit Dockingstation';
EXEC #Res @ap4 OUTPUT,3,9,2,N'Arbeitsplatz Z-104',N'Arbeitsplatz mit Dockingstation';
EXEC #Res @ap5 OUTPUT,3,3,2,N'Arbeitsplatz B-201',N'Arbeitsplatz mit Dockingstation';
EXEC #Res @pp1 OUTPUT,4,9,2,N'Parkplatz P1',N'Aussenparkplatz';
EXEC #Res @pp2 OUTPUT,4,9,2,N'Parkplatz P2',N'Aussenparkplatz';
EXEC #Res @pp3 OUTPUT,4,9,2,N'Parkplatz E1',N'Parkplatz mit Ladestation';
EXEC #Res @pp4 OUTPUT,4,3,2,N'Parkplatz B1',N'Aussenparkplatz';
EXEC #Res @f1 OUTPUT,5,9,2,N'Elektroauto ZH 555 101',N'Poolfahrzeug mit fünf Sitzplätzen';
EXEC #Res @f2 OUTPUT,5,3,2,N'Lieferwagen BE 555 201',N'Lieferwagen für Materialtransporte';

-- Raumtypen und Equipmenttypen (Gliederungen)
INSERT GliederungRessource(GliederungId,RessourceId) SELECT g,r FROM (VALUES
 (1,@rMoench),(1,@rJungfrau),(1,@rPilatus),(1,@rGlatt),(1,@rToess),(1,@rGurten),(1,@rBantiger),
 (25,@rJungfrau),(25,@rGurten),(16,@rSaentis),(18,@rRigi),(23,@rNiesen),(23,@rStockhorn),
 (2,@eBeamer2),(6,@eFlip1),(6,@eFlip2),(13,@eWb),(4,@eVc)) v(g,r);

-- Bestuhlungen
INSERT RessourceBestuhlung(RessourceId,BestuhlungId,MwstId,IstStandard)
SELECT r,b,1,s FROM (VALUES (@rMoench,1,1),(@rMoench,2,0),(@rJungfrau,1,1),(@rJungfrau,2,0),(@rJungfrau,3,0),(@rSaentis,3,1),(@rSaentis,5,0),(@rSaentis,4,0),(@rNiesen,4,1),(@rNiesen,2,0),(@rGurten,1,1)) v(r,b,s);

-- Catering für die Zürcher Räume
INSERT AngebotszoneRessource(AngebotszoneId,RessourceId) SELECT 1,r FROM (VALUES(@rMoench),(@rJungfrau),(@rPilatus),(@rSaentis)) v(r);

-- Raumeinheiten
DECLARE @rt1 int,@rtO uniqueidentifier=NEWID(),@u1 int,@u2 int,@o1 uniqueidentifier=NEWID(),@o2 uniqueidentifier=NEWID(),@o3 uniqueidentifier=NEWID(),@o4 uniqueidentifier=NEWID();
INSERT RaumeinheitTyp(BezeichnungOid) VALUES(@rtO); SET @rt1=SCOPE_IDENTITY(); EXEC #Txt 'RaumeinheitTyp',@rt1,'BezeichnungOid',@rtO,N'Bürofläche';
INSERT Raumeinheit(StandortId,BezeichnungOid,BeschreibungOid,AnzahlPersonen,Flaeche,Hoehe,Gewichtung,RaumeinheitTypId,IstAktiv) VALUES(9,@o1,@o2,12,48,3,1,@rt1,1); SET @u1=SCOPE_IDENTITY();
EXEC #Txt 'Raumeinheit',@u1,'BezeichnungOid',@o1,N'Büro Z-1.04'; EXEC #Txt 'Raumeinheit',@u1,'BeschreibungOid',@o2,N'Grossraumbüro im ersten Stock';
INSERT Raumeinheit(StandortId,BezeichnungOid,BeschreibungOid,AnzahlPersonen,Flaeche,Hoehe,Gewichtung,RaumeinheitTypId,IstAktiv) VALUES(3,@o3,@o4,6,24,2.8,1,@rt1,1); SET @u2=SCOPE_IDENTITY();
EXEC #Txt 'Raumeinheit',@u2,'BezeichnungOid',@o3,N'Büro B-2.01'; EXEC #Txt 'Raumeinheit',@u2,'BeschreibungOid',@o4,N'Büro der Geschäftsstelle Bern';

-----------------------------------------------------------------------------------------------------
-- Anlässe und Anfragen
-----------------------------------------------------------------------------------------------------
DECLARE @heute date=CAST(GETDATE() AS date),@a1 int,@a2 int,@a3 int;
DECLARE @d7 datetime=DATEADD(day,7,CAST(@heute AS datetime)),@d14 datetime=DATEADD(day,14,CAST(@heute AS datetime)),@dm7 datetime=DATEADD(day,-7,CAST(@heute AS datetime));
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beschreibung,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(4,2,5,5,1,9,N'Mitarbeiterversammlung',N'Jährliche Informationsveranstaltung für alle Mitarbeitenden',DATEADD(hour,12,@d7),DATEADD(hour,16,@d7),80,'<DefaultKunde/>'); SET @a1=SCOPE_IDENTITY();
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beschreibung,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(5,3,@pJulia,@pJulia,1,9,N'Kundentag Muster AG',N'Präsentation der neuen Dienstleistungen mit anschliessendem Apéro',DATEADD(hour,8,@d14),DATEADD(hour,16,@d14),60,'<DefaultKunde/>'); SET @a2=SCOPE_IDENTITY();
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beschreibung,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(3,2,@pClaudia,@pClaudia,1,11,N'Einführungstag neue Mitarbeitende',N'Einführung für alle Eintritte des Quartals',DATEADD(hour,7,@dm7),DATEADD(hour,16,@dm7),16,'<DefaultKunde/>'); SET @a3=SCOPE_IDENTITY();
INSERT Reservationsanfrage(AnlasstypId,StandortId,PersonOrganisatorId,PersonErstellerId,PersonVerantwortlicherId,ReservationsanfragestatusId,Titel,AnzahlPersonen,AnzahlRaeume,MinPersonenProRaum,RaumBezeichnung,Beginn,Ende,Kommentar,Priority,KundeXml,CreatedOn,ModifiedOn)
 VALUES(3,9,@pNina,@pNina,1,1,N'Produktpräsentation Herbst',40,1,40,N'Säntis',DATEADD(hour,8,DATEADD(day,21,CAST(@heute AS datetime))),DATEADD(hour,12,DATEADD(day,21,CAST(@heute AS datetime))),N'Bitte mit Beamer und Apéro im Anschluss','Termin','<DefaultKunde/>',GETUTCDATE(),GETUTCDATE()),
       (3,9,@pPetra,@pPetra,1,2,N'Bewerbungstag Lernende',25,2,10,NULL,DATEADD(hour,8,DATEADD(day,28,CAST(@heute AS datetime))),DATEADD(hour,15,DATEADD(day,28,CAST(@heute AS datetime))),N'Zwei Räume nebeneinander, falls möglich','Termin','<DefaultKunde/>',GETUTCDATE(),GETUTCDATE()),
       (2,3,@pSimon,@pSimon,1,3,N'Budgetworkshop',12,1,12,N'Gurten',DATEADD(hour,12,DATEADD(day,10,CAST(@heute AS datetime))),DATEADD(hour,15,DATEADD(day,10,CAST(@heute AS datetime))),NULL,'Termin','<DefaultKunde/>',GETUTCDATE(),GETUTCDATE());

-----------------------------------------------------------------------------------------------------
-- Buchungen rund um heute. Die Status zeigen alle Varianten: 2 provisorisch, 3 temporär, 4 definitiv, 5 annulliert.
-----------------------------------------------------------------------------------------------------
DECLARE @b int;
EXEC #Book @b OUTPUT,@rEiger,5,0,'08:00','09:30',N'Marketing Weekly',4,8,N'Bitte Kaffee bereitstellen';
INSERT KostentraegerReservation(KostentraegerId,ReservationId,Anteil) VALUES(@k3,@b,100);
INSERT Bestellung(AngebotId,AngebotszoneId,ReservationId,PersonId,BestellungNr,Beginn,Ende,Menge,Bezeichnung,Teilnehmer) SELECT 1,1,@b,5,'B-1001',DATEADD(minute,-15,Beginn),Beginn,8,N'Kaffee und Gipfeli',8 FROM Reservation WHERE Id=@b;
EXEC #Book @b OUTPUT,@rEiger,@pDaniel,0,'10:00','12:00',N'Geschäftsleitung',4,6;
INSERT KostentraegerReservation(KostentraegerId,ReservationId,Anteil) VALUES(@k1,@b,100);
EXEC #Book @b OUTPUT,@rEiger,@pDavid,0,'14:00','15:30',N'Sprint Review',4,10;
EXEC #Book @b OUTPUT,@rMoench,@pClaudia,0,'09:00','10:00',N'Bewerbungsgespräch',4,3,NULL,NULL,NULL,1;
EXEC #Book @b OUTPUT,@rMoench,@pNina,0,'13:00','14:30',N'Kampagnenplanung',4,5;
EXEC #Book @b OUTPUT,@rJungfrau,1,0,'08:30','11:30',N'Workshop Umzug Zürich',4,18,N'Projektteam und Facility Management';
INSERT KostentraegerReservation(KostentraegerId,ReservationId,Anteil) VALUES(@k6,@b,100);
EXEC #Book @b OUTPUT,@rJungfrau,@pSimon,0,'13:30','15:00',N'Quartalsabschluss',2,12;
EXEC #Book @b OUTPUT,@rPilatus,@pLuca,0,'09:30','10:30',N'Abstimmung Infrastruktur',4,4;
EXEC #Book @b OUTPUT,@rPilatus,@pEva,0,'15:00','16:00',N'Kundengespräch Alpina',3,4;
EXEC #Book @b OUTPUT,@rRigi,@pJulia,0,'11:00','12:00',N'Vorbereitung Kundentag',4,2;
EXEC #Book @b OUTPUT,@rGlatt,@pBeat,0,'10:00','11:30',N'Facility Jour fixe',4,6;
EXEC #Book @b OUTPUT,@rGurten,@pPetra,0,'09:00','12:00',N'Führungsschulung Bern',4,10;
EXEC #Book @b OUTPUT,@rNiesen,@pClaudia,0,'08:30','17:00',N'Schulung Datenschutz',4,16;
EXEC #Book @b OUTPUT,@eBeamer2,@pPetra,0,'09:00','12:00',N'Führungsschulung Bern',4;
EXEC #Book @b OUTPUT,@eFlip1,1,0,'08:30','11:30',N'Workshop Umzug Zürich',4;
EXEC #Book @b OUTPUT,@ap1,@pDavid,0,'08:00','17:00',N'Arbeitsplatz David Huber',4;
EXEC #Book @b OUTPUT,@ap2,@pEva,0,'08:00','12:00',N'Arbeitsplatz Eva Lüthi',4;
EXEC #Book @b OUTPUT,@pp3,@pSarah,0,'08:30','17:00',N'Besuch Alpina Consulting',4;
EXEC #Book @b OUTPUT,@f1,@pBeat,0,'13:00','16:00',N'Materialtransport Wallisellen',4;
EXEC #Book @b OUTPUT,@rEiger,@pNina,1,'09:00','11:00',N'Strategieworkshop Marketing',4,10;
EXEC #Book @b OUTPUT,@rMoench,5,1,'08:30','09:30',N'Projektstatus',4,5;
EXEC #Book @b OUTPUT,@rJungfrau,@pDaniel,1,'14:00','17:00',N'Verwaltungsrat',4,14,NULL,NULL,NULL,1;
EXEC #Book @b OUTPUT,@rPilatus,@pSimon,1,'10:00','11:00',N'Budgetbesprechung',2,4;
EXEC #Book @b OUTPUT,@rSaentis,@pClaudia,2,'13:00','17:00',N'Infoveranstaltung Vorsorge',2,70;
EXEC #Book @b OUTPUT,@rEiger,@pPetra,2,'10:00','11:00',N'Personalgespräche',4,3,NULL,NULL,NULL,1;
EXEC #Book @b OUTPUT,@rMoench,@pLuca,2,'14:00','15:00',N'Release-Planung',4,6;
EXEC #Book @b OUTPUT,@rGurten,@pFabian,3,'09:00','17:00',N'Beratung Alpina Consulting',4,8;
EXEC #Book @b OUTPUT,@rEiger,@pEva,3,'13:30','15:00',N'Messeplanung',3,6;
EXEC #Book @b OUTPUT,@rJungfrau,@pSimon,5,'09:00','12:00',N'Budgetworkshop',4,16;
EXEC #Book @b OUTPUT,@rEiger,5,-1,'09:00','10:30',N'Projektstart Website',4,8;
EXEC #Book @b OUTPUT,@rMoench,@pDavid,-1,'13:00','14:00',N'Architektur-Review',4,5;
EXEC #Book @b OUTPUT,@rJungfrau,@pNina,-2,'10:00','12:00',N'Kundenpräsentation',5,12;
EXEC #Book @b OUTPUT,@rPilatus,@pClaudia,1,'14:00','15:00',N'Abgesagtes Teammeeting',5,4;
EXEC #Book @b OUTPUT,@rNiesen,@pClaudia,-7,'08:30','17:00',N'Einführungstag neue Mitarbeitende',4,16,NULL,@a3;
EXEC #Book @b OUTPUT,@rSaentis,5,7,'13:30','16:30',N'Mitarbeiterversammlung',4,80,N'Bühne, Mikrofon und Beamer vorbereiten',@a1;
INSERT Bestellung(AngebotId,AngebotszoneId,AnlassId,PersonId,BestellungNr,Beginn,Ende,Menge,Bezeichnung,Teilnehmer) SELECT 6,1,@a1,5,'B-1002',DATEADD(hour,3,Beginn),DATEADD(hour,4,Beginn),80,N'Apéro riche',80 FROM Reservation WHERE Id=@b;
EXEC #Book @b OUTPUT,@eBeamer2,5,7,'13:30','16:30',N'Mitarbeiterversammlung',4,NULL,NULL,@a1;
EXEC #Book @b OUTPUT,@rSaentis,@pJulia,14,'09:00','17:00',N'Kundentag Muster AG',2,60,NULL,@a2;
EXEC #Book @b OUTPUT,@rJungfrau,@pJulia,14,'09:00','12:00',N'Kundentag Workshop',4,20,NULL,@a2;

-- Eine wöchentliche Serie über acht Wochen, jeweils am selben Wochentag wie heute
DECLARE @s int,@i int=0,@tag int;
DECLARE @sbU datetime=CAST(CAST(DATEADD(hour,16,CAST(@heute AS datetime)) AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
INSERT Serie(Beginn,RecurrenceXml,RecurrenceType,Ende,Titel,RessourceId,PersonOrganisatorId,FreeBusyStatus,IstPrivat,AllDayEvent,Uid)
 VALUES(@sbU,N'<RecurrenceDaily><EndDate>2099-01-01T12:00:00Z</EndDate><HasEndDate>false</HasEndDate><Occurences>8</Occurences><TimezoneSource>Organisator</TimezoneSource><DayIntervall>7</DayIntervall><EveryWeekDay>false</EveryWeekDay></RecurrenceDaily>','Garaio.Products.Rooms.Core.Helpers.Serie.RecurrenceDaily',DATEADD(minute,60,@sbU),N'Team-Meeting Informatik',@rMoench,@pDavid,'Busy',0,0,NEWID());
SET @s=SCOPE_IDENTITY();
WHILE @i<8 BEGIN
  SET @tag=@i*7;
  EXEC #Book @b OUTPUT,@rMoench,@pDavid,@tag,'16:00','17:00',N'Team-Meeting Informatik',4,8,NULL,NULL,@s;
  SET @i+=1;
END

COMMIT;
SELECT (SELECT COUNT(*) FROM Person) Personen,(SELECT COUNT(*) FROM Ressource) Ressourcen,(SELECT COUNT(*) FROM Reservation) Buchungen,(SELECT COUNT(*) FROM Anlass) Anlaesse;
