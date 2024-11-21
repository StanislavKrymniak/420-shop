export enum CART_ACTION_TYPES  {
    SET_CART_OPEN = 'cart/SET_CART_OPEN',
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_COUNT = 'cart/SET_CART_COUNT',
    SET_CART_TOTAL = 'cart/SET_CART_TOTAL'
}

export type CartItemType = {
    id: number
    price:number
    quantity: number
    size?: string
    name: string
    imageUrl: string
}


