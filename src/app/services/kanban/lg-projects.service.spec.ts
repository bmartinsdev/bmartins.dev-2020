import { TestBed } from '@angular/core/testing';

import { LgProjectsService } from './lg-projects.service';

describe('LgProjectsService', () => {
  let service: LgProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
