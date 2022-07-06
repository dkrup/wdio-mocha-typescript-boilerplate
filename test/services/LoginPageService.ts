import {loginPage} from '../pageObjects/LoginPage';

class LoginPageService {
    async openLoginPageAndClosePopup() {
        await loginPage.openLoginPage();
        await loginPage.clickOkBtnOnPopUp();
    }

    async fillLoginPageForm(userName: string, password: string) {
        await loginPage.fillUserNameInput(userName);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSubmitBtn();
    };
}

export const loginPageService = new LoginPageService();
