import { TestBed } from '@angular/core/testing';

import { UserWineService } from './user-wine';

describe('UserWine', () => {
  let service: UserWineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
