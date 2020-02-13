import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true
};

// if the state is undefine, this means will take by defult the INITIAL_STATE value.
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
