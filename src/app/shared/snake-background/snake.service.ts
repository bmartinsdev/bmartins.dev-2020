import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SnakeService {
  private currentScore = new BehaviorSubject<number>(0);
  current$ = this.currentScore.asObservable();
  private highestScore = new BehaviorSubject<number>(0);
  highest$ = this.highestScore.asObservable();

  updateCurrent(score: number) {
    this.currentScore.next(score);
  }

  updateHighest(score: number, isSnake: boolean) {
    if (this.highestScore.getValue() > score) return;
    this.highestScore.next(score);
  }
}
