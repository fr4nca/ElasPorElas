import { GET_COMENTARIOS } from "./types";
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
