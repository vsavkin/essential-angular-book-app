/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RateButtonCmp } from './rate-button.component';

describe('RateButtonCmp', () => {
  let component: RateButtonCmp;
  let fixture: ComponentFixture<RateButtonCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateButtonCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateButtonCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
