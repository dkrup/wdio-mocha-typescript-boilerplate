export abstract class PageBaseClass {
    async openUrl(baseLink: string, path?: string) {
        await browser.url(`${baseLink}`);
    }

    async getElement(selector: string) {
        return $(selector);
    }
}
