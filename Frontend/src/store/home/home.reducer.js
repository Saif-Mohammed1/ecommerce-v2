import { HOME_ACTION_TYPES } from "./home.types";

const HOME_INITIAL_STATE = {
  items: [],
  error: [],
  isLoading: false,
};

export const homeReducer = (state = HOME_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_ACTION_TYPES.HOME_SET_ITEMS_START:
      return { ...state, isLoading: true };
    case HOME_ACTION_TYPES.HOME_SET_ITEMS_SUCCESS:
      return { ...state, error: [], isLoading: false, items: payload };
    case HOME_ACTION_TYPES.HOME_SET_ITEMS_FAILED:
    case HOME_ACTION_TYPES.HOME_FETCH_ITEMS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
