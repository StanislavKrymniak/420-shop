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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
      return;
    } else {
      event.preventDefault();
      dispatch(setCheckoutDetails(formData));
      navigate('/payment');
    }
  };

  return (
    <div className="checkout_container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <button type="submit" className="checkout_submit">Order Now</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

