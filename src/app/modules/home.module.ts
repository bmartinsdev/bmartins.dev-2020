import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../pages/home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "./shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SnakeBackgroundComponent } from "../shared/snake-background/snake-background.component";
import { SnakeDialogComponent } from "../shared/snake-background/snake-dialog/snake-dialog.component";
import { SnakeScoreComponent } from "../shared/snake-background/snake-score/snake-score.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    SnakeBackgroundComponent,
    SnakeDialogComponent,
    SnakeScoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
