import { SimpleNgAppPage } from './app.po';

describe('simple-ng-app App', () => {
  let page: SimpleNgAppPage;

  beforeEach(() => {
    page = new SimpleNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
