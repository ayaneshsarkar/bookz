import React from 'react';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import { host } from '../../../config/server';
import { localizeInt, capitalize } from '../../../helpers';

const Cart = ({ cart, deleteSingleCart }) => {
  return (

    <tr>
      <td>
        <div className="cart__content">
          <div className="cart__content--img">
            <Link to={`/book/${slugify(cart.title)}/${cart.book_code}`}>
              {cart.bookurl && <img 
                src={`${host}/${cart.bookurl}`} 
                alt={cart.title} 
                className="cart__content--img-cartimg"
              />}
            </Link>
          </div>

          <div className="cart__content--details">
            <h5 className="cart__content--details-title">{ cart.title }</h5>

            <p className="cart__content--details-author">
              { `${capitalize(cart.category)}, ${cart.author} (${capitalize(cart.type)})` }
            </p>

            <div className="cart__content--details-price d-none cart-sm">
              <div className="cart__content--price">
                { localizeInt((cart.price * cart.quantity), 'INR') }
              </div>
            </div>

            <div className="d-flex-align-center">
              <select className="cart__content--select d-none cart-sm" required>
                <option value={`${cart.quantity || ''}`}>{ cart.quantity || 'Qty' }</option>
              </select>

              <div className="cart-cross d-none cart-sm">
                <svg onClick={() => deleteSingleCart(cart.cartbookid)}>
                  <use xlinkHref={`${Sprite}#x`}></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="cart-lgmd">
        <select className="cart__content--select" required>
          <option value={`${cart.quantity || ''}`}>{ cart.quantity || 'Qty' }</option>
        </select>
      </td>
      <td className="cart-lgmd">
        <div className="cart__content--price">
          { localizeInt((cart.price * cart.quantity), 'INR') }
        </div>
      </td>
      <td className="cart-lgmd">
        <div className="cart-cross">
          <svg onClick={() => deleteSingleCart(cart.cartbookid)}>
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>
      </td>
    </tr>
  );
}

export default Cart;