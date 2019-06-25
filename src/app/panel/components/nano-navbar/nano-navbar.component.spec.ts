import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoNavbarComponent } from './nano-navbar.component';

describe('NanoNavbarComponent', () => {
  let component: NanoNavbarComponent;
  let fixture: ComponentFixture<NanoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
