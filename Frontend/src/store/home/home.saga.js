import { takeLatest, call, all, put } from "redux-saga/effects";
import api from "../../utils/axios/axios";
import {
  homeFetchFailed,
  homeFetchSuccess,
  homeItemsFailed,
  homeItemsStart,
  homeItemsSuccess,
} from "./home.action";
import { HOME_ACTION_TYPES } from "./home.types";

function* setHomeItems() {
  try {
    const homeItems = yield api.get(`/home`);
    yield put(homeItemsSuccess(homeItems.data));
  } catch (error) {
    alert("failed to get home page");

    yield put(homeItemsFailed(error));
  }
}

function* onSetHomeItemsStart() {
  yield takeLatest(HOME_ACTION_TYPES.HOME_SET_ITEMS_START, setHomeItems);
}

function* onFetchHomeStart({ payload }) {
  try {
    yield api.post(`/home`, payload);
    yield put(homeFetchSuccess());
    yield put(homeItemsStart());
  } catch (error) {
    if (error.response.status === 422) {
      yield put(homeFetchFailed(error.response.data.errors));
    } else {
      alert("failed to set home page");
      yield put(homeFetchFailed(error));
    }
  }
}
function* onFetchHomeItems() {
  yield takeLatest(HOME_ACTION_TYPES.HOME_FETCH_ITEMS_START, onFetchHomeStart);
}

export function* homeSaga() {
  yield all([call(onFetchHomeItems), call(onSetHomeItemsStart)]);
}
