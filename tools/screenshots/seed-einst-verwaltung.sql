-- Zusatzdaten für die Szene einst-verwaltung. Läuft einmal auf seed.sql.
SET NOCOUNT ON;
SET XACT_ABORT ON;
BEGIN TRAN;

-----------------------------------------------------------------------------------------------------
-- Raumeinheiten und Kostenträger: Die Menüs erscheinen nur mit den Rechten 83, 143 und 144, die in rooms_init keine Rolle hat.
-- Eigene Rolle, Gruppe und Logon, damit sich die Seitenleiste der übrigen Logins nicht ändert.
-----------------------------------------------------------------------------------------------------
DECLARE @hash nvarchar(100)='A+gUjDguCYZ3HuqCGuDil+YLGXyL8PaX9kdAJxAoaVM=';
DECLARE @rolle int,@gruppe int;
INSERT Rolle(Bezeichnung) VALUES(N'Stammdatenverwaltung (G)'); SET @rolle=SCOPE_IDENTITY();
INSERT RolleRecht(RolleId,RechtId,IstInTagen,IstAblaufend,IstImportiert) VALUES(@rolle,83,0,0,0),(@rolle,143,0,0,0),(@rolle,144,0,0,0);
INSERT Gruppe(Berechtigungsgruppe,Notifikationsgruppe,Teilnehmergruppe,Benutzerkreis,CheckinEinzelreservation,Bezeichnung) VALUES(1,0,0,0,0,N'BG-Stammdatenverwaltung'); SET @gruppe=SCOPE_IDENTITY();
INSERT Berechtigung(GruppeId,RolleId,StandortId,RessourceId,IstGeerbt,IstRekursiv,IstImportiert) VALUES(@gruppe,@rolle,1,NULL,0,0,0);
INSERT GruppePerson(GruppeId,PersonId,IstImportiert) VALUES(@gruppe,3,0);
INSERT Logon(LogontypId,PersonId,Name,Passwort,IstImportiert,MaskedIdentifier,FailedLogins,AllowBackendLogon) VALUES(1,3,'marco.steiner',@hash,0,NEWID(),0,1);

-----------------------------------------------------------------------------------------------------
-- Adressen: Platzhalter und die reale Adresse aus rooms_init durch fiktive Werte ersetzen.
-----------------------------------------------------------------------------------------------------
UPDATE Adresse SET Adresse1=N'Musterstrasse 12',Plz='8001',Ort=N'Zürich' WHERE Adresse1=N'StandardAdresse';
UPDATE Adresse SET Adresse1=N'Musterstrasse 40',Ort=N'Bern' WHERE Adresse1=N'Schwarztorstrasse 31';

-----------------------------------------------------------------------------------------------------
-- Historik einer Person für die Detailansicht.
-----------------------------------------------------------------------------------------------------
DECLARE @h1 bigint,@h2 bigint;
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(1,'Person','5','1',DATEADD(day,-120,GETDATE()),'rooms'); SET @h1=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h1,'Vorname',NULL,N'Sandra'),(@h1,'Nachname',NULL,N'Frei');
INSERT Historyrecord(HistorytypeId,TableName,RecordId,UserId,DateTimeStamp,Origin) VALUES(2,'Person','5','1',DATEADD(day,-30,GETDATE()),'rooms'); SET @h2=SCOPE_IDENTITY();
INSERT Historyfield(HistoryrecordId,FieldName,OldValue,NewValue) VALUES(@h2,'Mobile',N'+41 79 555 01 99',N'+41 79 555 01 04');

COMMIT;
