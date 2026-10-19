import { expect, test } from '@playwright/test';

// Humo: comprueba que el runner, Chrome y app-demo funcionan antes de que el agente genere specs.
test('la app carga y muestra el estado vacío', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Time Tracker' })).toBeVisible();
  await expect(page.getByText('Aún no hay tareas registradas.')).toBeVisible();
});
