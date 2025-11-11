import { createSelector } from "reselect";
import { CheckoutState } from "./checkout.reducer";
import { RootState } from "../store";


const selectCheckoutReducer = (state: RootState): CheckoutState => state.checkout


export const selectCheckoutDetails = createSelector(
    [selectCheckoutReducer],
    (checkout) => checkout.checkoutDetails
)

