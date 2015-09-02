const Immutable = require('immutable');
const Member = require('../models/Member');
const MemberActions = require('../actions/MemberActions');

const initialState = Immutable.Map({
  items: Immutable.OrderedMap(),
  loaded: false,
});

module.exports = function TodoReducer(state = initialState, action) {
  switch (action.type) {

  case MemberActions.CREATE_SUCCESS:
    return state.update('items', v => v.set(
      action.payload.id,
      new Member(action.payload)
    ));

  case MemberActions.DESTROY_SUCCESS:
    return state.update('items', v => v.delete(action.payload.id));

  case MemberActions.FETCH_SUCCESS:
    return state
      .set('items', Immutable.OrderedMap(action.payload).map((json, id) => {
        json.id = id;
        return new Member(json);
      }))
      .set('loaded', true);

  default:
    return state;
  }
};
