export const addItemToCart = (cartItems, cartItemToAdd) => {
<<<<<<< HEAD
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
=======
const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id );

if(existingCartItem) {
  return cartItems.map(cartItem => cartItem.id == cartItemToAdd.id
    ? { ...cartItem,quantity:cartItem.quantity + 1}
    : cartItem
    )
}
>>>>>>> parent of 045347f... Strip integration

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
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
