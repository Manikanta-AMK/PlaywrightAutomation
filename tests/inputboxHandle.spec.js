const {test,expect} = require('@playwright/test')

test('HandleInputbox', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    await expect(await page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toBeVisible()
    await expect(await page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toBeEmpty()
    await expect(await page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toBeEditable()
    await expect(await page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toBeEnabled()

    const value =  page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]').fill('AMK')
    //await page.fill('//input[@id="Wikipedia1_wikipedia-search-input"]')
    // expect(value).toHaveValue('AMK')
    await page.waitForTimeout(10000)
})