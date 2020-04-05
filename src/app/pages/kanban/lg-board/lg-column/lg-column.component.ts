import { Component, OnInit, Input } from '@angular/core';
import { LgKanbanService } from 'src/app/services/lg-kanban.service';
import { LgTask } from 'src/app/classes/lg-task';
import { Observable } from 'rxjs';
import { LgSection } from 'src/app/classes/lg-section';
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
    this.loadTasks();
  }

  loadTasks(){
    this.taskDB.getTasks(this.section.id).subscribe(
      tasks => {
        this.section.tasks = tasks;
        this.loadedTasks = true;
      },
      err => console.error('Observer got an error: ' + err)
    );;
  }

  updateTask(task:LgTask){
    this.taskDB.updateTask(task);
  }
  
  deleteTask(task:LgTask){
    this.taskDB.deleteTask(task);
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
    this.updateTask(task);
  }
}
