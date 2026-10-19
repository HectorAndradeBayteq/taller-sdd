# Prepara el sandbox como repo git y crea dos worktrees para el laboratorio.
# Uso (desde etapa-1/laboratorios/worktrees):
#   .\setup.ps1
# Idempotente: limpia worktrees previos y reinicia el .git del sandbox.

$ErrorActionPreference = 'Stop'
$labRoot = $PSScriptRoot
$sandbox = Join-Path $labRoot 'sandbox'
$wtFeature = Join-Path $labRoot 'wt-feature'
$wtFix = Join-Path $labRoot 'wt-fix'

if (-not (Test-Path -LiteralPath $sandbox)) {
    throw "No se encontró sandbox en: $sandbox"
}

function Remove-WorktreeIfPresent {
    param(
        [string]$RepoPath,
        [string]$WorktreePath
    )

    if (Test-Path -LiteralPath $WorktreePath) {
        Push-Location $RepoPath
        try {
            git worktree remove --force $WorktreePath 2>$null | Out-Null
        } catch {
            # Si el worktree no está registrado, se elimina la carpeta más abajo.
        } finally {
            Pop-Location
        }

        if (Test-Path -LiteralPath $WorktreePath) {
            Remove-Item -LiteralPath $WorktreePath -Recurse -Force
        }
    }
}

Write-Host 'Laboratorio worktrees — setup' -ForegroundColor Cyan

# Limpiar worktrees previos (si el sandbox ya tenía .git)
if (Test-Path -LiteralPath (Join-Path $sandbox '.git')) {
    Remove-WorktreeIfPresent -RepoPath $sandbox -WorktreePath $wtFeature
    Remove-WorktreeIfPresent -RepoPath $sandbox -WorktreePath $wtFix
    Push-Location $sandbox
    try {
        git worktree prune 2>$null | Out-Null
    } finally {
        Pop-Location
    }
}

# Reiniciar repo del sandbox
$gitDir = Join-Path $sandbox '.git'
if (Test-Path -LiteralPath $gitDir) {
    Remove-Item -LiteralPath $gitDir -Recurse -Force
}

Push-Location $sandbox
try {
    git init -b main | Out-Null
    git add README.md AGENTS.md src/greeter.js src/calculator.js
    git -c user.name='Lab Worktrees' -c user.email='lab-worktrees@local' commit -m 'chore: estado inicial del sandbox' | Out-Null

    git worktree add $wtFeature -b feature/saludo | Out-Null
    git worktree add $wtFix -b fix/calculadora | Out-Null

    Write-Host ''
    Write-Host 'Worktrees creados:' -ForegroundColor Green
    git worktree list
} finally {
    Pop-Location
}

Write-Host ''
Write-Host 'Siguiente paso: abre wt-feature y wt-fix como workspaces en Cursor (ver README.md).' -ForegroundColor DarkGray
