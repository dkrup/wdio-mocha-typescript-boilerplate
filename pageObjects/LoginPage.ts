import {PageBaseClass} from './PageBaseClass';

class LoginPage extends PageBaseClass {
    // Login Page Selectors
    private WEBSITE_LINK = process.env.WEBSITE_LINK;
    private loginFormSelector = '.form_group';
    private usernameInputSelector = '#user-name';
    private passwordInputSelector = '#password';
    private loginButtonSelector = '[data-test="login-button"]';
    private errorMessageSelector = '[data-test="error"]';
    private inventoryPageSelector = '#inventory_container';

    // Login Page Elements
    private loginFormElem = () => $(this.loginFormSelector);
    private usernameInputElem = () => $(this.usernameInputSelector);
    private passwordInputElem = () => $(this.passwordInputSelector);
    private loginBtnElem = () => $(this.loginButtonSelector);
    private errorMessageElem = () => $(this.errorMessageSelector);
    private inventoryPageElem = () => $(this.inventoryPageSelector);

    // Login Page Methods
    async waitForLoginFormVisible() {
        await this.loginFormElem().waitForDisplayed();
    }

    async waitForUsernameInputVisible() {
        await this.usernameInputElem().waitForDisplayed();
    }

    async waitForPasswordInputVisible() {
        await this.passwordInputElem().waitForDisplayed();
    }

    async openWebsite() {
        await this.openUrl(this.WEBSITE_LINK);
    }

    async fillUsernameInput(userName: string) {
        await this.usernameInputElem().setValue(userName);
    }

    async fillPasswordInput(password: string) {
        await this.passwordInputElem().setValue(password);
    }

    async clickLoginBtn() {
        await this.loginBtnElem().click();
    }

    async isErrorMessageShown() {
        return await this.errorMessageElem().isDisplayed();
    }

    getErrorMessageText = async () => await this.errorMessageElem().getText();

    async isInventoryPageOpened() {
        return await this.inventoryPageElem().isDisplayed();
    }
}

export const loginPage = new LoginPage();
