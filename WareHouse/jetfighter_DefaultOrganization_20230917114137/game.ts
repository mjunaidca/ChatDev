
import { Jet } from "./jet";
import { Enemy } from "./enemy";
import readlineSync from 'readline-sync';
export class Game {
  private jet: Jet;
  private enemies: Enemy[];
  private score: number;
  constructor() {
    this.jet = new Jet();
    this.enemies = [];
    this.score = 0;
  }
  public start(): void {
    // Initialize game state
    this.jet.setColor("blue");
    this.jet.setShape("triangle");
    // Start game loop
    setInterval(() => {
      this.update();
    }, 1000 / 60); // 60 FPS
  }
  private update(): void {
    // Handle user input
    if (this.isKeyPressed("ArrowUp")) {
      this.jet.moveUp();
    } else if (this.isKeyPressed("ArrowDown")) {
      this.jet.moveDown();
    } else if (this.isKeyPressed("ArrowLeft")) {
      this.jet.moveLeft();
    } else if (this.isKeyPressed("ArrowRight")) {
      this.jet.moveRight();
    }
    // Shoot enemies
    if (this.isKeyPressed("Space")) {
      this.jet.shoot();
    }
    // Check for collisions between jet and enemies
    for (const enemy of this.enemies) {
      if (this.checkCollision(this.jet, enemy)) {
        enemy.takeDamage(10);
        if (enemy.isDestroyed()) {
          this.score += 100;
          this.removeEnemy(enemy);
        }
      }
    }
    // Update game state
    // Move enemies
    for (const enemy of this.enemies) {
      enemy.move();
    }
    // Remove destroyed enemies
    this.enemies = this.enemies.filter((enemy) => !enemy.isDestroyed());
    // Render game state
    this.render();
  }
  private isKeyPressed(key: string): boolean {
    // Check if the specified key is currently pressed
    const keyState = readlineSync.keyIn(key, { hideEchoBack: true, mask: '' });
    return keyState === 'y';
  }
  private checkCollision(jet: Jet, enemy: Enemy): boolean {
    // Check if the jet and enemy collide
    // Implement your own collision detection logic here
    return false;
  }
  private removeEnemy(enemy: Enemy): void {
    // Remove the specified enemy from the enemies array
    const index = this.enemies.indexOf(enemy);
    if (index !== -1) {
      this.enemies.splice(index, 1);
    }
  }
  private render(): void {
    // Print jet, enemies, and score to the console
    console.log("Jet:", this.jet);
    console.log("Enemies:", this.enemies);
    console.log("Score:", this.score);
  }
}