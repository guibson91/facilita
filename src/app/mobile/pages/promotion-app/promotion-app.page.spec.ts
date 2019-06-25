import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAppPage } from './promotion-app.page';

describe('PromotionAppPage', () => {
  let component: PromotionAppPage;
  let fixture: ComponentFixture<PromotionAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
