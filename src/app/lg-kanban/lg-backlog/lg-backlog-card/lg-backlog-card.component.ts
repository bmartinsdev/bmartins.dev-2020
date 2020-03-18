import { Component, OnInit, Input } from '@angular/core';
import { LgTask } from '../../../classes/lg-task';

@Component({
  selector: 'app-lg-backlog-card',
  templateUrl: './lg-backlog-card.component.html',
  styleUrls: ['./lg-backlog-card.component.sass']
})
export class LgBacklogCardComponent implements OnInit {
  @Input() card:LgTask;
  constructor() { }

  ngOnInit(): void {
  }

}
