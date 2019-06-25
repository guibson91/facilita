import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionEditPage } from './promotion-edit.page';

describe('PromotionEditPage', () => {
  let component: PromotionEditPage;
  let fixture: ComponentFixture<PromotionEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
