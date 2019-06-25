import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciationListPage } from './denunciation-list.page';

describe('DenunciationListPage', () => {
  let component: DenunciationListPage;
  let fixture: ComponentFixture<DenunciationListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciationListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
