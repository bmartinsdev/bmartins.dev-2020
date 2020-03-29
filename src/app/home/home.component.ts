import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import { isUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit, OnDestroy {
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
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    this.p5.noCanvas();
  }

  private drawing = function (p: any) {
    let nanites = [];
    let r = p.windowHeight * 0.20;
    let isMousePressed = false;
    let theta = 0.4;
    let theta_vel = 0.04;
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('lg-home-flow');
      p.frameRate(30);
      for (var i = 0; i < 10; i++) {
        nanites[i] = new Nanite(p.random(p.windowWidth), p.random(p.windowHeight));
      }
    };
    p.draw = () => {
      p.background(255);
      p.translate(p.windowWidth / 2, p.windowHeight / 2);
      let xr = r * p.cos(theta);
      let yr = r * p.sin(theta);
      //p.ellipse(xr, yr, 5, 5);
      theta += theta_vel;
      for(let i=0; i < nanites.length; i++){
        nanites[i].update(xr, yr, isMousePressed);
        nanites[i].edges();
        nanites[i].show();
      }
    };

    class Nanite {
      pos;
      vel;
      orbit;
      acc;
      macc;
      history = [];
      intersectsCenter = false;

      constructor(x, y) {
        this.pos = p.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(p.random(100));
      }
    
      update(x, y, isMousePressed) {
        let follow = !isMousePressed ? p.createVector(x, y) : p.createVector(p.mouseX, p.mouseY);
        this.acc = p5.Vector.sub(follow, this.pos);
        this.acc.setMag(1);
    
        this.vel.add(this.acc);
        this.vel.limit(4);
    
        this.pos.add(this.vel);
        let v = p.createVector(this.pos.x, this.pos.y);
        this.history.push(v);

        if(this.history.length > 50)
          this.history.shift();
      }
    
      edges(){
        let dist = p.dist(p.windowWidth/2, p.windowHeight/2, this.pos.x, this.pos.y);
        if(dist < 100)
          this.intersectsCenter = true;
        else
          this.intersectsCenter = false;
      }

      show() {
        p.beginShape();
        for(let i = 1; i < this.history.length; i++){
          p.stroke(0,0,0,i);
          p.line(this.history[i].x, this.history[i].y, this.history[i-1].x, this.history[i-1].y);
        }
        p.endShape();
      };
    };
  }
}
