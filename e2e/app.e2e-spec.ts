import { MeanStackPage } from './app.po';

describe('mean-stack App', function() {
  let page: MeanStackPage;

  beforeEach(() => {
    page = new MeanStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
