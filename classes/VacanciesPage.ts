import { Page } from 'playwright';

export class VacanciesPage {
    private page: Page;
    private static vacanciesBtnSelector = () => '#menu-item-4664';
    private static frontedDevSelector = () => '//a[@href="https://graintrack.com/front-end-angular-developer-for-graintrack/"]';
    private static headerVacanciesSelector = () => '.entry-header h1';

    constructor(page: Page) {
        this.page = page;
    }

    async clickVacanciesBtn() {
        await this.page.click(VacanciesPage.vacanciesBtnSelector())
    }

    async clickFrontedDev() {
        await this.page.click(VacanciesPage.frontedDevSelector())
    }

    async checkHeadText() {
        const elem = await this.page.locator(VacanciesPage.headerVacanciesSelector())
        const text = elem.textContent()

        return text
    }
}