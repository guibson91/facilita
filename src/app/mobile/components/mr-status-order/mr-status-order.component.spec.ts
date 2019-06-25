import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrStatusOrderComponent } from './mr-status-order.component';

describe('MrStatusOrderComponent', () => {
  let component: MrStatusOrderComponent;
  let fixture: ComponentFixture<MrStatusOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrStatusOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrStatusOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
