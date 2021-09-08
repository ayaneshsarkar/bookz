import _ from 'lodash';
import { GET_POPULAR_BOOKS, GET_FEATURED_BOOKS, GET_PREMIUM_BOOKS } from "../actions/type";

export const popularReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_POPULAR_BOOKS:
      return { ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}

export const featuredReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_FEATURED_BOOKS:
      return { ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}

export const premiumReducer  = (state = {}, action) => {
  switch(action.type) {
    case GET_PREMIUM_BOOKS:
      return { ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
}