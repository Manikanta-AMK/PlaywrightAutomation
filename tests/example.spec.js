// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://flipkart.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Online shopping india/);

  //click on the login button
  await page.getByText('login').click();
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.flipkart.com/account/login?ret=/account/login');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
