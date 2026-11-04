/*
  Zusätzliche Demo-Daten für die Screenshots unter Einstellungen > Basisdaten und Erweiterte Basisdaten für Ressourcen.
  Läuft einmal auf seed.sql. Die Daten hängen an Ressourcen und Standorten, die sonst niemand zeigt:
  Buchungshinweise und Fragenkatalog nur an Stockhorn und Töss, Feiertage nur am Standort Dübendorf (ohne Ressourcen).
  Der neue Klassifikationstyp gilt nur für Fahrzeuge. Die neue MWSt ist mit nichts verknüpft.
*/
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

DECLARE @rStockhorn int=(SELECT Id FROM Ressource WHERE Name=N'Stockhorn');
DECLARE @rToess int=(SELECT Id FROM Ressource WHERE Name=N'Töss');
DECLARE @o uniqueidentifier, @h uniqueidentifier, @id int, @t int;

-- Die Rechte für Fragen, Fragenkataloge, MWSt und Buchungshinweise fehlen in rooms_init auch dem Systemadministrator.
INSERT RolleRecht(RolleId,RechtId,IstInTagen,IstAblaufend,IstImportiert)
SELECT 30,v.r,0,0,0 FROM (VALUES(165),(172),(175)) v(r) WHERE NOT EXISTS (SELECT 1 FROM RolleRecht x WHERE x.RolleId=30 AND x.RechtId=v.r);

-- Feiertage am Standort Dübendorf
INSERT StandortFeier(FeierId,StandortId,RessourceId,IstRekursiv,IstGeerbt) VALUES(2,10,NULL,1,0),(32,10,NULL,1,0),(73,10,NULL,0,0);

-- MWSt mit zwei Sätzen
SET @o=NEWID();
INSERT Mwst(BezeichnungOid,Code) VALUES(@o,'NORMAL'); SET @id=SCOPE_IDENTITY();
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Mwst',CAST(@id AS varchar(20)),@o,'BezeichnungOid','de',N'Normalsatz');
INSERT MwstSatz(GueltigAb,MwstId,Prozent) VALUES('2018-01-01',@id,7.70),('2024-01-01',@id,8.10);

-- Klassifikationstyp mit farbigen Buchungsklassifikationen
DECLARE @b uniqueidentifier=NEWID();
SET @o=NEWID();
INSERT Klassifikationtyp(BezeichnungOid,Code,IstMehrfachauswahlErlaubt,IstInListenSichtbar,IstImOutlookSichtbar,IstMussfeld,BeschreibungOid,Sortierung,SystemClassification)
VALUES(@o,'FAHRTZWECK',0,1,0,0,@b,10,0); SET @t=SCOPE_IDENTITY();
INSERT KlassifikationtypRessourcetyp(KlassifikationtypId,RessourcetypId) VALUES(@t,5);
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES
 ('Klassifikationtyp',CAST(@t AS varchar(20)),@o,'BezeichnungOid','de',N'Fahrtzweck'),
 ('Klassifikationtyp',CAST(@t AS varchar(20)),@b,'BeschreibungOid','de',N'Zweck der Fahrt, wird im Kalender farbig dargestellt');
DECLARE @k TABLE(n nvarchar(50), s int, f nvarchar(10));
INSERT @k VALUES(N'Geschäftsfahrt',1,'2E7D32'),(N'Kundenbesuch',2,'1565C0'),(N'Materialtransport',3,'EF6C00');
DECLARE @n nvarchar(50),@s int,@f nvarchar(10);
DECLARE c CURSOR LOCAL FOR SELECT n,s,f FROM @k;
OPEN c; FETCH NEXT FROM c INTO @n,@s,@f;
WHILE @@FETCH_STATUS=0
BEGIN
  SET @o=NEWID();
  INSERT Klassifikation(KlassifikationtypId,BezeichnungOid,Sortierung,Farbe,IstDefault,IstApiDefault) VALUES(@t,@o,@s,@f,0,0); SET @id=SCOPE_IDENTITY();
  INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Klassifikation',CAST(@id AS varchar(20)),@o,'BezeichnungOid','de',@n);
  FETCH NEXT FROM c INTO @n,@s,@f;
END
CLOSE c; DEALLOCATE c;

-- Fragen. Keine Pflichtfragen, damit Buchungen nicht blockiert werden.
DECLARE @q TABLE(n nvarchar(200), typ varchar(30), s int);
INSERT @q VALUES(N'Wird Technik-Support während der Veranstaltung benötigt?','Radio',1),(N'Welche Mikrofone benötigen Sie?','Dropdown',2),(N'Ab wann darf der Raum vorbereitet werden?','TimePicker',3),(N'Besondere Wünsche zur Raumtechnik','Textarea',4),(N'Name der Ansprechperson vor Ort','Textfield',5);
DECLARE @fragen TABLE(id int);
DECLARE q CURSOR LOCAL FOR SELECT n,typ,s FROM @q;
DECLARE @typ varchar(30);
OPEN q; FETCH NEXT FROM q INTO @n,@typ,@s;
WHILE @@FETCH_STATUS=0
BEGIN
  SET @o=NEWID(); SET @h=NEWID();
  INSERT Frage(IstAktiv,IstMussFrage,Typ,BezeichnungOid,Sortierung,HilfeTextOid) VALUES(1,0,@typ,@o,@s,@h); SET @id=SCOPE_IDENTITY();
  INSERT @fragen VALUES(@id);
  INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Frage',CAST(@id AS varchar(20)),@o,'BezeichnungOid','de',@n),('Frage',CAST(@id AS varchar(20)),@h,'HilfeTextOid','de',N'');
  IF @typ IN ('Radio','Dropdown')
  BEGIN
    DECLARE @o1 uniqueidentifier=NEWID(),@o2 uniqueidentifier=NEWID(),@x int;
    INSERT FrageOption(FrageId,BezeichnungOid) VALUES(@id,@o1); SET @x=SCOPE_IDENTITY();
    INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('FrageOption',CAST(@x AS varchar(20)),@o1,'BezeichnungOid','de',CASE @typ WHEN 'Radio' THEN N'Ja' ELSE N'Handmikrofon' END);
    INSERT FrageOption(FrageId,BezeichnungOid) VALUES(@id,@o2); SET @x=SCOPE_IDENTITY();
    INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('FrageOption',CAST(@x AS varchar(20)),@o2,'BezeichnungOid','de',CASE @typ WHEN 'Radio' THEN N'Nein' ELSE N'Headset' END);
  END
  FETCH NEXT FROM q INTO @n,@typ,@s;
END
CLOSE q; DEALLOCATE q;

-- Fragenkataloge. Nur der erste ist Ressourcen zugeordnet.
DECLARE @kat int,@konf int;
SET @o=NEWID();
INSERT Fragenkatalog(BezeichnungOid,Sortierung) VALUES(@o,1); SET @kat=SCOPE_IDENTITY();
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Fragenkatalog',CAST(@kat AS varchar(20)),@o,'BezeichnungOid','de',N'Eventtechnik Schulungsräume');
INSERT FragenkatalogKonfiguration(FragenkatalogId,IstAktiv) VALUES(@kat,1); SET @konf=SCOPE_IDENTITY();
INSERT FragenkatalogKonfigurationFrage(FrageId,FragenkatalogKonfigurationId) SELECT id,@konf FROM @fragen;
INSERT FragenkatalogRessource(FragenkatalogId,RessourceId) VALUES(@kat,@rStockhorn),(@kat,@rToess);
SET @o=NEWID();
INSERT Fragenkatalog(BezeichnungOid,Sortierung) VALUES(@o,2); SET @kat=SCOPE_IDENTITY();
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Fragenkatalog',CAST(@kat AS varchar(20)),@o,'BezeichnungOid','de',N'Kundenanlässe');
SET @o=NEWID();
INSERT Fragenkatalog(BezeichnungOid,Sortierung) VALUES(@o,3); SET @kat=SCOPE_IDENTITY();
INSERT Text(TableName,RecordId,FieldOid,FieldName,LanguageId,Value) VALUES('Fragenkatalog',CAST(@kat AS varchar(20)),@o,'BezeichnungOid','de',N'Interne Workshops');

-- Erst mit einer Bestuhlung erschien Stockhorn im Kalender.
INSERT RessourceBestuhlung(RessourceId,BestuhlungId,MwstId,IstStandard) VALUES(@rStockhorn,4,1,1);

-- Buchungshinweise in allen Stufen, nur für Stockhorn, und eine Buchung, auf der sie erscheinen.
INSERT Mitteilung(PersonId,MessageData,CreatedOn,ExpiresOn,MessageSource) VALUES
 (NULL,CONCAT('{"LocationIds":[],"ResourceIds":[',@rStockhorn,'],"Severity":0,"ShowDaysBeforeStart":null,"ShowMessageOnce":false,"Text":"Der Schulungsraum ist ab 07:30 Uhr geöffnet."}'),GETUTCDATE(),NULL,0),
 (NULL,CONCAT('{"LocationIds":[],"ResourceIds":[',@rStockhorn,'],"Severity":1,"ShowDaysBeforeStart":null,"ShowMessageOnce":false,"Text":"Die Lüftung wird diesen Monat gewartet. Es kann laut werden."}'),GETUTCDATE(),NULL,0),
 (NULL,CONCAT('{"LocationIds":[],"ResourceIds":[',@rStockhorn,'],"Severity":2,"ShowDaysBeforeStart":null,"ShowMessageOnce":false,"Text":"Der Beamer ist defekt. Bitte bringen Sie einen mobilen Beamer mit."}'),GETUTCDATE(),NULL,0);

DECLARE @d date=DATEADD(day,1,CAST(GETDATE() AS date));
DECLARE @bg datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d,120),' 13:00') AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
DECLARE @en datetime=CAST(CAST(CONCAT(CONVERT(char(10),@d,120),' 16:00') AS datetime2) AT TIME ZONE 'W. Europe Standard Time' AT TIME ZONE 'UTC' AS datetime);
INSERT Reservation(RessourceId,RessourcetypId,StatusId,PersonOrganisatorId,PersonErstellerId,Titel,Vorlaufbeginn,Beginn,Ende,Nachlaufende,AnzahlPersonen,IstPrivat,IstPersonRessourceReservation,Delay,IstCheckinBestaetigt,CreatedOn,ModifiedOn,MaskedIdentifier,FreeBusyStatus,IsTeamsMeeting,SyncDisabled,IsLocked,AllDayEvent)
SELECT r.Id,r.RessourcetypId,4,4,4,N'Schulung neue Kassensoftware',@bg,@bg,@en,@en,12,0,0,0,0,GETUTCDATE(),GETUTCDATE(),NEWID(),'Busy',0,0,0,0 FROM Ressource r WHERE r.Id=@rStockhorn;

COMMIT;
