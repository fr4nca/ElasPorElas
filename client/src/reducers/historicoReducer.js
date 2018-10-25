import { GET_HISTORICO, FINALIZAR_HISTORICO } from "../actions/types";

const initialState = {
  historico: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORICO:
      return {
        ...state,
        historico: action.payload
      };
    case FINALIZAR_HISTORICO:
      return {
        ...state
      };
    default:
      return state;
  }
};
