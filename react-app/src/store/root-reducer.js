import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cart.reducer';
import { checkoutReducer } from './checkout/checkout.reducer';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
  user: userReducer,
  categories: categoriesReducer
});
