import React, { useState, useEffect } from 'react';
import { capitalize, localizeInt, removeDecimals } from '../../../helpers';

const BookContent = ({ book, addToCart }) => {
  const [inventory, setInventory] = useState(1);

  useEffect(() => {
    if(book.inventory) {
      setInventory(book.inventory);
    }
  }, [book.inventory]);

  return (
    <div className="bookcontent">
      <h1 className="bookcontent__title">{ book.title }</h1>
      {book.title &&
        <h3 className="bookcontent__category">
          <span className="bookcontent__category--helper">by</span> { book.author } <span className="bookcontent__category--type"> ({ capitalize(book.type) })
          </span>
        </h3>
      }

      {book.price &&
        <div className="bookcontent__price">
          <h3 className="bookcontent__price--price">
            { removeDecimals(localizeInt(book.price, 'INR')) }
          </h3>
        </div>
      }

      {book.price &&
        <p className="bookcontent__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid error quod doloremque consequatur dolorem!
        </p>
      }

      {book.price && <div className="bookcontent__cartbox">
        <div className="bookcontent__cartbox--quantity">
          <select className="bookcontent__cartbox--quantity-select" required>
            <option value="">Qty</option>
            {inventory ? Array.from(Array(inventory), (e, i) => {
                return (
                  <option key={i} value={i++}>{i++}</option>
                )
              }) 
            : '' }
          </select>
        </div>

        <button 
          className="bookcontent__cartbox--button"
          onClick={() => addToCart(book.id)}
        >
          Add To Cart
        </button>
      </div>}
    </div>
  );
}

export default BookContent;