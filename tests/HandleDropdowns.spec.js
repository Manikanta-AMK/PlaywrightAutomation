const {test, expect} = require('@playwright/test')

test('hanlde dropdowns', async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   await page.locator("#country").selectOption('Canada') //visible text

    await page.locator('#country').selectOption({value:'india'}) //value
   
    await page.locator('#country').selectOption({label:'Australia'}) //label
    await page.locator('#country').selectOption({index:2}) //index
    await page.selectOption('#country','France')

    await page.waitForTimeout(5000)

    //assertions
    //1.checknumber of options in dropdown --approch 1
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10)

    //2. checknumber of options in dropdwon --approch 2
    const options2 = await page.$$('#country option')
    console.log('number of the options'+ options2)
    await expect(options2.length).toBe(10)

    //3. check the precence of value in dropdown -approch 3
    const content = await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy()

    //4. check the number of value in dropdown --approch 4
    const options3 = await page.$$('#country option')
    let status = false;

    for(const opt of options3)
    {
        let value = await opt.textContent()
        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy()


    
})