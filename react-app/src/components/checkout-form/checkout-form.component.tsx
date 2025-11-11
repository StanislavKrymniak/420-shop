import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCheckoutDetails } from '../../store/checkout/checkout.action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-form.scss';

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        country: '',
        city: '',
        zipCode: ''
    });
    const [cartEmptyError, setCartEmptyError] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (cartItems.length === 0) {
            setCartEmptyError('Your cart is empty. Please add items to your cart before proceeding to checkout.');
            setTimeout(() => setCartEmptyError(''), 4000);
            return;
        } else {
            dispatch(setCheckoutDetails(formData));
            navigate('/payment');
        }
    };

    return (
        <div className="checkout_container">
            <form className="checkout-form" onSubmit={handleSubmit}>
                <label htmlFor="fullName" className="visually-hidden">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
                
                <label htmlFor="phoneNumber" className="visually-hidden">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                />
                
                <label htmlFor="country" className="visually-hidden">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                />
                
                <label htmlFor="city" className="visually-hidden">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                />
                
                <label htmlFor="zipCode" className="visually-hidden">Zip Code</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    required
                />
                
                <button type="submit" className="checkout_submit">Order Now</button>
                
                {cartEmptyError && (
                    <div role="alert" className="checkout-error">
                        {cartEmptyError}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CheckoutForm;