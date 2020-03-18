import { TestBed } from '@angular/core/testing';

import { LgTasksService } from './lg-tasks.service';

describe('LgTasksService', () => {
  let service: LgTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
