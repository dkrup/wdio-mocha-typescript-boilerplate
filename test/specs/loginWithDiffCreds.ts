import {loginPage} from '../pageObjects/LoginPage';
import {loginPageService} from '../services/LoginPageService';
import {loginPageTestData} from '../testData/LoginPageTestData';

const invalidUser = loginPageTestData.invalidUsername;
const invalidPass = loginPageTestData.invalidPassword;
const validUser = loginPageTestData.validUsername;
const validPass = loginPageTestData.validPassword;

describe('Try to log in with invalid and valid credentials', () => {
    it('Should not login with invalid credentials', async () => {
        await loginPageService.openLoginPage();
        await loginPageService.fillLoginPageForm(invalidUser, invalidPass);

        expect(await loginPage.isErrorMessageShown()).toBe(true);
        expect(await loginPage.getErrorMessageText()).toBe(loginPageTestData.errorMessageText);
    });

    it('Should login with valid credentials', async () => {
        await loginPageService.openLoginPage();
        await loginPageService.fillLoginPageForm(validUser, validPass);
        const isLoginSuccessful = await loginPageService.isLoginSuccessful();

        expect(isLoginSuccessful).toBe(true);
        expect(await loginPage.isErrorMessageShown()).toBe(false);
    });
});


