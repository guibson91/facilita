import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoErrorComponent } from './nano-error.component';

describe('NanoErrorComponent', () => {
  let component: NanoErrorComponent;
  let fixture: ComponentFixture<NanoErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
