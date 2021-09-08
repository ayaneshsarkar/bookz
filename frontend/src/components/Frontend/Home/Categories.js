import React, { Fragment } from 'react';

const Categories = ({ categories }) => {
  return (
    <Fragment>
      <section id="category" className="category">
        { categories ? categories.map((category, i) => {
          return (
            <div className="category__box" key={i}><h2>{ category.name }</h2></div>
          )
        }) : '' }
      </section>
    </Fragment>
  );
};

export default Categories;