import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/img/hero.png';

const Hero = () => {
  return (
    <Fragment>
      <section id="hero">
        <div className="hero__textbox">
          <h1>Explore the Bookz</h1>
          <p>
            Start picking from the range of books from our library. <br />
            <span className="extra">30 day money-back guaranteed.</span>
          </p>
          <a href="/">View All</a>
        </div>

        <div className="hero__image">
          <img src={HeroImg} alt="Hero" className="img" />
        </div>

        <Link className="viewAllBooks d-none" to="/books">View All Books</Link>
      </section>
    </Fragment>
  );
}

export default Hero;