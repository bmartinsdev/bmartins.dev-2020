import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home.module";
import { AboutModule } from "./modules/about.module";
import { ProjectsModule } from "./modules/projects.module";
import { TestingComponent } from "./testing/testing.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", loadChildren: () => import('./modules/home.module').then(m => m.HomeModule) },
  { path: "about", loadChildren: () => import('./modules/about.module').then(m => m.AboutModule) },
  {
    path: "projects",
    loadChildren: () => import('./modules/projects.module').then(m => m.ProjectsModule),
  },
  { path: "test", component: TestingComponent },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
