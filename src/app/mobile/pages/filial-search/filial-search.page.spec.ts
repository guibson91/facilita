import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialSearchPage } from './filial-search.page';

describe('FilialSearchPage', () => {
  let component: FilialSearchPage;
  let fixture: ComponentFixture<FilialSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
