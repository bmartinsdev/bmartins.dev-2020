import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

declare global {
  var color: string;
  var bgColor: string;
  var grey50: string;
  var grey200: string;
  var grey600: string;
  var grey800: string;
}

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private menuToggle = new BehaviorSubject<boolean>(false);
  menuState = this.menuToggle.asObservable();

  toggleMenu() {
    this.menuToggle.next(!this.menuToggle.value);
  }

  updateColors(theme) {
    switch (theme) {
      case "light":
        globalThis.bgColor = "#FFFFFF";
        globalThis.grey50 = "#FAFAFA";
        globalThis.grey200 = "#CCCCCC";
        globalThis.grey600 = "#777777";
        globalThis.grey800 = "#1C1C1C";
        break;
      case "dark":
        break;
    }
  }
}
