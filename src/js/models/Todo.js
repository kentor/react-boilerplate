const Immutable = require('immutable');

const Todo = Immutable.Record({
  completed: false,
  id: '',
  text: '',
});

module.exports = Todo;
