import { Browser,Page } from 'playwright';
import data from '../playwright.config'

const rootSelector = '#root';
export let browser: Browser
export let context: { newPage: () => any; }
export let page: Page;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
  browser = await data.browserType.launch(data.serverOptions.launchConfig);
  context = await browser.newContext(data.serverOptions.contextConfig);
  page = await context.newPage();
  await page.goto("http://localhost:3000");
};

export const close = async () => await browser.close();


export const getTitle = async () => await page.title();
