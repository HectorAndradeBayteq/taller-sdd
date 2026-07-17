# Menú para abrir laboratorios de etapa-1 en una nueva ventana de Cursor.
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot

function Show-Menu {
    param([System.IO.DirectoryInfo[]]$Directories)

    Clear-Host
    Write-Host ''
    Write-Host '  Laboratorios — Etapa 1' -ForegroundColor Cyan
    Write-Host '  ========================'
    Write-Host ''

    for ($i = 0; $i -lt $Directories.Count; $i++) {
        Write-Host ('  {0,2}. {1}' -f ($i + 1), $Directories[$i].Name)
    }

    $exitOption = $Directories.Count + 1
    Write-Host ('  {0,2}. Salir' -f $exitOption) -ForegroundColor DarkGray
    Write-Host ''
}

while ($true) {
    $dirs = @(Get-ChildItem -LiteralPath $root -Directory | Sort-Object Name)

    if ($dirs.Count -eq 0) {
        Write-Host "No hay directorios en: $root" -ForegroundColor Yellow
        break
    }

    Show-Menu -Directories $dirs
    $choice = Read-Host '  Selecciona una opción'

    if (-not ($choice -match '^\d+$')) {
        Write-Host '  Opción no válida.' -ForegroundColor Red
        Start-Sleep -Seconds 1
        continue
    }

    $index = [int]$choice
    $exitOption = $dirs.Count + 1

    if ($index -eq $exitOption) {
        Write-Host '  Saliendo...' -ForegroundColor DarkGray
        break
    }

    if ($index -lt 1 -or $index -gt $dirs.Count) {
        Write-Host '  Opción no válida.' -ForegroundColor Red
        Start-Sleep -Seconds 1
        continue
    }

    $target = $dirs[$index - 1].FullName
    Write-Host ("  Abriendo '{0}' en Cursor..." -f $dirs[$index - 1].Name) -ForegroundColor Green
    cursor -n $target
    Start-Sleep -Seconds 1
}
