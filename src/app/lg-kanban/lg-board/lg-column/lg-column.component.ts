import { Component, OnInit, Input } from '@angular/core';
import { LgKanbanService } from '../../../services/lg-kanban.service';
import { LgTask } from '../../../classes/lg-task';
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
  tasks$: Observable<LgTask[]>;

  constructor(private taskDB: LgKanbanService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.tasks$ = this.taskDB.getTasks(this.section.id);
  }

  addTask(){
    let task = new LgTask({"title":"teste","position":35});
    this.taskDB.createTask(task);
  }

  updateTask(task:LgTask){
    this.taskDB.updateTask(task);
  }
  
  deleteTask(task:LgTask){
    this.taskDB.deleteTask(task);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    let targetSection = Object.assign(new LgSection, event.container.data);
    let task = Object.assign(new LgTask, event.item.data);
    task.section = targetSection.id;
    this.updateTask(task);
  }
}
