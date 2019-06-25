import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreatedMessagePage } from './order-created-message.page';

describe('OrderCreatedMessagePage', () => {
  let component: OrderCreatedMessagePage;
  let fixture: ComponentFixture<OrderCreatedMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCreatedMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreatedMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
