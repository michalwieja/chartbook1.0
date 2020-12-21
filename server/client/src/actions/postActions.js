import axios from "axios";
import { tokenConfig } from "./userActions";

export const getPosts = () => async (dispatch) => {
  const posts = await axios.get("/posts");

  dispatch({
    type: "getPosts",
    payload: posts.data,
  });
};

export const createPost = (post) => async (dispatch, getState) => {
  const data = await axios.post("/posts", post, tokenConfig(getState));
  dispatch({ type: "createPost", payload: data });
};

export const deletePost = (id) => async (dispatch, getState) => {
  await axios.delete(`/posts/${id}`, tokenConfig(getState));
  dispatch({ type: "deletePost", payload: id });
};

export const editPost = (post) => async (dispatch, getState) => {
  const data = await axios.patch(
    `/posts/${post._id}`,
    post,
    tokenConfig(getState)
  );

  dispatch({ type: "editPost", payload: data });
};
