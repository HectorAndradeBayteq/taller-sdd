import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:5173',
    // Usa el Chrome ya instalado (Laboratorio 4): evita descargar navegadores de Playwright.
    channel: 'chrome',
    trace: 'retain-on-failure',
  },
  // Levanta app-demo automáticamente al ejecutar los tests.
  webServer: {
    command: 'node serve.mjs',
    cwd: '..',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});
