import { createAction,withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CheckoutDetails,CHECKOUT_ACTION_TYPES } from "./checkout.types";

export type SetCheckoutDetails = ActionWithPayload<CHECKOUT_ACTION_TYPES.SET_CHECKOUT_DETAILS, CheckoutDetails>

export const setCheckoutDetails = withMatcher((checkoutDetails: CheckoutDetails): SetCheckoutDetails => 
    createAction(CHECKOUT_ACTION_TYPES.SET_CHECKOUT_DETAILS, checkoutDetails))