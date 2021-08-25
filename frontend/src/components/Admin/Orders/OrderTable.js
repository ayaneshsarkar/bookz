import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const OrderTable = ({ orders, user }) => {
  const renderOrders = (orders) => {
    return orders.map((order, i) => {
      return (
        <tr key={i}>
          <td className="imp"><Link to={`/admin/orders/${order.id}`}>{ i + 1 }</Link></td>
          <td>{ order.first_name + ' ' + order.last_name }</td>
          <td>{ order.invoice_id.toUpperCase() }</td>

          {user.type &&<td>
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
          <th>#</th>
          <th>User</th>
          <th>Order No.</th>
          {user.type && <th></th>}
        </tr>
      </thead>

      <tbody>
        { orders && renderOrders(orders) }
      </tbody>
    </>
  );
}

export default OrderTable;