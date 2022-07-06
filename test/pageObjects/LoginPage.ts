import {PageBaseClass} from './PageBaseClass';

class LoginPage extends PageBaseClass {
    private WEBSITE_LINK = process.env.WEBSITE_LINK;

    private popUp = '.ui-dialog';
    private okBtn = '.ui-dialog-buttonpane .ui-button';

    private userNameInputElem = () => $('#login');
    private passWordInputElem = () => $('#pass');
    private submitBtnElem = () => $('.ui-button-text');
    private errorMessage = () => $('#validate_auth_msg');

    async waitForPopUpVisible() {
        await (await this.getElement(this.popUp)).waitForDisplayed();
    }

    async openLoginPage() {
        await this.openPath(this.WEBSITE_LINK);
        await this.waitForPopUpVisible();
    }

    async clickOkBtnOnPopUp() {
        await (await this.getElement(this.okBtn)).click();
    }

    async fillUserNameInput(userName: string) {
        await this.userNameInputElem().setValue(userName);
    }

    async fillPasswordInput(password: string) {
        await this.passWordInputElem().setValue(password);
    }

    async clickSubmitBtn() {
        await this.submitBtnElem().click();
    }

    async isErrorMessageShown() {
        return await this.errorMessage().isDisplayed();
    }

    getErrorMessageText = async () => await this.errorMessage().getText();
}

export const loginPage = new LoginPage();
