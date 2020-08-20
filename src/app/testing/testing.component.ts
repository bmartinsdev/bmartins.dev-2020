import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Section } from "../services/kanban/classes/Section";
import { LgKanbanService } from "../services/kanban/lg-kanban.service";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
})
export class TestingComponent implements OnInit {
  preview: string;

  ngOnInit(): void {
    this.preview =
      "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/projects%2Fgsa_01_blur.jpg?alt=media&token=f6240001-4fb6-4c20-91be-7f2e075b85c8";
    let loaded = new Image();
    loaded.src =
      "https://firebasestorage.googleapis.com/v0/b/applughwebsite.appspot.com/o/projects%2Fgsa_01.png?alt=media&token=8889fac1-5e3c-47ec-ae93-49ba85dd8d39";
    loaded.addEventListener(
      "load",
      () => {
        this.preview = loaded.src;
      },
      false
    );
  }
}
