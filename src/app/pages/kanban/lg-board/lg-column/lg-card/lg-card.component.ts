import { Component, OnInit, Input } from '@angular/core';
import { LgTask } from 'src/app/services/kanban/classes/Task';

@Component({
  selector: 'app-lg-card',
  templateUrl: './lg-card.component.html',
  styleUrls: ['./lg-card.component.sass']
})
export class LgCardComponent implements OnInit {
  @Input() task:LgTask;
  constructor() { }

  ngOnInit(): void {
  }

}
