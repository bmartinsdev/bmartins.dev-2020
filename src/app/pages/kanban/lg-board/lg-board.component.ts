import { Component, OnInit, Input } from '@angular/core';
import { LgColumnComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-column.component';
import { LgSection } from 'src/app/classes/lg-section';

@Component({
  selector: 'app-lg-board',
  templateUrl: './lg-board.component.html',
  styleUrls: ['./lg-board.component.sass']
})
export class LgBoardComponent implements OnInit {
  @Input() sections: LgSection[];
  constructor() { }

  ngOnInit(): void {
  }

}
