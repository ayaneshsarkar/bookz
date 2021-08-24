import _ from 'lodash';
import {  
  CREATE_BOOK,
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  DELETE_FRONT_BOOK
} from '../actions/type';

const frontBookReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, 'book_code') };
    case GET_BOOK:
      return { ...state, [action.payload.book_code]: action.payload };
    case CREATE_BOOK:
      return { ...state, [action.payload.book_code]: action.payload };
    case UPDATE_BOOK:
      return { ...state, [action.payload.book_code]: action.payload };
    case DELETE_FRONT_BOOK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default frontBookReducer;