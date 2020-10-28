import { combineReducers } from "redux";
import postsReducer from "./posts";
import uiReducer from "./ui";

export default combineReducers({
  posts: postsReducer,
  ui: uiReducer,
});
