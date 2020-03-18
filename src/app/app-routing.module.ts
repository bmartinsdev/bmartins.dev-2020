import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgKanbanComponent } from './lg-kanban/lg-kanban.component';


const routes: Routes = [
  { path: '', component: LgKanbanComponent },
  { path: 'changelog', component: LgKanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
