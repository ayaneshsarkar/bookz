import axios from 'axios';
import { host } from '../config/server';
import { authHeader, fetchWithAuth } from './header';
import { STORE_CART, GET_CARTS, DELETE_CART, GET_CART_TOTAL, CLEAR_CART } from './type';

export const storeCart = cart => async dispatch => {
  const res = await axios.post(`${host}/cart`, cart, authHeader);

  if(res.data.status) {
    const cart = await fetchWithAuth('get', 
      `${host}/single-cart?cartitemid=${parseInt(res.data.cartitemid)}`
    );
    const data = await cart.json();

    getCartTotal();
    dispatch({ type: STORE_CART, payload: data.carts });
  }
}

export const getCarts = () => async dispatch => {
  const res = await fetchWithAuth('get', `${host}/carts`);
  const data = await res.json();

  if(data.status) {
    dispatch({ type: GET_CARTS, payload: data.carts });
  }
}

export const getCartTotal = () => async dispatch => {
  const res = await fetchWithAuth('get', `${host}/cart-total`);
  const data = await res.json();

  if(data.status) {
    dispatch({ type: GET_CART_TOTAL, payload: data.total });
  }
}

export const deleteCart = bookId => async dispatch => {
  const res = await fetchWithAuth('delete', `${host}/delete-cart`, { book_id: bookId });
  const data = await res.json();

  const totalRes = await fetchWithAuth('get', `${host}/cart-total`);
  const totalData = await totalRes.json();

  if(data) {
    dispatch({ type: DELETE_CART, payload: data.cartitemid });
    dispatch({ type: GET_CART_TOTAL, payload: totalData.total });
  }
}

export const clearCart = () => async dispatch => {
  const res = await fetchWithAuth('delete', `${host}/clear-cart`);
  const data = await res.json();

  dispatch({ type: CLEAR_CART, payload: data });
}