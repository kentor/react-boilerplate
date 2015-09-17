import React from 'react/addons';

const ControlCenter = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin,
    React.addons.PureRenderMixin,
  ],

  getInitialState() {
    return {
      newColor: '',
    };
  },

  handleColorButton() {
    this.props.requestColorChange(this.state.newColor);
  },

  render() {
    return (
      <div className="ControlCenter">
        <div>
          <input
            valueLink={this.linkState('newColor')}
          />
          <div
            style={{
              backgroundColor: this.state.newColor,
              border: '1px solid black',
              display: 'inline-block',
              height: 20,
              width: 20,
            }}
          />
          <button onClick={this.handleColorButton}>Update Color</button>
        </div>
      </div>
    );
  },
});

export default ControlCenter;
