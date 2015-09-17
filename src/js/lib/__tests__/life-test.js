import expect from 'expect';
import { next, Universe, DEAD, LIVE } from '../life';

describe('Game of Life', () => {
  let u;

  it('1. Any live cell with fewer than two live neighbors dies', () => {
    u = makeUniverse([
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD],
    ]);
    expect(u.get(2, 1)).toBe(LIVE);
    u = next(u);
    expect(u.get(2, 1)).toBe(DEAD);

    u = next(makeUniverse([
      [LIVE, DEAD, DEAD],
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ]));
    expect(u.get(0, 0)).toBe(DEAD);
    expect(u.get(0, 1)).toBe(DEAD);
  });

  it('2. Any live cell with two or three live neighbors lives on', () => {
    u = next(makeUniverse([
      [LIVE, DEAD, LIVE],
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ]));
    expect(u.get(0, 0)).toBe(LIVE);

    u = next(makeUniverse([
      [DEAD, LIVE, DEAD],
      [LIVE, LIVE, LIVE],
      [DEAD, DEAD, DEAD],
    ]));
    expect(u.get(1, 1)).toBe(LIVE);
  });

  it('3. Any live cell with more than three live neighbors dies', () => {
    u = next(makeUniverse([
      [DEAD, LIVE, DEAD],
      [LIVE, LIVE, LIVE],
      [DEAD, LIVE, DEAD],
    ]));
    expect(u.get(1, 1)).toBe(DEAD);

    u = next(makeUniverse([
      [LIVE, DEAD, DEAD],
      [LIVE, LIVE, LIVE],
      [LIVE, LIVE, DEAD],
    ]));
    expect(u.get(0, 1)).toBe(DEAD);
  });

  it('4. Any dead cell with exactly three live neighbors becomes live', () => {
    u = next(makeUniverse([
      [DEAD, LIVE, DEAD],
      [LIVE, DEAD, LIVE],
      [DEAD, DEAD, DEAD],
    ]));
    expect(u.get(1, 1)).toBe(LIVE);

    u = next(makeUniverse([
      [DEAD, LIVE, DEAD],
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, LIVE],
    ]));
    expect(u.get(0, 0)).toBe(LIVE);
  });

  describe('#enter', () => {
    it('can set a portion of the universe and returns a new instance', () => {
      u = new Universe(6, 5);
      const newUniverse = u.enter([
        [LIVE, DEAD, DEAD],
        [LIVE, DEAD, DEAD],
      ], 1, 1);
      expect(newUniverse).toNotBe(u);
      expect(newUniverse.get(1, 1)).toBe(LIVE);
      expect(newUniverse.get(1, 2)).toBe(LIVE);
    });
  });
});

function makeUniverse(config) {
  const universe = new Universe(config[0].length, config.length);
  return universe.enter(config);
}
