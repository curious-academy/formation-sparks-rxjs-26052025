import { TestBed } from '@angular/core/testing';

import { CartBusinessService } from './cart-business.service';

describe('CartBusinessService', () => {
  let service: CartBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
