import * as life from '../lib/life';
import * as patterns from '../lib/patterns';
import ControlCenter from './ControlCenter';
import LifeCanvas from './LifeCanvas';
import React from 'react/addons';

const Index = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  getInitialState() {
    const cols = 640;
    const rows = 360;

    let universe = new life.Universe(cols, rows);

    universe = universe.enter(patterns.acorn, 1 * cols / 8, rows / 4);
    universe = universe.enter(patterns.jaydot, 3 * cols / 8, rows / 4);
    universe = universe.enter(patterns.rabbits, 5 * cols / 8, rows / 4);
    universe = universe.enter(patterns.multumInParvo, 7 * cols / 8, rows / 4);
    universe = universe.enter(patterns.jaydot, 1 * cols / 8, 3 * rows / 4);
    universe = universe.enter(patterns.multumInParvo, 3 * cols / 8, 3 * rows / 4);
    universe = universe.enter(patterns.acorn, 5 * cols / 8, 3 * rows / 4);
    universe = universe.enter(patterns.rabbits, 7 * cols / 8, 3 * rows / 4);

    return {
      color: '',
      universe,
    };
  },

  componentDidMount() {
    // this.play();
  },

  handleButton(cb) {
    let { universe } = this.state;
    const cols = universe.cols;
    const rows = universe.rows;
    universe = new life.Universe(cols, rows);
    const x = Math.floor(Math.random() * cols);
    const y = Math.floor(Math.random() * rows);
    const p = [
      patterns.acorn,
      patterns.jaydot,
      patterns.multumInParvo,
      patterns.rabbits,
    ];
    universe = universe.enter(p[Math.floor(Math.random() * p.length)], x, y);
    this.setState({ universe }, cb);
  },

  iterate() {
    if (!this.__play) return;
    this.setState({ universe: life.next(this.state.universe) }, () => {
      requestAnimationFrame(this.iterate);
    });
  },

  next() {
    this.setState({ universe: life.next(this.state.universe) });
  },

  play() {
    if (this.__play) return;
    this.__play = true;
    this.iterate();
  },

  stop() {
    this.__play = false;
  },

  updateColor(color) {
    this.setState({ color });
  },

  render() {
    const { color, universe } = this.state;

    return (
      <main>
        <LifeCanvas
          color={color}
          universe={universe}
        />

        <div className="ControlCenter">
          <button onClick={this.handleButton}>Click Me!</button>
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          Population: {universe.liveSet.size}
          <ControlCenter
            requestColorChange={this.updateColor}
          />
        </div>
      </main>
    );
  },
});

export default Index;
