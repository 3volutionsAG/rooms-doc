-- Zusatzdaten für die Szene listen-rest (Ressourcen, Raumeinheiten, Teilnehmende, Personen, Catering & Service). Läuft einmal auf seed.sql.
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

DECLARE @heute datetime=CAST(CAST(GETDATE() AS date) AS datetime);
DECLARE @admin varchar(10)=(SELECT CAST(MIN(Id) AS varchar(10)) FROM Person WHERE Mail='anna.keller@muster-ag.example');
DECLARE @thomas varchar(10)=(SELECT CAST(MIN(Id) AS varchar(10)) FROM Person WHERE Mail='thomas.meier@muster-ag.example');

-----------------------------------------------------------------------------------------------------
-- Teilnehmende an Buchungen von heute: interne Personen und externe Gäste
-----------------------------------------------------------------------------------------------------
DECLARE @tn TABLE(Titel nvarchar(200),Mail nvarchar(200),Vorname nvarchar(100),Nachname nvarchar(100),Firma nvarchar(100),Pass varchar(20),Zurueck bit,Vip bit,Optional bit,Kommentar nvarchar(200));
INSERT @tn VALUES
 (N'Schulung Datenschutz','nina.schmid@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,0,NULL),
 (N'Schulung Datenschutz','david.huber@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,0,NULL),
 (N'Schulung Datenschutz','melanie.roth@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,1,NULL),
 (N'Workshop Umzug Zürich','patrick.graf@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,0,NULL),
 (N'Workshop Umzug Zürich','lena.gerber@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,0,N'Vegetarisch'),
 (N'Workshop Umzug Zürich',NULL,N'Marc',N'Oberholzer',N'Umzugsprofi Oberholzer GmbH','V-1038',0,0,0,NULL),
 (N'Kundengespräch Alpina',NULL,N'Corinne',N'Bachmann',N'Alpina Consulting','V-1041',0,1,0,N'Parkplatz reserviert'),
 (N'Kundengespräch Alpina',NULL,N'Stefan',N'Lehmann',N'Alpina Consulting','V-1042',0,0,0,NULL),
 (N'Geschäftsleitung','daniel.wyss@muster-ag.example',NULL,NULL,NULL,NULL,NULL,0,0,NULL);

INSERT Teilnehmer(ReservationId,PersonId,Mail,IstVip,Kommentar,Nachname,Vorname,SendNotifikationsMail,AttacheIcs,Lync,VisitorPassNumber,VisitorPassReturned,IstOptional,Firma)
SELECT (SELECT MIN(r.Id) FROM Reservation r WHERE r.Titel=t.Titel),
       (SELECT MIN(p.Id) FROM Person p WHERE p.Mail=t.Mail),
       CASE WHEN t.Mail IS NULL THEN LOWER(t.Vorname+'.'+t.Nachname)+'@gast.example' END,
       t.Vip,t.Kommentar,t.Nachname,t.Vorname,0,0,0,t.Pass,t.Zurueck,t.Optional,t.Firma
FROM @tn t;

-----------------------------------------------------------------------------------------------------
-- Walk-in-Besuch ohne Buchung: eine Besuchsgruppe und ein Einzelbesuch
-----------------------------------------------------------------------------------------------------
DECLARE @gruppe int,@einzel int;
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(4,3,5,5,5,9,N'Besuchsgruppe Lernende Kantonsschule',DATEADD(hour,12,@heute),DATEADD(hour,15,@heute),3,'<DefaultKunde/>'); SET @gruppe=SCOPE_IDENTITY();
INSERT Anlass(AnlassstatusId,AnlasstypId,PersonErstellerId,PersonOrganisatorId,PersonVerantwortlicherId,StandortId,Titel,Beginn,Ende,AnzahlPersonen,KundeXml)
 VALUES(4,3,5,5,5,9,N'Einzelteilnehmer',DATEADD(hour,9,@heute),DATEADD(hour,10,@heute),1,'<DefaultKunde/>'); SET @einzel=SCOPE_IDENTITY();
INSERT Teilnehmer(AnlassId,Mail,IstVip,Nachname,Vorname,SendNotifikationsMail,AttacheIcs,Lync,VisitorPassNumber,VisitorPassReturned,IstOptional,Firma)
VALUES(@gruppe,N'mia.ackermann@gast.example',0,N'Ackermann',N'Mia',0,0,0,'V-1043',0,0,N'Kantonsschule Musterstadt'),
      (@gruppe,N'noah.kaufmann@gast.example',0,N'Kaufmann',N'Noah',0,0,0,'V-1044',0,0,N'Kantonsschule Musterstadt'),
      (@gruppe,N'lea.sutter@gast.example',0,N'Sutter',N'Lea',0,0,0,'V-1045',1,0,N'Kantonsschule Musterstadt'),
      (@einzel,N'hans.widmer@gast.example',0,N'Widmer',N'Hans',0,0,0,'V-1046',0,0,N'Widmer Elektro AG');

-----------------------------------------------------------------------------------------------------
-- Catering-Bestellungen zu den Zürcher Räumen
-----------------------------------------------------------------------------------------------------
DECLARE @b TABLE(Titel nvarchar(200),Angebot int,Bezeichnung nvarchar(100),Menge int,Nr varchar(20),Notiz nvarchar(200));
INSERT @b VALUES
 (N'Marketing Weekly',2,N'Mineralwasser 0.5 l',6,'B-3101',NULL),
 (N'Workshop Umzug Zürich',1,N'Kaffee und Gipfeli',12,'B-3102',N'Bitte zehn Minuten vor Beginn im Raum bereitstellen.'),
 (N'Workshop Umzug Zürich',3,N'Apfelschorle 0.5 l',12,'B-3103',NULL),
 (N'Bewerbungsgespräch',2,N'Mineralwasser 0.5 l',3,'B-3104',NULL),
 (N'Geschäftsleitung',1,N'Kaffee und Gipfeli',8,'B-3105',NULL),
 (N'Geschäftsleitung',7,N'Melonenwürfel',8,'B-3106',N'Eine Portion ohne Melone, bitte separat beschriften.'),
 (N'Kampagnenplanung',3,N'Apfelschorle 0.5 l',5,'B-3107',NULL),
 (N'Sprint Review',8,N'Trockenfleisch',6,'B-3108',NULL),
 (N'Verwaltungsrat',6,N'Apéro riche pro Person',10,'B-3109',N'Apéro erst nach der Sitzung servieren.');

INSERT Bestellung(AngebotId,AngebotszoneId,ReservationId,PersonId,BestellungNr,Beginn,Ende,Menge,Bezeichnung,Notiz,Lieferort,Teilnehmer)
SELECT x.Angebot,1,r.Id,r.PersonOrganisatorId,x.Nr,r.Beginn,r.Ende,x.Menge,x.Bezeichnung,x.Notiz,res.Name,x.Menge
FROM @b x
JOIN Reservation r ON r.Id=(SELECT MIN(i.Id) FROM Reservation i WHERE i.Titel=x.Titel)
JOIN Ressource res ON res.Id=r.RessourceId;

-----------------------------------------------------------------------------------------------------
-- Personen in den Raumeinheiten
-----------------------------------------------------------------------------------------------------
INSERT RaumeinheitPerson(RaumeinheitId,PersonId,Beginn,IstImportiert)
SELECT u.Id,p.Id,DATEADD(day,-200,@heute),0
FROM (VALUES(N'Büro Z-1.04','nina.schmid@muster-ag.example'),(N'Büro Z-1.04','david.huber@muster-ag.example'),(N'Büro Z-1.04','melanie.roth@muster-ag.example'),(N'Büro Z-1.04','laura.baumann@muster-ag.example'),
            (N'Büro B-2.01','petra.zbinden@muster-ag.example'),(N'Büro B-2.01','simon.fischer@muster-ag.example')) v(n,m)
JOIN Text t ON t.TableName='Raumeinheit' AND t.FieldName='BezeichnungOid' AND t.Value=v.n
JOIN Raumeinheit u ON CAST(u.Id AS varchar(20))=t.RecordId
JOIN Person p ON p.Mail=v.m;

-----------------------------------------------------------------------------------------------------
-- Historik für den Raum Jungfrau und die Raumeinheit Büro Z-1.04
-----------------------------------------------------------------------------------------------------
DECLARE @jungfrau varchar(20)=(SELECT CAST(MIN(Id) AS varchar(20)) FROM Ressource WHERE Name=N'Jungfrau');
DECLARE @buero varchar(20)=(SELECT MIN(t.RecordId) FROM Text t WHERE t.TableName='Raumeinheit' AND t.FieldName='BezeichnungOid' AND t.Value=N'Büro Z-1.04');
DECLARE @h bigint;

INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(1,'Ressource',@jungfrau,@admin,DATEADD(hour,8,DATEADD(day,-180,@heute)),'rooms'); SET @h=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h,'Name',NULL,N'Jungfrau'),(@h,'Telefonnummer',NULL,N'+41 44 555 20 99');
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(2,'Ressource',@jungfrau,@thomas,DATEADD(hour,14,DATEADD(day,-60,@heute)),'rooms'); SET @h=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h,'Telefonnummer',N'+41 44 555 20 99',N'+41 44 555 20 03');
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(2,'Ressource',@jungfrau,@admin,DATEADD(hour,10,DATEADD(day,-12,@heute)),'rooms'); SET @h=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h,'MaxBuchdauer',N'480',N'0'),(@h,'NoShowDelay',N'30',N'15');

INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(1,'Raumeinheit',@buero,@admin,DATEADD(hour,8,DATEADD(day,-200,@heute)),'rooms'); SET @h=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h,'AnzahlPersonen',NULL,N'10'),(@h,'Flaeche',NULL,N'40');
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(2,'Raumeinheit',@buero,@thomas,DATEADD(hour,15,DATEADD(day,-45,@heute)),'rooms'); SET @h=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h,'AnzahlPersonen',N'10',N'12'),(@h,'Flaeche',N'40',N'48');

COMMIT;
