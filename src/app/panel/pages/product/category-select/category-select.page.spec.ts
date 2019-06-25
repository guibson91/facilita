import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectPage } from './category-select.page';

describe('CategorySelectPage', () => {
  let component: CategorySelectPage;
  let fixture: ComponentFixture<CategorySelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
