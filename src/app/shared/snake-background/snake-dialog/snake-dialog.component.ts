import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "snake-dialog",
  templateUrl: "./snake-dialog.component.html",
})
export class SnakeDialogComponent {
  submitScoreForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
  });

  constructor(public dialog: MatDialogRef<SnakeDialogComponent>) {}

  onNoClick() {
    this.dialog.close();
  }
  onSubmit() {
    if (this.submitScoreForm.get("name").hasError("required")) return;
    this.dialog.close(this.submitScoreForm.get("name").value);
  }
}
