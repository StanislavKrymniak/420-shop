import { createAction } from "../../utils/reducer/reducer.utils";
import { CHECKOUT_ACTION_TYPES } from "./checkout.types";

export const setCheckoutDetails = (checkoutDetails) => createAction(CHECKOUT_ACTION_TYPES.SET_CHECKOUT_DETAILS, checkoutDetails)