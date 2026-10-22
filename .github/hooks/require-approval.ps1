$ErrorActionPreference = 'Stop'

try {
    $event = [Console]::In.ReadToEnd() | ConvertFrom-Json
    if (-not $event.tool_name) {
        throw 'Missing tool_name in Copilot hook event.'
    }

    $reason = "Approve this AI action before it edits files or runs a shell command ($($event.tool_name))."
    $response = @{
        permissionDecision = 'ask'
        permissionDecisionReason = $reason
    } | ConvertTo-Json -Compress

    [Console]::Out.WriteLine($response)
}
catch {
    [Console]::Error.WriteLine('Unable to evaluate the AI approval hook.')
    exit 2
}