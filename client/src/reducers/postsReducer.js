import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          post =>
            post.mulher_CPF !== action.payload.mulher_CPF &&
            post.dta_post !== action.payload.dta_post
        )
      };
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
