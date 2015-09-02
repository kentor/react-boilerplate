const Immutable = require('immutable');
const MemberReducer = require('./reducers/MemberReducer');
const TodoReducer = require('./reducers/TodoReducer');

module.exports = function(state = Immutable.Map(), action) {
  return Immutable.Map({
    members: MemberReducer(state.get('members'), action),
    todos: TodoReducer(state.get('todos'), action),
  });
};
