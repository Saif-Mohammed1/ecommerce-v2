import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  AdminFailed,
  AdminStart,
  AdminSuccess,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";
import { USER_ACTIONS_TYPE } from "./user.types";
import { userCartId } from "../cart/cart.action";
import api from "../../utils/axios/axios";
import { persistor } from "../store";

function* sortDataAfterGoogleSuccess() {
  try {
    const user = yield api.get("/user");
    const token = localStorage.getItem("Token");

    yield put(signInSuccess(user.data, token));
    yield put(userCartId(user.data.id));
    yield put(AdminStart(user.data.admin));
    yield (window.location.href = "/"); // Redirect to the Main page
  } catch (error) {
    yield put(signInFailed(error));
  }
}
function* onFetchGoogleSuccess() {
  yield takeLatest(
    USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_SUCCESS,
    sortDataAfterGoogleSuccess
  );
}

function* EmailAndPasswordSingIn({ payload: { email, password } }) {
  try {
    const { data } = yield api.post(`/login`, {
      email,
      password,
    });
    yield put(signInSuccess(data.user, data.token));
    yield put(userCartId(data.user.id));
    yield put(AdminStart(data.admin));
    yield (window.location.href = "/"); // Redirect to the Main page
  } catch (error) {
    if (error.response.status === 422) {
      yield put(signInFailed(error.response.data.errors));
    } else alert(error);
  }
}

function* signUp({ payload: { email, password, name, confirmPassword } }) {
  try {
    const { data } = yield api.post(`/signup`, {
      name,
      email,
      password,
      confirmPassword,
    });
    yield put(signUpSuccess(data.user, data["token"]));

    yield put(AdminStart(data.admin));
    yield (window.location.href = "/"); // Redirect to the Main page
  } catch (error) {
    if (error.response.status === 422) {
      yield put(signUpFailed(error.response.data.errors));
    } else alert(error);
  }
}

function* signOutProcess() {
  try {
    yield api.post("/logout");
    yield put(signOutSuccess());
    yield persistor.purge();
  } catch (error) {
    yield put(signOutFailed(error));
  }
}
function* onFetchSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPE.SIGN_OUT_START, signOutProcess);
}

function* onFetchSignUpStart() {
  yield takeLatest(USER_ACTIONS_TYPE.SIGN_UP_START, signUp);
}
function* onFetchEmailAndPasswordSignIn() {
  yield takeLatest(
    USER_ACTIONS_TYPE.SIGN_IN_WITH_EMAIL_PASSWORD_START,
    EmailAndPasswordSingIn
  );
}
function* AdminExisting({ payload }) {
  try {
    if (payload) {
      yield put(AdminSuccess());
    }
  } catch (error) {
    yield put(AdminFailed(error));
  }
}

function* fetchIsAdminExist() {
  yield takeLatest(USER_ACTIONS_TYPE.ADMIN_EXIST_START, AdminExisting);
}

export function* userSaga() {
  yield all([
    call(onFetchEmailAndPasswordSignIn),
    call(onFetchGoogleSuccess),
    call(onFetchSignUpStart),
    call(onFetchSignOutStart),
    call(fetchIsAdminExist),
  ]);
}
