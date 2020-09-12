import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home.module";
import { AboutModule } from "./modules/about.module";
import { ProjectsModule } from "./modules/projects.module";
import { TestingComponent } from "./testing/testing.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", loadChildren: "./modules/home.module#HomeModule" },
  { path: "about", loadChildren: "./modules/about.module#AboutModule" },
  {
    path: "projects",
    loadChildren: "./modules/projects.module#ProjectsModule",
  },
  { path: "test", component: TestingComponent },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
