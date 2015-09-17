import React from 'react/addons';

export const SIZE = 2;

const LifeCanvas = React.createClass({
  componentDidMount(nextProps = this.props) {
    const canvas = React.findDOMNode(this);
    const ctx = canvas.getContext('2d');

    const { universe } = nextProps;

    // ctx.clearRect(0, 0, universe.cols * SIZE, universe.rows * SIZE);
    // ctx.fillStyle = 'rgba(7,54,66,0.1)'; // base 02
    // ctx.fillStyle = 'rgba(88,110,117,0.1)'; // base 01
    // ctx.fillStyle = 'rgba(38,139,210,0.1)'; // Solarized blue
    // ctx.fillStyle = 'rgba(255,255,255,1)';
    // ctx.fillStyle = `hsla(${x},100%,87.5%,1)`;
    ctx.fillStyle = '#fff';

    // ctx.fillStyle = 'rgba(255,255,255,1)';
    // ctx.fillStyle = 'rgba(25,25,25,0.5)';
    // ctx.fillStyle = 'rgba(50,50,50,0.5)';
    // ctx.fillStyle = 'rgba(75,75,75,0.5)';
    // ctx.fillStyle = 'rgba(100,100,100,0.5)';
    // ctx.fillStyle = 'rgba(125,125,125,0.1)';
    // ctx.fillStyle = 'rgba(150,150,150,0.1)';
    // ctx.fillStyle = 'rgba(175,175,175,0.1)';
    // ctx.fillStyle = 'rgba(200,200,200,0.1)';

    universe.liveSet.forEach(id => {
      const x = universe.idToX(id);
      const y = universe.idToY(id);
      ctx.fillRect(SIZE * x, SIZE * y, SIZE, SIZE);
    });
  },

  componentWillReceiveProps(nextProps) {
    this.componentDidMount(nextProps);
  },

  shouldComponentUpdate() {
    return false;
  },

  render() {
    const { universe } = this.props;

    return (
      <canvas
        height={SIZE * universe.rows}
        style={{ backgroundColor: '#000' }}
        width={SIZE * universe.cols}
      />
    );
  },
});

export default LifeCanvas;
