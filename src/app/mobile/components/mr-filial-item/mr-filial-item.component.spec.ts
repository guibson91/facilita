import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrFilialItemComponent } from './mr-filial-item.component';

describe('MrFilialItemComponent', () => {
  let component: MrFilialItemComponent;
  let fixture: ComponentFixture<MrFilialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrFilialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrFilialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
