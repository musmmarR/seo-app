import { TestBed } from '@angular/core/testing';

import { SEOserviceService } from './seoservice.service';

describe('SEOserviceService', () => {
  let service: SEOserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEOserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
