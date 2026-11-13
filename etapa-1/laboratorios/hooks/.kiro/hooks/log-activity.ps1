# Logs each agent tool use to activity.log next to this script.
# stdin: JSON from Kiro. stdout stays empty: Kiro adds exit-0 stdout to the agent context.

function Get-ToolName {
    param($obj)
    if ($null -eq $obj) { return 'unknown' }
    foreach ($p in @('tool_name', 'name')) {
        $v = $obj.$p
        if ($null -ne $v -and '' -ne [string]$v) { return [string]$v }
    }
    'unknown'
}

$raw = ''
try {
    $raw = [Console]::In.ReadToEnd()
}
catch {
    $raw = ''
}

if ($null -ne $raw) {
    $raw = $raw.TrimStart([char]0xFEFF)
}

$tool = 'unknown'

if (-not [string]::IsNullOrWhiteSpace($raw)) {
    try {
        $obj = $raw | ConvertFrom-Json -ErrorAction Stop
        $tool = Get-ToolName $obj
    }
    catch {
        # JSON parse failed — try to salvage tool name for the log line
    }
    if ($tool -eq 'unknown' -and $raw -match '"tool_name"\s*:\s*"([^"]*)"') {
        $tool = $Matches[1]
    }
}

try {
    $logPath = Join-Path $PSScriptRoot 'activity.log'
    $ts = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Add-Content -LiteralPath $logPath -Value "[$ts] tool=$tool" -Encoding utf8
}
catch {
    # logging must not fail the hook
}

exit 0
