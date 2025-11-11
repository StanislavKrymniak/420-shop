import { useSelector } from 'react-redux';
import './cart.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItems } from '../cart-items/cart-items.component';
import { selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutForm from '../checkout-form/checkout-form.component';

export const CartComponent = () => {
    const cartTotal = useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);

    return (
        <main className="cart-container">
            <h1 className="visually-hidden">Twój koszyk</h1>
            <table className="cart-table">
                <thead className="cart-header">
                    <tr>
                        <th className="header-block">Product</th>
                        <th className="header-block">Description</th>
                        <th className="header-block">Quantity</th>
                        <th className="header-block">Size</th>
                        <th className="header-block">Price</th>
                        <th className="header-block">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem) => (
                        <CartItems key={`${cartItem.id}-${cartItem.size}`} cartItem={cartItem} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className="total-label">Total:</td>
                        <td colSpan={2} className='total'>${cartTotal}</td>
                    </tr>
                </tfoot>
            </table>
            
            <section className="cart-footer" aria-labelledby="checkout-heading">
                <h2 id="checkout-heading" className="visually-hidden">Formularz płatności</h2>
                <CheckoutForm />
            </section>
        </main>
    );
};