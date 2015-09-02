import API from '../api';

export const COMPLETE_SUCCESS = Symbol();
export const CREATE_SUCCESS = Symbol();
export const DESTROY_SUCCESS = Symbol();
export const FETCH_SUCCESS = Symbol();

export function create(text) {
  return dispatch => (
    API.createTodo(text).then(response =>
      dispatch({
        type: CREATE_SUCCESS,
        payload: { id: response.data.name, text },
      })
    )
  );
}

export function complete(id) {
  return dispatch => (
    API.updateTodo(id, { completed: true }).then(response =>
      dispatch({ type: COMPLETE_SUCCESS, payload: { id } })
    )
  );
}

export function destroy(id) {
  return dispatch => (
    API.deleteTodo(id).then(response =>
      dispatch({ type: DESTROY_SUCCESS, payload: { id } })
    )
  );
}

export function fetchIfNeeded() {
  return (dispatch, getState) => {
    if (getState().getIn(['todos', 'loaded'])) {
      return Promise.resolve();
    }

    return API.getTodos().then(response =>
      dispatch({ type: FETCH_SUCCESS, payload: response.data })
    );
  };
}
