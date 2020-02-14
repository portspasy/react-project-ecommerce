import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  //payload is optional!!!
});

// this part is needed for item to add in cart-items!
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
