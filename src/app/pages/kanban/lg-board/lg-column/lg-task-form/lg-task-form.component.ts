import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LgTask } from 'src/app/services/kanban/classes/Task';
import { LgKanbanService } from 'src/app/services/kanban/lg-kanban.service';

@Component({
  selector: 'app-lg-task-form',
  templateUrl: './lg-task-form.component.html',
  styleUrls: ['./lg-task-form.component.sass']
})
export class LgTaskFormComponent implements OnInit {
  @Input() sectionId:number;
  addTaskForm = new FormGroup({
    'title': new FormControl('', [
      Validators.required
    ])
  });
  @Input() mode: string = 'simple';

  constructor(private taskDB: LgKanbanService) { }

  ngOnInit(): void {
  }

  addTask(){
    let task = new LgTask({"title": this.addTaskForm.get('title').value, "section":this.sectionId});
    //this.taskDB.createTask(task).then(arg => console.log(arg));
    this.addTaskForm.get('title').setValue('');
  }
}
