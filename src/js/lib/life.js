import FastSet from './fast-set';

export const DEAD = 0;
export const LIVE = 1;

export class Universe {
  constructor(cols, rows, liveSet, deadCellNeighborhood, deadCellsToLive) {
    this.cols = cols;
    this.rows = rows;
    this.liveSet = liveSet || new FastSet(cols * rows);
    this.deadCellNeighborhood = deadCellNeighborhood || null;
    this.deadCellsToLive = deadCellsToLive || null;
  }

  get(x, y) {
    return this.liveSet.has(this.idFor(x, y)) ? LIVE : DEAD;
  }

  enter(config, x = 0, y = 0) {
    for (let i = 0; i < config.length; i++) {
      for (let j = 0; j < config[0].length; j++) {
        const id = this.idFor(mod(j + x, this.cols), mod(i + y, this.rows));

        if (config[i][j] === LIVE) {
          this.liveSet.add(id);
        }
      }
    }

    return new Universe(this.cols, this.rows, this.liveSet);
  }

  idFor(x, y) {
    return x + y * this.cols;
  }

  idToX(id) {
    return id % this.cols;
  }

  idToY(id) {
    return id / this.cols | 0;
  }

  get population() {
    return this.liveSet.size;
  }
}

export function next(universe) {
  const cols = universe.cols;
  const rows = universe.rows;

  // Optimization: reuse deadCellNeighborhood object, but zero it out.
  let deadCellNeighborhood;
  if (universe.deadCellNeighborhood) {
    deadCellNeighborhood = universe.deadCellNeighborhood;
    const buffer = deadCellNeighborhood.buffer;
    const view = new Float64Array(buffer);
    for (let i = 0; i < view.length; i++) {
      view[i] = 0;
    }
  } else {
    deadCellNeighborhood = new Uint8Array(cols * rows);
  }

  // Optimimization: reuse deadCellsToLive object, but clear it out.
  let deadCellsToLive;
  if (universe.deadCellsToLive) {
    deadCellsToLive = universe.deadCellsToLive;
    deadCellsToLive.clear();
  } else {
    deadCellsToLive = new Set();
  }

  const nextLiveSet = new FastSet(cols * rows);

  universe.liveSet.forEach(id => {
    let liveNeighbors = 0;

    const x = universe.idToX(id);
    const y = universe.idToY(id);

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        let nx = x + dx;
        let ny = y + dy;

        if (nx < 0 || nx >= cols) {
          nx = mod(nx, cols);
        }

        if (ny < 0 || ny >= rows) {
          ny = mod(ny, rows);
        }

        if (nx === x && ny === y) continue;

        const neighborId = universe.idFor(nx, ny);

        if (universe.liveSet.has(neighborId)) {
          liveNeighbors += 1;
        } else {
          const neighborhood = (deadCellNeighborhood[neighborId] += 1);
          if (neighborhood === 3) {
            deadCellsToLive.add(neighborId);
          } else if (neighborhood === 4) {
            deadCellsToLive.delete(neighborId);
          }
        }
      }
    }

    if (liveNeighbors === 2 || liveNeighbors === 3) {
      nextLiveSet.add(id);
    }
  });

  deadCellsToLive.forEach(id => {
    nextLiveSet.add(id);
  });

  return new Universe(
    cols,
    rows,
    nextLiveSet,
    deadCellNeighborhood,
    deadCellsToLive
  );
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
