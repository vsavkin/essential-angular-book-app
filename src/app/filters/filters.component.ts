import {Component, EventEmitter, Output, Inject} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {Filters} from "../model";

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersCmp {
  @Output() change = new EventEmitter();

  filters = new FormGroup({
    speaker: new FormControl(),
    title: new FormControl(),
    highRating: new FormControl(false),
  });

  constructor(@Inject('createFiltersObject') createFilters: Function) {
    this.filters.valueChanges.subscribe((value) => {
      this.change.next(createFilters(value));
    });
  }
}
