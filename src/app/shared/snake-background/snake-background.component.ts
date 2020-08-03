import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as p5 from "p5";

@Component({
  selector: 'snake-background',
  templateUrl: './snake-background.component.html',
  styleUrls: ['./snake-background.component.sass']
})
export class SnakeBackgroundComponent implements OnInit, OnDestroy {
  private p5;

  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  };

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  };

  private destroyCanvas = () => {
    this.p5.noCanvas();
  };

  private drawing = function (p: any) {
    let wWidth = p.windowWidth;
    let wHeight = p.windowHeight;

    p.setup = () => {
      p.disableFriendlyErrors = true;
      p.createCanvas(wWidth, wHeight).parent("snake-background");
      p.frameRate(24);
    };
    p.draw = () => {
      wWidth = p.windowWidth;
      wHeight = p.windowHeight;
    };

    class Snake {
    }

    class Food {
    }
  };
}
