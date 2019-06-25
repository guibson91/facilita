import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGlobalPage } from './product-global.page';

describe('ProductGlobalPage', () => {
  let component: ProductGlobalPage;
  let fixture: ComponentFixture<ProductGlobalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGlobalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
