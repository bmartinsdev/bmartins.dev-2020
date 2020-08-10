import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LgProjectsService } from "src/app/services/kanban/lg-projects.service";
import { Project } from "src/app/services/kanban/classes/Project";

@Component({
  selector: "lg-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.sass"],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectDB: LgProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.projectDB.getProjects();
  }

  loadMore() {
    this.projectDB.loadMoreProjects();
  }
}
