import axios from 'axios';
import Cookies from 'universal-cookie';
import { host } from '../config/server';
import { fetchWithAuth } from './header';
import { CREATE_USER, LOGGED_IN, VERIFY_USER, LOGGED_OUT, UPDATE_USER } from './type';

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
}

export const updateUser = user => async dispatch => {
  const res = await fetchWithAuth('put', `${host}/edit-user`, user);
  const data = await res.json();

  if(data.status) {
    dispatch({ type: UPDATE_USER, payload: user });
  }
}

export const login = user => async dispatch => {
  const res = await axios.post(`${host}/login`, user);
  
  if(res.data.status) {
    localStorage.setItem('refreshToken', res.data.refresh_token);
    cookies.set('accessToken', res.data.access_token, { path: '/' });

    dispatch({ type: LOGGED_IN, payload: res.data });
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
    }
  }
}