import { TestBed } from '@angular/core/testing';

import { NanoTranslateService } from './nano-translate.service';

describe('NanoTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NanoTranslateService = TestBed.get(NanoTranslateService);
    expect(service).toBeTruthy();
  });
});
