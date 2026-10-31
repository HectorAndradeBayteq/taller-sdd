# Menú para abrir laboratorios de etapa-1 en una nueva ventana del IDE seleccionado.
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot

$ides = @(
    [pscustomobject]@{ Name = 'Cursor';             Command = 'cursor' }
    [pscustomobject]@{ Name = 'Visual Studio Code'; Command = 'code' }
    [pscustomobject]@{ Name = 'Kiro';               Command = 'kiro' }
)

function Select-Ide {
    param([object[]]$Options)

    while ($true) {
        Clear-Host
        Write-Host ''
        Write-Host '  Selecciona el IDE' -ForegroundColor Cyan
        Write-Host '  ================='
        Write-Host ''

        for ($i = 0; $i -lt $Options.Count; $i++) {
            Write-Host ('  {0,2}. {1}' -f ($i + 1), $Options[$i].Name)
        }

        $exitOption = $Options.Count + 1
        Write-Host ('  {0,2}. Salir' -f $exitOption) -ForegroundColor DarkGray
        Write-Host ''

        $choice = Read-Host '  Selecciona una opción'

        if ($choice -match '^\d+$') {
            $index = [int]$choice
            if ($index -eq $exitOption) { return $null }
            if ($index -ge 1 -and $index -le $Options.Count) {
                $ide = $Options[$index - 1]
                if (-not (Get-Command $ide.Command -ErrorAction SilentlyContinue)) {
                    Write-Host ("  No se encontró el comando '{0}' en el PATH." -f $ide.Command) -ForegroundColor Red
                    Start-Sleep -Seconds 2
                    continue
                }
                return $ide
            }
        }

        Write-Host '  Opción no válida.' -ForegroundColor Red
        Start-Sleep -Seconds 1
    }
}

function Show-Menu {
    param(
        [System.IO.DirectoryInfo[]]$Directories,
        [string]$IdeName
    )

    Clear-Host
    Write-Host ''
    Write-Host ('  Laboratorios — Etapa 1 ({0})' -f $IdeName) -ForegroundColor Cyan
    Write-Host '  ========================'
    Write-Host ''

    for ($i = 0; $i -lt $Directories.Count; $i++) {
        Write-Host ('  {0,2}. {1}' -f ($i + 1), $Directories[$i].Name)
    }

    $exitOption = $Directories.Count + 1
    Write-Host ('  {0,2}. Salir' -f $exitOption) -ForegroundColor DarkGray
    Write-Host ''
}

$ide = Select-Ide -Options $ides
if ($null -eq $ide) {
    Write-Host '  Saliendo...' -ForegroundColor DarkGray
    return
}

while ($true) {
    $dirs = @(Get-ChildItem -LiteralPath $root -Directory | Sort-Object Name)

    if ($dirs.Count -eq 0) {
        Write-Host "No hay directorios en: $root" -ForegroundColor Yellow
        break
    }

    Show-Menu -Directories $dirs -IdeName $ide.Name
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
    Write-Host ("  Abriendo '{0}' en {1}..." -f $dirs[$index - 1].Name, $ide.Name) -ForegroundColor Green
    & $ide.Command -n $target
    Start-Sleep -Seconds 1
}
