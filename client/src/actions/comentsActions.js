import { GET_COMENTARIOS } from "./types";
import { ADD_COMENTARIO } from "./types";
import axios from "axios";

export const getComentarios = (dta, cpf) => async dispatch => {
  const comentarios = await axios.post(
    "http://localhost:5000/comentario/getComentarios",
    {
      post_dta: dta,
      post_mulher_CPF: cpf
    }
  );

  dispatch({
    type: GET_COMENTARIOS,
    payload: comentarios.data
  });
};

export const addComentario = comentario => async dispatch => {
  const {
    post_dta,
    mulher_CPF,
    post_mulher_CPF,
    texto_comentario,
    dta_comentario
  } = comentario;

  await axios.post("http://localhost:5000/comentario/add", {
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
