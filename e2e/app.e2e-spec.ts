import { Ang2itunesPage } from './app.po';

describe('ang2itunes App', () => {
  let page: Ang2itunesPage;

  beforeEach(() => {
    page = new Ang2itunesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
