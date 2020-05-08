import { TestBed } from '@angular/core/testing';

import { ConfirmationDaialogService } from './confirmation-daialog.service';

describe('ConfirmationDaialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmationDaialogService = TestBed.get(ConfirmationDaialogService);
    expect(service).toBeTruthy();
  });
});
