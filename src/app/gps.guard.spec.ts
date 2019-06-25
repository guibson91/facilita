import { TestBed, async, inject } from '@angular/core/testing';

import { GpsGuard } from './gps.guard';

describe('GpsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpsGuard]
    });
  });

  it('should ...', inject([GpsGuard], (guard: GpsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
