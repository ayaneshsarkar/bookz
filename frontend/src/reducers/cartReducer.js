import _ from 'lodash';
import { 
  STORE_CART, 
  GET_CARTS, 
  DELETE_CART, 
  GET_CART_TOTAL, 
  CLEAR_CART 
} from '../actions/type';

export const cartReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_CARTS:
      return { ...state, ..._.mapKeys(action.payload, 'cartitemid')};
    case STORE_CART:
      return { ...state, [action.payload.cartitemid]: action.payload };
    case DELETE_CART:
      return _.omit(state, action.payload);
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}

export const cartTotalReducer = (state = { total: null }, action) => {
  switch(action.type) {
    case GET_CART_TOTAL:
      return { ...state, total: action.payload };
    case CLEAR_CART:
      return { ...state, total: null };
    default:
      return state;
  }
}