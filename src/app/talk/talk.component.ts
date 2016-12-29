import {Component, Input} from '@angular/core';
import {Talk} from "../model";
import {App} from "../app";

@Component({
  selector: 'talk-cmp',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkCmp {
  @Input() talk: Talk;

  constructor(private app: App) {}

  handleRate(newRating: number): void {
    this.app.rateTalk(this.talk, newRating);
  }

  handleWatch(): void {
    this.app.watch(this.talk);
  }
}
