import { USER_ACTIONS_TYPE } from "./user.types";

const INITIAL_USER_STATE = {
  currentUser: null,
  error: [],
  SIGN_UP_FAILED: [],
  SIGN_IN_FAILED: [],
  userToken: "",
  admin: false,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPE.SIGN_IN_SUCCESS:
    case USER_ACTIONS_TYPE.SIGN_UP_SUCCESS:
      localStorage.setItem("Token", payload.token);

      return {
        ...state,
        error: [],
        SIGN_IN_FAILED: [],
        SIGN_UP_FAILED: [],
        userToken: payload.token,
        currentUser: payload.user,
      };

    case USER_ACTIONS_TYPE.ADMIN_EXIST_SUCCESS:
      return { ...state, admin: true };
    case USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS:
      localStorage.removeItem("Token");

      return { ...state, currentUser: null, admin: false, userToken: "" };
    case USER_ACTIONS_TYPE.SIGN_IN_FAILED:
      return { ...state, SIGN_IN_FAILED: payload };

    case USER_ACTIONS_TYPE.SIGN_UP_FAILED:
      return { ...state, SIGN_UP_FAILED: payload };

    case USER_ACTIONS_TYPE.SIGN_OUT_FAILED:
    case USER_ACTIONS_TYPE.ADMIN_EXIST_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
