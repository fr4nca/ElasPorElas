import { SET_CURRENT_USER, REGISTER_USER } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoggedIn: action.payload !== null,
        user: action.payload
      };
    default:
      return state;
  }
};
