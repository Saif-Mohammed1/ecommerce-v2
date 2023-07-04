import { createAction } from "../../utils/reducer/reducer.utils";
import { HOME_ACTION_TYPES } from "./home.types";

export const homeItemsStart = () =>
  createAction(HOME_ACTION_TYPES.HOME_SET_ITEMS_START);
export const homeItemsSuccess = (items) =>
  createAction(HOME_ACTION_TYPES.HOME_SET_ITEMS_SUCCESS, items);
export const homeItemsFailed = (error) =>
  createAction(HOME_ACTION_TYPES.HOME_SET_ITEMS_FAILED, error);

export const homeFetchStart = (data) =>
  createAction(HOME_ACTION_TYPES.HOME_FETCH_ITEMS_START, data);
export const homeFetchSuccess = () =>
  createAction(HOME_ACTION_TYPES.HOME_FETCH_ITEMS_SUCCESS);
export const homeFetchFailed = (error) =>
  createAction(HOME_ACTION_TYPES.HOME_FETCH_ITEMS_FAILED, error);
