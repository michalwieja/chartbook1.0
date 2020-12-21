import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import currentPostReducer from "./currentPostReducer";

const combineReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  currentPost: currentPostReducer,
  error: errorReducer,
});

export default combineReducer;
