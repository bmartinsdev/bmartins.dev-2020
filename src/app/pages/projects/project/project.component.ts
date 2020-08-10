import { Component, Input } from "@angular/core";
import { Project } from "src/app/services/kanban/classes/Project";

@Component({
  selector: "lg-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.sass"],
})
export class ProjectComponent {
  @Input() project: Project;
}
