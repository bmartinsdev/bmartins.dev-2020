import { Component, OnInit, Input } from '@angular/core';
import { LgBacklogCardComponent } from './lg-backlog-card/lg-backlog-card.component';
import { LgSection } from 'src/app/classes/lg-section';

@Component({
  selector: 'app-lg-backlog',
  templateUrl: './lg-backlog.component.html',
  styleUrls: ['./lg-backlog.component.sass']
})
export class LgBacklogComponent implements OnInit {
  @Input() section:LgSection;
  constructor() { }

  ngOnInit(): void {
  }

}
