import { SET_CURRENT_USER } from "./types";
import { GET_ERROR } from "./types";
import { REGISTER_USER } from "./types";

import axios from "axios";

export const loginUser = (userData, history) => async dispatch => {
  const data = await axios.post("/auth/authenticate", userData);

  if (!data.data.error) {
    dispatch(setCurrentUser(data.data));
    history.push("/posts");
  } else if (data.data.error) {
    dispatch({
      type: GET_ERROR,
      payload: data.data
    });
  }
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const logoutUser = () => dispatch => {
  dispatch(setCurrentUser(null));
};

export const registerUser = (user, history) => async dispatch => {
  const {
    CPF,
    nome,
    DDD_telefone,
    num_telefone,
    email,
    link_rede_social,
    senha
  } = user;

  await axios.post("/auth/register", {
    CPF,
    nome,
    DDD_telefone,
    num_telefone,
    email,
    link_rede_social,
    senha
  });

  dispatch({
    type: REGISTER_USER
  });

  history.push("/");
};
