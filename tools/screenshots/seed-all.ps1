# Spielt seed.sql und danach alle Bereichs-Ergänzungen (seed-*.sql) in rooms_docs ein.
$ErrorActionPreference = 'Stop'
$files = @(Join-Path $PSScriptRoot 'seed.sql') + (Get-ChildItem $PSScriptRoot -Filter 'seed-*.sql' | Sort-Object Name | ForEach-Object FullName)
foreach ($file in $files) {
	Write-Host $file
	sqlcmd -S . -E -d rooms_docs -b -I -f 65001 -W -i $file
	if ($LASTEXITCODE -ne 0) { throw "Seed fehlgeschlagen: $file" }
}
