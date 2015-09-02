const Immutable = require('immutable');
const Todo = require('../models/Todo');
const TodoActions = require('../actions/TodoActions');

const initialState = Immutable.Map({
  items: Immutable.OrderedMap(),
  loaded: false,
});

module.exports = function TodoReducer(state = initialState, action) {
  switch (action.type) {

  case TodoActions.CREATE_SUCCESS:
    return state.update('items', v => v.set(
      action.payload.id,
      new Todo(action.payload)
    ));

  case TodoActions.COMPLETE_SUCCESS:
    return state.setIn(['items', action.payload.id, 'completed'], true);

  case TodoActions.DESTROY_SUCCESS:
    return state.update('items', v => v.delete(action.payload.id));

  case TodoActions.FETCH_SUCCESS:
    return state
      .set('items', Immutable.OrderedMap(action.payload).map((json, id) => {
        json.id = id;
        return new Todo(json);
      }))
      .set('loaded', true);

  default:
    return state;
  }
};
