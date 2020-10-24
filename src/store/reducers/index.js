import { combineReducers } from "redux";
import postReducer from "./post";
import uiReducer from "./ui";

export default combineReducers({
  post: postReducer,
  ui: uiReducer,
});
