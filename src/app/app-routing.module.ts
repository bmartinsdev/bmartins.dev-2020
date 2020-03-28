import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgKanbanComponent } from './lg-kanban/lg-kanban.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'changelog', component: LgKanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
