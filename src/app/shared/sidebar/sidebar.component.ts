import { Component } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";
import { Router } from "@angular/router";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.sass"],
})
export class SidebarComponent {
  constructor(private global: GlobalService, private router: Router) {}

  goToRoute = function (route: string) {
    this.global.toggleMenu();
    this.router.navigate([route]);
  };
}
