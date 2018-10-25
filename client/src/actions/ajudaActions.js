import { ADD_AJUDA } from "./types";

import axios from "axios";

export const addAjuda = (ajuda, CPF) => async dispatch => {
  await axios.post("http://localhost:5000/ajuda/register", {
    CPF,
    ajuda
  });

  dispatch({
    type: ADD_AJUDA
  });
};
