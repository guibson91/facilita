import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEditPage } from './phone-edit.page';

describe('PhoneEditPage', () => {
  let component: PhoneEditPage;
  let fixture: ComponentFixture<PhoneEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
