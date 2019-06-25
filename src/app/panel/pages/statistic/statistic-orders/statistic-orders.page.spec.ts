import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticOrdersPage } from './statistic-orders.page';

describe('StatisticOrdersPage', () => {
  let component: StatisticOrdersPage;
  let fixture: ComponentFixture<StatisticOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
