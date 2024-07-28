
const {test,expect} = require('@playwright/test');

test('Section_03_RS_UI_Tests - SignIn GetTitleOfFirstProduct using first().textContent(), nth(0).textContent()', async ({page} )=> {

    const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";

    const txtBox_username = page.locator('#username');
    const txtBox_password = page.locator('#password');
    const btn_SignIn = page.locator('#signInBtn');
    const title_products = page.locator('.card-body a')

    const data_login_username = "rahulshettyacademy";
    const data_login_password = "learning";

    // Go to the application
    await page.goto(applicationURL);

    console.log('Filling '+data_login_username+' in Username textBox');
    //fill() -> This method will first clear the textbox. Then, will fill the value in the textBox
    await txtBox_username.fill(data_login_username);
    
    console.log('Filling '+data_login_password+' in Password textBox');
    await txtBox_password.fill(data_login_password);

    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
    
    console.log('Click on Sign In button');
    await btn_SignIn.click();

    await new Promise(resolve => setTimeout(resolve, 3000)); // 2 sec

    //.card-body a -> This is a CSS Selector; Returning 4 elements
    //console.log(await page.locator('.card-body a').textContent()); // Strict mode violation
    console.log(await title_products.nth(0).textContent()); //This will look for the 1st element
    console.log(await title_products.first().textContent()); //This will look for the 1st element

    //allTextContents() 
        // -> This will get the title of all the elements and put into one array
        // -> Playwright does not auto-wait for this method
    console.log(await title_products.allTextContents());




});
