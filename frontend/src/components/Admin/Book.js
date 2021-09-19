import React from 'react';
// import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { host } from '../../config/server';

const Book = ({ book, user }) => {
  return (
    <div className="book__content">
      <a href={`${host}/orders/${user.id}/${book.order_id}/${book.bookfile}`}
        target="_blank" rel="noreferrer"
      >
        <div className="books__content--box">
          {book.bookurl ? <img 
            src={`${host}/orders/${book.user_id}/${book.order_id}/${book.bookurl}`} 
            alt={book.title} 
            className="books__content--box-img"
          /> : ''}
        </div>
      </a>
      
      <div className="books__content--title">{ book.title }</div>
    </div>
  );
}


export default Book;