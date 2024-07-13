import { useSelector } from 'react-redux';
import './cart.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItems } from '../cart-items/cart-items.component';
import { selectCartTotal } from '../../store/cart/cart.selector';

export const CartComponent = () => {
    const cartTotal = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Size</span></div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map((cartItem) => (
                <CartItems key={`${cartItem.id}-${cartItem.size}`} cartItem={cartItem} />
            ))}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
};


/*
const cartIte = cartItems.map((cartItem) => cartItem)
    console.log(cartIte)*/