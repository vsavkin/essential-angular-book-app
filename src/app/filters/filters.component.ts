import {Component, EventEmitter, Output} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersCmp {
  @Output() change = new EventEmitter();

  filters = new FormGroup({
    speaker: new FormControl()
  });

  constructor() {
    this.filters.valueChanges.subscribe((value) => {
      this.change.next(value);
    });
  }
}
