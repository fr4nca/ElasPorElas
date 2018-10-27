import { ADD_AJUDA, GET_AJUDAS } from "./types";

import axios from "axios";

export const addAjuda = (ajuda, CPF) => async dispatch => {
  console.log(ajuda, CPF);
  await axios.post("/api/ajuda/register", {
    CPF,
    ajuda
  });

  dispatch({
    type: ADD_AJUDA
  });
};

export const getAjudas = () => async dispatch => {
  const ajudas = await axios.get("/api/ajuda/");
  dispatch({
    type: GET_AJUDAS,
    payload: ajudas.data
  });
};
