import { SET_CURRENT_USER, REGISTER_USER } from "./types";

import axios from "axios";

export const loginUser = (userData, history) => async dispatch => {
  const data = await axios.post("/api/auth/authenticate", userData);

  dispatch(setCurrentUser(data.data));
  history.push("/posts");
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
  const data = await axios.post("/api/auth/register", {
    CPF,
    nome,
    DDD_telefone,
    num_telefone,
    email,
    link_rede_social,
    senha
  });

  dispatch({
    type: REGISTER_USER,
    payload: data.data
  });

  history.push("/");
};
