import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
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
  }

  public mouseHoverLogo = (state) => {
    this.p5.setCenterHover(state);
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
    let dumbNanites = [];
    let dumbOrbit = {x:0,y:0};
    let dumbSpeed = 0.4;
    let dumbInc = 0.14;
    let rx = 14;
    let ry = 14;
    let orbitRadius = 140;
    let orbitSpeed = 0.4;
    let followTimer = 0;
    let followMouse = false;
    let orbitInc = 0.016;
    let wWidth = p.windowWidth;
    let wHeight = p.windowHeight;
    let orbits = [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}];

    p.setup = () => {
      p.createCanvas(wWidth, wHeight).parent('lg-home-flow');
      p.frameRate(24);
      for (var i = 0; i < 20; i++) {
        nanites[i] = new Nanite(generateRandom(wWidth), generateRandom(wHeight), 4, 160);
      }
      for (var i = 0; i < 5; i++) {
        dumbNanites[i] = new Nanite(generateRandom(wWidth), generateRandom(wHeight), 3+i/6, 40);
      }
    };
    p.draw = () => {
      wWidth = p.windowWidth;
      wHeight = p.windowHeight;
      let follow = 0;
      let inc = 30;
      let followX = wWidth/2;
      let followY = wHeight/2;
      p.background(255);
      
      dumbOrbit.x = p.mouseX + rx * Math.cos(dumbSpeed+30);
      dumbOrbit.y = p.mouseY + ry * Math.sin(dumbSpeed+30);
      //p.stroke(100);
      // p.ellipse(dumbOrbit.x, dumbOrbit.y, 5, 5);
      for(let i=0; i < orbits.length; i++){
        orbits[i].x = wWidth/2 + orbitRadius * Math.cos(orbitSpeed+inc);
        orbits[i].y = wHeight/2 + orbitRadius * Math.sin(orbitSpeed+inc);
        //p.ellipse(orbits[i].x, orbits[i].y, 5, 5);
        inc = inc+10;
      }
      dumbSpeed += dumbInc;
      orbitSpeed += orbitInc;

      for(let i=0; i < nanites.length; i++){
        nanites[i].update(orbits[follow].x, orbits[follow].y);
        nanites[i].show();
        follow++;
        if(follow == 5) follow = 0;
      }
      if(followMouse){
        followX = dumbOrbit.x;
        followY = dumbOrbit.y;
        followTimer--;
        if(followTimer == 0) followMouse = false;
      }else{
        followTimer = followTimer+4;
        if(followTimer > 600) followMouse = true;
      }

      for(let i=0; i < dumbNanites.length; i++){
        dumbNanites[i].update(followX, followY);
        dumbNanites[i].show();
      }
      p.stroke(255);
      p.ellipse(wWidth/2, wHeight/2, 140*2-1, 140*2-1);
    };

    p.setHoveredState = (state) => {
      if(state){
        rx = 80;
        ry = 30;
        dumbInc = 0.04;
      }else{
        rx = 14;
        ry = 14;
        dumbInc = 0.14;
      }
    }

    p.setCenterHover = (state) => {
      if(state){
        orbitRadius = 145;
      }else{
        orbitRadius = 140;
      }
    }
    
    function generateRandom(size) {
      return Math.floor(Math.random() * size);
    }

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

        if(this.history.length > this.historySize)
          this.history.shift();
      }

      show() {
        p.beginShape();
        for(let i = 1; i < this.history.length; i++){
          let opacity = i < 35 ? i: 35;
          p.stroke(50, 50, 50, opacity);
          p.line(this.history[i].x, this.history[i].y, this.history[i-1].x, this.history[i-1].y);
        }
        p.endShape();
      };
    };
  }
}
