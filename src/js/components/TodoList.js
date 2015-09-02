const React = require('react');
const Todo = require('./Todo');

const TodoList = React.createClass({
  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.toSeq().map(todo => (
          <Todo
            key={todo.get('id')}
            onComplete={this.props.onComplete}
            onDelete={this.props.onDelete}
            todo={todo}
          />
        )).toArray()}
      </ul>
    );
  },
});

module.exports = TodoList;
