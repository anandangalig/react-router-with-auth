import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_STREAM':
      return _.omit(state, action.payload);
    // THIS SHOULD WORK TOO?
    // delete state[action.payload];
    // return { ...state };
    case 'FETCH_STREAMS':
      return action.payload;
    default:
      return state;
  }
};
