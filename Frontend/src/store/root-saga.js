import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories.saga";
import { homeSaga } from "./home/home.saga";
import { userSaga } from "./user/user.saga";
import { cartSaga } from "./cart/cart.saga";
export function* rootSaga() {
  yield all([
    call(userSaga),
    call(categoriesSaga),
    call(homeSaga),
    call(cartSaga),
  ]);
}
