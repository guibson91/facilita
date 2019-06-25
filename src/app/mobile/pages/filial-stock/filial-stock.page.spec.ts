import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialStockPage } from './filial-stock.page';

describe('FilialStockPage', () => {
  let component: FilialStockPage;
  let fixture: ComponentFixture<FilialStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
