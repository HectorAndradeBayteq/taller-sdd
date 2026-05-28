# Logs each agent tool use to activity.log next to this script.
# stdin: JSON from Cursor; stdout: JSON response (must be last — see Cursor hooks docs).
#
# Read stdin completely before writing stdout. Writing {} first can race the hook runner
# on Windows and yield empty stdin, which shows up as tool=unknown target=n/a.

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

function Limit-LogTarget {
    param([string]$s)
    if ([string]::IsNullOrEmpty($s)) { return $s }
    $max = 280
    if ($s.Length -le $max) { return $s }
    return $s.Substring(0, $max) + [char]0x2026
}

function Get-PropValue {
    param($bucket, [string[]]$props)
    if ($null -eq $bucket) { return $null }
    foreach ($p in $props) {
        $v = $bucket.$p
        if ($null -eq $v) { continue }
        if ($v -is [System.Array]) {
            if ($v.Length -gt 0) {
                $joined = ($v | ForEach-Object { [string]$_ }) -join ', '
                if ('' -ne $joined) { return $joined }
            }
            continue
        }
        $s = [string]$v
        if ('' -ne $s) { return $s }
    }
    $null
}

function Get-ToolTarget {
    param($obj)
    if ($null -eq $obj) { return 'n/a' }

    $props = @(
        'file_path', 'path', 'target_file', 'target_path', 'filePath', 'relative_path',
        'file', 'notebook_path', 'uri', 'url',
        'command', 'pattern', 'glob_pattern', 'query', 'description', 'prompt', 'toolName'
    )

    $buckets = @(
        (Get-NormalizedBucket $obj.tool_input),
        (Get-NormalizedBucket $obj.input),
        (Get-NormalizedBucket $obj.arguments),
        (Get-NormalizedBucket $obj.params)
    )

    foreach ($b in $buckets) {
        $hit = Get-PropValue $b $props
        if ($null -ne $hit) { return (Limit-LogTarget $hit) }
        if ($null -ne $b) {
            foreach ($nested in @('arguments', 'params', 'input', 'tool_input')) {
                $inner = Get-NormalizedBucket $b.$nested
                $hit = Get-PropValue $inner $props
                if ($null -ne $hit) { return (Limit-LogTarget $hit) }
            }
        }
    }

    $rootHit = Get-PropValue $obj $props
    if ($null -ne $rootHit) { return (Limit-LogTarget $rootHit) }

    # postToolUse often includes tool_output as a JSON string; input fields may be omitted/redacted.
    $outBucket = Get-NormalizedBucket $obj.tool_output
    $outHit = Get-PropValue $outBucket $props
    if ($null -ne $outHit) { return (Limit-LogTarget $outHit) }

    if ($null -ne $outBucket) {
        foreach ($nested in @('arguments', 'params', 'result', 'data')) {
            $inner = Get-NormalizedBucket $outBucket.$nested
            $outHit = Get-PropValue $inner $props
            if ($null -ne $outHit) { return (Limit-LogTarget $outHit) }
        }
    }

    if ($null -ne $obj.cwd -and '' -ne [string]$obj.cwd) {
        return (Limit-LogTarget ("cwd=$([string]$obj.cwd)"))
    }

    'n/a'
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
$file = 'n/a'

if (-not [string]::IsNullOrWhiteSpace($raw)) {
    try {
        $obj = $raw | ConvertFrom-Json -ErrorAction Stop
        $tool = Get-ToolName $obj
        $file = Get-ToolTarget $obj
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
