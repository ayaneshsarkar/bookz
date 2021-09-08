import React, { Fragment, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../../actions/authActions';
import { inArray } from '../../../helpers';
import UserDetailsDialog from '../Auth/UserDetailsDialog';
import UpdateUser from '../Auth/UpdateUser';
import ChangePassword from '../Auth/ChangePassword';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import { isArray } from 'lodash';
import history from '../../../config/history';
import UnAuthAlert from '../Auth/UnAuthAlert';

const Navbar = props => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(false);
  const [auth, setAuth] = useState(false);

  const menuRef = useRef(null);
  const sideRef = useRef(null);

  const location = useLocation();
  const pathname = location.pathname;

  const getActiveMenu = (desiredPath, currentPath = pathname) => {
    if(isArray(desiredPath) && inArray((props.path || currentPath), desiredPath)) {
      return 'active';
    }

    if(desiredPath === currentPath) {
      return 'active';
    }

    return '';
  }

  const openLogin = () => {
    props.setLogin(true);
  }

  const openSignUp = () => {
    props.setSignUp(true);
  }

  const logout = () => {
    props.logout();
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const term = formData.get('search');

    if(term) {
      history.push(`/search/${term}`);
    }
  }

  const handleMenu = (e) => {
    e.preventDefault();

    if(sideRef) {
      sideRef.current.classList.toggle('visible');
      menuRef.current.classList.toggle('margin');
    }
  }

  const handleAuthWithCart = () => {
    if(!props.loggedIn) {
      setAuth(true);
    } else {
      history.push('/cart');
    }
  }

  const handleAuthWithCallback = (callback = null) => {
    if(!props.loggedIn) {
      setAuth(true);

      if(callback) {
        callback(true);
      }
    }
  }

  return (
    <Fragment>
      <div className="sideHeaderNav" ref={sideRef}>
        <div className="item">
          <svg className="icon">
            <use xlinkHref={`${Sprite}#search`}></use>
          </svg>

          <div className="menuText">Search</div>
        </div>

        {props.loggedIn ? <> 
          <div className="item" onClick={() => setOpen(true)}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#user`}></use>
            </svg>

            <div className="menuText">Profile</div>
          </div>

          <div className="item" onClick={() => setEdit(true)}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#edit-2`}></use>
            </svg>

            <div className="menuText">Edit Profile</div>
          </div>

          <div className="item" onClick={() => setChange(true)}>
            <svg className="icon">
              <use xlinkHref={`${Sprite}#key`}></use>
            </svg>

            <div className="menuText">Password</div>
          </div></> 
          : 
          <>
            <div className="item" onClick={openSignUp}>
              <svg className="icon">
                <use xlinkHref={`${Sprite}#user-plus`}></use>
              </svg>

              <div className="menuText">Register</div>
            </div>

            <div className="item" onClick={openLogin}>
              <svg className="icon">
                <use xlinkHref={`${Sprite}#user-check`}></use>
              </svg>

              <div className="menuText">Login</div>
            </div>
          </> 
        }

        <div className="item" onClick={() => history.push('/books')}>
          <svg className="icon">
            <use xlinkHref={`${Sprite}#book`}></use>
          </svg>

          <div className="menuText">Books</div>
        </div>

        <div className="item" onClick={handleAuthWithCart}>
          <svg className="icon">
            <use xlinkHref={`${Sprite}#shopping-bag`}></use>
          </svg>

          <div className="menuText">Cart</div>
        </div>

        {props.loggedIn ? <div className="item" onClick={logout}>
          <svg className="icon">
            <use xlinkHref={`${Sprite}#power`}></use>
          </svg>

          <div className="menuText">Logout</div>
        </div> : '' }

        <UnAuthAlert open={auth} setAuth={setAuth} />
      </div>

      <nav className="header__mainnav">
        {/* Logo */}
        <Link to="/" className="header__logo">Bookz</Link>
        {/* Search Form */}
        <form className="header__form" onSubmit={handleSearch}>
          <input type="text" className="header__search" name="search" id="header__search"
          placeholder="Search Your Favourite Books Here" 
          defaultValue={props.term ? props.term : ''} />
          <button className="header__search-button" type="submit">
            <svg className="header__search-icon">
              <use xlinkHref={`${Sprite}#search`}></use>
            </svg>
          </button>
        </form>
        {/* Main Menus */}
        <ul className="header__nav-items">
          { !props.loggedIn ? 
            <li className="nav-item drop mainNavList">
              <a href="/" onClick={(e) => e.preventDefault()}>
                <svg className="nav-item-icon">
                  <use xlinkHref={`${Sprite}#user`}></use>
                </svg>
              </a>

              <ul className="dropdown flex">
                <li onClick={openSignUp}>
                  <svg className="dropdown-icon">
                    <use xlinkHref={`${Sprite}#user-plus`}></use>
                  </svg>
                </li>

                <li onClick={openLogin}>
                  <svg className="dropdown-icon">
                    <use xlinkHref={`${Sprite}#user-check`}></use>
                  </svg>
                </li>
              </ul>
            </li> : 
              <li className="nav-user drop online mainNavList">
                <svg className="navAvatar">
                  <use xlinkHref={`${Sprite}#user`}></use>
                </svg>
              <div className="online"></div>

              <ul className="dropdown flex-column-center user">
                <li>
                  <Link to="/" onClick={(e) => {e.preventDefault(); setOpen(true);}}>
                    <svg className="dropdown-icon">
                      <use xlinkHref={`${Sprite}#user`}></use>
                    </svg>
                  </Link>

                  <UserDetailsDialog 
                    open={open}
                    setClose={setOpen}
                    user={props.user}
                  />
                </li>

                <li>
                  <Link to="/" onClick={(e) => {e.preventDefault(); setEdit(true);}}>
                    <svg className="dropdown-icon">
                      <use xlinkHref={`${Sprite}#edit-2`}></use>
                    </svg>
                  </Link>

                  <UpdateUser open={edit} setEdit={setEdit} />
                </li>

                <li>
                  <Link to="/" onClick={(e) => {e.preventDefault(); setChange(true);}}>
                    <svg className="dropdown-icon">
                      <use xlinkHref={`${Sprite}#key`}></use>
                    </svg>
                  </Link>

                  <ChangePassword open={change} setChange={setChange} />
                </li>

                <li>
                  <Link to="/" onClick={(e) => {e.preventDefault(); logout();}}>
                    <svg className="dropdown-icon">
                      <use xlinkHref={`${Sprite}#power`}></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </li> 
          }

          <li className="nav-item mainNavList">
            <Link to="/cart">
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#shopping-bag`}></use>
              </svg>
            </Link>
          </li>

          <li className="nav-item mainNavList">
            <Link to="/admin">
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#globe`}></use>
              </svg>
            </Link>
          </li>

          <li className="nav-item d-none menu" ref={menuRef}>
            <Link to="/" onClick={handleMenu}>
              <svg className="nav-item-icon">
                <use xlinkHref={`${Sprite}#menu`}></use>
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

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { logout })(Navbar);