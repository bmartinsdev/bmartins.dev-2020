import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Project } from "src/app/services/classes/Project";

@Component({
  selector: "lg-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.sass"],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectComponent {
  @Input() project: Project;
}
