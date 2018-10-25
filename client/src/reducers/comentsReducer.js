import { GET_COMENTARIOS } from "../actions/types";

const initialState = {
  comentarios: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMENTARIOS:
      return {
        ...state,
        comentarios: action.payload
      };
    default:
      return state;
  }
};
