import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { LgKanbanComponent } from './lg-kanban/lg-kanban.component';
import { LgBoardComponent } from './lg-kanban/lg-board/lg-board.component';
import { LgColumnComponent } from './lg-kanban/lg-board/lg-column/lg-column.component';
import { LgCardComponent } from './lg-kanban/lg-board/lg-column/lg-card/lg-card.component';

import { LgKanbanService } from './services/lg-kanban.service';
import { LgTaskFormComponent } from './lg-kanban/lg-board/lg-column/lg-task-form/lg-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LgKanbanComponent,
    LgBoardComponent,
    LgColumnComponent,
    LgCardComponent,
    LgTaskFormComponent
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
    ReactiveFormsModule
  ],
  providers: [
    LgKanbanService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
