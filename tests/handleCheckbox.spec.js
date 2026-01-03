const { test, expect } = require('@playwright/test');

test('handle checkbox', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Heading visibility check (no extra await inside expect)
  await expect(
    page.locator("//h1[normalize-space()='Automation Testing Practice']")
  ).toBeVisible();

  // Single checkbox (Sunday)
  const sundayCheckbox = page.locator('#sunday');
  await sundayCheckbox.check();

  // Always await async methods
  if (await sundayCheckbox.isChecked()) {
    console.log("Sunday checkbox has been selected");
  } else {
    console.log("Sunday checkbox has not been selected");
  }

  // ALL checkboxes under Days
  const checkboxes = page.locator(
    '//label[text()="Days:"]//following-sibling::div[@class="form-check form-check-inline"]//input'
  );

  const checkboxLabels = page.locator(
    '//label[text()="Days:"]//following-sibling::div[@class="form-check form-check-inline"]//label'
  );

  const daysName = await checkboxLabels.allTextContents();
  const count = await checkboxes.count();

  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check();
    await expect(checkboxes.nth(i)).toBeChecked();

    console.log("Selected " + daysName[i]);
  }

});
