import { GET_POSTS } from "./types";
import axios from "axios";

export const getPosts = () => async dispatch => {
  const posts = await axios.get("http://localhost:5000/post/");
  dispatch({
    type: GET_POSTS,
    payload: posts.data
  });
};
