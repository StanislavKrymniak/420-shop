import './cart-items.styles.scss';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { FC } from 'react';
import { CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: CartItemType;
};

export const CartItems: FC<CartItemProps> = ({ cartItem }) => {
    const { id, name, imageUrl, price, quantity, size } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem, size));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <tr className='cart-item_container'>
            <td className='cart-item_cell product-image' data-label='Product'>
                <div className='cart-item_image'>
                    <img src={imageUrl} alt={`${name}`} />
                </div>
            </td>
            <td className='cart-item_cell cart-item_name' data-label='Description'>
                {name}
            </td>
            <td className='cart-item_cell cart-item_quantity' data-label='Quantity'>
                <button 
                    type='button' 
                    className='arrow' 
                    onClick={removeItemHandler} 
                    aria-label={`Decrease quantity of ${name} by 1`}
                >
                    &#10094;
                </button>
                <span className='value'>{quantity}</span>
                <button 
                    type='button' 
                    className='arrow' 
                    onClick={addItemHandler}
                    aria-label={`Increase quantity of ${name} by 1`}
                >
                    &#10095;
                </button>
            </td>
            <td className='cart-item_cell size' data-label='Size'>
                {size}
            </td>
            <td className='cart-item_cell price' data-label='Price'>
                {price}$
            </td>
            <td className='cart-item_cell remove-button-cell' data-label='Remove'>
                <button 
                    type='button' 
                    className='remove-button' 
                    onClick={clearItemHandler}
                    aria-label={`Remove ${name} from cart`}
                >
                    &#10005;
                </button>
            </td>
        </tr>
    );
};

export default CartItems;