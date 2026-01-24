const { test, expect } = require('@playwright/test');

test('handle checkbox', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Heading visibility check (no extra await inside expect)
  await expect(page.locator("//h1[normalize-space()='Automation Testing Practice']")).toBeVisible();

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
  const checkboxes = page.locator('//label[text()="Days:"]//following-sibling::div[@class="form-check form-check-inline"]//input');
  const checkbox = [checkboxes]

  const checkboxLabels = page.locator('//label[text()="Days:"]//following-sibling::div[@class="form-check form-check-inline"]//label');

  const daysName = await checkboxLabels.allTextContents();
  const count = await checkboxes.count();

  for(const chbx of checkbox)
  {
    await page.locator(chbx).check()
    await expect(chbx).isChecked().toBeTruthy()
    console.log(daysName+" is selected")
  }

  for(const chbx of checkboxLabels)
  {
    if(await page.locator(chbx).isChecked())
    {
        await page.locator(chbx).uncheck()
        await expect(chbx).not.toBeChecked().toBeTruthy()
        console.log(chbx+" unselected")
    }
    
  }

  // checkeboxes checked
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check();
    await expect(checkboxes.nth(i).isChecked()).toBeTruthy();

    console.log("Selected " + daysName[i]);
  }
    // await page.waitForTimeout(10000)

    console.log(" ")
    // check boxes unchecked
    for(let j=0; j< count;j++)
    {
        await checkboxes.nth(j).uncheck()
        await expect(checkboxes.nth(j)).not.toBeChecked()

        console.log("un selected "+ daysName[j])
    }

    // await page.waitForTimeout(10000)

});
