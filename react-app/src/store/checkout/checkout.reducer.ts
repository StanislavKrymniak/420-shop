import { AnyAction } from "redux-saga";
import { CheckoutDetails } from "./checkout.types";
import { setCheckoutDetails } from "./checkout.action";


export type CheckoutState = {
    readonly checkoutDetails: CheckoutDetails
}
const CHECKOUT_INITIAL_STATE: CheckoutState = {
    checkoutDetails: {
        fullName: '',
        phoneNumber: '',
        country: '',
        city: '',
        zipCode: ''
    }
}



export const checkoutReducer = (state = CHECKOUT_INITIAL_STATE, action: AnyAction) => {

    if (setCheckoutDetails.match(action)) {
        return {
            ...state,
            checkoutDetails: action.payload,
        };
    }
    return state
}