import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrCardFilialComponent } from './mr-card-filial.component';

describe('MrCardFilialComponent', () => {
  let component: MrCardFilialComponent;
  let fixture: ComponentFixture<MrCardFilialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrCardFilialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrCardFilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
