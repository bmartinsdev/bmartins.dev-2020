import { TestBed } from '@angular/core/testing';

import { LgKanbanService } from './lg-kanban.service';

describe('LgKanbanService', () => {
  let service: LgKanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgKanbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
