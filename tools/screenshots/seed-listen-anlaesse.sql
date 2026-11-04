/*
  Zusatzdaten für die Szene listen-anlaesse: Jobmanager-Jobs, Teilnehmende, Kostenstellen und Historik zum Anlass
  "Mitarbeiterversammlung" sowie weitere Anlässe und Buchungsanfragen. Läuft einmal auf seed.sql.
  Das Jobmanager-Recht bekommt nur der neue Login beat.kunz, damit sich die Seitenleiste der anderen Logins nicht ändert.
*/
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

DECLARE @heute datetime=CAST(CAST(GETDATE() AS date) AS datetime);
DECLARE @pBeat int=(SELECT Id FROM Person WHERE Mail='beat.kunz@muster-ag.example');
DECLARE @pClaudia int=(SELECT Id FROM Person WHERE Mail='claudia.weber@muster-ag.example');
DECLARE @pNina int=(SELECT Id FROM Person WHERE Mail='nina.schmid@muster-ag.example');
DECLARE @pDavid int=(SELECT Id FROM Person WHERE Mail='david.huber@muster-ag.example');
DECLARE @pJulia int=(SELECT Id FROM Person WHERE Mail='julia.moser@muster-ag.example');
DECLARE @pDaniel int=(SELECT Id FROM Person WHERE Mail='daniel.wyss@muster-ag.example');
DECLARE @pEva int=(SELECT Id FROM Person WHERE Mail='eva.luethi@muster-ag.example');
DECLARE @pPetra int=(SELECT Id FROM Person WHERE Mail='petra.zbinden@muster-ag.example');
DECLARE @pLuca int=(SELECT Id FROM Person WHERE Mail='luca.ammann@muster-ag.example');
DECLARE @pSarah int=(SELECT Id FROM Person WHERE Mail='sarah.vogel@muster-ag.example');

-----------------------------------------------------------------------------------------------------
-- Jobmanager: eigener Login mit eigener Berechtigungsgruppe. Recht 137 ist lokal, Recht 146 global.
-----------------------------------------------------------------------------------------------------
DECLARE @g int,@rS int,@rG int;
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(1,0,0,0,0,N'BG-Jobmanager'); SET @g=SCOPE_IDENTITY();
INSERT Rolle(Bezeichnung) VALUES(N'Jobmanager (S)'); SET @rS=SCOPE_IDENTITY();
INSERT Rolle(Bezeichnung) VALUES(N'Jobmanager (G)'); SET @rG=SCOPE_IDENTITY();
INSERT RolleRecht(RolleId,RechtId,GueltigkeitDauer,IstInTagen,IstAblaufend,IstImportiert) VALUES(@rS,137,0,0,0,0),(@rG,146,0,0,0,0);
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert) VALUES(@g,@rS,1,NULL,0,1,0),(@g,@rG,1,NULL,0,0,0);
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert) SELECT @g,@rS,Id,NULL,1,1,0 FROM Standort WHERE Id<>1;
INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@g,@pBeat,0);
INSERT Logon(LogontypId,PersonId,Name,Passwort,IstImportiert,MaskedIdentifier,FailedLogins,AllowBackendLogon)
 SELECT 1,@pBeat,'beat.kunz',Passwort,0,NEWID(),0,1 FROM Logon WHERE Name='sandra.frei';

-- Ohne Status mit LektionWorkflowId fehlen in der Ressourcenwahl die Prüfung und die Statuswahl.
UPDATE Status SET LektionWorkflowId=1 WHERE Id=2;
UPDATE Status SET LektionWorkflowId=2 WHERE Id=4;

-- Massenbearbeitung: Mit Recht 61 oder 176 bricht sie im Debug-Build ab (fehlender Hilfetext zu Reservation.PaymentExportStatus).
-- Julia Moser bekommt deshalb nur die Rechte für Anlassbuchungen und Massenänderungen, aber keine Zahlungsrechte.
DECLARE @pJul int=(SELECT Id FROM Person WHERE Mail='julia.moser@muster-ag.example');
DECLARE @gM int,@rM int;
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(1,0,0,0,0,N'BG-Anlassbearbeitung'); SET @gM=SCOPE_IDENTITY();
INSERT Rolle(Bezeichnung) VALUES(N'Anlassbearbeitung (G)'); SET @rM=SCOPE_IDENTITY();
INSERT RolleRecht(RolleId,RechtId,GueltigkeitDauer,IstInTagen,IstAblaufend,IstImportiert) VALUES(@rM,38,0,0,0,0),(@rM,43,0,0,0,0),(@rM,129,0,0,0,0),(@rM,142,0,0,0,0);
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert) VALUES(@gM,@rM,1,NULL,0,0,0);
INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@gM,@pJul,0);
INSERT Logon(LogontypId,PersonId,Name,Passwort,IstImportiert,MaskedIdentifier,FailedLogins,AllowBackendLogon)
 SELECT 1,@pJul,'julia.moser',Passwort,0,NEWID(),0,1 FROM Logon WHERE Name='sandra.frei';

-----------------------------------------------------------------------------------------------------
-- Jobs. Standort "CH" ist eindeutig und umfasst alle Räume. Lektionen sind in Lokalzeit gespeichert.
-- Der Kurs "Excel Grundlagen" liegt so, dass Mönch (Team-Meeting) und Säntis (Anlässe) kollidieren.
-----------------------------------------------------------------------------------------------------
DECLARE @i int,@b datetime;
DECLARE @jobs TABLE(JobId nvarchar(50),Kurs nvarchar(100),Start int,Tage int,Anz int,Von int,Dauer int,Wunsch nvarchar(100),Pers int,Mail nvarchar(200));
INSERT @jobs VALUES
 ('JOB-2026-101',N'Excel Grundlagen',7,7,10,1530,90,N'Niesen',12,'claudia.weber@muster-ag.example'),
 ('JOB-2026-102',N'Führungsseminar Modul 2',8,7,6,800,240,N'Jungfrau',14,'petra.zbinden@muster-ag.example'),
 ('JOB-2026-103',N'Englisch B2',9,7,12,1730,90,NULL,8,'claudia.weber@muster-ag.example'),
 ('JOB-2026-104',N'Erste Hilfe Auffrischung',30,1,2,830,480,N'Stockhorn',16,'beat.kunz@muster-ag.example'),
 ('JOB-2026-105',N'Datenschutz im Alltag',12,14,4,1300,120,N'Gurten',10,'claudia.weber@muster-ag.example'),
 ('JOB-2026-106',N'Projektmanagement Basis',15,7,8,830,210,N'Glatt',8,'petra.zbinden@muster-ag.example');
DECLARE @j nvarchar(50),@k nvarchar(100),@st int,@ta int,@an int,@von int,@da int,@w nvarchar(100),@pe int,@m nvarchar(200);
DECLARE c CURSOR LOCAL FOR SELECT * FROM @jobs;
OPEN c; FETCH NEXT FROM c INTO @j,@k,@st,@ta,@an,@von,@da,@w,@pe,@m;
WHILE @@FETCH_STATUS=0 BEGIN
  SET @i=0;
  WHILE @i<@an BEGIN
    SET @b=DATEADD(minute,(@von/100)*60+(@von%100),DATEADD(day,@st+@i*@ta,@heute));
    INSERT Lektion(RessourceId,Vorlaufbeginn,Beginn,Ende,Nachlaufende,RessourceName,IstPrivat,AnzahlPersonen,Kommentar,JobId,LektionId,StatusId,SystemId,KundeXml,KostentraegerNummer,PersonMail,StandortName,WorkflowId,Zurueckgesetzt,Gruppierung,VerantwortlicherMail,TitelGruppierung,LetzteAktualisierung,AutomatischeVerarbeitung)
    VALUES(NULL,@b,@b,DATEADD(minute,@da,@b),DATEADD(minute,@da,@b),@w,0,@pe,NULL,@j,CONCAT(@j,'-',FORMAT(@i+1,'00')),1,1,'<DefaultKunde/>','4000',@m,N'CH',0,0,@k,'anna.keller@muster-ag.example',@k,GETDATE(),0);
    SET @i+=1;
  END
  FETCH NEXT FROM c INTO @j,@k,@st,@ta,@an,@von,@da,@w,@pe,@m;
END
CLOSE c; DEALLOCATE c;

-----------------------------------------------------------------------------------------------------
-- Weitere Anlässe für die Liste und die Anlasssuche
-----------------------------------------------------------------------------------------------------
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beschreibung,Beginn,Ende,AnzahlPersonen,KundeXml) VALUES
 (4,2,@pDaniel,@pJulia,@pDaniel,9,N'Strategietagung Geschäftsleitung',N'Zweitägige Klausur der Geschäftsleitung',DATEADD(hour,7,DATEADD(day,21,@heute)),DATEADD(hour,16,DATEADD(day,22,@heute)),8,'<DefaultKunde/>'),
 (5,3,@pNina,@pNina,1,9,N'Kundenworkshop Alpina',N'Workshop mit Alpina Consulting',DATEADD(hour,8,DATEADD(day,10,@heute)),DATEADD(hour,11,DATEADD(day,10,@heute)),15,'<DefaultKunde/>'),
 (2,2,@pPetra,@pPetra,1,3,N'Lehrabschlussfeier',N'Feier für die Lernenden im letzten Lehrjahr',DATEADD(hour,16,DATEADD(day,45,@heute)),DATEADD(hour,19,DATEADD(day,45,@heute)),35,'<DefaultKunde/>'),
 (4,2,@pLuca,@pLuca,1,8,N'Informatik-Sicherheitstag',N'Sensibilisierung zu Phishing und Passwörtern',DATEADD(hour,9,DATEADD(day,17,@heute)),DATEADD(hour,12,DATEADD(day,17,@heute)),40,'<DefaultKunde/>');

-----------------------------------------------------------------------------------------------------
-- Anlass "Mitarbeiterversammlung": Teilnehmende, Kostenstellen und Historik
-----------------------------------------------------------------------------------------------------
DECLARE @a int=(SELECT Id FROM Anlass WHERE Titel=N'Mitarbeiterversammlung');
INSERT Teilnehmer(AnlassId,PersonId,Mail,Vorname,Nachname,Firma,IstVip,SendNotifikationsMail,AttacheIcs,Lync,IstOptional,KundeXml)
 SELECT @a,p.Id,p.Mail,p.Vorname,p.Nachname,N'Muster AG',CASE WHEN p.Id=@pDaniel THEN 1 ELSE 0 END,0,0,0,0,'<DefaultKunde/>' FROM Person p WHERE p.Id IN (@pDaniel,@pClaudia,@pNina,@pDavid,@pJulia);
INSERT Teilnehmer(AnlassId,PersonId,Mail,Vorname,Nachname,Firma,IstVip,SendNotifikationsMail,AttacheIcs,Lync,IstOptional,KundeXml)
 SELECT @a,p.Id,p.Mail,p.Vorname,p.Nachname,N'Alpina Consulting GmbH',0,0,0,0,1,'<DefaultKunde/>' FROM Person p WHERE p.Id=@pSarah;
INSERT KostentraegerAnlass(KostentraegerId,AnlassId,Anteil)
 SELECT k.Id,@a,CASE k.Nummer WHEN '1000' THEN 70 ELSE 30 END FROM Kostentraeger k WHERE k.Nummer IN ('1000','4000');

DECLARE @h1 bigint,@h2 bigint,@t1 datetime=DATEADD(minute,9*60+12,DATEADD(day,-14,@heute)),@t2 datetime=DATEADD(minute,14*60+35,DATEADD(day,-3,@heute));
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(1,'Anlass',CAST(@a AS varchar(20)),'5',@t1,'Rooms'); SET @h1=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h1,'Titel',NULL,N'Mitarbeiterversammlung'),(@h1,'AnzahlPersonen',NULL,'60');
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(2,'Anlass',CAST(@a AS varchar(20)),'5',@t2,'Rooms'); SET @h2=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h2,'AnzahlPersonen','60','80'),(@h2,'Beschreibung',N'Informationsveranstaltung für alle Mitarbeitenden',N'Jährliche Informationsveranstaltung für alle Mitarbeitenden');

-----------------------------------------------------------------------------------------------------
-- Weitere Buchungsanfragen, damit alle Status in der Liste vorkommen
-----------------------------------------------------------------------------------------------------
INSERT Reservationsanfrage(AnlasstypId,StandortId,PersonOrganisatorId,PersonErstellerId,PersonVerantwortlicherId,ReservationsanfragestatusId,Titel,AnzahlPersonen,AnzahlRaeume,MinPersonenProRaum,RaumBezeichnung,Beginn,Ende,Kommentar,Priority,KundeXml,CreatedOn,ModifiedOn) VALUES
 (2,9,@pDavid,@pDavid,1,4,N'Teamtag Informatik',14,1,14,N'Jungfrau',DATEADD(hour,8,DATEADD(day,18,@heute)),DATEADD(hour,16,DATEADD(day,18,@heute)),NULL,'Termin','<DefaultKunde/>',GETUTCDATE(),GETUTCDATE()),
 (3,8,@pEva,@pEva,1,5,N'Kundenevent Frühling',30,1,30,NULL,DATEADD(hour,12,DATEADD(day,35,@heute)),DATEADD(hour,17,DATEADD(day,35,@heute)),N'Vom Kunden abgesagt','Termin','<DefaultKunde/>',GETUTCDATE(),GETUTCDATE());

COMMIT;
SELECT (SELECT COUNT(*) FROM Lektion) Lektionen,(SELECT COUNT(*) FROM Anlass) Anlaesse,(SELECT COUNT(*) FROM Reservationsanfrage) Anfragen,(SELECT COUNT(*) FROM Teilnehmer WHERE AnlassId=@a) Teilnehmende;
