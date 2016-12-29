/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalksCmp } from './talks.component';

describe('TalksCmp', () => {
  let component: TalksCmp;
  let fixture: ComponentFixture<TalksCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
