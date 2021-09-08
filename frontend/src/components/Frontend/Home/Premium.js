import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { host } from '../../../config/server';

const Premium = ({ books }) => {

  return (
    <Fragment>
      <section id="premium" className="premium">
        <h1 className="primaryHeading">Premium Books</h1>
        <div className="list__box">
          {books ? books.map((book, i) => {
            return (
              <Link className="list__box-item" key={i}
              to={`/book/${slugify(book.title)}/${book.book_code}`}>
                <div className="list__box-item--img">
                  <img src={`${host}/${book.bookurl}`} alt={book.title} className="img" />
                </div>
                <div className="list__box-item--title">{ book.title }</div>
                <div className="list__box-item--author">{ book.author }</div>
              </Link>
            )
          })
          : ''
          }
        </div>
      </section>
    </Fragment>
  );

};

export default Premium;