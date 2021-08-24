import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createOrder } from '../../../actions/orderActions';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { host } from '../../../config/server';
import { fetchWithAuth } from '../../../actions/header';

const OrderForm = props => {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [focused, setFocused] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const fetchSecretKey = async () => {
      const secretKeyData = await fetchWithAuth('get', `${host}/stripe`);
      const secretKey = await secretKeyData.json();
      setClientSecret(secretKey.clientSecret);
    }
    fetchSecretKey();
  }, []);

  const cardStyle = {
    style: {
      base: {
        backgroundColor: 'inherit',
        color: "#FFF",
        fontFamily: 'Nunito, sans-serif',
        fontSize: "19px",
        iconColor: '#fff',
        "::placeholder": {
          color: "#B6B6B6",
          fontSize: "17px"
        },
      },
      invalid: {
        color: "#FC85AE",
        iconColor: "#FC85AE"
      }
    }
  };

  const handleChange = async (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if(payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      await props.createOrder({ 
        transactionId: payload.paymentIntent.id,
        status: payload.paymentIntent.status
      });

      setError(null);
      setProcessing(false);
      setSucceeded(true);

      props.history.push('/admin');
    }
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit}>
      <CardElement 
        className={`auth__form--box full-width bordered ${(focused || error) ? 'focused' : ''}
         ${error ? 'no-margin' : ''}`
        } 
        options={cardStyle} 
        onChange={handleChange} 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {error ? <p className="auth__form--orderError">{ error }</p> : ''}

    <div className="auth__form--box full-width">
      <button className="auth__form--button" 
      disabled={processing || disabled || succeeded }>
        { processing ? 'Processing...' : 'Pay Now' }
      </button>
      </div>
    </form>
  );
}

export default withRouter(connect(null, { createOrder })(OrderForm));