import { WebCAPage } from './app.po';

describe('web-ca App', function() {
  let page: WebCAPage;

  beforeEach(() => {
    page = new WebCAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
