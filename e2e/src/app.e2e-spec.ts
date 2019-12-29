import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display app title text', async () => {
    const appTitleText = await page.getAppTitleText();
    expect(appTitleText).toEqual('CoderBox');
  });

  it('should toggle sidenav when menu button is clicked', async () => {
    const initialState = await page.getSidenavVisibility();
    await page.clickSidenavToggleButton();
    await page.waitUntilSidenavVisibilityChanged(initialState);
    const toggledState = await page.getSidenavVisibility();
    expect(toggledState).not.toEqual(initialState);
    await page.clickSidenavToggleButton();
    await page.waitUntilSidenavVisibilityChanged(toggledState);
    expect(await page.getSidenavVisibility()).toEqual(initialState);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
