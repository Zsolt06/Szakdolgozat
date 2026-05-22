import { TestBed } from '@angular/core/testing';

import { UserWine } from './user-wine';

describe('UserWine', () => {
  let service: UserWine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
