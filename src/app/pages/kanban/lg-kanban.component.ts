import { Component, OnInit } from '@angular/core';
import { LgBoardComponent } from 'src/app/pages/kanban/lg-board/lg-board.component';
import { Observable } from 'rxjs';
import { LgKanbanService } from 'src/app/services/kanban/lg-kanban.service';
import { Section } from 'src/app/services/kanban/classes/Section';

@Component({
  selector: 'app-lg-kanban',
  templateUrl: './lg-kanban.component.html'
})
export class LgKanbanComponent implements OnInit {
  sections$: Observable<Section[]>;

  constructor(private taskDB: LgKanbanService) { }

  ngOnInit(): void {
    this.loadSections();
  }

  loadSections(){
    //this.sections$ = this.taskDB.getSections();
  }

  // addSection(){
  //   let section = new Section({"title":"teste","position":35});
  //   this.taskDB.createSection(section);
  // }

  // updateSection(section:Section){
  //   section.title = "update";
  //   section.position++;
  //   this.taskDB.updateSection(section);
  // }

  // deleteSection(section:Section){
  //   this.taskDB.deleteSection(section);
  // }
}
