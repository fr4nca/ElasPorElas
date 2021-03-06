import { ADD_COMENTARIO } from "../actions/types";

const initialState = {
  comentario: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMENTARIO:
      return {
        ...state,
        comentario: action.payload
      };

    default:
      return state;
  }
};
