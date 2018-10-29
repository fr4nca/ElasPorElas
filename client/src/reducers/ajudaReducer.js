import { ADD_AJUDA, GET_AJUDAS } from "../actions/types";

const initialState = {
  ajudas: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_AJUDA:
      return {};
    case GET_AJUDAS:
      return {
        ajudas: action.payload
      };

    default:
      return state;
  }
};
