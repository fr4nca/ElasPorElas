import { GET_CATALOGO } from "./types";
import axios from "axios";

export const getCatalogo = cpf => async dispatch => {
  const catalogo = await axios.get(`http://localhost:5000/catalogo/${cpf}`);

  dispatch({
    type: GET_CATALOGO,
    payload: catalogo.data
  });
};
