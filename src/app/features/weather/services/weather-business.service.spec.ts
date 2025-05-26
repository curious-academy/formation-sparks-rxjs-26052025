import { TestBed } from '@angular/core/testing';

import { WeatherBusinessService } from './weather-business.service';

describe('WeatherBusinessService', () => {
  let service: WeatherBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
