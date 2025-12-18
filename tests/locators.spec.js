//const {test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

// we have to import the modules by using the fist line or second line -- either way is fine
//login with locators

test('locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    
   // click on login button
    //await page.locator('id=login2').click
    await page.click('id=login2')

    //provide username  -- cs
    await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')   // either way is fine

    //provide password --cs
    await page.locator('id=loginpassword').fill('test@123')

    page.screenshot()

    //used xpath
    await page.click("//button[normalize-space()='Log in']")
        
    const logoutlink = await page.locator('#login2')
    await expect(logoutlink).toBeVisible
    page.close()
})