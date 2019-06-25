import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAppPage } from './login-app.page';

describe('LoginAppPage', () => {
  let component: LoginAppPage;
  let fixture: ComponentFixture<LoginAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
