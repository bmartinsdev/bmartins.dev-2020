import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LughKanbanComponent } from './lugh-kanban.component';

describe('LughKanbanComponent', () => {
  let component: LughKanbanComponent;
  let fixture: ComponentFixture<LughKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LughKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LughKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
