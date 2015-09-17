import Immutable from 'immutable';
import Point from '../lib/point';
import React from 'react/addons';

const Editor = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  getInitialState() {
    return {
      height: 20,
      selected: Immutable.Set(),
      width: 20,
    };
  },

  logArray() {
    const { height, selected, width } = this.state;

    let string = '[\n';

    for (let y = 0; y < height; y++) {
      string += '  [';
      string += Immutable.Range(0, width).map(x =>
        selected.has(new Point(x, y)) ? 'O' : '_'
      ).join(', ');
      string += '],\n';
    }
    string += '];\n';

    console.log(string); // eslint-disable-line no-console
  },

  toggle(x, y) {
    const point = new Point(x, y);
    const { selected } = this.state;

    if (selected.has(point)) {
      this.setState({ selected: selected.delete(point) });
    } else {
      this.setState({ selected: selected.add(point) });
    }
  },

  render() {
    const { height, selected, width } = this.state;

    const rowStyle = {
      display: 'flex',
    };

    const cellStyle = {
      border: '1px solid #777',
      height: 20,
      width: 20,
    };

    const selectedCellStyle = Object.assign({ background: '#000' }, cellStyle);

    return (
      <div>
        {Immutable.Range(0, height).map(j =>
          <div style={rowStyle} key={j}>
            {Immutable.Range(0, width).map(i => {
              const point = new Point(i, j);
              return (
                <div
                  key={i}
                  onClick={this.toggle.bind(this, i, j)}
                  style={selected.has(point) ? selectedCellStyle : cellStyle}
                />
              );
            }).toArray()}
          </div>
        ).toArray()}

        <div>
          <button onClick={this.logArray}>Log</button>
          <input
            max="20"
            min="1"
            onChange={e => {
              this.setState({ width: parseInt(e.target.value) });
            }}
            step="1"
            type="number"
            value={`${width}`}
          />
          <input
            max="20"
            min="1"
            onChange={e => {
              this.setState({ height: parseInt(e.target.value) });
            }}
            step="1"
            type="number"
            value={`${height}`}
          />
        </div>
      </div>
    );
  },
});

export default Editor;
