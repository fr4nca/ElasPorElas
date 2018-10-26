import { GET_CATALOGO, GET_MULHERES_CATALOGO } from "./types";
import axios from "axios";

export const getCatalogo = cpf => async dispatch => {
  const catalogo = await axios.get(`http://localhost:5000/catalogo/${cpf}`);

  dispatch({
    type: GET_CATALOGO,
    payload: catalogo.data
  });
};

export const getMulheresCatalogo = id => async dispatch => {
  const catalogo = await axios.get(
    `http://localhost:5000/catalogo/mulheres/${id}`
  );

  dispatch({
    type: GET_MULHERES_CATALOGO,
    payload: catalogo.data
  });
};
