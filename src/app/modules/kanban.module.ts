import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from 'src/app/pages/kanban/action-bar/action-bar.component';
import { LgKanbanComponent } from 'src/app/pages/kanban/lg-kanban.component';
import { LgBoardComponent } from 'src/app/pages/kanban/lg-board/lg-board.component';
import { LgColumnComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-column.component';
import { LgCardComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-card/lg-card.component';
import { TaskFormComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-task-form/lg-task-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LgKanbanService } from 'src/app/services/kanban/lg-kanban.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
  { path: '', component: LgKanbanComponent }
]

@NgModule({
  declarations: [
    ActionBarComponent,
    LgKanbanComponent,
    LgBoardComponent,
    LgColumnComponent,
    LgCardComponent,
    TaskFormComponent  
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    LgKanbanService    
  ]
})
export class KanbanModule { }