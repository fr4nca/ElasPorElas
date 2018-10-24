import { GET_MULHER } from "../actions/types";

const initialState = {
  mulher: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MULHER:
      return {
        ...state,
        mulher: action.payload
      };
    default:
      return state;
  }
};
