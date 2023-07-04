import { USER_ACTIONS_TYPE } from "../user/user.types";
import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_CART_STATE = {
  cartItems: [],
  error: null,
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_CART_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS:
      return { ...state, cartItems: [] };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };

    default:
      return state;
  }
};
