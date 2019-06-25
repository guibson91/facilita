import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrPriceComponent } from './mr-price.component';

describe('MrPriceComponent', () => {
  let component: MrPriceComponent;
  let fixture: ComponentFixture<MrPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
