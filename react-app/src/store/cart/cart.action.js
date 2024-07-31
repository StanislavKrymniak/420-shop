


export const addCartItem = (cartItems, productToAdd, size) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id && cartItem.size === size
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id && cartItem.size === size
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1, size }];
};



export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => !(cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};



export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(
        (cartItem) => !(cartItem.id === cartItemToClear.id && cartItem.size === cartItemToClear.size)
    );
};
