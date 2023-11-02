import { test, expect } from '@playwright/test';
import { RequestDemoPage } from '../classes/RequestDemoPage';
import { MainPage } from '../classes/MainPage';
import { VacanciesPage } from '../classes/VacanciesPage';

test.describe('Test task', async () => {
  let page

  let requestDemoPage

  let mainPage

  let vacanciesPage

  test.beforeEach(async ({browser}) => {
    page = await browser.newPage()
    await page.goto('/');

    requestDemoPage = new RequestDemoPage(page)
    mainPage = new MainPage(page)
    vacanciesPage = new VacanciesPage(page)
  });


  test('Check error message when checkbox not selected Request For Demo', async ({ page }) => {
    await mainPage.clickRequestDemoBtn()
    await requestDemoPage.enterEmail('test@gmail.com')
    await requestDemoPage.enterPhone('+380996353781')
    await requestDemoPage.clickSendBth()
    const actualText = await requestDemoPage.checkMessageText();
    expect(actualText).toEqual('Oh...Something went wrong, please check all fields');
  });

  test('Check title vacancies page', async ({ page }) => {
    await vacanciesPage.clickVacanciesBtn()
    await vacanciesPage.clickFrontedDev()
    const actualText = await vacanciesPage.checkHeadText();
    expect(actualText).toEqual('Front-End Angular Developer for GrainTrack');
  });
})
