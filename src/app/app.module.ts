import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { AppCmp } from './app.component';
import { TalksCmp } from './talks/talks.component';
import { TalkCmp } from './talk/talk.component';
import { WatchButtonCmp } from './watch-button/watch-button.component';
import { RateButtonCmp } from './rate-button/rate-button.component';
import { FormatRatingPipe } from './format-rating.pipe';
import {App} from "./app";
import {createFiltersObject} from "./create_filters_object";
import { FiltersCmp } from './filters/filters.component';

@NgModule({
  declarations: [
    AppCmp,
    TalksCmp,
    TalkCmp,
    WatchButtonCmp,
    RateButtonCmp,
    FormatRatingPipe,
    FiltersCmp
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    App,
    {provide: 'createFiltersObject', useValue: createFiltersObject}
  ],
  bootstrap: [AppCmp]
})
export class AppModule { }
