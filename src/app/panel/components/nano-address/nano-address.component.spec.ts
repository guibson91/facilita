import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoAddressComponent } from './nano-address.component';

describe('NanoAddressComponent', () => {
  let component: NanoAddressComponent;
  let fixture: ComponentFixture<NanoAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
