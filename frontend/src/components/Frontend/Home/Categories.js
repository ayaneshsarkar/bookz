import React, { Fragment } from 'react';
import history from '../../../config/history';

const Categories = ({ categories }) => {
  return (
    <Fragment>
      <section id="category" className="category">
        { categories ? categories.map((category, i) => {
          return (
            <div className="category__box" key={i} style={{ cursor: 'pointer' }}
            onClick={() => history.push(`/category/${category.id}/${category.name}`)}>
              <h2>{ category.name }</h2>
            </div>
          )
        }) : '' }
      </section>
    </Fragment>
  );
};

export default Categories;