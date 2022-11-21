import { TestBed } from '@angular/core/testing';

import { GpProjectManagerService } from './gp-project-manager.service';

describe('GpProjectManagerService', () => {
  let service: GpProjectManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpProjectManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
