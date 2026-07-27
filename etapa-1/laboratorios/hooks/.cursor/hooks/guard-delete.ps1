# Bloquea la herramienta Delete (preToolUse).
# stdin: JSON del evento; stdout: decision de permiso (UTF-8).
# Codigo de salida 2 = deny (compatibilidad con Cursor / Claude Code).
#
# Los mensajes usan escapes \uXXXX para que el .ps1 sea ASCII puro:
# asi no depende del encoding del archivo ni de la code page de la consola.

$utf8 = New-Object System.Text.UTF8Encoding $false
[Console]::InputEncoding = $utf8
[Console]::OutputEncoding = $utf8
$OutputEncoding = $utf8

function Write-Utf8Line {
    param([string]$Text)
    $bytes = $utf8.GetBytes($Text + "`n")
    $stdout = [Console]::OpenStandardOutput()
    $stdout.Write($bytes, 0, $bytes.Length)
    $stdout.Flush()
}

$raw = ''
try {
    $raw = [Console]::In.ReadToEnd()
}
catch {
    $raw = ''
}

$tool = ''
if (-not [string]::IsNullOrWhiteSpace($raw)) {
    try {
        $obj = $raw | ConvertFrom-Json -ErrorAction Stop
        if ($null -ne $obj.tool_name) { $tool = [string]$obj.tool_name }
    }
    catch {
        if ($raw -match '"tool_name"\s*:\s*"([^"]*)"') {
            $tool = $Matches[1]
        }
    }
}

if ($tool -eq 'Delete') {
    # JSON con \uXXXX: Cursor decodifica a UTF-8 correctamente.
    $response = '{"permission":"deny","user_message":"La herramienta Delete est\u00e1 bloqueada por pol\u00edtica del laboratorio.","agent_message":"No puedes usar Delete. Explica al usuario que est\u00e1 prohibida por un hook preToolUse y sugiere alternativas no destructivas (mover a papelera, editar contenido, etc.)."}'
    Write-Utf8Line $response
    exit 2
}

Write-Utf8Line '{"permission":"allow"}'
exit 0
