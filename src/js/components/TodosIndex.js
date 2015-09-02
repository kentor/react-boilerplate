const AddTodo = require('../components/AddTodo');
const React = require('react');
const TodoActions = require('../actions/TodoActions');
const TodoList = require('../components/TodoList');
const { connect } = require('react-redux');

const TodosIndex = React.createClass({
  componentDidMount() {
    this.props.dispatch(TodoActions.fetchIfNeeded());
  },

  addTodo(text) {
    this.props.dispatch(TodoActions.create(text));
  },

  completeTodo(id) {
    this.props.dispatch(TodoActions.complete(id));
  },

  deleteTodo(id) {
    this.props.dispatch(TodoActions.destroy(id));
  },

  render() {
    const { todos, loading } = this.props;

    if (loading) {
      return <main>LOADING</main>;
    }

    return (
      <main>
        <AddTodo onAdd={this.addTodo} />
        <TodoList
          onComplete={this.completeTodo}
          onDelete={this.deleteTodo}
          todos={todos}
        />
      </main>
    );
  },
});

function select(state) {
  return {
    loading: !state.getIn(['todos', 'loaded']),
    todos: state.getIn(['todos', 'items']),
  };
}

module.exports = connect(select)(TodosIndex);
