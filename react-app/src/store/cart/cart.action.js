import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemToCart = (cartItems, productToAdd, size) => {
    const newCartItems = addCartItem(cartItems, productToAdd, size);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const addCartItem = (cartItems, productToAdd, size) => {
    if (!Array.isArray(cartItems)) {
        console.error('cartItems is not an array:', cartItems);
        return cartItems;
    }
    
    // Determine if size should be excluded
    const sizeKeyToUse = size !== undefined ? size : undefined;
    
    const existingCartItem = cartItems.find(
        (cartItem) =>
            cartItem.id === productToAdd.id &&
            (cartItem.size === sizeKeyToUse || (cartItem.size === undefined && sizeKeyToUse === undefined))
    );
    
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id && cartItem.size === sizeKeyToUse
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    
    // Exclude size from new items if size is undefined
    const newItem = size !== undefined ? { ...productToAdd, quantity: 1, size } : { ...productToAdd, quantity: 1 };
    
    return [...cartItems, newItem];
    
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

