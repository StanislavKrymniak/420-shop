import React from 'react';
import { useSelector } from 'react-redux';
import { selectCheckoutDetails } from '../../store/checkout/checkout.selector';
import { CardElement } from '@stripe/react-stripe-js';
import './payment-form.styles.scss'


export const PaymentForm = () => {
  const checkoutDetails = useSelector(selectCheckoutDetails);



  return (
    <div className='payment_container'>
      <h2>Payment Form</h2>
      <div className="payment_info">
        <div>Full Name: {checkoutDetails.fullName}</div>
        <div>Phone Number: {checkoutDetails.phoneNumber}</div>
        <div>Country: {checkoutDetails.country}</div>
        <div>City: {checkoutDetails.city}</div>
        <div>Zip Code: {checkoutDetails.zipCode}</div>
      </div>
      <div className="payment_order">
        <CardElement className='payment_card' />
        <button className="payment_btn">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentForm;
