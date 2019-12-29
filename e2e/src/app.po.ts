import {
  browser,
  by,
  element,
  until,
  WebElementPromise,
  ElementFinder
} from 'protractor';

export class AppPage {
  private static readonly SELECTOR_APP_TITLE = '[data-test-id="app-title"]';
  private static readonly SELECTOR_APP_SIDENAV = '[data-test-id="app-sidenav"]';
  private static readonly SELECTOR_SIDENAV_TOGGLE_BUTTON =
    '[data-test-id="sidenav-toggle-button"]';

  navigateTo(): PromiseLike<any> {
    return browser.get(browser.baseUrl);
  }

  getAppTitleText(): PromiseLike<string> {
    return element(by.css(AppPage.SELECTOR_APP_TITLE)).getText();
  }

  clickSidenavToggleButton(): PromiseLike<void> {
    return element(by.css(AppPage.SELECTOR_SIDENAV_TOGGLE_BUTTON)).click();
  }

  getSidenavVisibility(): PromiseLike<string> {
    return this.getSidenav().getCssValue('visibility');
  }

  waitUntilSidenavVisibilityChanged(
    initialVisibility: string
  ): WebElementPromise {
    const sidenav = this.getSidenav().getWebElement();
    const timeout = 1000;
    return initialVisibility == 'visible'
      ? browser.wait(until.elementIsNotVisible(sidenav), timeout)
      : browser.wait(until.elementIsVisible(sidenav), timeout);
  }

  private getSidenav(): ElementFinder {
    return element(by.css(AppPage.SELECTOR_APP_SIDENAV));
  }
}
