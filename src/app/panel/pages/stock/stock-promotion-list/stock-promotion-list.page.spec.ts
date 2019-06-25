import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPromotionListPage } from './stock-promotion-list.page';

describe('StockPromotionListPage', () => {
  let component: StockPromotionListPage;
  let fixture: ComponentFixture<StockPromotionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPromotionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPromotionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
