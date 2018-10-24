import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isLoggedIn: action.payload !== null,
        user: action.payload
      };
    default:
      return state;
  }
};
