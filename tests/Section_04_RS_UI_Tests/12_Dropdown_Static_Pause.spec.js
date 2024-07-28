
const {test,expect} = require('@playwright/test');


test('Section_04_RS_UI_Tests - HHandle Static Dropdown and Pause the execution', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";

    const txtBox_username = page.locator('#username');
    const txtBox_password = page.locator('#password');
    const btn_SignIn = page.locator('#signInBtn');
    const drpdwn_role = page.locator("select[class='form-control']");

    const title_products = page.locator('.card-body a')
    
    const data_login_username = "rahulshettyacademy";
    const data_login_password = "learning";

    // Go to the application
    await page.goto(applicationURL);

    console.log('Filling '+data_login_username+' in Username textBox');
    await txtBox_username.fill(data_login_username);
    
    console.log('Filling '+data_login_password+' in Password textBox');
    await txtBox_password.fill(data_login_password);

    //consult : <option value="consult">Consultant</option>
    await drpdwn_role.selectOption('consult')

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
    
    console.log('Click on Sign In button');
    await btn_SignIn.click();

    await page.pause();
    
});
