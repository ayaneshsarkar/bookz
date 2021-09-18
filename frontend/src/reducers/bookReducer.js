import _ from 'lodash';
import {  
  CREATE_BOOK,
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  EMPTY_BOOKS
} from '../actions/type';

const bookReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};
    case GET_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BOOK:
      return _.omit(state, action.payload);
    case EMPTY_BOOKS:
      return {};
    default:
      return state;
  }
}

export default bookReducer;