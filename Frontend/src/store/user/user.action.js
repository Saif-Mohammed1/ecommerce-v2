import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTIONS_TYPE } from "./user.types";

export const googlePopSignIn = () =>
  createAction(USER_ACTIONS_TYPE.SIGN_IN_WITH_GOOGLE_START);
export const googleSignInSuccess = () =>
  createAction(USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_SUCCESS);

export const signInWithEmailAndPasswordStart = (email, password) =>
  createAction(USER_ACTIONS_TYPE.SIGN_IN_WITH_EMAIL_PASSWORD_START, {
    email,
    password,
  });

export const signInSuccess = (user, token) =>
  createAction(USER_ACTIONS_TYPE.SIGN_IN_SUCCESS, { user, token });

export const signInFailed = (error) =>
  createAction(USER_ACTIONS_TYPE.SIGN_IN_FAILED, error);
export const signUpStart = (name, email, password, confirmPassword) =>
  createAction(USER_ACTIONS_TYPE.SIGN_UP_START, {
    name,
    email,
    password,
    confirmPassword,
  });

export const signUpSuccess = (user, token) =>
  createAction(USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, { user, token });
export const signUpFailed = (error) =>
  createAction(USER_ACTIONS_TYPE.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTIONS_TYPE.SIGN_OUT_START);
export const signOutSuccess = () =>
  createAction(USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTIONS_TYPE.SIGN_OUT_FAILED, error);

export const AdminStart = (user) =>
  createAction(USER_ACTIONS_TYPE.ADMIN_EXIST_START, user);
export const AdminSuccess = () =>
  createAction(USER_ACTIONS_TYPE.ADMIN_EXIST_SUCCESS);
export const AdminFailed = (error) =>
  createAction(USER_ACTIONS_TYPE.ADMIN_EXIST_FAILED, error);
