import { getFormattedDate,getFormattedDateOnly,CustomgetFormattedDate,getCurrentDate } from '../../utils.js';
import { test, expect, devices } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  storageState: './user-auth.json'
});

test('test_TC-D1-00009', async ({ page }) => {
  await page.goto('/');
  await page.locator('#tomselect-1-ts-control').click();
  await page.getByRole('option', { name: '🇦🇪 United Arab Emirates' }).last().click();
  await page.goto('/?country=3');
  await page.getByText('BarrysTDubai').click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'yes' }).click();
  await page.goto('/event/249053?_from=user_calendar&date=2026-06-14');
});
