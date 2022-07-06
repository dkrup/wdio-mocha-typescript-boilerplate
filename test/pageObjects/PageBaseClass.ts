export abstract class PageBaseClass {
    async openPath(baseLink: string, path?: string) {
        await browser.url(`${baseLink}`);
    }

    async getElement(selector: string) {
        return $(selector);
    }
}
