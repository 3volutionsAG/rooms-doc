# Baut die lokale Demo-Datenbank rooms_docs neu aus rooms_init auf. Siehe README.md.
# Die Schema-Migration läuft über die AppHost-Ressource placeme-db-migrate. Danach ist seed-all.ps1 an der Reihe.
$ErrorActionPreference = 'Stop'
$backup = 'D:\database\backups\rooms_docs_seed.bak'
$data = 'D:\database'

sqlcmd -S . -E -b -Q "BACKUP DATABASE rooms_init TO DISK='$backup' WITH COPY_ONLY, INIT"
sqlcmd -S . -E -b -Q "IF DB_ID('rooms_docs') IS NOT NULL BEGIN ALTER DATABASE rooms_docs SET SINGLE_USER WITH ROLLBACK IMMEDIATE; DROP DATABASE rooms_docs; END"
sqlcmd -S . -E -b -Q "RESTORE DATABASE rooms_docs FROM DISK='$backup' WITH MOVE 'rooms_primary' TO '$data\rooms_docs_primary.mdf', MOVE 'rooms_data' TO '$data\rooms_docs_data.ndf', MOVE 'rooms_index' TO '$data\rooms_docs_index.ndf', MOVE 'rooms_log' TO '$data\rooms_docs_log.ldf', RECOVERY"
# rooms_init fehlt die Rolle, die die Migrationen für ALTER SCHEMA brauchen.
sqlcmd -S . -E -d rooms_docs -b -Q "ALTER ROLE db_owner ADD MEMBER [rooms]"
Write-Host 'rooms_docs ist bereit. Jetzt placeme-db-migrate starten und danach seed-all.ps1 ausführen.'
