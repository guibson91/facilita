import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialEditPage } from './filial-edit.page';

describe('FilialEditPage', () => {
  let component: FilialEditPage;
  let fixture: ComponentFixture<FilialEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
