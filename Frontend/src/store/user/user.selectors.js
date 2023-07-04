import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const isAdminExist = createSelector(
  [selectUserReducer],
  (user) => user.admin
);

export const selectUserError = createSelector(
  [selectUserReducer],
  (user) => user.error
);
export const selectSignUpErrors = createSelector(
  [selectUserReducer],
  (user) => user.SIGN_UP_FAILED
);
export const selectSignInErrors = createSelector(
  [selectUserReducer],
  (user) => user.SIGN_IN_FAILED
);
