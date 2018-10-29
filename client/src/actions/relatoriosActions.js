import axios from "axios";
import {
  GET_RELATORIOS,
  GET_MULHERES,
  GET_MULHERES_QNT
} from "../actions/types";

export const getRelatorios = () => async dispatch => {
  const relatorios = await axios.get("/api/relatorios/ajudas");

  dispatch({
    type: GET_RELATORIOS,
    payload: relatorios.data
  });
};

export const getRelatoriosMulheres = () => async dispatch => {
  const relatorios = await axios.get("/api/relatorios/mulheres");

  dispatch({
    type: GET_MULHERES,
    payload: relatorios.data
  });
};

export const getRelatorioMulheresAjudas = () => async dispatch => {
  const relatorios = await axios.get("/api/relatorios/mulher_qnt");

  dispatch({
    type: GET_MULHERES_QNT,
    payload: relatorios.data
  });
};
