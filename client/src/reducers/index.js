import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import mulherReducer from "./mulherReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  posts: postsReducer,
  mulher: mulherReducer
});
