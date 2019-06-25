import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponEditPage } from './coupon-edit.page';

describe('CouponEditPage', () => {
  let component: CouponEditPage;
  let fixture: ComponentFixture<CouponEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
