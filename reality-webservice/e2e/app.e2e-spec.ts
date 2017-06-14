import { RealityWebservicePage } from './app.po';

describe('reality-webservice App', () => {
  let page: RealityWebservicePage;

  beforeEach(() => {
    page = new RealityWebservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
