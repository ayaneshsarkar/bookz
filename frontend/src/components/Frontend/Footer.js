import React, { Fragment, useState, useRef } from 'react';
import FooterImg from '../../assets/img/footer.png';
import Sprite from '../../assets/svg/feather-sprite.svg';
import MailDialog from './Auth/MailDialog';

const Footer = () => {
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

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <footer id="footer" className="footer">
        <div className="footer__img">
          <div className="footer__img--box">
            <img src={FooterImg} alt="Footer" className="img" />
          </div>
        </div>

        <div className="footer__contact">
          <h1 className="primaryHeading">Contact Us</h1>
          <div className="mailbox">
            <div className="mailbox__input">
              <input type="email" placeholder="jdoe@jdoe.com" ref={inputRef} />
              <button onClick={handleSubmit} type="submit">Send</button>
            </div>
          </div>
          <p className="footer__contact--address">
            South Sreepur Boral,<br />
            Rajpur Sonarpur Municipality,<br />
            South 24 PGS<br />
            West Bengal, India<br />
          </p>

          <p className="footer__contact--email">
            Email: ayaneshd@ayaneshdev.xyz
          </p>
        </div>

        <ul className="footer__links">
          <li>
            <a href="/">
              <svg className="footer__links--svg">
                <use xlinkHref={`${Sprite}#facebook`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className="footer__links--svg">
                <use xlinkHref={`${Sprite}#twitter`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className="footer__links--svg">
                <use xlinkHref={`${Sprite}#twitch`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className="footer__links--svg">
                <use xlinkHref={`${Sprite}#linkedin`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg className="footer__links--svg">
                <use xlinkHref={`${Sprite}#youtube`}></use>
              </svg>
            </a>
          </li>
        </ul>

        <p className="footer__copy">
          Copyright &copy; <span>{date}</span> Ayanesh Sarkar. All Rights Reserved.
        </p>
      </footer>

      <MailDialog open={open} setClose={setClose} conf={"Thanks, we've received your request."} />
    </Fragment>
  );
}

export default Footer;