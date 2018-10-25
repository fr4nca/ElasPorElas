import { GET_POSTS } from "./types";
import { ADD_POST } from "./types";
import axios from "axios";

export const getPosts = () => async dispatch => {
  const posts = await axios.get("http://localhost:5000/post/");
  dispatch({
    type: GET_POSTS,
    payload: posts.data
  });
};

export const addPost = post => async dispatch => {
  await axios.post("http://localhost:5000/post/add", {
    dta_post: post.dta_post,
    mulher_CPF: post.mulher_CPF,
    descricao: post.descricao,
    anonimo: post.anonimo
  });
  dispatch({
    type: ADD_POST,
    payload: post
  });
};
