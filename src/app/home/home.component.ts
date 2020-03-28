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

  private drawing = function (p: any) {var inc = 0.1;
    let scl = 10;
    let cols, rows;
    
    let zoff = 0;
    
    let fr;
    
    let particles = [];
    
    let flowfield = [];
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('lg-home-flow');
      cols = p.floor(p.width / scl);
      rows = p.floor(p.height / scl);
      fr = p.createP('');

      flowfield = new Array(cols * rows);
    
      for (var i = 0; i < 300; i++) {
        particles[i] = new Particle();
      }
    };
    p.draw = () => {
      let yoff = 0;
      for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
          let index = x + y * cols;
          let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
          let v = p5.Vector.fromAngle(angle);
          
          flowfield[index] = v;
          xoff += inc;
          // p.stroke(0, 50);
          // p.push();
          // p.translate(x * scl, y * scl);
          // p.rotate(v.heading());
          // p.strokeWeight(1);
          // p.line(0, 0, scl, 0);
          // p.pop();
        }
        yoff += inc;

        zoff += 0.0003;
      }

      for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
      }

      fr.html(p.floor(p.frameRate()));
    };

    function Particle() {
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.maxspeed = 4;
      this.h = 0;
    
      this.prevPos = this.pos.copy();
    
      this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
      };
    
      this.follow = function(vectors) {
        var x = p.floor(this.pos.x / scl);
        var y = p.floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
      };
    
      this.applyForce = function(force) {
        this.acc.add(force);
      };
    
      this.show = function() {
        p.stroke(0, 0, 0, 25);
        p.strokeWeight(1);
        p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
      };
    
      this.updatePrev = function() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
      };
    
      this.edges = function() {
        if (this.pos.x > p.width) {
          this.pos.x = 0;
          this.updatePrev();
        }
        if (this.pos.x < 0) {
          this.pos.x = p.width;
          this.updatePrev();
        }
        if (this.pos.y > p.height) {
          this.pos.y = 0;
          this.updatePrev();
        }
        if (this.pos.y < 0) {
          this.pos.y = p.height;
          this.updatePrev();
        }
      };
    }
  };

}
