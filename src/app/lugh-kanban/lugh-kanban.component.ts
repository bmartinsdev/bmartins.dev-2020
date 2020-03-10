import { Component, OnInit } from '@angular/core';
import { LughBacklogComponent } from './lugh-backlog/lugh-backlog.component';
import { LughBoardComponent } from './lugh-board/lugh-board.component';

@Component({
  selector: 'app-lugh-kanban',
  templateUrl: './lugh-kanban.component.html',
  styleUrls: ['./lugh-kanban.component.sass']
})
export class LughKanbanComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
