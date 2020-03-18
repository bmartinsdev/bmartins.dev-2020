import { Component, OnInit } from '@angular/core';
import { LgBacklogComponent } from './lg-backlog/lg-backlog.component';
import { LgBoardComponent } from './lg-board/lg-board.component';
import { LgTasksService } from '../services/lg-tasks.service'

@Component({
  selector: 'app-lg-kanban',
  templateUrl: './lg-kanban.component.html',
  styleUrls: ['./lg-kanban.component.sass']
})
export class LgKanbanComponent implements OnInit {
  constructor(private taskDB: LgTasksService ) { }

  ngOnInit(): void {
    this.taskDB.getTasks().subscribe(tasks => {
      console.log(tasks);
    });
  }

}
