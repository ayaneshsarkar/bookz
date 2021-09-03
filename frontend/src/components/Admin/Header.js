import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../assets/svg/feather-sprite.svg';
import history from '../../config/history';

const Header = ({ title, search, add, addLink, titleClass, titleBoxClass, headClass }) => {
  const goBack = () => {
    // e.preventDefault(); 
    history.goBack();
  }

  return (
    <div className={`main__header${headClass ? headClass : ''}`}>
      <div className={`main__title${titleBoxClass ? titleBoxClass : ''}`}>
        <div className="main__title--direction">
          <a onClick={goBack} href="/">
            <svg className="main__title--direction-icon">
              <use xlinkHref={`${Sprite}#chevron-left`}></use>
            </svg>
          </a>
        </div>
        <div className="main__title--content">
          <h1 className={ titleClass ? titleClass : '' }>{ title }</h1>
        </div>
      </div>

      {search && <div className="main__search">
        <form className="main__search--form">
          <input type="text" className="main__search--input" placeholder="Find The Book" />
          <button className="main__search--button">
            <svg className="main__search--icon">
              <use xlinkHref={`${Sprite}#search`}></use>
            </svg>
          </button>
        </form>
      </div>}

      {add && <div className="main__add">
        <Link to={ addLink }>
          <svg className="main__add--icon">
            <use xlinkHref={`${Sprite}#plus`}></use>
          </svg>
        </Link>
      </div>  }
    </div>
  );
};

export default Header;