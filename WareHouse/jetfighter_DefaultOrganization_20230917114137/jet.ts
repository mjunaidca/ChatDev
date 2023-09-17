
export class Jet {
  private color: string;
  private shape: string;
  private position: { x: number; y: number };
  private score: number;
  constructor() {
    this.color = "";
    this.shape = "";
    this.position = { x: 0, y: 0 };
    this.score = 0;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public setShape(shape: string): void {
    this.shape = shape;
  }
  public moveUp(): void {
    // Move the jet up
    this.position.y -= 1;
  }
  public moveDown(): void {
    // Move the jet down
    this.position.y += 1;
  }
  public moveLeft(): void {
    // Move the jet left
    this.position.x -= 1;
  }
  public moveRight(): void {
    // Move the jet right
    this.position.x += 1;
  }
  public shoot(): void {
    // Create a bullet and shoot it
    // Implement your own logic here
  }
}