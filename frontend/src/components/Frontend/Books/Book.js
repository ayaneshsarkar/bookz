import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { host } from '../../../config/server';
import { capitalize, 
  localizeInt, 
  removeDecimals, 
  manipulateFirstLetter 
} from '../../../helpers';

const Book = ({ book }) => {
  return (
    <div className="list__box-item hover">
      <Link 
        to={{ 
          pathname:`/book/${slugify(book.title)}/${book.book_code}`, 
          state: { id: book.id }
        }}

        className="list__box-item--img product"
      >
        {book.bookurl &&
          <img src={`${host}/${book.bookurl}`} alt={ book.title } className="bookimg" />
        }
      </Link>
      <div className="list__book-item--details" style={{ paddingLeft: '0.5rem' }}>
        <div className="list__box-item--title frontBooks">{ book.title }</div>
        <div className="list__box-item--author">
          { capitalize(book.category) }, { book.author }
        </div>
        <div className="list__box-item--price">
          { manipulateFirstLetter(removeDecimals(localizeInt(book.price, 'INR')), ' ') }
        </div>
      </div>
    </div>
  );
}

export default Book;