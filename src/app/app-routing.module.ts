import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgKanbanComponent } from 'src/app/pages/kanban/lg-kanban.component';
import { HomeComponent } from 'src/app/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LgKanbanComponent },
  { path: 'projects', component: LgKanbanComponent },
  { path: 'todo', component: LgKanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
