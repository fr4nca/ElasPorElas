import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import mulherReducer from "./mulherReducer";
import comentsReducer from "./comentsReducer";
import ajudaReducer from "./ajudaReducer";
import historicoReducer from "./historicoReducer";
import catalogoReducer from "./catalogoReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  posts: postsReducer,
  mulher: mulherReducer,
  comentarios: comentsReducer,
  ajuda: ajudaReducer,
  historico: historicoReducer,
  catalogo: catalogoReducer
});
