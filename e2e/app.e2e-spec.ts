import { PosPage } from './app.po';

describe('pos App', function() {
  let page: PosPage;

  beforeEach(() => {
    page = new PosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
