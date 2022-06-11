import { combineReducers } from "redux";
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  Login: loginReducer,
  User: userReducer,
});
