import { Component } from "@angular/core";
import { GlobalService } from "./services/global.service";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  menuToggle: boolean = true;
  loading: boolean = true;
  darkMode: boolean = true;

  constructor(private global: GlobalService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.global.menuState.subscribe((state) => (this.menuToggle = state));
    this.loadDarkModeState();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.global.updateColors("swap");
  }

  closeMenu() {
    this.global.toggleMenu();
  }

  loadDarkModeState() {
    let savedState = localStorage.getItem("lugh-app-dark-mode");
    this.darkMode = savedState === "dark";
    if (this.darkMode) this.global.updateColors("dark");
    else this.global.updateColors("light");
  }
}
