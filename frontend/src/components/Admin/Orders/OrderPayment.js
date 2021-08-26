import React from 'react';
import { Link } from 'react-router-dom';
import { localizeInt } from '../../../helpers';

const OrderPayment = ({ order }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Payment Service</th>
          <th>Transaction Id</th>
          <th>Paid Amount</th>
          <th>Invoice</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Stripe</td>
          <td>{ order.transaction_id }</td>
          <td>{ localizeInt(order.paid_amount) }</td>
          <td>
            <Link to="/" className="tableLink">Download Invoice</Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default OrderPayment;