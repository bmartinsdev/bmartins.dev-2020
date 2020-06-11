import { Component, OnInit, Input } from '@angular/core';
import { LgKanbanService } from 'src/app/services/kanban/lg-kanban.service';
import { LgTask } from 'src/app/services/kanban/classes/Task';
import { Observable } from 'rxjs';
import { LgSection } from 'src/app/services/kanban/classes/Section';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lg-column',
  templateUrl: './lg-column.component.html',
  styleUrls: ['./lg-column.component.sass']
})
export class LgColumnComponent implements OnInit {
  @Input() section: LgSection;
  loadedTasks: boolean = false;

  constructor(private taskDB: LgKanbanService) { }

  ngOnInit(): void {
    //this.loadTasks();
  }

  drop(event: CdkDragDrop<string[]>) {
    let targetSection = Object.assign(new LgSection, event.container.data);
    let task = Object.assign(new LgTask, event.item.data);
    let tPosBefore = targetSection.tasks[event.currentIndex-1];
    let tPosAfter = targetSection.tasks[event.currentIndex];
    task.section = targetSection.id;
    if(tPosBefore && tPosAfter){
      task.position = tPosBefore.generatePosition("between", tPosAfter.position);
    }else if(tPosAfter){
      task.position = tPosAfter.generatePosition("first");
    }else if(tPosBefore){
      task.position = tPosBefore.generatePosition("last");
    }else{
      task.position = task.generatePosition("new");
    }
   // this.updateTask(task);
  }
}
