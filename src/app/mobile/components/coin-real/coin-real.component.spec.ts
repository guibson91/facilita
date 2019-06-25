import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRealComponent } from './coin-real.component';

describe('CoinRealComponent', () => {
  let component: CoinRealComponent;
  let fixture: ComponentFixture<CoinRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
