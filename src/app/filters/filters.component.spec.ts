/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiltersCmp } from './filters.component';

describe('FiltersCmp', () => {
  let component: FiltersCmp;
  let fixture: ComponentFixture<FiltersCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
