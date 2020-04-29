import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home.module';
import { AboutModule } from './modules/about.module';
import { KanbanModule } from './modules/kanban.module';
import { ProjectsModule } from './modules/projects.module';


const routes: Routes = [
  { path: '', loadChildren: './modules/home.module#HomeModule' },
  { path: 'about', loadChildren: './modules/about.module#AboutModule' },
  { path: 'projects', loadChildren: './modules/projects.module#ProjectsModule' },
  { path: 'todo', loadChildren: './modules/kanban.module#KanbanModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
