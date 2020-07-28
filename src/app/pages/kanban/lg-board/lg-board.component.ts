import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/services/kanban/classes/Section';
import { MenuToggleComponent } from 'src/app/shared/menu-toggle/menu-toggle.component';

@Component({
  selector: 'app-lg-board',
  templateUrl: './lg-board.component.html',
  styleUrls: ['./lg-board.component.sass']
})
export class LgBoardComponent implements OnInit {
  @Input() sections: Section[];
  backlog: Section;
  backlogToggle: boolean = false;

  ngOnInit(): void {
    this.backlog = new Section({'id': 'backlog', 'title': 'Backlog'});
    this.sections.unshift(new Section({'id': 'doing', 'title': 'Doing'}));
    this.sections.unshift(new Section({'id': 'testing', 'title': 'Testing'}));
    this.sections.unshift(new Section({'id': 'ready', 'title': 'Ready'}));
  }

  toggleBacklog = function(){
    this.backlogToggle = !this.backlogToggle;
  }

}
