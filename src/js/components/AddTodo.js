const React = require('react/addons');

const AddTodo = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  handleClick() {
    const node = React.findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAdd(text);
    node.value = '';
  },

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  },
});

module.exports = AddTodo;
