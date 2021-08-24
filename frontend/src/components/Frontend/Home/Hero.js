import React, { Fragment } from 'react';
import HeroImg from '../../../assets/img/hero.png';

const Hero = () => {
  return (
    <Fragment>
      <section id="hero">
        <div className="hero__textbox">
          <h1>Explore the Bookz</h1>
          <p>
            Start picking from the range of books from our library. <br />30 day money-back guaranteed.
          </p>
          <a href="/">View All</a>
        </div>

        <div className="hero__image">
          <img src={HeroImg} alt="Hero" className="img" />
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;