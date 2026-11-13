# Logs each agent tool use to activity.log next to this script.
# stdin: JSON from Claude Code; stdout: {} (must be last).
#
# Read stdin completely before writing stdout. Writing {} first can race the hook runner
# on Windows and yield empty stdin, which shows up as tool=unknown.

function Get-NormalizedBucket {
    param($bucket)
    if ($null -eq $bucket) { return $null }
    if ($bucket -is [string]) {
        $t = $bucket.Trim()
        if ($t.Length -eq 0) { return $null }
        try {
            return ($t | ConvertFrom-Json -ErrorAction Stop)
        }
        catch {
            return $null
        }
    }
    return $bucket
}

function Get-ToolName {
    param($obj)
    if ($null -eq $obj) { return 'unknown' }
    foreach ($p in @('tool_name', 'name')) {
        $v = $obj.$p
        if ($null -ne $v -and '' -ne [string]$v) { return [string]$v }
    }
    if ($null -ne $obj.metadata) {
        $v = $obj.metadata.tool_name
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

try {
    [Console]::Out.WriteLine('{}')
    [Console]::Out.Flush()
}
catch {
    [Console]::WriteLine('{}')
}

exit 0
