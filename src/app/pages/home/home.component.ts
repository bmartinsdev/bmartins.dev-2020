import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent {
  hovered: boolean = false;
  loaded: boolean = false;

  ngOnInit() {
    setTimeout(() => (this.loaded = true), 2000);
  }

  public mouseHoverToggle = (state) => {
    this.hovered = state;
  };
}
