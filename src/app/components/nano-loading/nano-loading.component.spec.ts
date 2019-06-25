import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoLoadingComponent } from './nano-loading.component';

describe('NanoLoadingComponent', () => {
  let component: NanoLoadingComponent;
  let fixture: ComponentFixture<NanoLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
