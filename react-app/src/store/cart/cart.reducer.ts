import { CartItem } from "./cart.types";
import { setCartItems } from "./cart.action";
import { AnyAction } from "redux-saga";


export type CartState = {
  readonly cartItems : CartItem[]
}
const CART_INITIAL_STATE : CartState = {
  cartItems: []
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if(setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state
};

