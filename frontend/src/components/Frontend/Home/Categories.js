import React, { Fragment } from 'react';

const Categories = () => {
  return (
    <Fragment>
      <section id="category" className="category">
        <div className="category__box"><h2>Fantasy</h2></div>
        <div className="category__box"><h2>Comedy</h2></div>
        <div className="category__box"><h2>Horror</h2></div>
        <div className="category__box"><h2>Tech</h2></div>
        <div className="category__box"><h2>Sci-Fi</h2></div>
      </section>
    </Fragment>
  );
};

export default Categories;