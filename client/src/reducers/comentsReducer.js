import { GET_COMENTARIOS } from "../actions/types";
import { ADD_COMENTARIO } from "../actions/types";

const initialState = {
  comentarios: [],
  comentario: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMENTARIO:
      return {
        ...state,
        comentario: action.payload
      };
    case GET_COMENTARIOS:
      return {
        ...state,
        comentarios: action.payload
      };
    default:
      return state;
  }
};
