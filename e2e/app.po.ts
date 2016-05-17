export class AutoCompleteSiapePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('auto-complete-siape-app h1')).getText();
  }
}
