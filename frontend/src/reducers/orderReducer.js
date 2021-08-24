import _ from 'lodash';
import { GET_ORDERS, GET_ORDER, GET_ORDER_BOOKS } from '../actions/type';

export const orderReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_ORDERS:
      return { ...state, ..._.mapKeys(action.payload, 'orderitemid') };
    case GET_ORDER:
      return { ...state, [action.payload.orderitemid]: action.payload };
    default:
      return state;
  }
}

export const orderBooksReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_ORDER_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}