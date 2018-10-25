import { ADD_AJUDA } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_AJUDA:
      return {
        ...state
      };
    default:
      return state;
  }
};
