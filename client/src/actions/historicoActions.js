import {
  ADD_HISTORICO,
  GET_HISTORICO,
  FINALIZAR_HISTORICO,
  ACEITAR_HISTORICO
} from "./types";
import axios from "axios";

export const getHistorico = cpf => async dispatch => {
  const historico = await axios.get(`http://localhost:5000/historico/${cpf}`);

  dispatch({
    type: GET_HISTORICO,
    payload: historico.data
  });
};

export const addHistorico = (historico, cpf) => async dispatch => {
  const {
    dta_solicitacao,
    mulher_CPF,
    catalogo_mulher_CPF,
    catalogo_ajuda_ID_ajuda1
  } = historico;

  await axios.post("http://localhost:5000/historico/add", {
    dta_solicitacao,
    mulher_CPF,
    catalogo_mulher_CPF,
    catalogo_ajuda_ID_ajuda1
  });

  dispatch({
    type: ADD_HISTORICO,
    payload: historico
  });
  dispatch(getHistorico(cpf));
};

export const finalizarHistorico = (historico, cpf) => async dispatch => {
  const {
    cancelada,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = historico;
  const data = await axios.post("http://localhost:5000/historico/finalizar", {
    cancelada,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  });
  dispatch({
    type: FINALIZAR_HISTORICO,
    payload: data.data
  });
  dispatch(getHistorico(cpf));
};

export const aceitarHistorico = (historico, cpf) => async dispatch => {
  const {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = historico;
  const data = await axios.post("http://localhost:5000/historico/aceitar", {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  });
  dispatch({
    type: ACEITAR_HISTORICO,
    payload: data.data
  });
  dispatch(getHistorico(cpf));
};
