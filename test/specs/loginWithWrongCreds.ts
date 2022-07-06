import {loginPage} from '../pageObjects/LoginPage';
import {loginPageService} from '../services/LoginPageService';
import {loginPageTestData} from '../testData/LoginPageTestData';

const user = loginPageTestData.userName;
const pass = loginPageTestData.password;

describe('Try to log in with wrong creds', () => {
    it('Should not login with invalid credentials', async () => {
        await loginPageService.openLoginPageAndClosePopup();
        await loginPageService.fillLoginPageForm(user, pass);

        expect(await loginPage.isErrorMessageShown()).toBe(true);
        expect(await loginPage.getErrorMessageText()).toBe(loginPageTestData.errorMessageText);
    });
});


