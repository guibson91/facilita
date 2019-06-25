import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemEditPage } from './order-item-edit.page';

describe('OrderItemEditPage', () => {
  let component: OrderItemEditPage;
  let fixture: ComponentFixture<OrderItemEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
