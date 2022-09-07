import { test } from '@playwright/test';

test('check from public websites', async ({ page }) => {
    await page.goto('https://secure.indeed.com/');

    await page.locator('text=Accept All Cookies').click();

    await page.waitForTimeout(10000);
});
