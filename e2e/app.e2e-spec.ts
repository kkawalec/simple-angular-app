import { SimpleTableAppPage } from './app.po';

describe('simple-table-app App', () => {
  let page: SimpleTableAppPage;

  beforeEach(() => {
    page = new SimpleTableAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
