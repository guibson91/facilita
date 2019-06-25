import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGlobalEditPage } from './product-global-edit.page';

describe('ProductGlobalEditPage', () => {
  let component: ProductGlobalEditPage;
  let fixture: ComponentFixture<ProductGlobalEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGlobalEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGlobalEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
