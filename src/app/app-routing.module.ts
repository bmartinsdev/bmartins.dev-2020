import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgKanbanComponent } from 'src/app/pages/kanban/lg-kanban.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'todo', component: LgKanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
