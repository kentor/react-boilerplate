import * as life from './life';
import * as patterns from './patterns';

const cols = 1280;
const rows = 720;

let universe = new life.Universe(cols, rows);

universe = universe.enter(patterns.acorn, 1 * cols / 8, rows / 4);
universe = universe.enter(patterns.jaydot, 3 * cols / 8, rows / 4);
universe = universe.enter(patterns.rabbits, 5 * cols / 8, rows / 4);
universe = universe.enter(patterns.multumInParvo, 7 * cols / 8, rows / 4);
universe = universe.enter(patterns.jaydot, 1 * cols / 8, 3 * rows / 4);
universe = universe.enter(patterns.multumInParvo, 3 * cols / 8, 3 * rows / 4);
universe = universe.enter(patterns.acorn, 5 * cols / 8, 3 * rows / 4);
universe = universe.enter(patterns.rabbits, 7 * cols / 8, 3 * rows / 4);

let lastSize = universe.population;
let count = 0;

for (;;) {
  universe = life.next(universe);
  count += 1;
  if (count % 60 === 0) {
    console.log(count, universe.population); // eslint-disable-line no-console
    if (universe.population === 5110 && lastSize === 5110) {
      break;
    }
    lastSize = universe.population;
  }
}
