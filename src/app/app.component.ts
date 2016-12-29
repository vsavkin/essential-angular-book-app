import { Component } from '@angular/core';
import {App} from "./app";
import {Filters} from "./model";

@Component({
  selector: 'app-cmp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCmp {
  constructor(public app: App) {}

  handleFiltersChange(filters: Filters): void {
    this.app.filters = filters;
  }
}
