import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionsComplementPage } from './add-options-complement.page';

describe('AddOptionsComplementPage', () => {
  let component: AddOptionsComplementPage;
  let fixture: ComponentFixture<AddOptionsComplementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionsComplementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionsComplementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
