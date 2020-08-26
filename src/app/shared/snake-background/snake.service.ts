import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AngularFireFunctions } from "@angular/fire/functions";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { SnakeDialogComponent } from "./snake-dialog/snake-dialog.component";
import { SnakeScoreComponent } from "./snake-score/snake-score.component";

@Injectable({
  providedIn: "root",
})
export class SnakeService {
  private submitTop10;
  private currentScore = new BehaviorSubject<number>(0);
  current$ = this.currentScore.asObservable();
  private recordScore = new BehaviorSubject<number>(0);
  score$ = this.recordScore.asObservable();
  private recordName = new BehaviorSubject<string>("");
  name$ = this.recordName.asObservable();
  private top10 = new BehaviorSubject<Score[]>([]);
  top10$ = this.top10.asObservable();
  private dialogOpen: boolean = false;

  constructor(
    public db: AngularFirestore,
    private fns: AngularFireFunctions,
    public dialog: MatDialog
  ) {
    this.submitTop10 = fns.httpsCallable("updateSnakeScore");
  }

  getTop10() {
    const top10doc = this.db.doc("users/snakeTop10").get();

    top10doc.subscribe({
      next: (top10: any) => {
        const ranking = top10.data().rank as Score[];
        this.top10.next(ranking);
        this.recordScore.next(ranking[0].score);
        this.recordName.next(ranking[0].name);
      },
    });
  }

  updateCurrent(score: number) {
    this.currentScore.next(score);
  }

  updateHighest(score: number, isSnake: boolean) {
    if (this.dialogOpen) return;
    if (
      this.top10.getValue() &&
      (this.top10.getValue()[this.top10.getValue().length - 1].score < score ||
        this.top10.getValue().length < 9)
    ) {
      if (isSnake) {
        const snakeScore = this.top10
          .getValue()
          .find((rank) => rank.name === "🐍 Snake AI 🐍");
        if (snakeScore.score < score) {
          this.submitTop10({ score: score, name: "🐍 Snake AI 🐍" }).subscribe({
            next: (submitted) => {
              const ranking = submitted as Score[];
              this.top10.next(ranking);
              this.recordScore.next(ranking[0].score);
              this.recordName.next(ranking[0].name);
            },
          });
        }
        return;
      }
      this.dialogOpen = true;
      const dialogRef = this.dialog.open(SnakeDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (!result) return;
        this.submitTop10({ score: score, name: result }).subscribe({
          next: (submitted) => {
            const ranking = submitted as Score[];
            this.top10.next(ranking);
            this.recordScore.next(ranking[0].score);
            this.recordName.next(ranking[0].name);
            this.dialogOpen = false;
          },
        });
      });
    }
  }

  openTop10Modal() {
    if (this.top10.getValue() && this.top10.getValue().length > 0)
      this.dialog.open(SnakeScoreComponent, { data: this.top10.getValue() });
  }
}

export interface Score {
  name: string;
  score: number;
}
