import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialListPage } from './filial-list.page';

describe('FilialListPage', () => {
  let component: FilialListPage;
  let fixture: ComponentFixture<FilialListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
