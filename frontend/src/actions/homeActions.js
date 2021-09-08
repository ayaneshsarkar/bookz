import axios from 'axios';
import { host } from '../config/server';
import { GET_POPULAR_BOOKS, GET_FEATURED_BOOKS, GET_PREMIUM_BOOKS } from './type';

export const getPopularBooks = () => async dispatch => {
  const res = await axios.get(`${host}/get-popular-books`);
  
  dispatch({ type: GET_POPULAR_BOOKS, payload: res.data });
}

export const getFeaturedBooks = () => async dispatch => {
  const res = await axios.get(`${host}/get-featured-books`);
  
  dispatch({ type: GET_FEATURED_BOOKS, payload: res.data });
}

export const getPremiumBooks = () => async dispatch => {
  const res = await axios.get(`${host}/get-premium-books`);
  
  dispatch({ type: GET_PREMIUM_BOOKS, payload: res.data });
}