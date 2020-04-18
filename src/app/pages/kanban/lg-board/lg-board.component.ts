import { Component, OnInit, Input } from '@angular/core';
import { LgSection } from 'src/app/classes/lg-section';
@Component({
  selector: 'app-lg-board',
  templateUrl: './lg-board.component.html',
  styleUrls: ['./lg-board.component.sass']
})
export class LgBoardComponent implements OnInit {
  @Input() sections: LgSection[];
  backlog: LgSection;
  backlogToggle: boolean;

  constructor() { 
    this.backlogToggle = false;
  }

  ngOnInit(): void {
    this.backlog = this.sections.shift();
  }

  toggleBacklog = function(){
    this.backlogToggle = !this.backlogToggle;
  }

  toggleMenu = function(){
    this.global.toggleVariable();
  }

}
