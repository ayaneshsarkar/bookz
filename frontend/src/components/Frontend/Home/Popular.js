import React, { Fragment } from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { host } from '../../../config/server';

const Popular = ({ books }) => {

  return (
    <Fragment>
      <section id="popular" className="popular">
        <h3 className="list__title">Popular Now</h3>
        <div className="list__box">
          { books ? books.map((book, i) => {
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
          }) : '' }
        </div>
      </section>
    </Fragment>
  );

};

export default Popular;