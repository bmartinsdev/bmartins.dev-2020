import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

declare global {
  var mode: string;
  var color: string;
  var bgColor: string;
  var grey50: string;
  var grey200: string;
  var grey600: string;
  var grey800: string;
  var primary: string;
  var projectTags: any;
}

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private menuToggle = new BehaviorSubject<boolean>(false);
  menuState = this.menuToggle.asObservable();

  constructor() {
    this.initTags();
  }

  toggleMenu() {
    this.menuToggle.next(!this.menuToggle.value);
  }

  updateColors(theme) {
    if (theme === "swap")
      theme = globalThis.mode === "light" ? "dark" : "light";

    globalThis.mode = theme;
    const html = document.getElementsByTagName("html")[0];

    if (globalThis.mode === "light") {
      html.id = "light-mode";
    } else {
      html.id = "dark-mode";
    }
    switch (theme) {
      case "light":
        globalThis.color = "#D28F3C";
        globalThis.bgColor = "#FFFFFF";
        globalThis.grey50 = "#FAFAFA";
        globalThis.grey200 = "#CCCCCC";
        globalThis.grey600 = "#777777";
        globalThis.grey800 = "#1C1C1C";
        break;
      case "dark":
        globalThis.color = "#D28F3C";
        globalThis.bgColor = "#1C1C1C";
        globalThis.grey50 = "#1C1C1C";
        globalThis.grey200 = "#777777";
        globalThis.grey600 = "#CCCCCC";
        globalThis.grey800 = "#FAFAFA";
        break;
    }
  }

  initTags() {
    globalThis.projectTags = {
      p5: {
        url: "https://p5js.org/",
        name: "P5.JS",
        bg: "#ed225d",
        color: "#fefefe",
      },
      javascript: {
        url: "https://www.javascript.com/",
        name: "Javascript",
        bg: "#ec008c",
        color: "#fefefe",
      },
      vue: {
        url: "https://vuejs.org/",
        name: "Vue.js",
        bg: "#4fc08d",
        color: "#fefefe",
      },
      laravel: {
        url: "https://laravel.com/",
        name: "Laravel",
        bg: "#ff2d20",
        color: "#fefefe",
      },
      kirby: {
        url: "https://getkirby.com/",
        name: "Kirby",
        bg: "#f0c674",
        color: "#fefefe",
      },
      wordpress: {
        url: "https://wordpress.org/",
        name: "Wordpress",
        bg: "#117ac9",
        color: "#fefefe",
      },
      woocommerce: {
        url: "https://woocommerce.com/",
        name: "WooCommerce",
        bg: "#7f54b3",
        color: "#fefefe",
      },
      jquery: {
        url: "https://jquery.com/",
        name: "jQuery",
        bg: "#78cff5",
        color: "#fefefe",
      },
      angular: {
        url: "https://angular.io/",
        name: "Angular",
        bg: "#c3002f",
        color: "#fefefe",
      },
      firebase: {
        url: "https://firebase.google.com/",
        name: "Firebase",
        bg: "#f5820b",
        color: "#fefefe",
      },
    };
  }
}
