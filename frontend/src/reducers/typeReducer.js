import _ from 'lodash';
import { GET_TYPES, EMPTY_TYPES } from '../actions/type';

const typeReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_TYPES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case EMPTY_TYPES:
      return {};
    default:
      return state;
  }
}

export default typeReducer;