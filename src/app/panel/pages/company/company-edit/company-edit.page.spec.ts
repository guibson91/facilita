import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditPage } from './company-edit.page';

describe('CompanyEditPage', () => {
  let component: CompanyEditPage;
  let fixture: ComponentFixture<CompanyEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
