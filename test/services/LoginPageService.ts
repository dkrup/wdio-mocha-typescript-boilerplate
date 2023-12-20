import {loginPage} from '../pageObjects/LoginPage';

class LoginPageService {
    async openLoginPage() {
        await loginPage.openWebsite();
        await loginPage.waitForLoginFormVisible();
        await loginPage.waitForUsernameInputVisible();
        await loginPage.waitForPasswordInputVisible();
    }

    async fillLoginPageForm(userName: string, password: string) {
        await loginPage.fillUsernameInput(userName);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickLoginBtn();
    };

    async isLoginSuccessful() {
        return await loginPage.isInventoryPageOpened();
    };
}

export const loginPageService = new LoginPageService();
