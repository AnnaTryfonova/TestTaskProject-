import { Page } from 'playwright';

export class MainPage {
  private page: Page;
  private static requestDemoBtnSelector = () => '#menu-item-538';

  constructor(page: Page) {
    this.page = page;
  }

  async clickRequestDemoBtn() {
    await this.page.click(MainPage.requestDemoBtnSelector());
    await this.page.waitForURL('/request-demo/')
  }
}