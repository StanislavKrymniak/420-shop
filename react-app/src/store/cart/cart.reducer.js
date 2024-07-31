import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart.action";

const CART_INITIAL_STATE = {
  cartItems: []
};
/*
export const addItemToCart = (cartItems, productToAdd, size) => {
  const newCartItems = addCartItem(cartItems, productToAdd, size);
  return setCartItems( newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems( newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems( newCartItems);
};
*/
export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const { product, size } = action.payload;
      state.cartItems = addCartItem( state.cartItems,product, size);
    },
    removeItemFromCart(state, action) {
      const { product, size } = action.payload;
      state.cartItems = removeCartItem( state.cartItems,{ ...product, size });
    },
    clearItemFromCart(state, action) {
      const {  product, size } = action.payload;
      state.cartItems = clearCartItem( state.cartItems,{ ...product, size });
    }

    /*
    setCartItems(state, action) {
      state.cartItems = action.payload
    }
    */
  }
})

//export const {setCartItems} = cartSlice.actions
export const {addItemToCart,removeItemFromCart,clearItemFromCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer