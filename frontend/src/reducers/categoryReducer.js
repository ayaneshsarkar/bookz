import _ from 'lodash';

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'GET_CATEGORY':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_CATEGORY':
      return { ...state, [action.payload.id]: action.payload };
    case 'UPDATE CATEGORY':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_CATEGORY':
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default categoryReducer;