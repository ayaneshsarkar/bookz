import axios from 'axios';
import { host } from '../config/server';
// import { authHeader } from './header';
import { fetchWithAuth } from './header';

import {
  CREATE_BOOK,
  GET_BOOKS,
  GET_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  DELETE_FRONT_BOOK,
  GET_TYPES,
  GET_SEARCH_BOOKS,
  GET_CATEGORY_BOOKS
} from './type';

export const createBook = book => async dispatch => {
  const res = await axios.post(`${host}/create-book`, book);
  const id = parseInt(res.data.id);
  const newRes = await axios.get(`${host}/get-book?id=${id}`);

  dispatch({ type: CREATE_BOOK, payload: newRes.data });
}

export const getTypes = () => async dispatch => {
  const res = await fetch(`${host}/get-types`);
  const data = await res.json();

  dispatch({ type: GET_TYPES, payload: data });
}

export const getBooks = () => async dispatch => {
  const res = await fetch(`${host}/get-books`);
  const data = await res.json();

  dispatch({ type: GET_BOOKS, payload: data });
}

export const getBook = id => async dispatch => {
  const res = await fetch(`${host}/get-book?id=${parseInt(id)}`);
  const data = await res.json();

  dispatch({ type: GET_BOOK, payload: data });
}

export const getFullBook = id => async dispatch => {
  const res = await fetchWithAuth('get', `${host}/get-full-book?id=${parseInt(id)}`, null);
  const data = await res.json();

  dispatch({ type: GET_BOOK, payload: data });
}

export const getBookBySlug = slug => async dispatch => {
  const res = await axios.post(`${host}/get-book`, { slug });

  dispatch({ type: GET_BOOK, payload: res.data });
}

export const searchBooks = term => async dispatch => {
  const res = await axios.get(`${host}/search-books/?term=${term}`);

  dispatch({ type: GET_SEARCH_BOOKS, payload: res.data });
}

export const categoryBooks = id => async dispatch => {
  const res = await axios.get(`${host}/get-category-books/?id=${id}`);

  dispatch({ type: GET_CATEGORY_BOOKS, payload: res.data });
}

export const updateBook = book => async dispatch => {
  const res = await axios.post(`${host}/edit-book`, book);
  const id = await res.data.id;
  const newRes = await fetch(`${host}/get-book?id=${id}`);
  const data = await newRes.json();
  
  dispatch({ type: UPDATE_BOOK, payload: data });
}

export const deleteBook = id => async dispatch => {
  const res = await axios.get(`${host}/get-book?id=${id}`);
  await axios.get(`${host}/delete-book?id=${id}`);

  dispatch({ type: DELETE_BOOK, payload: id });
  dispatch({ type: DELETE_FRONT_BOOK, payload: res.data.book_code });
}