import { TestBed } from '@angular/core/testing';

import { ManageChefServiceService } from './manage-chef-service.service';

describe('ManageChefServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageChefServiceService = TestBed.get(ManageChefServiceService);
    expect(service).toBeTruthy();
  });
});
