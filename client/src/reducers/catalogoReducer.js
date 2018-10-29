import {
  GET_CATALOGO,
  GET_MULHERES_CATALOGO,
  GET_VOLUNTARIAS,
  GET_AJUDA_ESPECIFICO
} from "../actions/types";

const initialState = {
  voluntariasEspecifica: [],
  voluntarias: [],
  voluntaria: false,
  mulheres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MULHERES_CATALOGO:
      return {
        ...state,
        mulheres: action.payload
      };
    case GET_VOLUNTARIAS:
      return {
        ...state,
        voluntarias: action.payload
      };
    case GET_CATALOGO:
      return {
        ...state,
        voluntaria: action.payload.length > 0 ? true : false
      };
    case GET_AJUDA_ESPECIFICO:
      return {
        ...state,
        voluntariasEspecifica: state.voluntarias.filter(
          voluntaria => voluntaria.ID_ajuda === action.payload
        )
      };
    default:
      return state;
  }
};
