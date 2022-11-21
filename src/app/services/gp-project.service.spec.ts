import { TestBed } from '@angular/core/testing';

import { GpProjectService } from './gp-project.service';

describe('GpProjectService', () => {
  let service: GpProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
