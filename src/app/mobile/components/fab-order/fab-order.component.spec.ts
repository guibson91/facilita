import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabOrderComponent } from './fab-order.component';

describe('FabOrderComponent', () => {
  let component: FabOrderComponent;
  let fixture: ComponentFixture<FabOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
