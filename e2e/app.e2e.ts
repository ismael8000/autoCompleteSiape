import { AutoCompleteSiapePage } from './app.po';

describe('auto-complete-siape App', function() {
  let page: AutoCompleteSiapePage;

  beforeEach(() => {
    page = new AutoCompleteSiapePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('auto-complete-siape works!');
  });
});
