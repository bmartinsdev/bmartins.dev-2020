import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import { isUndefined } from 'util';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

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
    let r = 140;
    let isMousePressed = false;
    let theta = 0.4;
    let theta_vel = 0.018;
    let orbits = [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}];
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('lg-home-flow');
      p.frameRate(30);
      for (var i = 0; i < 20; i++) {
        nanites[i] = new Nanite(0, 0);
      }
    };
    p.draw = () => {
      p.background(255);
      p.translate(p.windowWidth / 2, p.windowHeight / 2);
      let inc = 30;
      for(let i=0; i < orbits.length; i++){
        orbits[i].x = r * p.cos(theta+inc);
        orbits[i].y = r * p.sin(theta+inc);
        //p.ellipse(orbits[i].x, orbits[i].y, 5, 5);
        inc = inc+10;
      }
      theta += theta_vel;
      let follow = 0;
      for(let i=0; i < nanites.length; i++){
        nanites[i].update(orbits[follow].x, orbits[follow].y, isMousePressed);
        nanites[i].show();
        follow++;
        if(follow == 5) follow = 0;
      }
      p.ellipse(0, 0, r*2-1, r*2-1);
    };

    class Nanite {
      pos;
      vel;
      acc;
      history = [];

      constructor(x, y) {
        this.pos = p.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(8);
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

        if(this.history.length > 100)
          this.history.shift();
      }

      show() {
        p.beginShape();
        for(let i = 1; i < this.history.length; i++){
          let opacity = i < 50 ? i: 75;
          p.stroke(0,0,0,opacity);
          p.line(this.history[i].x, this.history[i].y, this.history[i-1].x, this.history[i-1].y);
        }
        p.endShape();
      };
    };

    
  }
}
