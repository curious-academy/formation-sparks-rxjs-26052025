import { TestBed } from '@angular/core/testing';

import { GetOneWeatherService } from './get-one-weather.service';

describe('GetOneWeatherService', () => {
  let service: GetOneWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
