import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../pages/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
  { path: '', component: AboutComponent }
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }