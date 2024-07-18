import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCheckoutDetails } from '../../store/checkout/checkout.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { CardElement,useStripe, useElements } from '@stripe/react-stripe-js';
import './payment-form.styles.scss'


export const PaymentForm = () => {
  const amount = useSelector(selectCartTotal)
  const checkoutDetails = useSelector(selectCheckoutDetails);
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const paymentHandler = async (e) => {
    e.preventDefault()
    if(!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount: amount * 100})
    }).then(res => res.json())

    const clientSecret = response.paymentIntent.client_secret

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: checkoutDetails.fullName
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment succeeded')
      }
    }
  }


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
      <form onSubmit={paymentHandler} className="payment_order">
        <CardElement className='payment_card' />
        <button disabled={isProcessingPayment} className="payment_btn">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
