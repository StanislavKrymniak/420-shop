import { createAction,withMatcher,ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types"


const addCartItem = (cartItems: CartItem[]=[], productToAdd: CategoryItem, size?: string): CartItem[] => {

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



const removeCartItem = (cartItems: CartItem[]=[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
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

const clearCartItem = (cartItems: CartItem[]=[], cartItemToClear: CartItem): CartItem[] => {
    return cartItems.filter(
        (cartItem) => !(cartItem.id === cartItemToClear.id && cartItem.size === cartItemToClear.size)
    );
};


export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = withMatcher((cartItems:CartItem[], productToAdd:CategoryItem, size?:string) => {
    const newCartItems = addCartItem(cartItems, productToAdd, size);
    return setCartItems(newCartItems)
})

export const removeItemFromCart = withMatcher((cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems)
})

export const clearItemFromCart = withMatcher((cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems)
})