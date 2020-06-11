import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LgSection } from '../services/kanban/classes/Section';
import { LgKanbanService } from '../services/kanban/lg-kanban.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html'
})
export class TestingComponent implements OnInit {
  sections: Observable<LgSection[]>;
  tasks: Observable<LgSection[]>;
  constructor(private taskDB: LgKanbanService) { }

  ngOnInit(): void {
    this.sections = this.taskDB.sections$;
    this.taskDB.getDefaultSections();
    this.tasks = this.taskDB.tasks$;
    this.taskDB.getAllTasks();
  }

}
