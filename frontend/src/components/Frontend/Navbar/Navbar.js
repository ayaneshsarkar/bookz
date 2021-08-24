import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { host } from '../../../config/server';
import { logout } from '../../../actions/authActions';
import { inArray } from '../../../helpers';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import { isArray } from 'lodash';

const Navbar = props => {

  const location = useLocation();
  const pathname = location.pathname;

  // console.log(props);

  const getActiveMenu = (desiredPath, currentPath = pathname) => {
    if(isArray(desiredPath) && inArray((props.path || currentPath), desiredPath)) {
      return 'active';
    }

    if(desiredPath === currentPath) {
      return 'active';
    }

    return '';
  }

  const openLogin = (e) => {
    e.preventDefault();
    props.setLogin(true);
  }

  const logout = () => {
    props.logout();
  }

  return (
    <Fragment>
      <nav className="header__mainnav">
        {/* Logo */}
        <Link to="/" className="header__logo">Bookz</Link>
        {/* Search Form */}
        <form className="header__form">
          <input type="text" className="header__search" name="search" id="header__search"
          placeholder="Search Your Favourite Books Here" />
          <button className="header__search-button" type="submit">
            <svg className="header__search-icon">
              <use xlinkHref={`${Sprite}#search`}></use>
            </svg>
          </button>
        </form>
        {/* Main Menus */}
        <ul className="header__nav-items">
          { !props.loggedIn ? <li className="nav-item">
            <a href="/" onClick={openLogin}>
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#user`}></use>
              </svg>
            </a>
          </li> : <li className="nav-user online" onDoubleClick={logout}>
            {props.user.avatar ? <img className="avatar"
              src={`${host}/` + props.user.avatar} 
              alt={props.user.first_name + props.user.last_name}
            /> : ''}
            <div className="online"></div>
          </li> }

          <li className="nav-item">
            <Link to="/cart">
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#shopping-bag`}></use>
              </svg>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin">
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#globe`}></use>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="header__nav">
        <ul>
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li>
            <Link 
              to="/books" 
              className={getActiveMenu(['/books', '/:slug/:book_code'])}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/cart" className={getActiveMenu(['/cart'])}>
              Cart
            </Link>
          </li>
          <li><a href="/">Blogs</a></li>
          <li><a href="/">Find Us</a></li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default connect(null, { logout })(Navbar);