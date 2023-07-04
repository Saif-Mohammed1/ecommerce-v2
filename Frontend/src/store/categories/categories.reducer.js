import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, error: [], isLoading: false, categories: payload };
    case CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_FAILED:
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
