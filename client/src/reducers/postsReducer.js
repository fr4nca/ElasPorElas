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
        posts: [...state.posts.reverse(), action.payload]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
