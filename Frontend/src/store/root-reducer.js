import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { homeReducer } from "./home/home.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  home: homeReducer,
});
