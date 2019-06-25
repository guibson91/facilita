import { TestBed } from '@angular/core/testing';

import { NanoPushService } from './nano-push.service';

describe('NanoPushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NanoPushService = TestBed.get(NanoPushService);
    expect(service).toBeTruthy();
  });
});
