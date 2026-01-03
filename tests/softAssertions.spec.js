 const {test, expect} = require('@playwright/test');

 test('softAssertion', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await expect.soft(page).toHaveTitle('Automation Testing Practice: PlaywrightPracticew')
    await expect(page.locator('//a[normalize-space()="Automation Testing Practice"]')).toBeVisible()

 })