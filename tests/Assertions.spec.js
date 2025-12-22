/* Assertions
-----------
Playwright includes test assertions in the form of expect function.
Reference: https://playwright.dev/docs/test-assertions

1) expect(page).toHaveURL()     Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length  */

const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {

  // Navigate to page
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

  // 1) Page URL validation
  await expect(page).toHaveURL(
    'https://tutorialsninja.com/demo/index.php?route=account/register'
  );

  // 2) Page title validation
  await expect(page).toHaveTitle('Register Account');

  // 3) Element visibility validation
  await expect(page.getByText('Qafox.com')).toBeVisible();

  // 4) Control enabled validation (Radio button "No")
  const radioNo = page.getByRole('radio', { name: 'No' });
  await expect(radioNo).toBeEnabled();

  // 5) Radio button checked validation
  await expect(radioNo).toBeChecked();

  // 6) Element text validation
  const subscribeLabel = page.locator('label').filter({ hasText: 'Subscribe' });
  await expect(subscribeLabel).toHaveText('Subscribe');

  // 7) Checkbox checked validation
  const privacyCheckbox = page.locator('input[type="checkbox"]');
  await privacyCheckbox.check();
  await expect(privacyCheckbox).toBeChecked();

  // 8) Attribute validation
  const continueButton = page.locator('input.btn.btn-primary');
  await expect(continueButton).toHaveAttribute('value', 'Continue');

  // 9) Element has text
  await expect(page.locator('#content')).toHaveText(/Register Account/);

  // 10) Element contains text
  await expect(page.locator('#content')).toContainText('Account');

  // 11) Input value validation
  const firstNameInput = page.locator('#input-firstname');
  await firstNameInput.fill('Hi');
  await expect(firstNameInput).toHaveValue('Hi');

});
