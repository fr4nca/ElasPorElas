import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import mulherReducer from "./mulherReducer";
import comentsReducer from "./comentsReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  posts: postsReducer,
  mulher: mulherReducer,
  comentarios: comentsReducer
});
