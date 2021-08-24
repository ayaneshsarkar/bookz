import axios from 'axios';
import { host } from '../config/server';
import history from '../config/history';

export const createCategory = category => async dispatch => {
  const res = await axios.post(`${host}/create-category`, { ...category });
  const id = res.data.id || 0;
  const newRes = await axios.post(`${host}/get-category`, { id });

  dispatch({ type: 'CREATE_CATEGORY', payload: newRes.data });
  history.push('/admin/categories');
};

export const getCategories = () => async dispatch => {
  const res = await axios.get(`${host}/get-categories`);

  dispatch({ type: 'GET_CATEGORIES', payload: res.data });
};

export const getCategory = id => async dispatch => {
  const res = await axios.get(`${host}/get-category?id=${id}`);

  dispatch({ type: 'GET_CATEGORY', payload: res.data });
}

export const editCategory = category => async dispatch => {
  await axios.put(`${host}/edit-category`, { ...category });
  const res = await axios.post(`${host}/get-category`, { id: category.id });

  dispatch({ type: 'UPDATE_CATEGORY', payload: res.data });
}

export const deleteCategory = id => async dispatch => {
  await axios.get(`${host}/delete-category/?id=${id}`);

  dispatch({ type: 'DELETE_CATEGORY', payload: id });
}