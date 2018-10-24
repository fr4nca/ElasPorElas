import { GET_MULHER } from "./types";
import axios from "axios";

export const getMulher = cpf => async dispatch => {
  const data = await axios.get(`http://localhost:5000/mulher/${cpf}`);
  dispatch({
    type: GET_MULHER,
    payload: data.data
  });
};
