import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd, size) => {
    const newCartItems = addCartItem(cartItems, productToAdd, size);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const addCartItem = (cartItems, productToAdd, size) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id && cartItem.size === size
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id && cartItem.size === size
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1, size }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => !(cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(
        (cartItem) => !(cartItem.id === cartItemToClear.id && cartItem.size === cartItemToClear.size)
    );
};
