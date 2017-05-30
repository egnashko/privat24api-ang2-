/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BonusPlusComponent } from './bonus-plus.component';

describe('BonusPlusComponent', () => {
  let component: BonusPlusComponent;
  let fixture: ComponentFixture<BonusPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
