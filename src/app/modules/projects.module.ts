import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "../pages/projects/projects.component";
import { ProjectComponent } from "../pages/projects/project/project.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "./shared.module";
import { LgProjectsService } from "../services/kanban/lg-projects.service";
import { CrystalLightboxModule } from "@crystalui/angular-lightbox";
import { BlurredDirective } from "../shared/blurred.directive";

const routes: Routes = [{ path: "", component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent, BlurredDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CrystalLightboxModule,
  ],
  providers: [LgProjectsService],
})
export class ProjectsModule {}
