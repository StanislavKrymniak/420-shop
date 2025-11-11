import { useState, FormEvent} from 'react';
import { useSelector } from 'react-redux';
import { selectCheckoutDetails } from '../../store/checkout/checkout.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { CardElement,useStripe, useElements } from '@stripe/react-stripe-js';
import './payment-form.styles.scss'
import { StripeCardElement } from '@stripe/stripe-js';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null

export const PaymentForm = () => {
    const amount = useSelector(selectCartTotal)
    const checkoutDetails = useSelector(selectCheckoutDetails);
    const stripe = useStripe()
    const elements = useElements()
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const [paymentError, setPaymentError] = useState<string | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true)
        setPaymentError(null);
        setPaymentSuccess(null);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res => res.json())

        const clientSecret = response.paymentIntent.client_secret

        const cardDetails = elements.getElement(CardElement)

        if (!ifValidCardElement(cardDetails)) return

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: checkoutDetails.fullName
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            setPaymentError(paymentResult.error.message || 'An unknown payment error occurred.');
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                setPaymentSuccess('Payment succeeded!');
                cardDetails.clear();
            }
        }
    }

    return (
        <main className='payment_container'>
            <h2>Payment Form</h2>
            <ul className="payment_info">
                <li>Full Name: {checkoutDetails.fullName}</li>
                <li>Phone Number: {checkoutDetails.phoneNumber}</li>
                <li>Country: {checkoutDetails.country}</li>
                <li>City: {checkoutDetails.city}</li>
                <li>Zip Code: {checkoutDetails.zipCode}</li>
            </ul>
            <form onSubmit={paymentHandler} className="payment_order">
                <label htmlFor="card-element" className="visually-hidden">Card Details</label>
                <CardElement id="card-element" className='payment_card' />
                <button disabled={isProcessingPayment} className="payment_btn">
                    {isProcessingPayment ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
            {paymentError && <div role="alert" className="payment-error">{paymentError}</div>}
            {paymentSuccess && <div role="status" className="payment-success">{paymentSuccess}</div>}
        </main>
    );
};

export default PaymentForm;