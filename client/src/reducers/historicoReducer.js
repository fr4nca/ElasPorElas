import {
  GET_HISTORICO,
  FINALIZAR_HISTORICO,
  ACEITAR_HISTORICO,
  ADD_HISTORICO,
  GET_SOLICITACOES
} from "../actions/types";

const initialState = {
  historico: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORICO:
      return {
        historico: [action.payload, ...state.historico]
      };
    case GET_HISTORICO:
      return {
        ...state,
        historico: action.payload
      };
    case GET_SOLICITACOES:
      return {
        ...state,
        historico: action.payload
      };
    case ACEITAR_HISTORICO:
      return {
        ...state
      };
    case FINALIZAR_HISTORICO:
      return {
        ...state
      };
    default:
      return state;
  }
};
