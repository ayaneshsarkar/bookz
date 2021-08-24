import React from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { host } from '../../config/server';

const Book = ({ book }) => {
  return (
    <div className="book__content">
      <Link to={`/book/${slugify(book.title)}/${book.book_code}`}>
        <div className="books__content--box">
          {book.bookurl ? <img 
            src={`${host}/orders/${book.user_id}/${book.order_id}/${book.bookurl}`} 
            alt={book.title} 
            className="books__content--box-img"
          /> : ''}
        </div>
      </Link>
      
      <div className="books__content--title">{ book.title }</div>
    </div>
  );
}


export default Book;