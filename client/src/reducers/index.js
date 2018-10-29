import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import comentsReducer from "./comentsReducer";
import ajudaReducer from "./ajudaReducer";
import historicoReducer from "./historicoReducer";
import catalogoReducer from "./catalogoReducer";
import relatoriosReducer from "./relatoriosReducer";

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  comentarios: comentsReducer,
  ajuda: ajudaReducer,
  historico: historicoReducer,
  catalogo: catalogoReducer,
  relatorios: relatoriosReducer
});
