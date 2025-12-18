const {test, expect} =  require('@playwright/test');

test('homepage', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const pagetitle = await page.title();
    console.log("page title is ",pagetitle);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE');

    page.close();

})