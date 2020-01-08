import { combineReducers } from "redux";
import { commentReducer } from "redux/reducers/comments";

export default combineReducers({
  comments: commentReducer
});
