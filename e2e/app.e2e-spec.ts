import { TalksAppPage } from './app.po';

describe('e2e tests', function() {
  let page: TalksAppPage;

  beforeEach(() => {
    page = new TalksAppPage();
  });

  it('should filter talks by title', () => {
    page.navigateTo();

    const title = page.getTitleInput();
    title.sendKeys("Are we there");

    expect(page.getTalks().count()).toEqual(1);
    expect(page.getTalkText(0)).toContain("Are we there yet?");
  });
});
