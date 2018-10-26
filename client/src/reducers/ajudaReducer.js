import { ADD_AJUDA, GET_AJUDAS } from "../actions/types";

const initialState = {
  ajudas: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_AJUDA:
      return {
        ...state
      };
    case GET_AJUDAS:
      return {
        ...state,
        ajudas: action.payload
      };
    default:
      return state;
  }
};
