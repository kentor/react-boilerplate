import React from 'react';

const Root = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  componentDidMount() {
    const frame = document.getElementById('frame');
    const frameWidth = frame.offsetWidth;
    const frameHeight = frame.offsetHeight;
    const resizer = () => {
      const scaleByX = window.innerWidth / frameWidth;
      const scaleByY = window.innerHeight / frameHeight;
      frame.style.transform = `scale(${Math.min(scaleByX, scaleByY)})`;
    };
    window.addEventListener('resize', resizer);
    resizer();

    window.addEventListener('keydown', e => {
      if (e.keyCode === 37 || e.keyCode === 39) {
        const page = parseInt(this.props.location.pathname.slice(1)) || 1;
        const goTo = e.keyCode === 37 ? page - 1 : page + 1;
        this.context.router.push(`/${goTo}`);
      }
    });
  },

  render() {
    return (
      <div id="frame">
        {this.props.children}
      </div>
    );
  },
});

export default Root;
