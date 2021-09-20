import React, { Fragment, useState, useRef } from 'react';
import NewsletterImg from '../../../assets/img/newsletter.png';
import MailDialog from '../Auth/MailDialog';

const Newsletter = () => {
  const [open, setClose] = useState(false);
  const inputRef = useRef(null);

  const isEmail = (val) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(val)) return false;
    
    return true;
  }
  
  const handleSubmit = () => {
    if(inputRef.current && inputRef.current.value && isEmail(inputRef.current.value)) {
      setClose(true);
    }
  }

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
              <input type="email" placeholder="jdoe@jdoe.com" ref={inputRef} />
              <button onClick={handleSubmit} type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <MailDialog open={open} setClose={setClose} 
        conf={'Thanks, we\'ve received your request.'} 
      />
    </Fragment>
  );

}

export default Newsletter;