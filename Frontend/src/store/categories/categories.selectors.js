import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categories) =>
    categories.reduce((acc, item) => {
      const key = item.title;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
export const selectCategoriesErrors = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.error
);
