# Bloquea comandos de shell destructivos (PreToolUse, matcher shell).
# stdin: JSON del evento. stderr: motivo. Salida 2 bloquea; salida 0 deja seguir.
#
# Misma politica que el prompt de .cursor/hooks.json: rm -rf, Remove-Item, del,
# DROP TABLE, git push --force, git reset --hard.

$utf8 = New-Object System.Text.UTF8Encoding $false
[Console]::InputEncoding = $utf8
[Console]::OutputEncoding = $utf8
$OutputEncoding = $utf8

function Write-Utf8Error {
    param([string]$Text)
    $bytes = $utf8.GetBytes($Text + "`n")
    $stderr = [Console]::OpenStandardError()
    $stderr.Write($bytes, 0, $bytes.Length)
    $stderr.Flush()
}

function Get-CommandText {
    param($obj, [string]$raw)
    $chunks = New-Object System.Collections.Generic.List[string]
    if ($null -ne $obj) {
        foreach ($bucket in @($obj.tool_input, $obj.input, $obj.arguments, $obj.params)) {
            if ($null -eq $bucket) { continue }
            foreach ($name in @('command', 'cmd', 'script')) {
                $value = $bucket.$name
                if ($null -ne $value -and '' -ne [string]$value) {
                    $chunks.Add([string]$value)
                }
            }
        }
    }
    if ($chunks.Count -eq 0) { return $raw }
    return ($chunks -join "`n")
}

function Test-DangerousCommand {
    param([string]$Text)
    if ([string]::IsNullOrWhiteSpace($Text)) { return $false }
    $patterns = @(
        'rm\s+-rf\b',
        'Remove-Item',
        '(^|[\s;&|`(])del(\s|$)',
        'DROP\s+TABLE',
        'git\s+push\s+--force',
        'git\s+reset\s+--hard'
    )
    foreach ($pattern in $patterns) {
        if ($Text -match $pattern) { return $true }
    }
    return $false
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

$obj = $null
if (-not [string]::IsNullOrWhiteSpace($raw)) {
    try {
        $obj = $raw | ConvertFrom-Json -ErrorAction Stop
    }
    catch {
        $obj = $null
    }
}

$command = Get-CommandText $obj $raw
if (Test-DangerousCommand $command) {
    Write-Utf8Error 'Comando destructivo bloqueado por el hook del laboratorio.'
    exit 2
}

exit 0
