import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = (cartItems, addProduct, userId, totalClick) =>
  createAction(CART_ACTION_TYPES.ADD_CART_ITEMS, {
    cartItems,
    addProduct,
    userId,
    totalClick,
  });

export const removeItems = (cartItems, removeProduct, userId, totalClick) =>
  createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, {
    cartItems,
    removeProduct,
    userId,
    totalClick,
  });
export const clearCartItems = (clearProduct, userId) =>
  createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS, {
    clearProduct,
    userId,
  });
export const userCart = (cart) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cart);

export const userCartId = (id) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS_START, id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
