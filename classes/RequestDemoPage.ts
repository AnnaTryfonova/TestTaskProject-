import { Page } from 'playwright';

export class RequestDemoPage {
    private page: Page;
    private static inputEmailSelector = () => "input.wpcf7-form-control.wpcf7-text.wpcf7-email";
    private static inputPhoneSelector = () => "//input[contains(@class,'wpcf7-form-control wpcf7-text wpcf7-tel')]";
    private static messageSelector = () => `div.wpcf7-response-output`
    private static sendBtnSelector = () => `input.wpcf7-form-control.has-spinner`

    constructor(page: Page) {
        this.page = page;
    }

    async enterEmail(text: string) {
        await this.page.fill(RequestDemoPage.inputEmailSelector(), text);
    }

    async enterPhone(phone: string) {
        await this.page.fill(RequestDemoPage.inputPhoneSelector(), phone);
    }

    async checkMessageText() {
        const elem = await this.page.locator(RequestDemoPage.messageSelector())
        const text = elem.innerText()

        return text
    }

    async clickSendBth() {
        await this.page.click(RequestDemoPage.sendBtnSelector());
        await this.page.waitForSelector(RequestDemoPage.messageSelector())
    }
}