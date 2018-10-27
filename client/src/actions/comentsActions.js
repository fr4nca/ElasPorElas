import { ADD_COMENTARIO } from "./types";
import axios from "axios";

export const addComentario = comentario => async dispatch => {
  const {
    post_dta,
    mulher_CPF,
    post_mulher_CPF,
    texto_comentario,
    dta_comentario
  } = comentario;

  await axios.post("/api/comentario/add", {
    post_dta,
    mulher_CPF,
    post_mulher_CPF,
    texto_comentario,
    dta_comentario
  });

  dispatch({
    type: ADD_COMENTARIO,
    payload: comentario
  });
};
