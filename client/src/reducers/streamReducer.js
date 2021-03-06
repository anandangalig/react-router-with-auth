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
    // alternative way to delete a property from an object and spread it over a new one:
    // delete state[action.payload];
    // return { ...state };
    case 'FETCH_STREAMS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
