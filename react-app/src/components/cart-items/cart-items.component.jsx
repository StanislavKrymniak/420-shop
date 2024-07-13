import './cart-items.styles.scss'
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

export const CartItems = ({cartItem}) => {
    const {name, imageUrl, price, quantity, size} = cartItem;
    const cartItems = useSelector(selectCartItems)

    const dispatch = useDispatch()

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem, size));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <div className='cart-item_container'>
            <div className='cart-item_image'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='cart-item_name'>{name}</span>
            <div className='cart-item_quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className='size'>{size}</span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}