import { host } from '../config/server';
import { fetchWithAuth } from './header';
import { 
  GET_ORDERS, 
  GET_SINGLE_ORDER, 
  CLEAR_CART, 
  GET_ORDER_BOOKS,
  GET_SINGLE_ORDER_BOOKS
} from './type';

export const createOrder = order => async dispatch => {
  // Create Order
  const res = await fetchWithAuth('post', `${host}/create-order`, order);
  const data = await res.json();
  
  if(data.status) {
    // Get All Orders
    const orders = await fetchWithAuth('get', `${host}/get-orders`);
    const orderData = await orders.json();

    // Dispatch All Orders
    dispatch({ type: GET_ORDERS, payload: orderData.orders });
    dispatch({ type: CLEAR_CART, payload: {} });
  }
}

export const getOrders = () => async dispatch => {
  const res = await fetchWithAuth('get', `${host}/get-orders`);
  const data = await res.json();

  dispatch({ type: GET_ORDERS, payload: data.orders });
}

export const getOrder = orderId => async dispatch => {
  const res = await fetchWithAuth('post', `${host}/get-order`, { id: orderId });
  const data = await res.json();

  dispatch({ type: GET_SINGLE_ORDER, payload: data.order });
  dispatch({ type: GET_SINGLE_ORDER_BOOKS, payload: data.order });
}

export const getOrderBooks = () => async dispatch => {
  const res = await fetchWithAuth('get', `${host}/get-order-books`);
  const data = await res.json();

  dispatch({ type: GET_ORDER_BOOKS, payload: data.books });
}