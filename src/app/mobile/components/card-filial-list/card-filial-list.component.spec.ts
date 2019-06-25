import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilialListComponent } from './card-filial-list.component';

describe('CardFilialListComponent', () => {
  let component: CardFilialListComponent;
  let fixture: ComponentFixture<CardFilialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
