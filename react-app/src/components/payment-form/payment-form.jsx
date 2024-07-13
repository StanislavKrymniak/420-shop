import React from 'react';
import { useSelector } from 'react-redux';
import { selectCheckoutDetails } from '../../store/checkout/checkout.selector';
import './payment-form.scss'


export const PaymentForm = () => {
  const checkoutDetails = useSelector(selectCheckoutDetails);

  return (
    <div className='payment_container'>
      <h2>Payment Form</h2>
      <div>Full Name: {checkoutDetails.fullName}</div>
      <div>Phone Number: {checkoutDetails.phoneNumber}</div>
      <div>Country: {checkoutDetails.country}</div>
      <div>City: {checkoutDetails.city}</div>
      <div>Zip Code: {checkoutDetails.zipCode}</div>
    </div>
  );
};

export default PaymentForm;
