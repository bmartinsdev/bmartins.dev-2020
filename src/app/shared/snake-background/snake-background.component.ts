import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "snake-background",
  templateUrl: "./snake-background.component.html",
  styleUrls: ["./snake-background.component.sass"],
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
    this.p5.remove();
  };

  private drawing = function (p: any) {
    let wWidth = p.windowWidth;
    let wHeight = p.windowHeight;
    const debug = false;
    let snake;
    let food;
    let score;
    const scale = 24;
    let cols = Math.floor(wWidth / scale);
    let rows = Math.floor(wHeight / scale);
    let keyDown = false;
    let currentFPS = 10;
    let pathFinding = 2;
    let resetGame = false;
    const directions = {
      up: "down",
      down: "up",
      left: "right",
      right: "left",
    };

    p.setup = () => {
      p.disableFriendlyErrors = true;
      p.createCanvas(wWidth, wHeight).parent("snake-background");
      p.frameRate(currentFPS);
      if (debug) p.frameRate(60);
      food = new Food();
      snake = new Snake();
      score = new Score();
    };

    function update() {
      if (snake.intersectsSelf() && snake.tailLength > snake.size) {
        snake.dead = true;
      } else {
        if (food.eat(snake.head)) {
          snake.grow();
        }
        score.updateCurrent(snake.getScore());
        if (!debug) speedUp();
        if (food.getQuantity() === 0) food.drop(getEmptyPos());
      }
      if (pathFinding) pathFinder();
      if (!snake.dead) {
        snake.update();
      } else {
        if (!resetGame) {
          resetGame = true;
          setTimeout(function () {
            if (snake.getScore() > score.max) {
              score.saveMax(snake.getScore());
            }
            currentFPS = 10;
            pathFinding = 2;
            resetGame = false;
            snake = new Snake();
            food = new Food();
          }, 3000);
        }
      }
    }

    p.draw = () => {
      update();
      p.background(globalThis.bgColor);
      food.show();
      snake.show();
      score.show();
      keyDown = false;
    };

    function pathFinder() {
      switch (pathFinding) {
        case 1:
          shortestPath();
          break;
        case 2:
          straightLines();
          break;
      }
    }

    function shortestPath() {
      if (!food.target) return;
      switch (snake.direction) {
        case "up":
          if (snake.head.x < food.target.x) {
            tryMove("right");
          } else if (snake.head.x > food.target.x) {
            tryMove("left");
          } else if (
            snake.head.x === food.target.x &&
            snake.head.y < food.target.y
          ) {
            tryMove("right");
          } else if (snake.head.y === food.target.y) {
            if (snake.head.x < food.target.x) {
              tryMove("left");
            } else if (snake.head.x > food.target.x) {
              tryMove("right");
            }
          } else {
            tryMove(snake.direction);
          }
          break;
        case "down":
          if (snake.head.x > food.target.x) {
            tryMove("left");
          } else if (snake.head.x < food.target.x) {
            tryMove("right");
          } else if (
            snake.head.x === food.target.x &&
            snake.head.y > food.target.y
          ) {
            tryMove("right");
          } else if (snake.head.y === food.target.y) {
            if (snake.head.x > food.target.x) {
              tryMove("left");
            } else if (snake.head.x < food.target.x) {
              tryMove("right");
            }
          } else {
            tryMove(snake.direction);
          }
          break;
        case "left":
          if (snake.head.y < food.target.y) {
            tryMove("down");
          } else if (snake.head.y > food.target.y) {
            tryMove("up");
          } else if (
            snake.head.y === food.target.y &&
            snake.head.x < food.target.x
          ) {
            tryMove("up");
          } else if (snake.head.x === food.target.x) {
            if (snake.head.y < food.target.y) {
              tryMove("down");
            } else if (snake.head.y > food.target.y) {
              tryMove("up");
            }
          } else {
            tryMove(snake.direction);
          }
          break;
        case "right":
          if (snake.head.y > food.target.y) {
            tryMove("up");
          } else if (snake.head.y < food.target.y) {
            tryMove("down");
          } else if (
            snake.head.y === food.target.y &&
            snake.head.x > food.target.x
          ) {
            tryMove("up");
          } else if (snake.head.x === food.target.x) {
            if (snake.head.y < food.target.y) {
              tryMove("down");
            } else if (snake.head.y > food.target.y) {
              tryMove("up");
            }
          } else {
            tryMove(snake.direction);
          }
          break;
      }
    }

    function straightLines() {
      if (!food.target) return;
      switch (snake.direction) {
        case "up":
          if (snake.head.y > food.target.y) {
            tryMove("up");
          } else if (
            snake.head.y < food.target.y ||
            snake.head.y === food.target.y
          ) {
            if (snake.head.x <= food.target.x) {
              tryMove("right");
            } else {
              tryMove("left");
            }
          }
          break;
        case "down":
          if (snake.head.y < food.target.y) {
            tryMove("down");
          } else if (
            snake.head.y > food.target.y ||
            snake.head.y === food.target.y
          ) {
            if (snake.head.x <= food.target.x) {
              tryMove("right");
            } else {
              tryMove("left");
            }
          }
          break;
        case "left":
          if (snake.head.x > food.target.x) {
            tryMove("left");
          } else if (
            snake.head.x < food.target.x ||
            snake.head.x === food.target.x
          ) {
            if (snake.head.y >= food.target.y) {
              tryMove("up");
            } else {
              tryMove("down");
            }
          }
          break;
        case "right":
          if (snake.head.x < food.target.x) {
            tryMove("right");
          } else if (
            snake.head.x > food.target.x ||
            snake.head.x === food.target.x
          ) {
            if (snake.head.y >= food.target.y) {
              tryMove("up");
            } else {
              tryMove("down");
            }
          }
          break;
      }
    }

    p.mousePressed = () => {
      let pos = p.createVector(
        p.floor(p.mouseX / scale) * scale,
        p.floor(p.mouseY / scale) * scale
      );
      if (!snake.intersects(pos) && !outOfBoundaries(pos)) food.drop(pos);
    };

    p.keyPressed = () => {
      move(p.key);
      pathFinding = 0;
    };

    function tryMove(key) {
      let paths = [key];

      for (let [dir, opp] of Object.entries(directions)) {
        if (dir !== key && dir !== directions[snake.direction]) paths.push(dir);
      }

      for (let dir of paths) {
        let head = snake.head.copy();
        snake.move(head, dir);
        if (!snake.intersects(head)) {
          snake.move(head, dir);
          if (!snake.intersects(head)) {
            key = dir;
            break;
          }
          key = dir;
        }
      }
      move(key);
    }

    function move(key) {
      if (keyDown) return;
      switch (key) {
        case "ArrowUp":
        case "w":
        case "up":
          if (snake.direction !== "down") snake.changeDirection("up");
          break;
        case "ArrowDown":
        case "s":
        case "down":
          if (snake.direction !== "up") snake.changeDirection("down");
          break;
        case "ArrowRight":
        case "d":
        case "right":
          if (snake.direction !== "left") snake.changeDirection("right");
          break;
        case "ArrowLeft":
        case "a":
        case "left":
          if (snake.direction !== "right") snake.changeDirection("left");
          break;
      }
      keyDown = true;
    }

    function speedUp() {
      if (snake.tailLength < 20 && (currentFPS == 10 || currentFPS == 20)) {
        return;
      } else if (currentFPS == 10 && snake.tailLength > 20) {
        currentFPS = 12;
        p.frameRate(currentFPS);
      } else if (currentFPS == 12 && snake.tailLength > 40) {
        currentFPS = 14;
        p.frameRate(currentFPS);
      } else if (currentFPS == 14 && snake.tailLength > 60) {
        currentFPS = 16;
        p.frameRate(currentFPS);
      } else if (currentFPS == 16 && snake.tailLength > 80) {
        currentFPS = 18;
        p.frameRate(currentFPS);
      } else if (currentFPS == 18 && snake.tailLength > 100) {
        currentFPS = 20;
        p.frameRate(currentFPS);
      }
    }

    function outOfBoundaries(pos) {
      return (
        pos.x < 0 ||
        pos.y < 0 ||
        pos.x > wWidth - scale ||
        pos.y > wHeight - scale
      );
    }

    function getEmptyPos() {
      let location = p.createVector(
        p.floor(p.random(cols)) * scale,
        p.floor(p.random(rows)) * scale
      );

      while (snake.intersects(location)) {
        location = p.createVector(
          p.floor(p.random(cols)) * scale,
          p.floor(p.random(rows)) * scale
        );
      }

      return location;
    }

    class Food {
      food;
      max;
      foodLength;
      target;
      constructor() {
        this.food = [];
        this.max = 3;
        this.foodLength = 0;
        this.target;
      }

      drop(pos) {
        if (this.foodLength < this.max) {
          this.food.push(pos);
          this.foodLength = this.food.length;
          this.updateTarget(snake.head);
        }
      }

      eat(pos) {
        for (let i = 0; i < this.foodLength; i++) {
          if (p.dist(this.food[i].x, this.food[i].y, pos.x, pos.y) < scale) {
            this.food.splice(i, 1);
            this.foodLength = this.food.length;
            this.updateTarget(snake.head);
            return true;
          }
        }
        this.foodLength = this.food.length;
        this.updateTarget(snake.head);
        return false;
      }

      updateTarget(head) {
        let foodDist;
        for (let i = 0; i < this.foodLength; i++) {
          let thisDist = p.dist(head.x, this.food[i].x, head.y, this.food[i].y);
          if (!foodDist || thisDist < foodDist) {
            foodDist = thisDist;
            this.target = this.food[i];
          }
        }
      }

      getQuantity() {
        return this.foodLength;
      }

      show() {
        p.fill("#d28f3c");
        p.stroke(globalThis.bgColor);

        for (let i = 0; i < this.foodLength; i++)
          p.circle(
            this.food[i].x + scale / 2,
            this.food[i].y + scale / 2,
            scale
          );
      }
    }

    class Score {
      current;
      max;
      highest;
      pos;
      constructor() {
        this.current = 0;
        const savedScore = localStorage.getItem("lugh-snake-score");
        this.max = savedScore ? Number.parseInt(savedScore) : 0;
        this.pos = {
          x: wWidth - 160,
          y: wHeight - 50,
        };
      }

      updateCurrent(current) {
        this.current = current;
      }

      saveMax(max) {
        localStorage.setItem("lugh-snake-score", max.toString());
      }

      show() {
        p.textFont("Arial");
        p.textAlign(p.RIGHT);
        p.fill(globalThis.grey600);
        p.noStroke();
        p.textSize(11);
        p.text("SCORE", this.pos.x + 50, this.pos.y);
        p.text("BEST", this.pos.x + 130, this.pos.y);
        p.fill(globalThis.grey800);
        p.textSize(14);
        p.text(this.current, this.pos.x + 50, this.pos.y + 20);
        p.text(this.max, this.pos.x + 130, this.pos.y + 20);
      }
    }

    class Snake {
      speed;
      direction;
      tail;
      tailLength;
      size;
      dead;
      head;
      constructor() {
        this.speed = 1;
        this.direction = "left";
        this.tail = [];
        this.tailLength = 0;
        this.size = 10;
        this.dead = false;

        this.head = p.createVector(p.floor(cols / 2), p.floor(rows / 2));
        this.head.mult(scale);

        for (let i = 0; i < this.size; i++) {
          this.tail[i] = p.createVector(this.head.x, this.head.y);
        }
        this.tailLength = this.tail.length;
      }

      update() {
        for (let i = 0; i < this.tailLength - 1; i++)
          this.tail[i] = this.tail[i + 1];

        this.move(this.head, this.direction);
        this.tail[this.tailLength - 1] = p.createVector(
          this.head.x,
          this.head.y
        );
      }

      move(pos, dir) {
        switch (dir) {
          case "up":
            pos.y = pos.y - this.speed * scale;
            break;
          case "down":
            pos.y = pos.y + this.speed * scale;
            break;
          case "left":
            pos.x = pos.x - this.speed * scale;
            break;
          case "right":
            pos.x = pos.x + this.speed * scale;
            break;
        }

        pos.x = p.constrain(pos.x, 0, wWidth - scale);
        pos.y = p.constrain(pos.y, 0, wHeight - scale);
      }

      intersects(pos) {
        if (this.intersectsHead(pos)) return true;

        for (let i = 0; i < this.tailLength - 1; i++)
          if (p.dist(this.tail[i].x, this.tail[i].y, pos.x, pos.y) < scale)
            return true;

        return false;
      }

      intersectsSelf() {
        for (let i = 0; i < this.tailLength - 1; i++)
          if (this.intersectsHead(this.tail[i])) return true;

        return false;
      }

      intersectsHead(pos) {
        return p.dist(this.head.x, this.head.y, pos.x, pos.y) < scale;
      }

      changeDirection(dir) {
        this.direction = dir;
      }

      getScore() {
        let score = (this.tailLength - this.size) * 850;
        return score > 0 ? score : 0;
      }

      grow() {
        this.tail.push(p.createVector(this.head.x, this.head.y));
        this.tail.push(p.createVector(this.head.x, this.head.y));
        this.tail.push(p.createVector(this.head.x, this.head.y));
        this.tailLength = this.tail.length;
      }

      show() {
        p.fill(globalThis.grey200);
        p.stroke(globalThis.bgColor);

        for (let i = 0; i < this.tailLength; i++)
          p.rect(this.tail[i].x, this.tail[i].y, scale, scale);
        if (snake.dead) p.fill("#a97878");
        p.rect(this.head.x, this.head.y, scale, scale);
      }
    }
  };
}
