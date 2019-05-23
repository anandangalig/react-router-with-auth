import streamsApi from '../api/streams';
import history from '../history';

export const signIn = userId => {
  return { type: 'SIGN_IN', payload: userId };
};

export const signOut = () => {
  return { type: 'SIGN_OUT' };
};

export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userID } = getState().signInStatus;
    const response = await streamsApi.post('/streams', { ...formValues, userID });
    dispatch({ type: 'CREATE_STREAM', payload: response.data });
    // programmatically navigate user to streams list page after manually creating own history + Router
    history.push('/');
  };
};

export const fetchStreams = () => {
  return async dispatch => {
    const response = await streamsApi.get('/streams');
    dispatch({ type: 'FETCH_STREAMS', payload: response.data });
  };
};

export const fetchStream = id => {
  return async dispatch => {
    const response = await streamsApi.get(`/streams/${id}`);
    dispatch({ type: 'FETCH_STREAM', payload: response.data });
  };
};

export const editStream = (formValues, id) => {
  return async dispatch => {
    const response = await streamsApi.put(`/streams/${id}`, formValues);
    dispatch({ type: 'EDIT_STREAM', payload: response.data });
  };
};

export const deleteStream = id => {
  return async dispatch => {
    await streamsApi.get(`/streams/${id}`);
    dispatch({ type: 'DELETE_STREAM', payload: id });
  };
};
