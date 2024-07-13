import { createSelector } from "reselect";


const selectCheckoutReducer = (state) => state.checkout


export const selectCheckoutDetails = createSelector(
    [selectCheckoutReducer],
    (checkout) => checkout.checkoutDetails
)

