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

          {/* Details */}
          <td className="d-none table-sm">
            <div className="limited m-1">{ book.title }</div>
            <div className="limited m-1">{ book.author }</div>
            <div className="limited m-1">{ book.category } ({ capitalize(book.type) })</div>
            <div className="limited m-1 info">Qty: <span>{ book.quantity }</span></div>
            <div className="limited m-1">{ localizeInt(book.price, 'INR') }</div>
          </td>

          <td className="limited lgmd">{ book.title }</td>
          <td className="limited lgmd">{ book.author }</td>
          <td className="lgmd">{ book.category }</td>
          <td className="lgmd">{ capitalize(book.type) }</td>
          <td className="lgmd">{ book.quantity }</td>
          <td className="lgmd">{ localizeInt(book.price, 'INR') }</td>
        </tr>
      );
    })
  }

  return (
    <>
      <thead>
        <tr>
          <th>Image</th>
          <th className="d-none table-sm">Details</th>
          <th className="lgmd">Title</th>
          <th className="lgmd">Author</th>
          <th className="lgmd">Category</th>
          <th className="lgmd">Type</th>
          <th className="lgmd">Qty.</th>
          <th className="lgmd">Price</th>
        </tr>
      </thead>

      <tbody>
        { books ? renderBooks(books) : null }
      </tbody>
    </>
  );
};

export default OrderBooks;