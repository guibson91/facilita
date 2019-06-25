import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHourOpenComponent } from './card-hour-open.component';

describe('CardHourOpenComponent', () => {
  let component: CardHourOpenComponent;
  let fixture: ComponentFixture<CardHourOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHourOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHourOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
