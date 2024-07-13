import { CHECKOUT_ACTION_TYPES } from "./checkout.types";

const CHECKOUT_INITIAL_STATE = {
    checkoutDetails: {}
}



export const checkoutReducer = (state = CHECKOUT_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CHECKOUT_ACTION_TYPES.SET_CHECKOUT_DETAILS:
        return {
            ...state,
            checkoutDetails: payload,
        };
        default:
        return state; 
    }
}