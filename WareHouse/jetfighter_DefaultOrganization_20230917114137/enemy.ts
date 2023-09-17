
export class Enemy {
  private position: { x: number; y: number };
  private health: number;
  constructor() {
    this.position = { x: 0, y: 0 };
    this.health = 100;
  }
  public move(): void {
    // Move the enemy
    // Implement your own logic here
  }
  public takeDamage(damage: number): void {
    // Reduce enemy health by the given damage
    this.health -= damage;
  }
  public isDestroyed(): boolean {
    // Check if the enemy is destroyed
    return this.health <= 0;
  }
}