import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postsReducer from "./postsReducer";
import comentsReducer from "./comentsReducer";
import ajudaReducer from "./ajudaReducer";
import historicoReducer from "./historicoReducer";
import catalogoReducer from "./catalogoReducer";
import relatoriosReducer from "./relatoriosReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  posts: postsReducer,
  comentarios: comentsReducer,
  ajuda: ajudaReducer,
  historico: historicoReducer,
  catalogo: catalogoReducer,
  relatorios: relatoriosReducer
});
