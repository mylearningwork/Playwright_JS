
const {test,expect} = require('@playwright/test');
const {CommonUtils}=require('../../utils/CommonUtils');
const {POM_Manager} = require('../../pageObjects/POM_Manager');

// JSON -> String -> JS Object
const credentials_login_multipleDataSet = JSON.parse(JSON.stringify(require('../../testData/credentials_login_multipleDataSet.json')));

//Iterating through an Array
for(const data of credentials_login_multipleDataSet){

    test(`Section_11_RS_UI_Tests - POM_Optimized_Login_MultipleDataSet_JSON with Credentials: ${data.username} and ${data.password}`, async ({page} )=> {

        const data_login_username = data.username;
        const data_login_password = data.password;

        const pom_Manager = new POM_Manager(page);
        console.log('******************');

        /****************** Login Page - START *******************/
        const loginPage = pom_Manager.getLoginPage();
        await loginPage.goToApplication();
        await loginPage.loginToApplication(data_login_username,data_login_password);

        // PENDING
        console.log('Assertion for Error message(Incorrect username/password.)')
        await expect(loginPage.getMsg_Incorrect_username_password()).toBeVisible();
        await expect(dashboardPage.getMsg_Incorrect_username_password()).toHaveText('Incorrect username/password.');    
        /****************** Login Page - END *******************/
        console.log('******************');
    });//test
}//for

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



