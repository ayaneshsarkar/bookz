import React, { Fragment } from 'react';
import { host } from '../../../config/server';

const Featured = ({ books }) => {

  return (
    <Fragment>
      <section id="featured" className="featured">
        <h3 className="list__title">Featured Books</h3>
        <div className="list__box">
          { books ? books.map((book, i) => {
            return (
              <div className="list__box-item">
                <div className="list__box-item--img">
                  <img src={`${host}/${book.bookurl}`} alt={book.title} className="img" />
                </div>
                <div className="list__box-item--title">{ book.title }</div>
                <div className="list__box-item--author">{ book.author }</div>
              </div>
            )
          }): ''}
        </div>
      </section>
    </Fragment>
  );

};

export default Featured;