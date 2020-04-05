import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgKanbanComponent } from './lg-kanban.component';

describe('LgKanbanComponent', () => {
  let component: LgKanbanComponent;
  let fixture: ComponentFixture<LgKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
