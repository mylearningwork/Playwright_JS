
const {test,expect} = require('@playwright/test');

test('Section_02_RS_UI_Tests - Wait and Assert the Page Title', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});

test('Section_02_RS_UI_Tests - Intentionally Failing - Wait and Assert the Page Title', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    //await delay(5000); //ReferenceError: delay is not defined
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

    // Assert the Page Title
    await expect(page).toHaveTitle('Google1');

});
