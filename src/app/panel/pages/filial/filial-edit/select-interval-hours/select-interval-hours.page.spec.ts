import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIntervalHoursPage } from './select-interval-hours.page';

describe('SelectIntervalHoursPage', () => {
  let component: SelectIntervalHoursPage;
  let fixture: ComponentFixture<SelectIntervalHoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIntervalHoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIntervalHoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
