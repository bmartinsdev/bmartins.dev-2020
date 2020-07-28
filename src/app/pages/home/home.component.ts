import { Component, OnInit, OnDestroy } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private p5;
  constructor() {
    window.onresize = this.onWindowResize;
    p5.disableFriendlyErrors = true;
  }

  ngOnInit() {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  public mouseHoverToggle = (state) => {
    this.p5.setHoveredState(state);
  };

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
    let orbitInc = 0.016;
    let followInc = 0.14;
    let rx = 14;
    let ry = 14;
    let followSpeed = 0.4;
    let orbitSpeed = 0.4;
    let orbitRadius = 140;
    let fixedOrbit = [];
    let followOrbit = [];
    let wWidth = p.windowWidth;
    let wHeight = p.windowHeight;
    let fixedOrbitList = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];

    p.setup = () => {
      p.createCanvas(wWidth, wHeight).parent("lg-home-flow");
      p.frameRate(24);
      for (var i = 0; i < 8; i++) {
        fixedOrbit[i] = new Nanite(wWidth / 2, wHeight / 2, 4, 160);
      }
      for (var i = 0; i < 2; i++) {
        followOrbit[i] = new Nanite(wWidth / 2, wHeight / 2, 3 + i / 6, 200);
      }
    };
    p.draw = () => {
      wWidth = p.windowWidth;
      wHeight = p.windowHeight;
      let follow = 0;
      let inc = 30;
      let followX = wWidth / 2;
      let followY = wHeight / 2;
      p.clear();
      if (
        p.mouseX > 25 &&
        p.mouseY > 25 &&
        p.mouseX < wWidth - 25 &&
        p.mouseY < wHeight - 25
      ) {
        followX = p.mouseX + rx * Math.cos(followSpeed + 30);
        followY = p.mouseY + ry * Math.sin(followSpeed + 30);
      }
      for (let i = 0; i < fixedOrbitList.length; i++) {
        fixedOrbitList[i].x =
          wWidth / 2 + orbitRadius * Math.cos(orbitSpeed + inc);
        fixedOrbitList[i].y =
          wHeight / 2 + orbitRadius * Math.sin(orbitSpeed + inc);
        inc = inc + 10;
      }
      followSpeed += followInc;
      orbitSpeed += orbitInc;

      for (let i = 0; i < fixedOrbit.length; i++) {
        fixedOrbit[i].update(
          fixedOrbitList[follow].x,
          fixedOrbitList[follow].y
        );
        fixedOrbit[i].show();
        follow++;
        if (follow == 5) follow = 0;
      }

      for (let i = 0; i < followOrbit.length; i++) {
        followOrbit[i].update(followX, followY);
        followOrbit[i].show();
      }
      p.stroke("#fafafa");
      p.fill("#fafafa");
      p.ellipse(wWidth / 2, wHeight / 2, 139 * 2 - 1, 139 * 2 - 1);
    };

    p.setHoveredState = (state) => {
      if (state) {
        rx = 80;
        ry = 30;
        followInc = 0.04;
        orbitRadius = 143;
      } else {
        rx = 14;
        ry = 14;
        followInc = 0.14;
        orbitRadius = 140;
      }
    };

    class Nanite {
      pos;
      vel;
      acc;
      speed;
      history = [];
      historySize = 160;

      constructor(x, y, speed, history) {
        this.pos = p.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.speed = speed;
        this.historySize = history;
        this.vel.mult(8);
      }

      update(x, y) {
        let follow = p.createVector(x, y);
        this.acc = p5.Vector.sub(follow, this.pos);
        this.acc.setMag(0.8);

        this.vel.add(this.acc);
        this.vel.limit(this.speed);

        this.pos.add(this.vel);
        let v = p.createVector(this.pos.x, this.pos.y);
        this.history.push(v);

        if (this.history.length > this.historySize) this.history.shift();
      }

      show() {
        p.beginShape();
        for (let i = 1; i < this.history.length; i++) {
          let opacity = i < 35 ? i : 35;
          p.stroke(100, 100, 100, opacity);
          p.line(
            this.history[i].x,
            this.history[i].y,
            this.history[i - 1].x,
            this.history[i - 1].y
          );
        }
        p.endShape();
      }
    }
  };
}
