import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoUploadimageComponent } from './nano-uploadimage.component';

describe('NanoUploadimageComponent', () => {
  let component: NanoUploadimageComponent;
  let fixture: ComponentFixture<NanoUploadimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoUploadimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoUploadimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
