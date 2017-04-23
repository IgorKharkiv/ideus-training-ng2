import { IsyrovAppPage } from './app.po';

describe('isyrov-app App', function() {
  let page: IsyrovAppPage;

  beforeEach(() => {
    page = new IsyrovAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
