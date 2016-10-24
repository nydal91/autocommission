import { AutocommissionPage } from './app.po';

describe('autocommission App', function() {
  let page: AutocommissionPage;

  beforeEach(() => {
    page = new AutocommissionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
