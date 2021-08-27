import React from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { host } from '../../../config/server';
import { capitalize, localizeInt } from '../../../helpers';

const OrderBooks = ({ books }) => {
  const renderBooks = (books) => {
    return books.map((book, i) => {
      return (
        <tr key={i}>
          {/* <td className="imp">
            <Link to={`/book/${slugify(book.title)}/${book.book_code}`}>{ i + 1 }</Link>
          </td> */}
          <td className="tableMedia" style={{ minWidth: '10rem' }}>
            <Link to={`/book/${slugify(book.title)}/${book.book_code}`} 
              className="tableImage"
              target="_blank"
            >
              <img src={`${host}/${book.bookurl}`} alt={book.title} />
            </Link>
          </td>
          <td className="limited">{ book.title }</td>
          <td className="limited">{ book.author }</td>
          <td>{ book.category }</td>
          <td>{ capitalize(book.type) }</td>
          <td>{ book.quantity }</td>
          <td>{ localizeInt(book.price, 'INR') }</td>
        </tr>
      );
    })
  }

  return (
    <>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Type</th>
          <th>Qty.</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        { books ? renderBooks(books) : null }
      </tbody>
    </>
  );
};

export default OrderBooks;