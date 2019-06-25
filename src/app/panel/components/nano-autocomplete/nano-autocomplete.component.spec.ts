import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoAutocompleteComponent } from './nano-autocomplete.component';

describe('NanoAutocompleteComponent', () => {
  let component: NanoAutocompleteComponent;
  let fixture: ComponentFixture<NanoAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
