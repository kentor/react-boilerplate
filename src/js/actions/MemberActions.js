import API from '../api';

export const CREATE_SUCCESS = Symbol();
export const DESTROY_SUCCESS = Symbol();
export const FETCH_SUCCESS = Symbol();

export function create(data) {
  return dispatch => (
    API.createMember(data).then(response =>
      dispatch({
        type: CREATE_SUCCESS,
        payload: Object.assign({ id: response.data.name }, data),
      })
    )
  );
}

export function destroy(id) {
  return dispatch => (
    API.deleteMember(id).then(response =>
      dispatch({ type: DESTROY_SUCCESS, payload: { id } })
    )
  );
}

export function fetchIfNeeded() {
  return (dispatch, getState) => {
    if (getState().getIn(['members', 'loaded'])) {
      return Promise.resolve();
    }

    return API.getMembers().then(response =>
      dispatch({ type: FETCH_SUCCESS, payload: response.data })
    );
  };
}
