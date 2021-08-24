import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { capitalize, localizeInt } from '../../../helpers';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const BookTable = ({ books, deleteBookProcess }) => {

  const renderBooks = () => {
    if(books.length) {
      return books.map((book, i) => {
        return (
          <tr key={ book.id }>
            <td>{ i + 1 }</td>
            <td>{ book.title }</td>
            <td>{ book.category }</td>
            <td>{ book.author }</td>
            <td>{ book.type ? capitalize(book.type) : '' }</td>
            <td>{ localizeInt(book.price, 'INR') }</td>
            <td>{ moment(book.publish_date).format('DD/MM/YYYY') }</td>
            <td>{ moment(book.updated_at).format('DD/MM/YYYY') }</td>
            <td>
              <Link to={`/admin/edit-book/${book.id}`}>
                <svg>
                  <use xlinkHref={`${Sprite}#edit-2`}></use>
                </svg>
              </Link>
            </td>
            <td>
              <svg onClick={() => deleteBookProcess(book.id)}>
                <use xlinkHref={`${Sprite}#trash-2`}></use>
              </svg>
            </td>
          </tr>
        );
      });
    }

    return null;
  }

  return (
    <Fragment>
      <thead>
        <tr>
          <th>#</th>
          <th>Book</th>
          <th>Category</th>
          <th>Author</th>
          <th>Type</th>
          <th>Price</th>
          <th>Published</th>
          <th>Updated</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { (books.length > 0) && renderBooks() }
      </tbody>
    </Fragment>
  );
};

export default BookTable;