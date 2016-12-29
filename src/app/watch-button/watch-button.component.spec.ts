/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatchButtonCmp } from './watch-button.component';

describe('WatchButtonCmp', () => {
  let component: WatchButtonCmp;
  let fixture: ComponentFixture<WatchButtonCmp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchButtonCmp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchButtonCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
