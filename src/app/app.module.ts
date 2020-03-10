import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LughKanbanComponent } from './lugh-kanban/lugh-kanban.component';
import { LughBacklogComponent } from './lugh-kanban/lugh-backlog/lugh-backlog.component';
import { LughBoardComponent } from './lugh-kanban/lugh-board/lugh-board.component';
import { LughColumnComponent } from './lugh-kanban/lugh-board/lugh-column/lugh-column.component';
import { LughCardComponent } from './lugh-kanban/lugh-board/lugh-column/lugh-card/lugh-card.component';
import { LughBacklogCardComponent } from './lugh-kanban/lugh-backlog/lugh-backlog-card/lugh-backlog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LughKanbanComponent,
    LughBacklogComponent,
    LughBoardComponent,
    LughColumnComponent,
    LughCardComponent,
    LughBacklogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
