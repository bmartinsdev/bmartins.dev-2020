import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LgTask } from '../../../../classes/lg-task';

@Component({
  selector: 'app-lg-task-form',
  templateUrl: './lg-task-form.component.html',
  styleUrls: ['./lg-task-form.component.sass']
})
export class LgTaskFormComponent implements OnInit {
  @Input() sectionId:number;
  titleTaskFormControl = new FormControl('', [
    Validators.required
  ]);
  mode: string = 'simple';

  constructor() { }

  ngOnInit(): void {
  }

}
