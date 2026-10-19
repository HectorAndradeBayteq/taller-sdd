#Requires -Version 5.1
<#
.SYNOPSIS
  Consulta, extrae IDs y borra APIs via CURL configurable.

.DESCRIPTION
  Menu:
    1) GET al servicio -> data/apis.json
    2) Extrae IDs de apis.json -> api-id.json
    3) DELETE de cada ID en api-id.json
    4) Salir

  Configura URL y headers en data/curl-data.json:
  {
    "url": "https://.../apis/",
    "insecure": true,
    "headers": {
      "Authorization": "Basic ...",
      "Accept": "application/json",
      "Cookie": "..."
    }
  }
#>

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$DataDir   = Join-Path $ScriptDir "data"
$ApisFile  = Join-Path $DataDir "apis.json"
$IdsFile   = Join-Path $DataDir "api-id.json"
$CurlFile  = Join-Path $DataDir "curl-data.json"

function Show-Menu {
    Write-Host ""
    Write-Host "===== Gestion de APIs =====" -ForegroundColor Cyan
    Write-Host "1) Consultar APIs (GET) -> apis.json"
    Write-Host "2) Extraer IDs de apis.json -> api-id.json"
    Write-Host "3) Borrar APIs (DELETE) segun api-id.json"
    Write-Host "4) Salir"
    Write-Host ""
}

function Get-CurlConfig {
    if (-not (Test-Path $CurlFile)) {
        throw "No se encontro configuracion CURL: $CurlFile"
    }
    return Get-Content -Raw -Path $CurlFile | ConvertFrom-Json
}

function Get-CurlCommonArgs {
    param($Config)

    $args = @()
    if ($Config.insecure -eq $true) {
        $args += "--insecure"
    }
    foreach ($key in $Config.headers.PSObject.Properties.Name) {
        $args += "-H"
        $args += "${key}: $($Config.headers.$key)"
    }
    return $args
}

function Write-IdArrayJson {
    param([string[]]$Ids, [string]$Path)

    # Fuerza arreglo JSON incluso con 0 o 1 elemento (PS 5.1)
    $items = foreach ($id in $Ids) {
        '"' + ($id -replace '\\', '\\' -replace '"', '\"') + '"'
    }
    $json = "[" + ($items -join ",") + "]"
    [System.IO.File]::WriteAllText($Path, $json, [System.Text.UTF8Encoding]::new($false))
}

function Fetch-Apis {
    $config = Get-CurlConfig
    $url = $config.url

    if (-not (Test-Path $DataDir)) {
        New-Item -ItemType Directory -Path $DataDir | Out-Null
    }

    $tmpFile = Join-Path $DataDir "apis.json.tmp"

    Write-Host "GET $url" -ForegroundColor DarkGray

    $curlArgs = @(
        "--location",
        "--request", "GET",
        $url,
        "--silent",
        "--show-error",
        "--output", $tmpFile,
        "--write-out", "%{http_code}"
    ) + (Get-CurlCommonArgs -Config $config)

    $httpCode = & curl.exe @curlArgs 2>&1
    $exit = $LASTEXITCODE

    if ($exit -ne 0) {
        if (Test-Path $tmpFile) { Remove-Item -Force $tmpFile -ErrorAction SilentlyContinue }
        throw "curl fallo (exit $exit): $httpCode"
    }

    if ($httpCode -notmatch "^2\d\d$") {
        $preview = ""
        if (Test-Path $tmpFile) {
            $preview = (Get-Content -Raw -Path $tmpFile)
            if ($preview.Length -gt 300) { $preview = $preview.Substring(0, 300) + "..." }
            Remove-Item -Force $tmpFile -ErrorAction SilentlyContinue
        }
        throw "GET devolvio HTTP $httpCode. $preview"
    }

    # Validar que sea JSON parseable
    $raw = Get-Content -Raw -Path $tmpFile
    $null = $raw | ConvertFrom-Json
    Move-Item -Force -Path $tmpFile -Destination $ApisFile

    $apis = Get-Content -Raw -Path $ApisFile | ConvertFrom-Json
    $count = @($apis.result).Count
    Write-Host "APIs guardadas en: $ApisFile ($count en result)" -ForegroundColor Green
}

function Extract-ApiIds {
    if (-not (Test-Path $ApisFile)) {
        throw "No se encontro: $ApisFile. Ejecuta primero la opcion 1."
    }

    $apis = Get-Content -Raw -Path $ApisFile | ConvertFrom-Json
    $ids  = @($apis.result | ForEach-Object { $_.id } | Where-Object { $_ })

    Write-IdArrayJson -Ids $ids -Path $IdsFile
    Write-Host "Se escribieron $($ids.Count) ID(s) en: $IdsFile" -ForegroundColor Green
}

function Remove-ApisById {
    $config = Get-CurlConfig

    if (-not (Test-Path $IdsFile)) {
        throw "No se encontro: $IdsFile. Ejecuta primero la opcion 2."
    }

    $raw = Get-Content -Raw -Path $IdsFile
    if ([string]::IsNullOrWhiteSpace($raw)) {
        throw "api-id.json esta vacio. Ejecuta primero la opcion 2."
    }

    $ids = @(Get-Content -Raw -Path $IdsFile | ConvertFrom-Json)
    if ($ids.Count -eq 0) {
        Write-Host "No hay IDs para borrar." -ForegroundColor Yellow
        return
    }

    $baseUrl = $config.url.TrimEnd("/")

    Write-Host "Se van a borrar $($ids.Count) API(s) contra: $baseUrl/<API_ID>" -ForegroundColor Yellow
    $confirm = Read-Host "Confirmar? (s/N)"
    if ($confirm -notin @("s", "S", "y", "Y")) {
        Write-Host "Cancelado." -ForegroundColor DarkYellow
        return
    }

    $ok = 0
    $fail = 0
    $common = Get-CurlCommonArgs -Config $config

    foreach ($id in $ids) {
        $url = "$baseUrl/$id"
        Write-Host "DELETE $url" -ForegroundColor DarkGray

        $curlArgs = @(
            "--location",
            "--request", "DELETE",
            $url,
            "--silent",
            "--show-error",
            "--write-out", "HTTP_CODE:%{http_code}"
        ) + $common

        $output = & curl.exe @curlArgs 2>&1
        $exit = $LASTEXITCODE

        if ($exit -eq 0 -and ($output -match "HTTP_CODE:2\d\d")) {
            Write-Host "  OK  $output" -ForegroundColor Green
            $ok++
        }
        else {
            Write-Host "  FAIL (exit $exit) $output" -ForegroundColor Red
            $fail++
        }
    }

    Write-Host ""
    Write-Host "Listo. Exitosos: $ok | Fallidos: $fail" -ForegroundColor Cyan
}

# --- Main ---
# Nota: break dentro de switch NO sale del while; usar bandera.
$running = $true
while ($running) {
    Show-Menu
    $opt = Read-Host "Opcion"

    if ([string]::IsNullOrWhiteSpace($opt)) {
        Write-Host "Opcion vacia. Usa 1, 2, 3 o 4." -ForegroundColor Red
        continue
    }

    try {
        switch ($opt.Trim()) {
            "1" { Fetch-Apis }
            "2" { Extract-ApiIds }
            "3" { Remove-ApisById }
            "4" {
                Write-Host "Adios."
                $running = $false
            }
            default { Write-Host "Opcion invalida." -ForegroundColor Red }
        }
    }
    catch {
        Write-Host "Error: $_" -ForegroundColor Red
    }
}
