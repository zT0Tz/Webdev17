import { WebprojPage } from './app.po';

describe('webproj App', () => {
  let page: WebprojPage;

  beforeEach(() => {
    page = new WebprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
