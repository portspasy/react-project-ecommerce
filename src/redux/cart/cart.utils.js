// 2 arguments, existing cartItems and the new one cartItems to add!
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if the cart is duplicated
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? // we only do increase the cartItem quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : // we return only our cartItem without modification
          cartItem
    );
  }

  // if it is the one and only cart
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? // we only do decrease the cartItem quantity
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : // we return only our cartItem without modification
        cartItem
  );
};
