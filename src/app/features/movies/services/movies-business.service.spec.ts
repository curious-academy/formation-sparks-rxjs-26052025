import { TestBed } from '@angular/core/testing';

import { MoviesBusinessService } from './movies-business.service';

describe('MoviesBusinessService', () => {
  let service: MoviesBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
