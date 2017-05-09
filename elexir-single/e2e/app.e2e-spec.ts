import { ElexirSinglePage } from './app.po';

describe('elexir-single App', function() {
  let page: ElexirSinglePage;

  beforeEach(() => {
    page = new ElexirSinglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
