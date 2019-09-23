import { TestBed } from '@angular/core/testing';

import { AmplitudeService } from './amplitude.service';

describe('AmplitudeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmplitudeService = TestBed.get(AmplitudeService);
    expect(service).toBeTruthy();
  });
});
