import { TestBed } from '@angular/core/testing';

import { CurrentOffersService } from './current-offers.service';

describe('CurrentOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentOffersService = TestBed.get(CurrentOffersService);
    expect(service).toBeTruthy();
  });
});
