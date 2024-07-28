
const {test,expect} = require('@playwright/test');
//const { default: CommonUtils } = require('../../utils/CommonUtils');
//import commonUtils from '../../utils/CommonUtils'
const {CommonUtils}=require('../../utils/CommonUtils');
const {LoginPage} = require('../../pageObjects/LoginPage');
const {DashboardPage} = require('../../pageObjects/DashboardPage');


test('Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Login_Assert_Msg_LoginSuccess', async ({page} )=> {

    const data_login_username = "testtmail95@gmail.com";
    const data_login_password = "HiRahul@123";

    /****************** Login Page - START *******************/
    
    const loginPage = new LoginPage(page);
    await loginPage.goToApplication();
    await loginPage.loginToApplication(data_login_username,data_login_password);

    /****************** Login Page - END *******************/
 
    /****************** Dashboard Page - START *******************/
    const dashboardPage = new DashboardPage(page);    
    const product_ToAdd='iphone 13 pro';
    await dashboardPage.searchProduct_And_AddToCart(product_ToAdd);

    console.log('Assertions for message: Product Added To Cart')
    await expect(dashboardPage.getMsg_ProductAdded_ToCart()).toBeVisible();
    await expect(dashboardPage.getMsg_ProductAdded_ToCart()).toHaveText('Product Added To Cart');
    await expect(dashboardPage.getMsg_ProductAdded_ToCart()).toContainText('Added To Cart');

    /****************** Dashboard Page - END *******************/

    //await page.pause();
});

test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});//afterEach



