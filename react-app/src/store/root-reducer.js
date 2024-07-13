import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { checkoutReducer } from './checkout/checkout.reducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer
});
