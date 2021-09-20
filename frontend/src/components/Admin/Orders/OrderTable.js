import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const OrderTable = ({ orders, user }) => {
  const renderOrders = (orders) => {
    return orders.map((order, i) => {
      return (
        <tr key={i}>
          <td className="d-none table-sm">
            <Link to={`/admin/order/${order.id}`}>
              <div className="limited m-1 info">
                Buyer: <span>{ order.first_name + ' ' + order.last_name }</span>
              </div>
              <div className="limited m-1 info">
                Order No. <span>{ order.invoice_id.toUpperCase() }</span>
              </div>
            </Link>
          </td>
          <td className="lgmd imp"><Link to={`/admin/order/${order.id}`}>{ i + 1 }</Link></td>
          <td className="lgmd">{ order.first_name + ' ' + order.last_name }</td>
          <td className="lgmd">{ order.invoice_id.toUpperCase() }</td>

          {user.type && <td className="d-none">
            <svg>
              <use xlinkHref={`${Sprite}#trash-2`}></use>
            </svg>
          </td>}
        </tr>
      );
    });
  }

  return (
    <>
      <thead>
        <tr>
          <th className="d-none table-sm">Order Details</th>
          <th className="lgmd">#</th>
          <th className="lgmd">User</th>
          <th className="lgmd">Order No.</th>
          {user.type && <th className="d-none"></th>}
        </tr>
      </thead>

      <tbody>
        { orders ? renderOrders(orders) : null }
      </tbody>
    </>
  );
}

export default OrderTable;