import React, { Fragment } from 'react';
import NewsletterImg from '../../../assets/img/newsletter.png';

const Newsletter = () => {

  return (
    <Fragment>
      <section id="newsletter" className="newsletter">
        <h1 className="primaryHeading">Our Newsletter</h1>
        <div className="newsletter__box">
          <div className="newsletter__box-img">
            <img src={NewsletterImg} alt="Newsletter" className="img" />
          </div>

          <div className="newsletter__box-emailbox mailbox">
            <label htmlFor="email">Your Email</label>
            <div className="newsletter__box-emailbox--input mailbox__input">
              <input type="text" placeholder="jdoe@jdoe.com" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );

}

export default Newsletter;