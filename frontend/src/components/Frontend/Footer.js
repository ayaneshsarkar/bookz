import React, { Fragment } from 'react';
import FooterImg from '../../assets/img/footer.png';
import Sprite from '../../assets/svg/feather-sprite.svg';

const Footer = () => {
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
              <input type="text" placeholder="jdoe@jdoe.com" />
              <button type="submit">Send</button>
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
    </Fragment>
  );
}

export default Footer;