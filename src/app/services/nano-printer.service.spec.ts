import { TestBed } from '@angular/core/testing';

import { NanoPrinterService } from './nano-printer.service';

describe('NanoPrinterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NanoPrinterService = TestBed.get(NanoPrinterService);
    expect(service).toBeTruthy();
  });
});
