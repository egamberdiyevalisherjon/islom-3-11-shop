import { combineReducers } from "redux";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  user: (state = {}) => state,
  cart: cartReducer,
});
