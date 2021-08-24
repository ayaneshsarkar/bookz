import React from 'react';
import { host } from '../../../config/server';

const BookMedia = ({ book }) => {
  return (
    <div className="bookmedia">
      <div className="bookmedia__box">
        <div className="bookmedia__media">
          {book.bookurl && <img 
            src={`${host}/${book.bookurl}`} 
            alt={book.title} 
            className="bookmedia__media--img" 
          />}
        </div>
      </div>
    </div>
  );
}

export default BookMedia;