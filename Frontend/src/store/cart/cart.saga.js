import { all, call, put, takeLatest } from "redux-saga/effects";
import { CART_ACTION_TYPES } from "./cart.types";
import { userCart, userCartId } from "./cart.action";
import api from "../../utils/axios/axios";

function* removeCartItem({ payload: { cartItems, removeProduct, userId } }) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeProduct.id
  );
  if (existingCartItem.quantity === 1) {
    try {
      yield api.delete(`/cart/${removeProduct.id}`);
      yield put(userCartId(userId));
    } catch (error) {
      alert("failed to remove item");
    }
    return;
  }

  const updatedQuantity = Number(existingCartItem.quantity) - 1;
  try {
    yield api.put(`/cart/${removeProduct.id}`, {
      quantity: updatedQuantity,
      user_id: userId,
      product_id: removeProduct.id,
    });
    yield put(userCartId(userId));
  } catch (error) {
    alert("failed to remove item");
  }
}
function* fetchRemoveCartItem() {
  yield takeLatest(CART_ACTION_TYPES.REMOVE_CART_ITEM, removeCartItem);
}
function* clearCartItems({ payload: { clearProduct, userId } }) {
  try {
    yield api.delete(`/cart/${clearProduct.id}`);
    yield put(userCartId(userId));
  } catch (error) {
    alert("failed to clear items");
  }
}

function* fetchClearCartItems() {
  yield takeLatest(CART_ACTION_TYPES.CLEAR_CART_ITEMS, clearCartItems);
}
function* addICartItems({ payload: { cartItems, addProduct, userId } }) {
  const formData = new FormData();

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addProduct.id
  );
  if (existingCartItem) {
    const updatedQuantity = Number(existingCartItem.quantity) + 1;

    yield api.put(`/cart/${addProduct.id}`, {
      quantity: updatedQuantity,
      user_id: userId,
      product_id: addProduct.id,
    });
    yield put(userCartId(userId));
    return;
  }

  Object.entries(addProduct).filter(([key, value]) => {
    if (value !== "" && value !== null) {
      formData.append(key, value);
    }
  });

  try {
    formData.append("user_id", userId);
    formData.append("product_id", addProduct.id);
    formData.append("quantity", 1);
    yield api.post(`/cart`, formData);
    yield put(userCartId(userId));
  } catch (err) {
    alert("failed to add product");
  }
}
function* fetchUserCartItems() {
  yield takeLatest(CART_ACTION_TYPES.ADD_CART_ITEMS, addICartItems);
}

function* fetchUserCart({ payload }) {
  try {
    const { data } = yield api.get(`/cart/${payload}`);
    yield put(userCart(data));
  } catch (err) {
    alert("failed to get user cart");
  }
}
function* fetchUserCartId() {
  yield takeLatest(CART_ACTION_TYPES.SET_CART_ITEMS_START, fetchUserCart);
}
export function* cartSaga() {
  yield all([
    call(fetchUserCartId),
    call(fetchUserCartItems),
    call(fetchClearCartItems),
    call(fetchRemoveCartItem),
  ]);
}
