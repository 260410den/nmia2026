const { test, expect } = require('@playwright/test');

test('Chromium can render a page and handle a click', async ({ page }) => {
  await page.setContent('<button onclick="this.textContent=\'Ready\'">Start</button>');
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByRole('button')).toHaveText('Ready');
});
