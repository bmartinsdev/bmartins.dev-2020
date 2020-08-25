import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Score } from "src/app/shared/snake-background/snake.service";

@Component({
  selector: "app-snake-score",
  templateUrl: "./snake-score.component.html",
  styleUrls: ["./snake-score.component.sass"],
})
export class SnakeScoreComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public top10: Score[]
  ) {}

  ngOnInit() {
    if (this.top10.length < 0) this.dialog.closeAll();
  }

  onNoClick() {
    this.dialog.closeAll();
  }
}
