import { ADD_AJUDA, GET_AJUDAS } from "./types";

import axios from "axios";

export const addAjuda = (ajuda, CPF) => async dispatch => {
  await axios.post("/ajuda/register", {
    CPF,
    ajuda
  });

  dispatch({
    type: ADD_AJUDA
  });
};

export const getAjudas = () => async dispatch => {
  const ajudas = await axios.get("/ajuda/");
  dispatch({
    type: GET_AJUDAS,
    payload: ajudas.data
  });
};
