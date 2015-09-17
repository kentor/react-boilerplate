import BitArray from 'minimal-bit-array';

export default class FastSet {
  constructor(max) {
    this.array = [];
    this.bitArray = new BitArray(max);
    this.max = max;
  }

  add(n) {
    if (n < 0 || n >= this.max) return;
    this.array.push(n);
    this.bitArray.set(n, true);
  }

  forEach(fn) {
    this.array.forEach(fn);
  }

  has(n) {
    return this.bitArray.get(n);
  }

  get size() {
    return this.array.length;
  }
}
