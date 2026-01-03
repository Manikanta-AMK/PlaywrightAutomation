/*1) expect(page).toHaveURL()     Page has URL
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
  // await expect(page.getByText('Qafox.com')).toBeVisible();

  // 4) Control enabled validation (Radio button "No")
  const radioNo = page.getByRole('radio', { name: 'No' });
  await expect(radioNo).toBeEnabled();

  // 👉 FIX: Check radio button before asserting checked state
  await radioNo.check();
  await expect(radioNo).toBeChecked();

  // 5) Element text validation
  const subscribeLabel = page.locator('label').filter({ hasText: 'Subscribe' });
  await expect(subscribeLabel).toContainText('Subscribe');

  // 6) Checkbox checked validation
  const privacyCheckbox = page.locator('input[name="agree"]');
  await privacyCheckbox.check();
  await expect(privacyCheckbox).toBeChecked();

  // 7) Attribute validation
  const continueButton = page.locator('input.btn.btn-primary');
  await expect(continueButton).toHaveAttribute('value', 'Continue');

  // 8) Element has text (regex is correct here)
  await expect(page.locator('#content')).toHaveText(/Register Account/);

  // 9) Element contains text
  await expect(page.locator('#content')).toContainText('Account');

  // 10) Input value validation
  const firstNameInput = page.locator('#input-firstname');
  await firstNameInput.fill('Hi');
  await expect(firstNameInput).toHaveValue('Hi');

  // 10) expect(locator).toHaveCount()  List of elements has given length


  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
  page.locator("(//input[@id='comboBox'])[1]").click()

  
  const dropdownValues = await page.locator("//div[@id='dropdown']//div")
    await expect(dropdownValues).toHaveCount(100)
});
