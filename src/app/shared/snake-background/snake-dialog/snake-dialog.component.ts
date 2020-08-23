import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "snake-dialog",
  templateUrl: "./snake-dialog.component.html",
})
export class SnakeDialogComponent {
  name: string;

  constructor(public dialog: MatDialog) {}

  onNoClick() {
    this.dialog.closeAll();
  }
  onSubmit() {
    console.log(this.name);
  }
}
