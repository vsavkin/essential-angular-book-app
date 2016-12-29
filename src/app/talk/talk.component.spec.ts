/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalkCmp } from './talk.component';

describe('TalkCmp', () => {
  let component: TalkCmp;
  let fixture: ComponentFixture<TalkCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
