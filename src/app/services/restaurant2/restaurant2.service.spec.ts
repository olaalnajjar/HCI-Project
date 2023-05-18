import { TestBed } from '@angular/core/testing';

import { Restaurant2Service } from './restaurant2.service';

describe('Restaurant2Service', () => {
  let service: Restaurant2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restaurant2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
