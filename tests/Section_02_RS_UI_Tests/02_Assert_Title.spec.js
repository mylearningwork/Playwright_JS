    
const {test,expect} = require('@playwright/test');

test('Section_02_RS_UI_Tests - Assert the Page Title', async ({page} )=> {

    // Go to the application
    await page.goto("https://www.google.com/");

    // Get the Title and Print
    console.log(await page.title());

    // Assert the Page Title
    await expect(page).toHaveTitle('Google');

});
