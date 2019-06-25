import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanelPage } from './login-panel.page';

describe('LoginPanelPage', () => {
  let component: LoginPanelPage;
  let fixture: ComponentFixture<LoginPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPanelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
