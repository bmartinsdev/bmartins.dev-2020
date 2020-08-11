import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { LgProjectsService } from "src/app/services/kanban/lg-projects.service";
import { Project } from "src/app/services/kanban/classes/Project";

@Component({
  selector: "lg-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.sass"],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;

  constructor(private projectDB: LgProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.projectDB;
  }

  loadProjects() {
    this.projects$ = this.projectDB.getProjects();
  }

  loadMore(e) {
    if (
      (e.target as Document).documentElement.scrollHeight -
        (e.target as Document).documentElement.scrollTop -
        200 <=
      (e.target as Document).documentElement.clientHeight
    )
      this.projectDB.loadMoreProjects();
  }
}
