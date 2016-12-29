import { EssentialsAngularAppPage } from './app.po';

describe('essentials-angular-app Model', function() {
  let page: EssentialsAngularAppPage;

  beforeEach(() => {
    page = new EssentialsAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
