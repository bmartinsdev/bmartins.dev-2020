import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LughKanbanComponent } from './lugh-kanban/lugh-kanban.component';


const routes: Routes = [
  { path: '/', component: LughKanbanComponent },
  { path: 'changelog', component: LughKanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
