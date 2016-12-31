import {browser, element, by, ElementArrayFinder, ElementFinder} from 'protractor';

export class TalksAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleInput() {
    return element(by.css('input[formcontrolname=title]'));
  }

  getTalks() {
    return element.all(by.css('talk-cmp'));
  }

  getTalkText(index: number) {
    return this.getTalks().get(index).geText();
  }
}
