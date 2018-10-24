import { SET_CURRENT_USER } from "./types";
import { GET_ERROR } from "./types";

import axios from "axios";

export const loginUser = (userData, history) => async dispatch => {
  const data = await axios.post(
    "http://localhost:5000/auth/authenticate",
    userData
  );

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
