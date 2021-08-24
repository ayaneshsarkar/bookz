import { isArray } from 'lodash';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sprite from '../../assets/svg/feather-sprite.svg';
import { inArray } from '../../helpers';

const Sidebar = props => {
  const location = useLocation();
  const pathname = location.pathname;

  const getActiveMenu = (desiredPath, currentPath = pathname) => {
    if(isArray(desiredPath) && inArray((props.path || currentPath), desiredPath)) {
      return 'sidebar__menu--icon active';
    }

    if(desiredPath === currentPath) {
      return 'sidebar__menu--icon active';
    } else {
      return 'sidebar__menu--icon';
    }
  }

  const categories = [ '/admin/categories', '/admin/add-category', '/admin/edit-category/:id' ];
  const books = [ '/admin/books', '/admin/add-book', '/admin/edit-book/:id' ];

  return (
    <Fragment>
      <nav className="sidebar">
        <ul className="sidebar__menus">
          <Link to="/admin">
            <li className="sidebar__menu">
              <svg className={getActiveMenu('/admin')}>
                <use xlinkHref={`${Sprite}#home`}></use>
              </svg>
            </li>
          </Link>
          <Link to="/admin/categories">
            <li className="sidebar__menu">
              <svg className={getActiveMenu(categories)}>
                <use xlinkHref={`${Sprite}#grid`}></use>
              </svg>
            </li>
          </Link>

          <Link to="/admin/books">
            <li className="sidebar__menu">
              <svg className={getActiveMenu(books)}>
                <use xlinkHref={`${Sprite}#book`}></use>
              </svg>
            </li>
          </Link>
          
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;