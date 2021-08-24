import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import { publishableAPIKey } from '../../../config';
import OrderForm from './OrderForm';


const OrderPayment = props => {

  const promise = loadStripe(publishableAPIKey);

  return (
    <div className="order__payment">
      <h3 className="order__payment--title">Payment: </h3>

      {promise && <Elements stripe={promise}>
        <OrderForm />
      </Elements>}
    </div>
  );

}

export default OrderPayment;