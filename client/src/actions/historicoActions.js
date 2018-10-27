import {
  ADD_HISTORICO,
  GET_HISTORICO,
  FINALIZAR_HISTORICO,
  ACEITAR_HISTORICO,
  GET_SOLICITACOES,
  GET_HISTORICO_ADM
} from "./types";
import axios from "axios";

export const getHistorico = cpf => async dispatch => {
  const historico = await axios.get(`/api/historico/${cpf}`);

  dispatch({
    type: GET_HISTORICO,
    payload: historico.data
  });
};

export const getHistoricoAdm = () => async dispatch => {
  const historico = await axios.get(`/api/historico/adm`);
  dispatch({
    type: GET_HISTORICO_ADM,
    payload: historico.data
  });
};

export const getSolicitacoes = cpf => async dispatch => {
  const historico = await axios.get(`/api/historico/solicitacoes/${cpf}`);

  dispatch({
    type: GET_SOLICITACOES,
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

  await axios.post("/api/historico/add", {
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

export const finalizarHistorico = (
  historico,
  cpf,
  location
) => async dispatch => {
  const {
    cancelada,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = historico;
  const data = await axios.post("/api/historico/finalizar", {
    cancelada,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  });
  dispatch({
    type: FINALIZAR_HISTORICO,
    payload: data.data
  });
  if (location === undefined) {
    dispatch(getHistorico(cpf));
  } else {
    dispatch(getSolicitacoes(cpf));
  }
};

export const aceitarHistorico = (
  historico,
  cpf,
  location
) => async dispatch => {
  const {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = historico;
  const data = await axios.post("/api/historico/aceitar", {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  });
  dispatch({
    type: ACEITAR_HISTORICO,
    payload: data.data
  });
  if (location === undefined) {
    dispatch(getHistorico(cpf));
  } else {
    dispatch(getSolicitacoes(cpf));
  }
};
