/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import { AppCmp } from './app.component';
import { AppModule } from './app.module';
import {App} from "./app";

describe('AppCmp', () => {
  let component: AppCmp;
  let fixture: ComponentFixture<AppCmp>;
  let el: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should filter talks by title', async(inject([App], (app: App) => {
    app.model.talks = [
      {
        "id": 1,
        "title": "Are we there yet?",
        "speaker": "Rich Hickey",
        "yourRating": null,
        "rating": 9.0
      },
      {
        "id": 2,
        "title": "The Value of Values",
        "speaker": "Rich Hickey",
        "yourRating": null,
        "rating": 8.0
      },
    ];
    fixture.detectChanges();


    expect(el.innerHTML).toContain("Are we there yet?");
    expect(el.innerHTML).toContain("The Value of Values");

    component.handleFiltersChange({
      title: 'we',
      speaker: null,
      minRating: 0
    });
    fixture.detectChanges();

    expect(el.innerHTML).toContain("Are we there yet?");
    expect(el.innerHTML).not.toContain("The Value of Values");
  })));
});
