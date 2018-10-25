import { GET_POSTS } from "../actions/types";
import { ADD_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.reverse()
      };
    default:
      return state;
  }
};
