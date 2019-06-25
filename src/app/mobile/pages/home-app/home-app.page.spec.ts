import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppPage } from './home-app.page';

describe('HomeAppPage', () => {
  let component: HomeAppPage;
  let fixture: ComponentFixture<HomeAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
