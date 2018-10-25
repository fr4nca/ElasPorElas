import { GET_HISTORICO, FINALIZAR_HISTORICO } from "./types";
import axios from "axios";

export const getHistorico = cpf => async dispatch => {
  const historico = await axios.get(`http://localhost:5000/historico/${cpf}`);

  dispatch({
    type: GET_HISTORICO,
    payload: historico.data
  });
};

export const finalizarHistorico = (historico, cpf) => async dispatch => {
  const {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = historico;
  const data = await axios.post("http://localhost:5000/historico/finalizar", {
    dta_aceite,
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
