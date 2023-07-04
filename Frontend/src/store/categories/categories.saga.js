import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  updateAndAddCategoriesFailed,
  updateAndAddCategoriesSuccess,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchCategoriesStart,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

import api from "../../utils/axios/axios";
function* onFetchCategoriesStart() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    categoriesFetched
  );
}
function* categoriesFetched() {
  try {
    const categoriesArray = yield api.get(`/products`);
    yield put(fetchCategoriesSuccess(categoriesArray.data));
  } catch (error) {
    if (error.response.status === 422) {
      yield put(fetchCategoriesFailed(error.response.data.errors));
    } else {
      alert("failed to load products check internet please");
    }
  }
}
function* onFetchUpdateAndAddItems() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.ADD_CATEGORIES_ITEMS_START,
    UpdateAndAddItems
  );
}

function* UpdateAndAddItems({ payload: { data, productId } }) {
  try {
    yield api.post(`/products/${productId}`, data);
    yield put(updateAndAddCategoriesSuccess());
    yield put(fetchCategoriesStart());
  } catch (error) {
    if (error.response.status === 422) {
      yield put(updateAndAddCategoriesFailed(error.response.data.errors));
    } else {
      alert("failed to update products check internet please");
      yield put(updateAndAddCategoriesFailed(error));
    }
  }
}
function* onFetchAddItems() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_START,
    AddItems
  );
}
function* AddItems({ payload }) {
  try {
    yield api.post(`/products`, payload);
    yield put(updateAndAddCategoriesSuccess());
    yield put(fetchCategoriesStart());
  } catch (error) {
    if (error.response.status === 422) {
      yield put(updateAndAddCategoriesFailed(error.response.data.errors));
    } else {
      alert("failed to add products check internet please");
      yield put(updateAndAddCategoriesFailed(error));
    }
  }
}

export function* categoriesSaga() {
  yield all([
    call(onFetchAddItems),
    call(onFetchCategoriesStart),
    call(onFetchUpdateAndAddItems),
  ]);
}
