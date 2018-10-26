import {
  GET_CATALOGO,
  GET_MULHERES_CATALOGO,
  GET_VOLUNTARIAS
} from "../actions/types";

const initialState = {
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
        voluntaria: action.payload.length > 0 ? true : false
      };
    default:
      return state;
  }
};
