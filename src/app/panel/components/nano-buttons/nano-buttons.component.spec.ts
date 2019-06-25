import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoButtonsComponent } from './nano-buttons.component';

describe('NanoButtonsComponent', () => {
  let component: NanoButtonsComponent;
  let fixture: ComponentFixture<NanoButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
