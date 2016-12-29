import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Talk} from "../model";

@Component({
  selector: 'watch-button',
  templateUrl: './watch-button.component.html',
  styleUrls: ['./watch-button.component.css']
})
export class WatchButtonCmp {
  @Input() talk: Talk;
  @Output() watch = new EventEmitter();

  handleWatch(): void {
    this.watch.next(null);
  }
}
