import { createSlice } from "@reduxjs/toolkit";

const CHECKOUT_INITIAL_STATE = {
    checkoutDetails: {}
}





export const checkoutSlice = createSlice({
    name:'checkout',
    initialState: CHECKOUT_INITIAL_STATE,
    reducers: {
        setCheckoutDetails(state, action) {
            state.checkoutDetails = action.payload
        }
    }
})


export const {setCheckoutDetails} = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer