const React = require('react/addons');

const Todo = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  completeTodo() {
    this.props.onComplete(this.props.todo.get('id'));
  },

  deleteTodo() {
    this.props.onDelete(this.props.todo.get('id'));
  },

  render() {
    const { todo } = this.props;

    return (
      <li
        style={{
          cursor: 'pointer',
          textDecoration: todo.get('completed') ? 'line-through' : 'none',
        }}
      >
        <a onClick={this.completeTodo}>{todo.get('text')}</a>
        {' '}
        <a href="#" onClick={this.deleteTodo}>x</a>
      </li>
    );
  },
});

module.exports = Todo;
