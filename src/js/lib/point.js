export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  hashCode() {
    return 3 * this.x + 5 * this.y;
  }
}
