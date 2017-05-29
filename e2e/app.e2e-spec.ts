import { Privat24apiPage } from './app.po';

describe('privat24api App', function() {
  let page: Privat24apiPage;

  beforeEach(() => {
    page = new Privat24apiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
