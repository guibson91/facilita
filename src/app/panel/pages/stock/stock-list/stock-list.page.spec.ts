import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListPage } from './stock-list.page';

describe('StockListPage', () => {
  let component: StockListPage;
  let fixture: ComponentFixture<StockListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
