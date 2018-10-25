import { GET_CATALOGO } from "../actions/types";

const initialState = {
  voluntaria: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOGO:
      return {
        voluntaria: action.payload.length > 0 ? true : false
      };
    default:
      return state;
  }
};
