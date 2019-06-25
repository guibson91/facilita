import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPromotionListPage } from './order-promotion-list.page';

describe('OrderPromotionListPage', () => {
  let component: OrderPromotionListPage;
  let fixture: ComponentFixture<OrderPromotionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPromotionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPromotionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
