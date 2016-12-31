/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import { TalksCmp } from './talks.component';

describe('TalksCmp', () => {
  let component: TalksCmp;
  let fixture: ComponentFixture<TalksCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TalksCmp],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a list of talks', () => {
    component.talks = <any>[
      { title: 'Are we there yet?' },
      { title: 'The Value of Values' }
    ];
    fixture.detectChanges();

    const s = fixture.debugElement.nativeElement;
    const ts = s.querySelectorAll("talk-cmp");

    expect(ts.length).toEqual(2);
    expect(ts[0].talk.title).toEqual('Are we there yet?');
    expect(ts[1].talk.title).toEqual('The Value of Values');
  });
});
