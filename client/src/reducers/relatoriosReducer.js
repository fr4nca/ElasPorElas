import {
  GET_RELATORIOS,
  GET_MULHERES,
  GET_MULHERES_QNT
} from "../actions/types";

const initialState = {
  relatorios: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MULHERES_QNT:
      return {
        relatorios: action.payload
      };
    case GET_MULHERES:
      return {
        relatorios: action.payload
      };
    case GET_RELATORIOS:
      return {
        relatorios: action.payload
      };
    default:
      return state;
  }
};
