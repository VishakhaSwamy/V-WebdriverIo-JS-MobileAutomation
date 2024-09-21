const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../screen_objects/login');
const homePage = require('../screen_objects/home');
const { expect, $ } = require('@wdio/globals');

// Navigate to the app login page
Given(/^I am on app login Page$/, async () => {
    await homePage.navigateLoginPage();
});

// Perform login action
 When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
   await loginPage.loginAction(username, password);
 });

//verify Expected Element after clicking login
Then(/^I see "([^"]*)" on the page after clicking Login button$/, async (expectedText) => {
	if(expectedText==="Products")
    await expect(loginPage.productPage).toHaveText(expectedText);
  else
    await expect(loginPage.errorMessage).toHaveText(expectedText);
});
