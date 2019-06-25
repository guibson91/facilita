import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComplementListComponent } from './order-complement-list.component';

describe('OrderComplementListComponent', () => {
  let component: OrderComplementListComponent;
  let fixture: ComponentFixture<OrderComplementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComplementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComplementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
