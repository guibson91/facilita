import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilialOpenComponent } from './card-filial-open.component';

describe('CardFilialOpenComponent', () => {
  let component: CardFilialOpenComponent;
  let fixture: ComponentFixture<CardFilialOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilialOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilialOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
