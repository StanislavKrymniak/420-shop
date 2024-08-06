export enum CHECKOUT_ACTION_TYPES{
    SET_CHECKOUT_DETAILS = 'checkout/SET_CHECKOUT_DETAILS'
}

export type CheckoutDetails = {
    fullName: string
    phoneNumber: string
    country: string
    city: string
    zipCode: string
}