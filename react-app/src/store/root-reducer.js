import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { checkoutReducer } from './checkout/checkout.reducer';
import { userReducer } from './user/user.reducer';


export const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
  user: userReducer
});
