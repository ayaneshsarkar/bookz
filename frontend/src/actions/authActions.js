import axios from 'axios';
import Cookies from 'universal-cookie';
import { host } from '../config/server';
import { fetchWithAuth } from './header';
import history from '../config/history';
import { 
  CREATE_USER, 
  LOGGED_IN, 
  VERIFY_USER, 
  LOGGED_OUT, 
  UPDATE_USER,
  EMPTY_BOOKS,
  EMPTY_ORDERS,
  EMPTY_ORDER_BOOKS,
  CLEAR_CART,
  EMPTY_CATEGORIES,
  EMPTY_TYPES,
} from './type';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

export const verifyUser = () => async dispatch => {
  const res = await axios.post(`${host}/verify-user`, {}, {
    headers: {
      'Authorization': `Bearer ${accessToken || null} ${refreshToken || null}`
    }
  });

  dispatch({ type: VERIFY_USER, payload: res.data });
}

export const createUser = user => async dispatch => {
  const res = await axios.post(`${host}/register-user`, user);
  const status = res.data.status;

  if(status) {
    dispatch({ type: CREATE_USER, payload: status });
  }

  return res.data;
}

export const updateUser = (user, id) => async dispatch => {
  const userData = {};

  user.forEach(function(value, key){
    userData[key] = value;
  });

  const res = await fetchWithAuth('put', `${host}/edit-user`, userData);
  const data = await res.json();
  const updatedUser = await axios.get(`${host}/get-user/?id=${id}`);

  if(data.status) {
    dispatch({ type: UPDATE_USER, payload: updatedUser.data });
  }
}

export const changePassword = async (userData) => {
  const res = await fetchWithAuth('put', `${host}/change-password`, userData);
  const data = await res.json();

  console.log(data);
  return data;
}

export const login = user => async dispatch => {
  const res = await axios.post(`${host}/login`, user);
  
  if(res.data.status) {
    localStorage.setItem('refreshToken', res.data.refresh_token);
    cookies.set('accessToken', res.data.access_token, { path: '/' });

    dispatch({ type: LOGGED_IN, payload: res.data });
  } else {
    throw new Error('Email or Password is incorrect!');
  }
}

export const logout = () => async (dispatch, getState) => {
  if(getState().auth.loggedIn) {
    const res = await axios.delete(`${host}/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${accessToken} ${refreshToken}`
      }
    });

    if(res.status) {
      cookies.remove('accessToken');
      localStorage.removeItem('refreshToken');

      dispatch({ type: LOGGED_OUT, payload: res.data });
      dispatch({ type: EMPTY_BOOKS, payload: null });
      dispatch({ type: EMPTY_ORDERS, payload: null });
      dispatch({ type: EMPTY_ORDER_BOOKS, payload: null });
      dispatch({ type: CLEAR_CART, payload: null });
      dispatch({ type: EMPTY_CATEGORIES, payload: null });
      dispatch({ type: EMPTY_TYPES, payload: null });
      
      history.push('/');
    }
  }
}