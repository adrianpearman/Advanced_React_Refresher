import { combineReducers } from "redux";
import { commentReducer } from "redux/reducers/comments";
import { authReducer } from "redux/reducers/auth";

export default combineReducers({
  comments: commentReducer,
  auth: authReducer
});
