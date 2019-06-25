import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionFilterAppPage } from './promotion-filter-app.page';

describe('PromotionFilterAppPage', () => {
  let component: PromotionFilterAppPage;
  let fixture: ComponentFixture<PromotionFilterAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionFilterAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionFilterAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
