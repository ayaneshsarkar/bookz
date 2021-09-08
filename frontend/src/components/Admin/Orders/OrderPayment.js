import React from 'react';
import { Link } from 'react-router-dom';
import { host } from '../../../config/server';
import { localizeInt } from '../../../helpers';

const OrderPayment = ({ order }) => {
  return (
    <>
      <thead>
        <tr>
          <th className="d-none table-sm">Order Payment Info</th>
          <th className="lgmd">Payment Service</th>
          <th className="lgmd">Transaction Id</th>
          <th className="lgmd">Paid Amount</th>
          <th className="lgmd">Invoice</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="d-none table-sm">
            <div className="limited m-1 info">
              Payment Service: <span>Stripe</span>
            </div>

            <div className="limited m-1 info">
              Transaction Id: <span>{ order.transaction_id }</span>
            </div>

            <div className="limited m-1 info">
              Paid Amount: <span>{ localizeInt(order.paid_amount) }</span>
            </div>

            <div className="limited m-1">
              <Link to="/" className="tableLink">Download Invoice</Link>
            </div>
          </td>
          <td className="lgmd">Stripe</td>
          <td className="lgmd">{ order.transaction_id }</td>
          <td className="lgmd">{ localizeInt(order.paid_amount) }</td>
          <td className="lgmd">
            <a target="_blank" 
            rel="noreferrer"
            href={`${host}/orders/${order.user_id}/${order.id}/invoices/${order.invoice_id}.pdf`}
            className="tableLink">
              Download Invoice
              </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default OrderPayment;