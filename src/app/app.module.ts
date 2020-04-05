import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { LgKanbanComponent } from 'src/app/pages/kanban/lg-kanban.component';
import { LgBoardComponent } from 'src/app/pages/kanban/lg-board/lg-board.component';
import { LgColumnComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-column.component';
import { LgCardComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-card/lg-card.component';

import { LgKanbanService } from './services/lg-kanban.service';
import { LgTaskFormComponent } from 'src/app/pages/kanban/lg-board/lg-column/lg-task-form/lg-task-form.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LgKanbanComponent,
    LgBoardComponent,
    LgColumnComponent,
    LgCardComponent,
    LgTaskFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'lughwebsite'),
    AngularFirestoreModule,
    DragDropModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [
    LgKanbanService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
