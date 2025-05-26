import { TestBed } from '@angular/core/testing';

import { GetListMoviesService } from './get-list-movies.service';

describe('GetListMoviesService', () => {
  let service: GetListMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
