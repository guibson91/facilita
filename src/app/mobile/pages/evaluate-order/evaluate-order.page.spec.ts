import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateOrderPage } from './evaluate-order.page';

describe('EvaluateOrderPage', () => {
  let component: EvaluateOrderPage;
  let fixture: ComponentFixture<EvaluateOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
