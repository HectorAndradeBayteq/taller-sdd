const { spawn, spawnSync } = require('node:child_process');
const qrcode = require('qrcode');

const target = readTarget(process.argv);
const isWindows = process.platform === 'win32';
const tunnelUrlPattern = /https:\/\/[a-z0-9-]+\.trycloudflare\.com/i;
const ansiPattern = /\u001b\[[0-9;]*m/g;

const launch = resolveCloudflared(target);
const child = spawn(launch.command, launch.args, {
  detached: !isWindows,
  shell: launch.shell,
  windowsHide: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});

let buffer = '';
let tunnelUrl = null;
let printedAfterReady = false;
let stopping = false;

child.stdout.on('data', onOutput);
child.stderr.on('data', onOutput);

child.on('error', (error) => {
  console.error(`No se pudo iniciar cloudflared: ${error.message}`);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(stopping ? 0 : (code ?? 1));
});

process.on('SIGINT', stop);
process.on('SIGTERM', stop);

function readTarget(argv) {
  const args = argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log('Uso: npm run tunnel -- --url http://localhost:4200');
    console.log('     node scripts/tunnel-qr.js --url http://localhost:4200');
    console.log('     node scripts/tunnel-qr.js http://localhost:4200');
    process.exit(0);
  }

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '--url' || arg === '-u') {
      return requireUrl(args[index + 1]);
    }

    if (arg.startsWith('--url=')) {
      return requireUrl(arg.slice('--url='.length));
    }

    if (!arg.startsWith('-')) {
      return requireUrl(arg);
    }
  }

  return 'http://localhost:4200';
}

function requireUrl(value) {
  if (!value || value.startsWith('-') || !/^https?:\/\//i.test(value)) {
    console.error(
      'Indica una URL http(s). Ejemplo: npm run tunnel -- --url http://localhost:4200',
    );
    process.exit(1);
  }

  return value;
}

function resolveCloudflared(origin) {
  const tunnelArgs = ['tunnel', '--url', origin];
  const installed = findOnPath('cloudflared');

  if (installed) {
    return { command: installed, args: tunnelArgs, shell: isBatchFile(installed) };
  }

  return {
    command: 'npx',
    args: ['--yes', 'cloudflared', ...tunnelArgs],
    shell: isWindows,
  };
}

function findOnPath(name) {
  const lookup = isWindows ? 'where.exe' : 'which';
  const result = spawnSync(lookup, [name], { encoding: 'utf8', windowsHide: true });

  if (result.status !== 0) {
    return null;
  }

  const matches = result.stdout
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!isWindows) {
    return matches[0] ?? null;
  }

  return matches.find((line) => line.toLowerCase().endsWith('.exe')) ?? matches[0] ?? null;
}

function isBatchFile(command) {
  return isWindows && /\.(cmd|bat)$/i.test(command);
}

function onOutput(chunk) {
  const text = chunk.toString();
  process.stderr.write(text);

  if (!tunnelUrl) {
    buffer += text.replace(ansiPattern, '');
    const match = buffer.match(tunnelUrlPattern);

    if (match) {
      tunnelUrl = match[0];
      buffer = '';
      void printQr(tunnelUrl);
    } else if (buffer.length > 16000) {
      buffer = buffer.slice(-4000);
    }
  }

  if (tunnelUrl && !printedAfterReady && text.includes('Registered tunnel connection')) {
    printedAfterReady = true;
    void printQr(tunnelUrl);
  }
}

async function printQr(url) {
  const qr = await qrcode.toString(url, {
    type: 'terminal',
    small: true,
    errorCorrectionLevel: 'M',
  });

  console.log(`\nTúnel listo. Escanea este QR (la app debe estar en ${target}):\n`);
  console.log(qr);
  console.log(url);
  console.log('\nCtrl+C cierra el túnel.\n');
}

function stop() {
  if (stopping) {
    process.exit(1);
  }

  stopping = true;

  if (isWindows) {
    const result = spawnSync('taskkill', ['/pid', String(child.pid), '/t', '/f'], {
      windowsHide: true,
    });

    if (result.status !== 0) {
      child.kill();
    }

    return;
  }

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    child.kill('SIGTERM');
  }
}
